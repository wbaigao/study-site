const RAW_DATA = Array.isArray(window.DATA) ? window.DATA : [];
const NATIONAL_ROSTER = Array.isArray(window.NATIONAL_UNIVERSITY_ROSTER)
  ? window.NATIONAL_UNIVERSITY_ROSTER
  : [];

const UNIVERSITY_ALIASES = {
  "东京工业大学（现：Science Tokyo）": "东京科学大学",
  "东京科学大学": "东京科学大学"
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[（）()・,，/]/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return String(value || "").replace(/"/g, "&quot;");
}

function canonicalUniversityName(university) {
  return UNIVERSITY_ALIASES[university] || university;
}

function getNationalSet() {
  return new Set(
    NATIONAL_ROSTER.map(item => normalize(item.name))
  );
}

function tokenize(query) {
  return String(query || "")
    .trim()
    .split(/[\s,，、/]+/)
    .map(token => token.trim())
    .filter(Boolean);
}

function uniqueStrings(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function groupDataBySchool() {
  const nationalSet = getNationalSet();
  const schools = new Map();

  RAW_DATA.forEach(entry => {
    const rawUniversity = entry.university || "";
    const university = canonicalUniversityName(rawUniversity);
    if (!nationalSet.has(normalize(university))) return;

    if (!schools.has(university)) {
      const rosterEntry = NATIONAL_ROSTER.find(item => normalize(item.name) === normalize(university));
      schools.set(university, {
        university,
        region: rosterEntry ? rosterEntry.region : "",
        entries: []
      });
    }

    schools.get(university).entries.push({
      id: entry.id || "",
      title: entry.title || "",
      category: entry.category || "",
      directions: Array.isArray(entry.directions) ? entry.directions.slice() : [],
      url: entry.url || "",
      note: entry.note || "",
      englishRequired: !!entry.englishRequired,
      japaneseRequired: !!entry.japaneseRequired
    });
  });

  return Array.from(schools.values()).sort((a, b) =>
    a.university.localeCompare(b.university, "zh-CN")
  );
}

function scoreEntry(entry, queryNorm, tokens, schoolMatched) {
  if (!queryNorm) return 1;

  const pieces = [
    entry.title,
    entry.category,
    entry.note,
    ...(entry.directions || [])
  ].map(normalize).filter(Boolean);

  let score = schoolMatched ? 100 : 0;
  pieces.forEach(text => {
    if (text.includes(queryNorm)) score += 14;
    tokens.forEach(token => {
      const normToken = normalize(token);
      if (normToken && text.includes(normToken)) score += 5;
    });
  });

  return score;
}

function filterDirections(directions, queryNorm, tokens, schoolMatched) {
  if (!Array.isArray(directions)) return [];
  if (!queryNorm || schoolMatched) return directions.slice();

  return directions.filter(direction => {
    const normalizedDirection = normalize(direction);
    if (normalizedDirection.includes(queryNorm)) return true;
    return tokens.some(token => normalizedDirection.includes(normalize(token)));
  });
}

function prepareResults(query) {
  const queryNorm = normalize(query);
  const tokens = tokenize(query);
  const schools = groupDataBySchool();

  const results = schools.map(school => {
    const schoolMatched = queryNorm && normalize(school.university).includes(queryNorm);

    const entries = school.entries.map(entry => {
      const matchedDirections = filterDirections(entry.directions, queryNorm, tokens, schoolMatched);
      const included =
        !queryNorm ||
        schoolMatched ||
        matchedDirections.length > 0 ||
        normalize(entry.title).includes(queryNorm) ||
        normalize(entry.category).includes(queryNorm);

      if (!included) return null;

      return {
        ...entry,
        directions: matchedDirections.length ? matchedDirections : entry.directions.slice(),
        score: scoreEntry(entry, queryNorm, tokens, schoolMatched)
      };
    }).filter(Boolean);

    const score = entries.reduce((max, entry) => Math.max(max, entry.score), schoolMatched ? 100 : 0);

    return {
      ...school,
      entries,
      score
    };
  }).filter(school => school.entries.length > 0 || !queryNorm);

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.university.localeCompare(b.university, "zh-CN");
  });

  return results;
}

function updateStats(results) {
  const schools = groupDataBySchool();
  const coveredNames = uniqueStrings(schools.map(school => school.university));
  const directionCount = schools.reduce((sum, school) =>
    sum + school.entries.reduce((entrySum, entry) => entrySum + entry.directions.length, 0), 0);
  const linkCount = uniqueStrings(
    schools.flatMap(school => school.entries.map(entry => entry.url))
  ).length;

  document.getElementById("schoolCount").textContent = coveredNames.length;
  document.getElementById("schoolTarget").textContent = NATIONAL_ROSTER.length || 85;
  document.getElementById("directionCount").textContent = directionCount;
  document.getElementById("linkCount").textContent = linkCount;
  document.getElementById("coverageText").textContent = "国立大学";
  document.getElementById("resultCount").textContent = results.length + " 所学校";
}

