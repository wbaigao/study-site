(function () {
  const RAW_DATA = Array.isArray(window.DATA) ? window.DATA : [];
  const SCHOOL_PDFS = window.SCHOOL_PDFS || {};
  const DIRECTORY_DATA = RAW_DATA.filter((item) => /工科|计算机/.test(item.category || ""));
  const QUICK = ["机械", "材料", "电气电子", "计算机", "AI", "数据科学", "建筑", "土木", "半导体"];

  let currentSchool = "all";

  function unique(arr) {
    return [...new Set(arr.filter(Boolean))];
  }

  function normalizeText(value) {
    return String(value || "").toLowerCase().trim();
  }

  function getOfficialLinks(entries) {
    const map = new Map();
    entries.forEach((entry) => {
      if (entry.url && entry.url !== "#") {
        map.set(entry.url, {
          title: entry.title,
          url: entry.url
        });
      }
    });
    return [...map.values()];
  }

  function formatSize(size) {
    if (!size || Number.isNaN(size)) return "";
    if (size >= 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
    if (size >= 1024) return `${Math.round(size / 1024)} KB`;
    return `${size} B`;
  }

  function buildSchoolMap() {
    const map = new Map();

    DIRECTORY_DATA.forEach((item) => {
      if (!map.has(item.university)) {
        map.set(item.university, {
          key: item.key,
          university: item.university,
          entries: []
        });
      }
      map.get(item.university).entries.push(item);
    });

    return [...map.values()]
      .map((school) => {
        const categories = unique(school.entries.map((entry) => entry.category));
        const directionCount = school.entries.reduce((sum, entry) => sum + unique(entry.directions || []).length, 0);
        return {
          ...school,
          categories,
          directionCount,
          officialLinks: getOfficialLinks(school.entries),
          docs: SCHOOL_PDFS[school.university] || []
        };
      })
      .sort((a, b) => a.university.localeCompare(b.university, "zh-CN"));
  }

  const SCHOOL_MAP = buildSchoolMap();

  function schoolMatchesKeyword(school, keyword) {
    if (!keyword) return true;
    const q = normalizeText(keyword);

    const flatText = [
      school.university,
      ...school.categories,
      ...school.entries.flatMap((entry) => [entry.title, ...(entry.directions || [])])
    ].join(" ").toLowerCase();

    return flatText.includes(q);
  }

  function filteredSchools() {
    const keyword = document.getElementById("searchInput").value.trim();
    return SCHOOL_MAP.filter((school) => {
      if (currentSchool !== "all" && school.key !== currentSchool) return false;
      return schoolMatchesKeyword(school, keyword);
    });
  }

  function renderStats() {
    const directionCount = DIRECTORY_DATA.reduce((sum, item) => sum + unique(item.directions || []).length, 0);
    const officialLinkCount = new Set(
      DIRECTORY_DATA.map((item) => item.url).filter((url) => url && url !== "#")
    ).size;

    document.getElementById("schoolCount").textContent = String(SCHOOL_MAP.length);
    document.getElementById("directionCount").textContent = String(directionCount);
    document.getElementById("linkCount").textContent = String(officialLinkCount);
  }

  function renderQuick() {
    const row = document.getElementById("quickRow");
    row.innerHTML = "";

    QUICK.forEach((word) => {
      const chip = document.createElement("span");
      chip.className = "quick-chip";
      chip.textContent = word;
      chip.addEventListener("click", () => {
        document.getElementById("searchInput").value = word;
        renderAll();
      });
      row.appendChild(chip);
    });
  }

  function renderSchoolTabs() {
    const wrap = document.getElementById("schoolTabs");
    wrap.innerHTML = "";

    const allTab = document.createElement("span");
    allTab.className = "tab" + (currentSchool === "all" ? " active" : "");
    allTab.textContent = "全部";
    allTab.addEventListener("click", () => {
      currentSchool = "all";
      renderAll();
    });
    wrap.appendChild(allTab);

    SCHOOL_MAP.forEach((school) => {
      const tab = document.createElement("span");
      tab.className = "tab" + (currentSchool === school.key ? " active" : "");
      tab.textContent = school.university;
      tab.addEventListener("click", () => {
        currentSchool = school.key;
        renderAll();
      });
      wrap.appendChild(tab);
    });
  }

  function renderOfficialLinks(school) {
    if (!school.officialLinks.length) {
      return '<p class="side-note">这所学校当前还没有整理出独立官网入口，后续可以继续补。</p>';
    }

    return school.officialLinks.map((link) => `
      <a class="resource-link" href="${link.url}" target="_blank" rel="noopener">
        ${link.title}
        <span class="doc-meta">官方研究科 / 项目入口</span>
      </a>
    `).join("");
  }

  function renderDocs(school) {
    if (!school.docs.length) {
      return '<p class="side-note">本地资料还没整理到这里时，就先直接走官网入口。</p>';
    }

    const docs = school.docs.slice(0, 8);
    return docs.map((doc) => `
      <a class="doc-link" href="${doc.href}" target="_blank" rel="noopener">
        ${doc.name}
        <span class="doc-meta">${formatSize(doc.size)}${doc.sourceStatus ? ` · ${doc.sourceStatus}` : ""}</span>
      </a>
    `).join("");
  }

  function renderProgramSections(school) {
    return school.entries.map((entry) => {
      const directions = unique(entry.directions || []);
      const directionChips = directions.length
        ? directions.map((direction) => `<span class="direction-chip">${direction}</span>`).join("")
        : '<span class="direction-chip">方向待补充</span>';

      return `
        <section class="program-section">
          <h4>${entry.title}</h4>
          <p>${entry.category} · 共整理 ${directions.length} 个方向</p>
          <div class="direction-grid">${directionChips}</div>
        </section>
      `;
    }).join("");
  }

  function renderSchoolCard(school) {
    const categoryPills = school.categories.map((category) => {
      const cls = category.includes("计算机")
        ? "meta-pill-blue"
        : category.includes("工科")
          ? "meta-pill-purple"
          : "meta-pill-green";
      return `<span class="meta-pill ${cls}">${category}</span>`;
    }).join("");

    return `
      <article class="school-card">
        <div class="school-main">
          <div class="school-head">
            <div>
              <h3>${school.university}</h3>
              <p>这里直接展示这所学校当前收录的全部工科和计算机方向。先看方向，再从右侧跳官方入口，会比硬抠募集要项快很多。</p>
            </div>
            <span class="school-badge">${school.directionCount} 个方向</span>
          </div>
          <div class="meta-row">${categoryPills}</div>
          <div class="program-sections">${renderProgramSections(school)}</div>
        </div>
        <aside class="school-side">
          <h4 class="side-title">官方入口</h4>
          <div class="resource-list">${renderOfficialLinks(school)}</div>
          <h4 class="side-title">本地资料</h4>
          <div class="resource-list">${renderDocs(school)}</div>
        </aside>
      </article>
    `;
  }

  function renderList(schools) {
    const wrap = document.getElementById("resultList");
    document.getElementById("resultCount").textContent = `${schools.length} 所`;

    if (!schools.length) {
      wrap.innerHTML = `
        <div class="empty">
          没有找到匹配学校。<br />
          试试换一个专业关键词，或者点上面的学校标签直接看整校目录。
        </div>
      `;
      return;
    }

    wrap.innerHTML = schools.map(renderSchoolCard).join("");
  }

  function renderAll() {
    renderSchoolTabs();
    renderList(filteredSchools());
  }

  document.getElementById("searchBtn").addEventListener("click", renderAll);
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    currentSchool = "all";
    renderAll();
  });
  document.getElementById("searchInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") renderAll();
  });

  renderStats();
  renderQuick();
  renderAll();
})();
