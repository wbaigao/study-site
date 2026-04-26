const OPENAI_API_URL = "https://api.openai.com/v1/responses";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function sendJson(res, status, data) {
  res.writeHead(status, {
    ...corsHeaders,
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(data));
}

function parseResponseText(data) {
  if (data.output_text) return data.output_text;
  const message = (data.output || []).find(item => item.type === "message");
  const text = (message?.content || []).find(item => item.type === "output_text");
  return text?.text || "";
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    sendJson(res, 500, { error: "OPENAI_API_KEY is not configured" });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    sendJson(res, 400, { error: "Invalid JSON body" });
    return;
  }

  const { profile = {}, candidates = [] } = body || {};
  const safeCandidates = Array.isArray(candidates) ? candidates.slice(0, 60) : [];
  if (!safeCandidates.length) {
    sendJson(res, 400, { error: "No candidates provided" });
    return;
  }

  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      summary: { type: "string" },
      followUp: { type: "string" },
      recommendations: {
        type: "array",
        maxItems: 18,
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            id: { type: "string" },
            direction: { type: "string" },
            score: { type: "number" },
            reason: { type: "string" },
            reasons: {
              type: "array",
              maxItems: 3,
              items: { type: "string" }
            }
          },
          required: ["id", "direction", "score", "reason", "reasons"]
        }
      }
    },
    required: ["summary", "followUp", "recommendations"]
  };

  const requestBody = {
    model: process.env.OPENAI_MODEL || "gpt-5-mini",
    instructions: [
      "你是日本大学院修士申请顾问。",
      "只能从用户提供的 candidates 中选择和排序，不能编造学校、专业、时间、考试内容或 PDF。",
      "根据用户背景理解其语言能力、专业匹配度、地区偏好和考试难易程度。",
      "推荐理由必须用中文，直接说明为什么适合或有哪些风险。",
      "如果用户信息不足，在 followUp 中提出一个最关键的追问；否则 followUp 为空字符串。"
    ].join("\n"),
    input: JSON.stringify({ profile, candidates: safeCandidates }),
    text: {
      format: {
        type: "json_schema",
        name: "study_site_recommendations",
        schema,
        strict: true
      }
    }
  };

  try {
    const openaiResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    const data = await openaiResponse.json();
    if (!openaiResponse.ok) {
      sendJson(res, openaiResponse.status, {
        error: data.error?.message || "OpenAI request failed"
      });
      return;
    }

    const text = parseResponseText(data);
    sendJson(res, 200, JSON.parse(text));
  } catch (error) {
    sendJson(res, 500, { error: error.message || "AI recommendation failed" });
  }
};