function buildSchoolJumpList(results) {
  const jumpPanel = document.getElementById("jumpPanel");
  const jumpList = document.getElementById("jumpList");
  const jumpCount = document.getElementById("jumpCount");

  jumpList.innerHTML = "";
  jumpCount.textContent = results.length + " 所";

  results.forEach(school => {
    const link = document.createElement("a");
    link.className = "jump-link";
    link.href = "#school-" + encodeURIComponent(school.university);
    link.textContent = school.university;
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = document.getElementById("school-" + encodeURIComponent(school.university));
      if (target) {
        target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      jumpPanel.classList.add("hidden");
    });
    jumpList.appendChild(link);
  });
}

function renderEmpty(message) {
  document.getElementById("resultList").innerHTML =
    '<div class="empty">' + message + "</div>";
}

function renderResults(results, query) {
  updateStats(results);
  buildSchoolJumpList(results);

  if (!results.length) {
    renderEmpty("没有找到匹配结果。我们可以换一个专业词继续找，也可以直接搜学校名看这所学校目前收录到的全部专业。");
    return;
  }

  const hasQuery = !!String(query || "").trim();
  const html = results.map((school, index) => {
    const openAttr = hasQuery || index < 3 ? " open" : "";

    const programHtml = school.entries.map(entry => {
      const directionHtml = entry.directions.map(direction =>
        '<span class="direction-item">' + escapeHtml(direction) + "</span>"
      ).join("");

      const badges = [
        '<span class="pill program-tag">' + escapeHtml(entry.category || "专业") + "</span>",
        '<span class="pill ' + (entry.englishRequired ? "flag-yes" : "flag-no") + '">' + (entry.englishRequired ? "需要英语成绩" : "英语要求未明确") + "</span>",
        '<span class="pill ' + (entry.japaneseRequired ? "flag-yes" : "flag-no") + '">' + (entry.japaneseRequired ? "需要日语能力" : "日语要求相对低") + "</span>"
      ].join("");

      return [
        '<article class="program-card">',
        '  <div class="program-head">',
        "    <div>",
        "      <h4>" + escapeHtml(entry.title) + "</h4>",
        "      <p>这里已经把相关研究科下的专业方向全部展开，搜索专业时能直接定位到最小元素。</p>",
        "    </div>",
        '    <div class="program-badges">' + badges + "</div>",
        "  </div>",
        '  <div class="direction-list">' + directionHtml + "</div>",
        '  <div class="link-row"><span>官网入口：</span><a href="' + escapeAttr(entry.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(entry.url || "未填写") + "</a></div>",
        "</article>"
      ].join("");
    }).join("");

    const directionTotal = school.entries.reduce((sum, entry) => sum + entry.directions.length, 0);

    return [
      '<details class="school-card" id="school-' + encodeURIComponent(school.university) + '"' + openAttr + ">",
      '  <summary class="school-summary">',
      "    <div>",
      "      <h3>" + escapeHtml(school.university) + "</h3>",
      "      <p>当前收录 " + school.entries.length + " 个项目，展开后会把这所学校里收录到的全部相关研究科和专业方向一起列出来。</p>",
      "    </div>",
      '    <div class="school-summary-right">',
      '      <div class="school-badges"><span class="pill pill-type-national">国立</span><span class="pill pill-count">' + school.entries.length + ' 个项目</span><span class="pill pill-count">' + directionTotal + ' 个专业方向</span></div>',
      "    </div>",
      "  </summary>",
      '  <div class="school-body">' + programHtml + "</div>",
      "</details>"
    ].join("");
  }).join("");

  document.getElementById("resultList").innerHTML = html;
}

function runSearch() {
  const query = document.getElementById("searchInput").value.trim();
  renderResults(prepareResults(query), query);
}

function resetAll() {
  document.getElementById("searchInput").value = "";
  renderResults(prepareResults(""), "");
}

document.getElementById("searchBtn").addEventListener("click", runSearch);
document.getElementById("resetBtn").addEventListener("click", resetAll);
document.getElementById("searchInput").addEventListener("keydown", event => {
  if (event.key === "Enter") runSearch();
});
document.getElementById("jumpToggleBtn").addEventListener("click", () => {
  document.getElementById("jumpPanel").classList.toggle("hidden");
});

renderResults(prepareResults(""), "");
