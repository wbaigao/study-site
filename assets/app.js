const DATA = [
  {
    id: "hoku-eng",
    university: "北海道大学",
    key: "hokudai",
    category: "工科",
    title: "工学院（机械、材料、环境、建筑、资源）",
    directions: ["应用物理学", "材料科学", "机械宇宙工学", "人间机械系统设计", "能源环境系统", "量子理工学", "环境フィールド工学", "北方圏環境政策工学", "环境創生工学", "建築都市空間デザイン", "空間性能システム", "環境循環システム", "共同資源工学"],
    apply: "2026-06-15 至 2026-06-19",
    exam: "2026-08-18 至 2026-08-19",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "多专攻要求 TOEIC / TOEFL / IELTS。机械系最低线常见为 TOEIC 550；环境方向有的在 461 左右。",
    japaneseNote: "常规修士项目默认需要对应日语出愿与笔试口试能力。",
    examSubjects: "数学、热力学、流体力学、材料力学、控制、材料科学、结构与环境基础等，按志望专攻组合实施。",
    note: "适合机械、材料、建筑、土木、环境、资源方向。",
    url: "https://www.eng.hokudai.ac.jp/graduate/examinfo/"
  },
  {
    id: "hoku-info",
    university: "北海道大学",
    key: "hokudai",
    category: "计算机",
    title: "信息科学院（信息科学、计算机、媒体网络）",
    directions: ["情報理工学コース", "複雑系情報科学コース", "知能情報学コース", "情報エレクトロニクスコース", "メディアネットワークコース"],
    apply: "英语成绩证明提交期 2026-07-21 至 2026-07-23；其余出愿见正式 PDF",
    exam: "2027 年 4 月入学向け；志望课程对应专业试验科目",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "明确要求 TOEIC / TOEFL / IELTS；未按期提交则总分不评价。",
    japaneseNote: "常规修士项目默认需要日语应试能力。",
    examSubjects: "按志望课程参加对应专业试验科目，PDF 单列专业试验科目章节。",
    note: "信息科学院的 PDF 很完整，后面可以继续细拆到 course 级别。",
    url: "https://www.ist.hokudai.ac.jp/examinfo/files/2028/R9_master_Apr.pdf"
  },
  {
    id: "hoku-science",
    university: "北海道大学",
    key: "hokudai",
    category: "理学",
    title: "理学院（数学、物理、宇宙理学、自然史科学）",
    directions: ["数学", "物性物理学", "宇宙理学", "自然史科学", "地球惑星科学", "生物科学", "化学"],
    apply: "各专攻募集要项确认；当前页面先补全到研究科/专攻检索层级",
    exam: "笔试、口述、书类审查按专攻实施",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "理学系外语成绩要求按专攻年度募集要项确认。",
    japaneseNote: "常规修士项目通常需要日语读解、出愿与面试能力。",
    examSubjects: "数学、物理、天文/宇宙、地球惑星、生命科学、化学等按专攻分别实施。",
    note: "用于避免北海道大学只显示工学/信息；具体日期以本校 PDF 资料和官网为准。",
    url: "https://www2.sci.hokudai.ac.jp/dept/admission"
  },
  {
    id: "hoku-chem-life",
    university: "北海道大学",
    key: "hokudai",
    category: "化学/生命科学",
    title: "综合化学院・生命科学院（化学、生命科学、软物质）",
    directions: ["综合化学", "分子化学", "物质化学", "生物化学", "化学系统", "生命融合科学", "生命系统科学", "生命医药科学", "软物质科学"],
    apply: "学院募集要项确认；当前页面先补全到研究科/专攻检索层级",
    exam: "专业笔试、英语成绩、口述/面试按专攻组合实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "化学、生命科学方向常见 TOEIC / TOEFL / IELTS 等外部英语成绩或英语评价。",
    japaneseNote: "常规项目默认需要日语出愿和研究沟通能力。",
    examSubjects: "有机化学、无机化学、物理化学、分析化学、生物化学、分子生物学、生命科学基础等。",
    note: "北海道大学化学与生命科学相关方向已加入可搜索索引；年度细节以 PDF 为准。",
    url: "https://www.hokudai.ac.jp/admission/"
  },
  {
    id: "hoku-agri",
    university: "北海道大学",
    key: "hokudai",
    category: "农学",
    title: "农学院（资源、生物、环境、畜产、农业经济）",
    directions: ["共生基盘学", "生物资源科学", "应用生物科学", "环境资源学", "畜产科学", "农业经济学", "森林科学", "食品科学", "生物生产工学"],
    apply: "农学院募集要项确认；当前页面先补全到学院/方向检索层级",
    exam: "专业科目、英语、口述试验按方向实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "农学方向常见外部英语成绩或英语考试评价，需按年度要项确认。",
    japaneseNote: "常规修士项目默认需要日语出愿和面试能力。",
    examSubjects: "生物学、化学、农学基础、环境资源、食品、森林、畜产、农业经济等。",
    note: "搜索农业、生物资源、食品、森林、畜产、农经时会匹配北海道大学。",
    url: "https://www.agr.hokudai.ac.jp/"
  },
  {
    id: "hoku-env-fish",
    university: "北海道大学",
    key: "hokudai",
    category: "环境/水产",
    title: "环境科学院・水产科学院（地球环境、海洋、水产）",
    directions: ["环境起学", "地球圈科学", "生物圈科学", "环境物质科学", "海洋生物资源科学", "海洋应用生命科学", "生物资源利用学", "水产科学", "海洋环境科学"],
    apply: "各学院募集要项确认；当前页面先补全到学院/方向检索层级",
    exam: "专业笔试、英语、口述/面试按学院和方向实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "环境与水产方向通常需要英语能力证明或英语评价，细节以年度 PDF 为准。",
    japaneseNote: "常规修士项目默认需要日语出愿和研究沟通能力。",
    examSubjects: "环境科学、地球科学、生态学、化学、海洋科学、水产资源、生命科学等。",
    note: "北海道大学的环境与海洋水产方向已单独加入，不再被工学院条目覆盖。",
    url: "https://www.hokudai.ac.jp/admission/"
  },
  {
    id: "hoku-med-health",
    university: "北海道大学",
    key: "hokudai",
    category: "医药保健",
    title: "医学院・保健科学院・医理工学院・药学院",
    directions: ["医学", "医科学", "社会医学", "基础医学", "临床医学", "保健科学", "看护学", "放射线技术科学", "检査技术科学", "医理工学", "药科学", "药学"],
    apply: "各学院募集要项确认；当前页面先补全到学院/方向检索层级",
    exam: "书类、专业考试、英语、口述/面试按学院实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "医学、药学、保健相关方向多使用外部英语成绩或英语评价。",
    japaneseNote: "日语能力要求因项目和导师沟通语言不同而异，常规项目需按日语要项准备。",
    examSubjects: "医学基础、生命科学、保健科学、药学、医工学、研究计划与口述试验等。",
    note: "医药保健相关方向已补入结构化索引；请以对应学院 PDF 核对出愿时间。",
    url: "https://www.hokudai.ac.jp/admission/"
  },
  {
    id: "hoku-vet-dent-infect",
    university: "北海道大学",
    key: "hokudai",
    category: "兽医/齿学/感染症",
    title: "兽医学院・齿学院・国际感染症学院",
    directions: ["兽医学", "共同兽医学", "齿学", "口腔医学", "国际感染症学", "人兽共通感染症学", "病原微生物学", "免疫学"],
    apply: "各学院募集要项确认；当前页面先补全到学院/方向检索层级",
    exam: "专业基础、英语、口述/面试、研究计划审查按学院实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "感染症、兽医、齿学方向通常重视英语论文读解与外部成绩，按要项确认。",
    japaneseNote: "常规项目默认需要日语出愿与实验室沟通能力。",
    examSubjects: "兽医学、齿学、生命科学、微生物学、免疫学、感染症学、研究计划等。",
    note: "补入医学周边学院，方便搜索兽医、齿学、感染症等关键词。",
    url: "https://www.hokudai.ac.jp/admission/"
  },
  {
    id: "hoku-humanities-social",
    university: "北海道大学",
    key: "hokudai",
    category: "人文社科",
    title: "文学院・教育学院・法学研究科・经济学院",
    directions: ["人文学", "思想文化学", "历史地域文化学", "语言文学", "人间科学", "教育学", "教育社会学", "心理学", "法学政治学", "经济学", "经营学", "会计信息"],
    apply: "各研究科募集要项确认；当前页面先补全到研究科/方向检索层级",
    exam: "专业笔试、外语、论文、口述/面试按研究科实施",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "人文社科方向英语成绩要求差异较大，部分方向以外语笔试或书类评价代替。",
    japaneseNote: "法学、经济、文学院、教育学院常规项目通常需要较强日语读写能力。",
    examSubjects: "专业论文、外语、研究计划、口述试验；法学、经济、教育、文学方向按研究科不同。",
    note: "搜索法学、政治、经济、经营、文学、教育、心理学时会匹配北海道大学。",
    url: "https://www.hokudai.ac.jp/admission/"
  },
  {
    id: "hoku-international-policy",
    university: "北海道大学",
    key: "hokudai",
    category: "传媒/公共政策",
    title: "国际广报媒体・观光学院・公共政策大学院",
    directions: ["国际广报媒体", "观光创造", "传媒研究", "国际交流", "公共政策", "公共经营", "政策分析", "地域政策"],
    apply: "国际广报媒体・观光学院已按官网募集要项更新；公共政策方向等待单独官网PDF核对。",
    exam: "国际广报媒体・观光学院为书类第一次选考、日语论述笔答、口述面试、英语外部成绩综合评价；公共政策方向不共用此PDF。",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "国际广报媒体・观光学院要求提交TOEFL iBT/Home Edition、TOEFL ITP或TOEIC L&R成绩，按50分换算；不接受其他英语考试。",
    japaneseNote: "国际广报媒体・观光学院的研究计划书、活动报告、日语论述和口述面试均以日语能力为前提；外国人留学生可任意提交JLPT成绩复印件。",
    examSubjects: "国际广报媒体・观光学院：日本语论述小论文、研究计划书/活动报告口头发表与质疑应答、英语外部成绩；公共政策方向待单独PDF。",
    note: "本条目前半已由国際広報メディア・観光学院PDF核对；公共政策方向不再套用传媒观光PDF。",
    url: "https://www.imc.hokudai.ac.jp/admissions/graduate_students/application_requirements.html"
  },
  {
    id: "tohoku-eng",
    university: "东北大学",
    key: "tohoku",
    category: "工科",
    title: "工学研究科（机械、电气、化学、材料、土木、建筑）",
    directions: ["机械智能航空工学", "量子能源工学", "电气能源系统", "通信工学", "电子工学", "应用物理学", "应用化学", "化学工学", "生物工学", "金属前沿工学", "知能デバイス材料学", "材料系统工学", "土木工学", "都市建筑学", "技术社会系统"],
    apply: "2025-07-03 至 2025-07-11 16:00",
    exam: "2025-08-26 至 2025-08-28（专攻不同略有差异）",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "多数专攻接受 TOEFL / TOEIC，个别专攻接受 IELTS Academic。",
    japaneseNote: "常规前期课程默认按日语项目准备。",
    examSubjects: "数学、专业课、共通科目、小论文、口试等，按专攻分开实施。",
    note: "适合机械、电子、材料、化工、建筑、土木等大部分工科方向。",
    url: "https://www.eng.tohoku.ac.jp/admission/grad/master.html"
  },
  {
    id: "tohoku-info",
    university: "东北大学",
    key: "tohoku",
    category: "计算机",
    title: "信息科学研究科（信息基础、系统信息、人间社会信息、应用信息）",
    directions: ["情報基礎科学", "システム情報科学", "人間社会情報科学", "応用情報科学", "データ科学", "知能システム", "アルゴリズム", "ソフトウェア科学", "ネットワーク科学"],
    apply: "日程 I / II 分组实施；详见 2026 募集要项",
    exam: "日程 I：2026-01-31 至 2026-02-01；日程 II：2026-03-03 至 2026-03-05",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前拿到的研究科总 PDF 里，没有像九州、北大那样把统一外部英语成绩写成硬门槛。",
    japaneseNote: "常规一般选拔按日语体系运行。",
    examSubjects: "研究科层面写法为笔试、小论文、口述试验等中选取适当方式；不同群组不同。",
    note: "后续如果继续细拆到 group 1-7，搜索会更准。",
    url: "https://www.is.tohoku.ac.jp/media/files/entrance/summary/first202604_20251010_1_1_ja.pdf"
  },
  {
    id: "tokyo-info",
    university: "东京大学",
    key: "utokyo",
    category: "计算机",
    title: "信息理工学系研究科（计算机、电子信息、知能机械信息、创造信息）",
    directions: ["コンピュータ科学", "数理情報学", "システム情報学", "電子情報学", "知能機械情報学", "創造情報学"],
    apply: "2026年度：夏入试 2025-05-30 至 2025-06-05 14:00；冬入试 2025-11-12 至 2025-11-18 14:00；个别资格审查分别到 2025-05-12、2025-10-27",
    exam: "夏入试：数学/程序设计等 2025-08-19，专业科目与口述 2025-08-18 至 2025-08-26；冬入试：2026-01 下旬至 02 中旬",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "必须按研究科 TOEFL 成绩提出要项提交 TOEFL；2026 年 4 月后课程大部分英语化，但入试仍按专攻案内执行。",
    japaneseNote: "出愿和专攻案内以日语为主；口述语言需逐专攻确认。",
    examSubjects: "先书类选考，再按专攻进行数学、程序设计、专业科目、口述试验等。计算机/数理/系统/电子/知能机械/创造信息 6 专攻均有独立入试案内。",
    note: "PDF 扫描：总要项第5节列出各专攻笔试科目和募集人数；知能机械信息案内明确 TOEFL 有效者才进入专业/口述试验。",
    url: "https://www.i.u-tokyo.ac.jp/edu/entra/2026_admission-g_m_j.pdf"
  },
  {
    id: "tokyo-eng",
    university: "东京大学",
    key: "utokyo",
    category: "工科",
    title: "工学系研究科（社会基盘、建筑、机械、电气、材料、化学、系统、航空、精密等）",
    directions: ["社会基盤学", "建築学", "都市工学", "機械工学", "精密工学", "システム創成学", "航空宇宙工学", "電気系工学", "物理工学", "マテリアル工学", "応用化学", "化学システム工学", "化学生命工学", "先端学際工学", "原子力国際専攻", "バイオエンジニアリング", "技術経営戦略学"],
    apply: "2027年度：A日程为主，B日程是否募集约 2026-10-01 公告；出愿具体期限按工学系 Web 出愿系统和专攻案内确认",
    exam: "2027年度入试为 2026 年度实施；各专攻分别安排笔试、书类审查、面接/口述。社会基盘、系统创成等以书类审查+面接替代部分笔试",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "必须提交外部英语成绩。社会基盘/建筑可 TOEFL 或 TOEIC L&R；都市/机械/系统创成/航空宇宙/电气等多为 TOEFL；精密可 TOEFL / IELTS / TOEIC L&R。",
    japaneseNote: "一般选拔按日语募集体系运行；2026 年度起工学系研究科课程原则英语化，但出愿与考试语言仍需看专攻案内。",
    examSubjects: "社会基盘：书类审查+面接；建筑：建筑关系科目；都市：都市工学；机械/航空宇宙：数学+专业；电气：电气电子/信息；材料、化学、物理、系统创成等按专攻实施。",
    note: "PDF 扫描：募集人数示例，社会基盘52、建筑32、都市25、机械52、精密27、系统创成45、航空宇宙37。",
    url: "https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/0403/Guidelines_gse_m_2027.pdf"
  },
  {
    id: "tokyo-science",
    university: "东京大学",
    key: "utokyo",
    category: "理学",
    title: "理学系研究科（物理、天文、地球惑星、化学、生物科学等）",
    directions: ["物理学", "天文学", "地球惑星科学", "化学", "生物科学"],
    apply: "2027年度：WEB 出愿，具体受付期间按 R9_master_guidelines.pdf；资格审查、检查表和募集人数表已一并下载",
    exam: "通常为 8 月笔试，口述在 8 月下旬至 9 月上旬；专攻可能追加小论文、essay 或独自材料",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "地球惑星科学改为 TOEFL iBT 或 TOEIC L&R 提交；化学可用 TOEFL iBT / TOEIC L&R 公开测试替代 TOEFL ITP，其他专攻按募集要项确认。",
    japaneseNote: "一般修士入试默认按日语体系准备；证明书非日英文本需附日译或英译。",
    examSubjects: "物理、天文、地球惑星科学、化学、生物科学各专攻分别规定专业笔试、口述、书类审查和外语处理；必须同时查看专攻 HP。",
    note: "已下载 2027 年度理学系研究科修士募集要项。",
    url: "https://www.s.u-tokyo.ac.jp/ja/admission/master/files/R9/R9_master_guidelines.pdf"
  },
  {
    id: "tokyo-math",
    university: "东京大学",
    key: "utokyo",
    category: "理学",
    title: "数理科学研究科（数理科学）",
    directions: ["数理科学", "代数学", "几何学", "解析学", "概率统计", "应用数学", "数理物理"],
    apply: "2026年度：官网公开正式修士募集要项；在线出愿，募集页同时提供愿书输入表单和 Web 出愿流程",
    exam: "2026年度修士入试按募集要项实施；通常为数学专业笔试与口述试验，日程以正式 PDF 和研究科公告为准",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前下载的募集要项未按全研究科统一列为外部英语成绩硬门槛。",
    japaneseNote: "数学笔试与口述通常按日语募集体系实施。",
    examSubjects: "专业数学为核心，覆盖代数、几何、解析、概率统计、应用数学、数理物理等；官网另公开近年英语、专业科目A/B过去问。",
    note: "2027 年度未在当前页面确认到正式 PDF，因此保存最新可取得的 2026 年度募集要项。",
    url: "https://www.ms.u-tokyo.ac.jp/kyoumu/9b58f2c20d26354705576efc5121eb41ed261166.pdf"
  },
  {
    id: "tokyo-frontier",
    university: "东京大学",
    key: "utokyo",
    category: "综合",
    title: "新领域创成科学研究科（基盘科学、生命科学、环境学）",
    directions: ["物質系", "先端エネルギー工学", "複雑理工学", "先端生命科学", "メディカル情報生命", "自然環境学", "海洋技術環境学", "環境システム学", "人間環境学", "社会文化環境学", "国際協力学", "サステイナビリティ学"],
    apply: "2027年度：修士募集要项 2026-03-23 公开；一般选拔与外国人等特别选考共通，在线出愿",
    exam: "各专攻按入试日程 A/B 实施；笔试、口述、书类、志望调查票、研究计划等由专攻入试案内另定",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "专攻별可能要求 TOEFL / IELTS / TOEIC；日程A英语成绩通常需为 2024-09-01 以后，日程B通常需为 2025-02-01 以后受验。",
    japaneseNote: "一般选拔按日语官网体系运行；国际协力等方向可能有英语材料或英语课程，但须按专攻案内确认。",
    examSubjects: "基盘科学、生命科学、环境学各系分别实施；总要项要求进一步下载各专攻入试案内、志望调查票和追加提交物列表。",
    note: "已下载 2027 年度新领域创成科学研究科修士募集要项。",
    url: "https://www.k.u-tokyo.ac.jp/assets/files/2027guidelines_for_applicants_to_mc.pdf"
  },
  {
    id: "tokyo-agri",
    university: "东京大学",
    key: "utokyo",
    category: "生命农学",
    title: "农学生命科学研究科（农业、生物、森林、兽医、食品、资源、国际农学等）",
    directions: ["生産・環境生物学", "応用生命化学", "応用生命工学", "森林科学", "水圏生物科学", "農業・資源経済学", "生物・環境工学", "生物材料科学", "農学国際", "生圏システム学", "応用動物科学", "獣医学"],
    apply: "2027年度：修士募集要项已公开；出愿必须同时遵守研究科总要项和各专攻入试案内",
    exam: "外语为 TOEFL 成绩提交，研究科本身不实施英语笔试；专业笔试、口述、书类和导师联系要求按各专攻实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "总要项明确：外国语（英语）试验为 TOEFL score 提出，本研究科不另行实施英语考试。",
    japaneseNote: "一般修士项目默认按日语体系运行；生物材料科学木造建筑课程明确日语授课与日语出题。",
    examSubjects: "生产环境生物、应用生命化学/工学、森林、水圈、农业资源经济、生物环境工学、生物材料、国际农学、动物科学等按专攻实施专业选拔。",
    note: "已下载 2027 年度农学生命科学研究科修士募集要项。",
    url: "https://www.a.u-tokyo.ac.jp/grad/1-1_Admission_Guidelines_M_2027"
  },
  {
    id: "tokyo-pharma",
    university: "东京大学",
    key: "utokyo",
    category: "药学",
    title: "药学系研究科（药科学、药学相关研究分野）",
    directions: ["薬科学", "創薬科学", "生命薬学", "医療薬学", "天然物化学", "薬品作用学", "分子薬学", "生物薬科学"],
    apply: "2027年度：2026年10月或2027年4月入学；正式修士募集要项已公开，按药学系 Web 出愿/书类要求办理",
    exam: "入学者选拔综合笔记试验、口述试验、TOEFL iBT score 和出身学校成绩；外国大学出身者走外国人留学生特别选拔",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "必须使用 TOEFL iBT score；募集要项把 TOEFL iBT、笔记试验、口述试验和学业成绩列为综合判定材料。",
    japaneseNote: "常规修士项目按日语募集体系准备。",
    examSubjects: "药科学募集 100 名左右；专业科目围绕药科学、创药、生命药学、医疗药学、天然物化学、分子药学、生物药科学等研究分野。",
    note: "已下载 2027 年度药学系研究科修士募集要项。",
    url: "https://www.f.u-tokyo.ac.jp/wysiwyg/kcfinder/upload/files/2027%E5%B9%B4%E5%BA%A6%20%E8%96%AC%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91%E4%BF%AE%E5%A3%AB%E8%AA%B2%E7%A8%8B%E5%8B%9F%E9%9B%86%E8%A6%81%E9%A0%85%281%29.pdf"
  },
  {
    id: "tokyo-med",
    university: "东京大学",
    key: "utokyo",
    category: "医学",
    title: "医学系研究科（医科学、国际保健学等修士课程）",
    directions: ["医科学", "分子细胞生物学", "病因・病理学", "脑神经医学", "社会医学", "内科学", "外科学", "国際保健学", "公共健康医学"],
    apply: "2026年度：医学系修士正式募集要项与入试案内已下载；2027年度目前为预告通知，正式要项需以后续官网为准",
    exam: "健康科学・护理学/国际保健学：一次为 TOEFL或IELTS 成绩、小论文、专业笔试；二次为在线口头试问。入试案内示例：笔试 2025-08-18，口头试问 2025-08-22",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "使用 TOEFL 或 IELTS 成绩；医学系另有 2027 年度英语成绩注意事项预告。",
    japaneseNote: "一般修士课程默认需要日语出愿与考试应对能力，公共健康医学等课程需看单独案内。",
    examSubjects: "健康科学・护理学：保健学+专业分野；国际保健学：志望专业分野与其他分野选答；公共健康医学 SPH 另按专业职学位要项实施。",
    note: "已下载医学系研究科 2026 修士募集要项、修士入试案内和公共健康医学 SPH 募集要项。",
    url: "https://www.m.u-tokyo.ac.jp/daigakuin/apply/appguidemain.html"
  },
  {
    id: "tokyo-humanities",
    university: "东京大学",
    key: "utokyo",
    category: "人文社科",
    title: "人文社会系研究科（基础文化、日本文化、亚洲文化、欧美文化、社会文化、文化资源等）",
    directions: ["基礎文化研究", "日本文化研究", "アジア文化研究", "欧米系文化研究", "社会文化研究", "文化資源学研究", "韓国朝鮮文化研究", "言語学", "哲学", "倫理学", "宗教学", "美学芸術学", "心理学", "日本史学", "社会学", "社会心理学"],
    apply: "2027年度：夏季入试资格审查 2026-05-15；冬季入试资格审查 2026-09-18；正式出愿期间按募集要项与愿书取得方式办理",
    exam: "夏季、冬季两回；专业分野별是否实施夏季不同。第一次试验后，仅第一次合格者进入第二次口述试验",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "入学者选拔重视外国语能力，但不同专业分野外语科目不同，未统一为 TOEFL 等外部英语成绩提交。",
    japaneseNote: "人文社科专业分野一般需要高度日语阅读、写作与口述能力。",
    examSubjects: "外国语、志望专业分野笔试、毕业论文或替代材料、研究计划书等书类审查，之后实施口述试验。",
    note: "已下载 2027 年度人文社会系研究科修士募集要项。",
    url: "https://www.l.u-tokyo.ac.jp/content/000014932.pdf"
  },
  {
    id: "tokyo-edu",
    university: "东京大学",
    key: "utokyo",
    category: "教育",
    title: "教育学研究科（教育学、比较教育社会学、教育心理、临床心理、身体教育、学校教育高度化等）",
    directions: ["教育学", "比較教育社会学", "生涯学習基盤経営", "大学経営・政策", "教育心理学", "臨床心理学", "身体教育学", "教職開発", "教育内容開発", "学校開発政策"],
    apply: "2027年度：在线出愿 2026-06-18 10:00 至 2026-06-26 15:00；研究计划书通过マイページ上传",
    exam: "按课程实施笔试、口述、研究计划与书类综合评价；临床心理、身体教育、教师开发等课程另有课程별注意事项",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "研究科层面未统一写成外部英语成绩硬门槛；具体课程按募集要项确认。",
    japaneseNote: "官网提供日本语能力证明书样式，外国人等需按募集要项确认是否提交。",
    examSubjects: "教育学、比较教育社会学、终身学习基础经营、大学经营政策、教育心理、临床心理、身体教育、教师开发、教育内容开发、学校开发政策等课程。",
    note: "已下载 2027 年度教育学研究科修士募集要项。",
    url: "https://www.p.u-tokyo.ac.jp/wp-content/uploads/2026/04/R92027edu_examM_youkou.pdf"
  },
  {
    id: "tokyo-law",
    university: "东京大学",
    key: "utokyo",
    category: "法政",
    title: "法学政治学研究科 总合法政专攻（实定法、基础法、政治）",
    directions: ["実定法", "基礎法学", "政治", "宪法", "民法", "刑法", "商法", "行政法", "国际法", "法社会学", "政治学", "行政学"],
    apply: "2026年度：Web 出愿系统受付 2025-06-09 至 2025-06-13 15:00；2027年度说明会已公告但募集要项尚未替换",
    exam: "A/C/D 等选拔区分；研究计划、专业笔试/小论文、口述和书类按区分实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "募集要项列明可提交 TOEFL iBT、TOEIC L&R、IELTS Academic 等外国语成绩；TOEFL ITP、TOEIC IP、IELTS Online 等不可。",
    japaneseNote: "法学政治学日语阅读、写作、论述要求高；外国人需按日本语学力证明书要求确认。",
    examSubjects: "实定法、基础法学、政治三课程；围绕法学与政治学专业论述、研究计划、外国语材料和口述综合评价。",
    note: "已下载当前官网可取得的 2026 年度总合法政专攻修士募集要项。",
    url: "https://www.j.u-tokyo.ac.jp/graduate/wp-content/uploads/sites/17/2025/05/1.Myoukou_2026.pdf"
  },
  {
    id: "tokyo-econ",
    university: "东京大学",
    key: "utokyo",
    category: "经济经营",
    title: "经济学研究科（经济学、经营、数量金融等）",
    directions: ["経済学", "経営", "数量ファイナンス", "统计", "计量经济", "宏观经济", "微观经济", "金融", "会计", "管理"],
    apply: "2027年度：募集要项已公开；Web 出愿系统提交材料，经济学课程另有单独要项",
    exam: "经济学、统计学、地域研究、经济史、管理、数量金融等按课程实施。经济学课程需 TOEFL iBT 与 GRE General Test 成绩由 ETS 送达",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "经济/统计等英语选考使用 TOEFL；管理和数量金融可 TOEFL 或 TOEIC。经济学课程单独要项要求 TOEFL iBT，部分英语圏大学毕业者可免。",
    japaneseNote: "日语项目默认需要日语读写与面试能力；外国人出愿材料需按要项确认。",
    examSubjects: "经济学/统计学有问题群笔试；地域研究、经济史部分免专业笔试；管理从经营学问题群选答；数量金融提交 GMAT 或 GMAT Focus。",
    note: "已下载 2027 年度经济学研究科修士募集要项与经济学课程单独募集要项。",
    url: "https://www.student.e.u-tokyo.ac.jp/grad/2027M_youkou.pdf"
  },
  {
    id: "tokyo-arts-science",
    university: "东京大学",
    key: "utokyo",
    category: "综合文化",
    title: "综合文化研究科（广域科学、文系四专攻、人间安全保障等）",
    directions: ["広域科学", "生命環境科学", "広域システム科学", "相関基礎科学", "言語情報科学", "超域文化科学", "地域文化研究", "国際社会科学", "人間の安全保障", "多文化共生・統合人間学"],
    apply: "2027年度：广域科学专攻募集要项 2026-03-25 公开，之后多次更新；文系四专攻更新以综合文化官网为准",
    exam: "广域科学按生命环境科学、广域系统科学、相关基础科学各系实施笔试/口述；外语成绩需按补足说明提交",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "广域科学接受 TOEFL iBT / TOEFL iBT Home Edition 或 TOEIC L&R，至少提交一种，TOEFL 与 TOEIC 可同时提交。",
    japaneseNote: "综合文化一般选拔多按日语体系运行，文系专攻尤其需要日语论述能力。",
    examSubjects: "广域科学三系各自规定专业笔试和研究内容材料；综合文化其他文系专攻如语言信息、超域文化、地域文化、国际社会科学需看对应页面。",
    note: "已下载 2027 年度广域科学专攻修士募集要项；文系专攻当前 2027 页面尚未完整公开。",
    url: "https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/2027/01_2027_koiki_M_yoko.pdf"
  },
  {
    id: "tokyo-public-policy",
    university: "东京大学",
    key: "utokyo",
    category: "公共政策",
    title: "公共政策大学院 专业职学位课程（公共政策学）",
    directions: ["法政策", "公共管理", "国際公共政策", "経済政策", "国際プログラム", "政策分析", "公共管理", "国际关系", "行政", "经济政策"],
    apply: "2027年度：一般选拔/职业人选拔要项 2026-04-13 公开；Web 出愿账号注册 2026-06-18 10:00 开始",
    exam: "一般选拔：入学愿书审查、外国语审查、专业科目审查、面试等综合；职业人选拔强调工作经历和政策实践能力",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "必须提交 TOEFL iBT 成绩，Home Edition 可，ITP 不可；英语公用语国家大学毕业者可申请免提交审查。",
    japaneseNote: "日语课程和一般选拔需要日语材料处理能力；国际项目课程需按要项确认语言要求。",
    examSubjects: "五课程：法政策、公共管理、国际公共政策、经济政策、国际项目。专业科目可选法律、行政、政治、国际关系、经济学等，经济政策课程须选经济学。",
    note: "公共政策为专业职学位课程，不是普通研究科修士，但属于硕士层级申请信息，已一并收录。",
    url: "https://www.pp.u-tokyo.ac.jp/wp-content/uploads/2026/04/3683c8fcfd077af21c0905c5221d8e4f-1.pdf"
  },
  {
    id: "tokyo-iii",
    university: "东京大学",
    key: "utokyo",
    category: "信息学",
    title: "学际信息学府 学际信息学专攻（社会信息、文化人间信息、先端表现、综合分析信息等）",
    directions: ["社会情報学", "文化・人間情報学", "先端表現情報学", "総合分析情報学", "アジア情報社会", "学際情報学", "メディア研究", "情報社会", "データ社会", "表現情報"],
    apply: "2026年度冬季募集：正式 PDF 已下载；社会信息学等课程按冬季募集日程实施，2027年度未确认到正式公开版",
    exam: "一次选考包括 TOEFL 等外语成绩、专业科目和书类选考；二次选考为口述试验，通常在线实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "社会信息学等课程使用 TOEFL 等成绩；募集要项表中明确外国语为英语，利用 TOEFL 等成绩。",
    japaneseNote: "社会信息学等课程一般需要日语读写与口述能力；亚洲信息社会课程等需另看当轮要求。",
    examSubjects: "社会信息、文化人间信息、先端表现、综合分析信息等：一次选考含外语、专业科目、书类；二次口述评价基础/专业学力、研究能力和研究计划。",
    note: "已下载 2026 年度学际信息学府学际信息学专攻修士课程冬季募集要项。",
    url: "https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/10/2026W_guideM.pdf"
  },
  {
    id: "kyoto-eng",
    university: "京都大学",
    key: "kyoto",
    category: "工科",
    title: "工学研究科（机械、化学、材料、电气、建筑、社会基盘）",
    directions: ["社会基盤工学", "都市社会工学", "都市環境工学", "建築学", "機械理工学", "マイクロエンジニアリング", "航空宇宙工学", "原子核工学", "材料工学", "電気電子工学", "物理工学", "化学工学", "高分子化学", "合成・生物化学", "材料化学", "分子工学"],
    apply: "2026-05-27 至 2026-06-10 17:00",
    exam: "2026-07-30 至 2026-08-07",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "总募集要项里未统一成一个所有专攻共享的英语硬门槛，专攻差异较大。",
    japaneseNote: "常规修士项目默认按日语项目准备。",
    examSubjects: "机械群、化学理工、电气电子数字理工、建筑、都市环境、材料等分别实施。",
    note: "京都工学适合继续细拆到专攻群。",
    url: "https://www.t.kyoto-u.ac.jp/ja/admissions/graduate/"
  },
  {
    id: "kyoto-info",
    university: "京都大学",
    key: "kyoto",
    category: "计算机",
    title: "信息学研究科（信息学、通信信息系统、系统科学、社会信息学）",
    directions: ["知能情報学", "社会情報学", "先端数理科学", "数理工学", "システム科学", "通信情報システム", "知覚情報システム", "生体情報工学"],
    apply: "第 2 次募集资格审查到 2025-12-17 17:00",
    exam: "2026 年 2 月实施；笔试与口头试问结合",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "研究科与专攻考试内容文件里有英语相关要求，但仍需按专攻 PDF 最终确认。",
    japaneseNote: "常规项目默认为日语运行。",
    examSubjects: "研究科总纲为笔试 + 口头试问；社会信息学、系统科学等另附专攻考试内容。",
    note: "我已经把专攻考试内容 PDF 也并到京都大学文件夹里了。",
    url: "https://www.i.kyoto-u.ac.jp/assets/pdf/admission/application/master-r8-04-02.pdf"
  },
  {
    id: "osaka-eng",
    university: "大阪大学",
    key: "osaka",
    category: "工科",
    title: "工学研究科（机械、电气电子、应用化学、材料、环境、建筑土木）",
    directions: ["生物工学", "応用化学", "化学工学", "物理学系", "精密工学", "機械工学", "マテリアル生産科学", "電気電子情報通信工学", "環境エネルギー工学", "地球総合工学", "ビジネスエンジニアリング"],
    apply: "2026-07-06 至 2026-07-17",
    exam: "2026-08-18 至 2026-08-20（专攻不同略有差异）",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "多数专攻接受 TOEIC / TOEFL；部分专攻可 IELTS，部分明确 IELTS 不可。",
    japaneseNote: "一般选拔默认需要足够的日语能力；留学签证者不少专攻不可报一般选拔。",
    examSubjects: "机械看热流体控，电电看数学、电磁、回路，化学看化学 I/II，建筑土木看结构、环境、设计等。",
    note: "大阪工学按专攻差异很大，英语条件尤其要看专攻。",
    url: "https://www.eng.osaka-u.ac.jp/ja/entrance/g_admissions/"
  },
  {
    id: "osaka-info",
    university: "大阪大学",
    key: "osaka",
    category: "计算机",
    title: "信息科学研究科（信息基础数学、计算机、网络、多媒体、生物信息）",
    directions: ["情報基礎数学", "コンピュータサイエンス", "情報システム工学", "情報ネットワーク学", "マルチメディア工学", "バイオ情報工学", "知能ソフトウェア工学", "データ工学"],
    apply: "2026 年度 4 月入学一般选拔，详见正式 PDF",
    exam: "研究科统一管理；试验与口头试问等综合选拔",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "PDF 中明确提到 TOEIC / TOEFL 成绩可作为评价材料。",
    japaneseNote: "外国留学生需具有修学所需日语能力。",
    examSubjects: "笔试、口头试问等综合判断，按志望专攻实施。",
    note: "这次保存的是正式一般选拔 PDF。",
    url: "https://www.ist.osaka-u.ac.jp/files/examinees/admission/2026/11_a_JA2026.pdf"
  },
  {
    id: "nagoya-eng",
    university: "名古屋大学",
    key: "nagoya",
    category: "工科",
    title: "工学研究科（机械、航空宇宙、材料、化学、电气电子、土木、能源）",
    directions: ["化学生命工学", "物理工学", "マテリアル工学", "電気電子情報工学", "機械航空宇宙工学", "エネルギー理工学", "土木工学"],
    apply: "2026-07-03 截止（Web 出愿）",
    exam: "2026-08-18 至 2026-08-20",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "工学研究科多数系明确要求 TOEIC / TOEFL；IELTS 一般不可。",
    japaneseNote: "常规前期课程默认为日语项目。",
    examSubjects: "机械看数学 + 热流体控材；电电看数学 + 电磁 + 回路；材料和化学按系科目选答。",
    note: "名古屋工学研究科已经很适合按系继续细拆。",
    url: "https://www.engg.nagoya-u.ac.jp/prospective/doc/attention2.pdf"
  },
  {
    id: "nagoya-info",
    university: "名古屋大学",
    key: "nagoya",
    category: "计算机",
    title: "信息学研究科（数理信息、复杂系统、社会信息、智能系统）",
    directions: ["数理情報学", "複雑系科学", "社会情報学", "知能システム学", "心理・認知科学", "数理システム", "データサイエンス"],
    apply: "8 月实施出愿期为 2025-06-27 至 2025-07-03 16:00",
    exam: "数理信息学口述 2025-07-05；笔试 2025-08-06、2025-08-07",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前总募集要项没有像北大、九大那样把统一英语成绩写成硬门槛。",
    japaneseNote: "一般项目按日语体系运行。",
    examSubjects: "按专攻实施，包括笔试、口头试问，以及免笔试或口述流程。",
    note: "后续继续拆到专攻层会更好搜。",
    url: "https://www.i.nagoya-u.ac.jp/gs/entranceexamination/"
  },
  {
    id: "kyushu-eng",
    university: "九州大学",
    key: "kyushu",
    category: "工科",
    title: "工学府（机械、航空宇宙、化学、材料、电气电子、资源、土木海洋）",
    directions: ["機械工学", "航空宇宙工学", "量子物理工学", "応用化学", "化学工学", "材料工学", "地球資源システム工学", "船舶海洋工学", "土木工学", "水素エネルギーシステム", "電気電子工学", "エネルギー科学"],
    apply: "2026 年度工学府修士募集要项见院系文件",
    exam: "按专攻和一般选拔实施方法执行",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "一般工学系修士多数会要求外部英语成绩或英语评价材料。",
    japaneseNote: "常规项目按日语项目准备。",
    examSubjects: "不同专攻差异很大，机械、化学、材料、电电、资源、海洋分别实施。",
    note: "你之前给的工学府修士 PDF 已经在九州大学文件夹里。",
    url: "https://www.eng.kyushu-u.ac.jp/admissions.html"
  },
  {
    id: "kyushu-info",
    university: "九州大学",
    key: "kyushu",
    category: "计算机",
    title: "系统信息科学府（信息学、电气电子、智能系统、系统科学）",
    directions: ["情報知能工学", "情報工学", "電気電子工学", "通信工学", "知能システム", "システム制御", "データサイエンス", "AI・機械学習"],
    apply: "出愿前需先联系教员；海外学历申请人原则上 2025-05-30 前完成前置支援",
    exam: "按募集要项 12. 试验实施方法执行",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "明确要求 TOEIC / TOEFL-iBT / IELTS 其中一种原始成绩证明。",
    japaneseNote: "一般修士项目默认按日语体系运行。",
    examSubjects: "英语外部成绩 + 研究计划英文摘要 + 笔试 / 口试，按专攻执行。",
    note: "这份是系统信息科学府正式修士募集要项。",
    url: "https://www.isee.kyushu-u.ac.jp/wp/wp-content/uploads/2026mc_general_guidelines.pdf"
  },
  {
    id: "tsukuba-info",
    university: "筑波大学",
    key: "tsukuba",
    category: "计算机",
    title: "系统信息工学研究群（当前已收录：海外居住者特别选拔）",
    directions: ["社会工学", "サービス工学", "リスク・レジリエンス工学", "情報理工学位プログラム", "知能機能システム", "構造エネルギー工学", "エンジニアリング科学", "都市計画", "コンピュータサイエンス", "制御工学"],
    apply: "当前抓到的是 2026 海外居住者特别选拔 PDF；一般入试入口已保存为官方页面",
    exam: "以特别选拔 PDF 和官方打印版页面为准",
    englishRequired: true,
    japaneseRequired: false,
    englishNote: "特别选拔通常按英语资料和面试准备。",
    japaneseNote: "当前收录的是海外居住者特别选拔，不能直接等同一般日语笔试项目。",
    examSubjects: "特别选拔更偏书类、研究计划和面试；一般入试仍需继续沿官网深挖。",
    note: "筑波这条我先做得保守一点，避免误混其他项目。",
    url: "https://www.sie.tsukuba.ac.jp/wp2/wp-content/uploads/2026-Application-Guidelines-Masters-Special-Selection-for-Overseas-Residents.pdf"
  },
  {
    id: "scitokyo-eng",
    university: "东京工业大学（现：Science Tokyo）",
    key: "scitokyo",
    category: "工科",
    title: "工学院（机械、系统控制、电气电子、经营工学）",
    directions: ["機械系", "システム制御系", "電気電子系", "情報通信系", "経営工学系"],
    apply: "A / B 日程按学院修士募集要项与各系页面执行",
    exam: "历年常见为 7 月 A 日程、8 月 B 日程",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "学院修士入试通常要求英语成绩；系页面反复提示尽早准备外部英语测试。",
    japaneseNote: "常规项目默认为日语运行。",
    examSubjects: "机械常见热流体材料力学，系统控制偏数学与口试，电电偏数学、电磁、专业选答。",
    note: "这次我把 Science Tokyo 总览页和各系页面都并进学校文件夹了。",
    url: "https://admissions.isct.ac.jp/ja/013/graduate/guideline"
  },
  {
    id: "scitokyo-info",
    university: "东京工业大学（现：Science Tokyo）",
    key: "scitokyo",
    category: "计算机",
    title: "信息理工学院（信息工学系、数理计算科学系）",
    directions: ["情報工学系", "数理・計算科学系", "計算機科学", "人工知能", "数理最適化", "アルゴリズム", "理論計算機科学"],
    apply: "按学院募集总览页与系页面执行",
    exam: "A / B 日程制；具体考试安排以后续官方公布为准",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "系网页长期明确提示准备外部英语成绩。",
    japaneseNote: "常规修士项目默认按日语体系运行。",
    examSubjects: "系网页说明以笔答、口头试问、研究计划确认等为主。",
    note: "目前这块以官方页面信息为主，不强写尚未公开的具体日期。",
    url: "https://educ.titech.ac.jp/cs/admissions/"
  },
  {
    id: "kobe-eng",
    university: "神户大学",
    key: "kobe",
    category: "工科",
    title: "工学研究科（机械、建筑、市民工学、应用化学、电气电子）",
    directions: ["建築学", "市民工学", "電気電子工学", "機械工学", "応用化学"],
    apply: "2026-07-15 至 2026-07-24",
    exam: "2026 年 8 月按专攻实施",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "机械、建筑、市民工学多为 TOEIC / TOEFL；电电和应用化学较强调日本国内 TOEIC。",
    japaneseNote: "常规博士前期一般入试默认为日语运行。",
    examSubjects: "各专攻分别实施，含专业笔试、设计、口试等。",
    note: "工学研究科不同专攻英语要求差异很大。",
    url: "https://www.eng.kobe-u.ac.jp/examinee/master_202604.html"
  },
  {
    id: "kobe-info",
    university: "神户大学",
    key: "kobe",
    category: "计算机",
    title: "系统信息学研究科（系统、信息、计算机、通信）",
    directions: ["計算科学", "システム科学", "情報知能学", "情報通信工学", "知能情報学", "データ工学"],
    apply: "募集要项配布预计 2026-05-19 至 2026-07-25；出愿期 2026-07-22 至 2026-07-25",
    exam: "一般入试为 2026-08-25、2026-08-26；合格发表 2026-09-05",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "官方网页层没有直接写统一外部英语成绩要求。",
    japaneseNote: "页面完全按日语组织，一般入试默认需要日语应对能力。",
    examSubjects: "官方页面给了日程与纸本募集要项请领方式，具体专业课细目需看纸本。",
    note: "神户系统信息学研究科不公开完整 PDF，这次已保存官方页面。",
    url: "https://www.csi.kobe-u.ac.jp/exam/master/2025/20250708master_exam.html"
  },
  {
    id: "hiroshima-eng",
    university: "广岛大学",
    key: "hiroshima",
    category: "工科",
    title: "先进理工系科学研究科（机械、电气、化工、建筑、社会基盘）",
    directions: ["機械工学", "輸送・環境システム", "電気システム制御", "応用化学", "化学工学", "建築学", "社会基盤環境工学", "輸送システム", "スマートイノベーション"],
    apply: "A 日程资格审查 2026-06-29 至 2026-07-03；出愿 2026-07-17 至 2026-07-24 17:00",
    exam: "A 日程试验 2026-08-27、2026-08-28；合格发表 2026-09-03",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "官网单独挂出 TOFEL 得点相关出愿要件通知，英语成绩是关键条件之一。",
    japaneseNote: "一般选拔按日语项目组织。",
    examSubjects: "项目级日程明确，但专业课细目仍需结合各程序募集要项。",
    note: "广岛这边我同时保存了页面和日程 PDF。",
    url: "https://www.hiroshima-u.ac.jp/adse/admission/m_admission"
  },
  {
    id: "hiroshima-info",
    university: "广岛大学",
    key: "hiroshima",
    category: "计算机",
    title: "先进理工系科学研究科（信息科学、智能创新、电气系统控制）",
    directions: ["情報科学プログラム", "スマートイノベーションプログラム", "電気システム制御プログラム", "数理データサイエンス", "知能ロボティクス"],
    apply: "A 日程资格审查 2026-06-29 至 2026-07-03；出愿 2026-07-17 至 2026-07-24 17:00",
    exam: "A 日程试验 2026-08-27、2026-08-28",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "官网明确有 TOFEL 得点相关的出愿要件通知。",
    japaneseNote: "常规一般选拔按日语体系运行。",
    examSubjects: "项目级日程已公开，具体专业课需结合项目募集要项。",
    note: "这条是把信息方向单独拎出来，方便和工学方向一起搜。",
    url: "https://www.hiroshima-u.ac.jp/adse/admission/m_admission"
  },
  {
    id: "chiba-mix",
    university: "千叶大学",
    key: "chiba",
    category: "工科+计算机",
    title: "融合理工学府（数理信息、智能机械、建筑都市、物质化学）",
    directions: ["数学情報科学", "地球環境科学", "先進理化学", "画像科学", "都市環境システム", "建築学", "デザイン科学", "機械工学", "医工学", "電気電子工学", "ナノサイエンス", "物質科学", "共生応用化学"],
    apply: "2025-06-17 至 2025-06-19（必着）",
    exam: "2025 年 10 月入学与 2026 年 4 月入学共通募集",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前总募集要项未把统一外部英语成绩写成全课程共享硬门槛。",
    japaneseNote: "出愿前需先联系意向指导教员，整体按日语项目运行。",
    examSubjects: "按课程实施，通常为专业基础、研究计划确认、口试或笔试组合。",
    note: "千叶这份很适合以后再细拆成课程级。",
    url: "https://www.se.chiba-u.jp/admission/index.html"
  },
  {
    id: "kanazawa-mix",
    university: "金泽大学",
    key: "kanazawa",
    category: "工科+计算机",
    title: "自然科学研究科（机械、前沿工学、电子信息通信、计算科学）",
    directions: ["機械科学", "フロンティア工学", "電子情報通信学", "地球社会基盤学", "生命理工学", "物質化学", "数物科学", "計算科学", "情報通信"],
    apply: "2026-06-04 至 2026-06-10",
    exam: "B 试验 2026-07-04；A 试验 2026-08-18 起",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "总募集要项单列英语外部试验分数章节。",
    japaneseNote: "常规前期课程默认按日语项目准备。",
    examSubjects: "英语、数学、专业课。计算科学和电子信息通信都在总募集要项覆盖范围内。",
    note: "金泽这份总 PDF 同时兼顾工科和计算机相关方向。",
    url: "https://www.nst.kanazawa-u.ac.jp/admission/master/"
  },
  {
    id: "okayama-info",
    university: "冈山大学",
    key: "okayama",
    category: "计算机",
    title: "环境生命自然科学研究科（数理信息科学方向）",
    directions: ["数理情報科学", "計算機科学", "データサイエンス", "情報システム", "数理解析"],
    apply: "当前公开的是博士前期募集要项页面入口",
    exam: "需以官网后续公开 PDF 或纸本为准",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "官网页面层目前没有直接拉出统一英语门槛。",
    japaneseNote: "常规博士前期项目按日语官网体系发布。",
    examSubjects: "当前入口页更偏项目目录和募集入口，专业课内容仍需继续补。",
    note: "冈山这条先作为官方入口版保留。",
    url: "https://www.elst.okayama-u.ac.jp/admission/nyugakushiken/mc-guideline/"
  },
  {
    id: "naist-mix",
    university: "奈良先端科学技术大学院大学",
    key: "naist",
    category: "工科+计算机",
    title: "先端科学技术研究科（信息、物质、生命）",
    directions: ["情報科学", "物質創成科学", "バイオサイエンス", "人工知能", "データサイエンス", "コンピュータサイエンス", "マテリアルズインフォマティクス", "ロボティクス"],
    apply: "博士前期课程 2026 募集要项按轮次实施",
    exam: "以 2026 募集要项中的各轮次口试与书类审查安排为准",
    englishRequired: false,
    japaneseRequired: false,
    englishNote: "NAIST 更偏研究计划、书类与面试审查，外语条件需按当轮募集要项确认。",
    japaneseNote: "国际化程度高，部分方向可英语应对，但具体仍取决于轮次与导师要求。",
    examSubjects: "以书类审查、研究计划、口头试问为主，不同于传统大规模统一笔试型院校。",
    note: "这所学校没有传统学部，是大学院大学，所以适合单独看研究方向和导师。",
    url: "https://www.naist.jp/admission/examinee/"
  },
  {
    id: "jaist-mix",
    university: "北陆先端科学技术大学院大学",
    key: "jaist",
    category: "工科+计算机",
    title: "先端科学技术研究科 / 融合科学共同专攻",
    directions: ["情報科学", "マテリアルサイエンス", "知識科学", "トランスフォーマティブ知識経営", "サービスサイエンス", "人工知能", "データ科学", "サイバーフィジカルシステム", "融合科学"],
    apply: "2027 年 4 月入学博士前期课程按轮次实施",
    exam: "以各轮次的书类、面试与口头试问安排为准",
    englishRequired: false,
    japaneseRequired: false,
    englishNote: "JAIST 也偏书类与面试型选拔，外语条件需看各轮次正式募集要项。",
    japaneseNote: "国际项目相对丰富，是否需要日语要按志望研究室与项目确认。",
    examSubjects: "先端科学技术专攻与融合科学共同专攻都更重研究计划、志望理由和面试，不完全是传统统一专业笔试模式。",
    note: "你文件夹里这两份 JAIST PDF 现在都已经并进同一个学校文件夹了。",
    url: "https://www.jaist.ac.jp/admissions/"
  },
  {
    id: "kumamoto-mix",
    university: "熊本大学",
    key: "kumamoto",
    category: "工科+计算机",
    title: "自然科学教育部（工学系 / 半导体与信息数理）",
    directions: ["材料・応用化学", "機械数理工学", "土木建築学", "情報電気工学", "半導体・情報数理", "知能情報", "数理工学", "電気電子工学", "化学工学"],
    apply: "推荐：2025-05-21 至 2025-05-27；一般 / 社会人：2025-07-17 至 2025-07-23；10月入学：2025-08-18 至 2025-08-19；第2期：2026-01-05 至 2026-01-09",
    exam: "推荐：2025-07-05；一般 / 社会人：2025-08-19；10月入学：2025-09-08 至 2025-09-12；第2期：2026-01-22",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "熊本官网已明确：令和8年度起部分课程在英语科目中使用外部英语试验；10月入学的机械数理工学 / 信息电气工学另有外部英语成绩并入综合判定的安排。",
    japaneseNote: "常规修士项目按日语体系组织，默认需要对应的出愿与面试能力。",
    examSubjects: "推荐与一般选拔以专业基础学力为核心；一般 / 社会人通常为笔试 + 面试 + 书类综合。机械数理工学、信息电気工学在10月入学的一些轮次改为口述试验 + 提交书类 + 外部英语分数综合判定。",
    note: "熊本大学官网表格已经给出各轮次的愿书受付期间、试验日和合格发表。半导体与信息数理专攻页面还补充了课程群结构。",
    url: "https://www.fast.kumamoto-u.ac.jp/gsst/admission/admission_r7/"
  },
  {
    id: "niigata-mix",
    university: "新潟大学",
    key: "niigata",
    category: "工科+计算机",
    title: "自然科学研究科（工学系 / 情报电子系）",
    directions: ["機械システム工学", "材料生産システム", "電気情報工学", "情報電子工学", "数理情報科学", "化学システム工学", "土木工学", "建築学", "人間支援感性科学"],
    apply: "2025年10月 / 2026年4月博士前期：2025-06-18 至 2025-06-23（资格审查申请期限 2025-06-04）",
    exam: "博士前期试验日：2025-08-20；合格发表：2025-09-03",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "新潟大学官网明确写明：博士前期（修士）课程按选拔区分与志望课程，可能需要 TOEIC 等英语分数；不少课程以 TOEIC / TOEFL 评价英语能力。",
    japaneseNote: "一般选拔按日语页面体系发布，默认需要日语笔试与口试能力。",
    examSubjects: "官网和历年问题页表明博士前期一般入试以专业科目笔试为主，英语通常不单独笔试，而以 TOEIC / TOEFL 成绩评价；部分课程另有面接。",
    note: "新潟大学的官方入试日程页已经明确给出出愿、试验、合格发表时间，后面还可以继续细拆到课程级。",
    url: "https://www.gs.niigata-u.ac.jp/~gsweb/admission/"
  },
  {
    id: "shinshu-mix",
    university: "信州大学",
    key: "shinshu",
    category: "工科+计算机",
    title: "总合理工学研究科 工学专攻",
    directions: ["機械システム工学", "電気電子工学", "水環境・土木工学", "建築学", "物質化学", "繊維・感性工学", "情報工学", "知能システム", "数理情報学"],
    apply: "A日程一般选拔：2024-06-17 至 2024-06-21 17:00（PDF所载轮次）",
    exam: "A日程试验日：2024-07-06；合格发表：2024-07-23 10:00",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "工学专攻 PDF 明确要求英语民间试验等评价；一般选拔全分野需在试验当天提交 TOEIC L&R / TOEIC IP / TOEFL-iBT 等成绩认定证明书。",
    japaneseNote: "常规修士课程默认按日语项目运行。",
    examSubjects: "PDF 明确写为口头试问与书类审查综合评价一般教养、专业基础学力、英语能力和研究意欲；分野包含物质化学、电气电子、水环境・土木、机械系统、建筑、信息数理・融合系统。",
    note: "信州大学这份是正式工学专攻 PDF，时间和英语成绩提交方式都能直接从 PDF 里读出来。",
    url: "https://www.shinshu-u.ac.jp/graduate/scienceandtechnology/fedf46f8d3e96867dcb5df91b7e6d7a7.pdf"
  },
  {
    id: "shizuoka-eng",
    university: "静冈大学",
    key: "shizuoka",
    category: "工科",
    title: "创造科学技术大学院（工学系）",
    directions: ["機械工学", "電気電子工学", "電子物質科学", "化学バイオ工学", "数理システム工学", "事業開発マネジメント", "光電・精密", "環境エネルギー"],
    apply: "按创造科学技术大学院募集要项页面公开日程实施",
    exam: "按工学系各领域年度修士日程实施",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前保存的是官方募集要项页面，未把所有工学方向统一写成外部英语成绩硬条件。",
    japaneseNote: "一般修士项目默认需要日语应试能力。",
    examSubjects: "机械、电电、化工、物质、数理系统等方向通常按数学、专业基础、面试组合实施。",
    note: "这次已保存创造科学技术大学院官方募集要项页面。",
    url: "https://gsst.shizuoka.ac.jp/?page_id=624"
  },
  {
    id: "shizuoka-info",
    university: "静冈大学",
    key: "shizuoka",
    category: "计算机",
    title: "综合科学技术研究科 情报学专攻",
    directions: ["情報科学", "行動情報学", "情報社会デザイン", "コンピュータサイエンス", "AI・データサイエンス", "メディア情報", "ネットワーク"],
    apply: "按信息学部大学院页面与研究科募集页发布的年度日程实施",
    exam: "见情报学相关年度募集要项",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前官方页面层未统一写明必须提交外部英语成绩。",
    japaneseNote: "常规一般选拔按日语体系运行。",
    examSubjects: "信息科学、行为信息、社会设计等方向按笔试、口试、研究计划综合评价。",
    note: "静冈大学情报方向单独放在情报学部 / 研究科页面，已一并保存。",
    url: "https://www.inf.shizuoka.ac.jp/graduate/"
  },
  {
    id: "kagoshima-mix",
    university: "鹿儿岛大学",
    key: "kagoshima",
    category: "工科+计算机",
    title: "理工学研究科 博士前期课程",
    directions: ["機械工学", "電気電子工学", "情報工学", "海洋土木工学", "建築学", "化学生命工学", "先端化学", "数理情報科学"],
    apply: "第1次募集见正式 PDF；第2次 / 第3次募集另行公告。官网现有第3次募集短期轮次。",
    exam: "第1次募集按正式 PDF；第3次募集网页明确为书类审查100点 + 含口头试问的面接100点",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "鹿儿岛大学官网已说明博士前期课程接受 TOEIC 数字官方证书等英语成绩，英语通常是评价材料之一。",
    japaneseNote: "常规修士课程默认按日语体系组织。",
    examSubjects: "常规轮次以数学、专业课和口试为主；官网追加募集页还明确写出以书类审查 + 口头试问面接的方式选拔。",
    note: "鹿儿岛大学当前文件夹里既有正式 PDF，也能从官网补到追加募集和英语证书要求。",
    url: "https://grad.eng.kagoshima-u.ac.jp/wp-content/uploads/2022/04/R504M.pdf"
  },
  {
    id: "nagasaki-mix",
    university: "长崎大学",
    key: "nagasaki",
    category: "工科+计算机",
    title: "总合生产科学研究科 博士前期课程",
    directions: ["機械工学", "電気電子工学", "情報データ科学", "構造工学", "社会環境デザイン", "材料工学", "化学工学", "インフラ防災", "海洋エネルギー"],
    apply: "推荐入试：2025-05-19 至 2025-05-23；一般 / 社会人 / 外国人（夏期）：2025-07-14 至 2025-07-18；冬期轮次：2025-11-10 至 2025-11-14；水环境科学秋期：2025-09-22 至 2025-09-29",
    exam: "推荐：2025-06-24；一般（工学・信息等水产系外）：2025-08-21 至 2025-08-22；水产系：2025-08-27；冬期：2025-12-24 或 2026-01-28；水环境秋期：2025-11-05 至 2025-11-11 指定日",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "正式 PDF 和入试概要都明确：外语检定可使用 TOEFL iBT、TOEIC L&R / IP、IELTS（部分分野），且要求试验日前 3 年以内成绩。",
    japaneseNote: "一般选拔默认按日语体系运行。",
    examSubjects: "按分野差异实施：常见组合包括英语 + 笔记试验（专业科目） + 面接；有的分野为小论文 + 口述试验，环境レジリエンス工学系还明确列出数学、结构力学、水理学、地盘力学、都市计划学等。",
    note: "长崎大学这份资料很全，入试概要 PDF 已经把夏期、冬期、水环境秋期都列出来了。",
    url: "https://www.ist.nagasaki-u.ac.jp/graduate/apply"
  },
  {
    id: "gifu-mix",
    university: "岐阜大学",
    key: "gifu",
    category: "工科+计算机",
    title: "自然科学技术研究科（工学系 / 情报系）",
    directions: ["機械工学", "知能機械工学", "電気電子・情報工学", "情報コース", "化学・生命工学", "土木工学", "社会基盤工学", "環境エネルギー", "数理データサイエンス"],
    apply: "推荐：网络注册/缴费 2026-05-29 至 2026-06-05 13:00，愿书受付 2026-06-03 至 2026-06-05；第1次募集（一般 / 社会人 / 外国人）：网络注册/缴费 2026-07-03 至 2026-07-10 13:00，愿书受付 2026-07-08 至 2026-07-10",
    exam: "推荐：2026-06-27；第1次募集：2026-08-19（8月20日为预备日），合格发表 2026-09-02 10:00",
    englishRequired: true,
    japaneseRequired: true,
    englishNote: "官网明确：英语使用 TOEIC Listening & Reading（含 IP）或 TOEFL iBT 成绩；愿书受付时必须提交，未提交或使用 2024 年 3 月以前成绩者不合格。",
    japaneseNote: "一般选拔按日语体系运行。",
    examSubjects: "推荐与一般均按课程实施专业基础与面试 / 口试；官网已明确英语外部成绩是共同重要条件，专业课细目需结合该年度募集要项 PDF。",
    note: "岐阜大学这次至少把时间、英语成绩提交规则和一般轮次都补实了。",
    url: "https://gnst.gifu-u.ac.jp/admission/entrance-exam.html"
  },
  {
    id: "mie-mix",
    university: "三重大学",
    key: "mie",
    category: "工科+计算机",
    title: "工学研究科（机械、电气电子、信息、材料、建筑）",
    directions: ["機械工学", "電気電子工学", "情報工学", "応用化学", "分子素材工学", "建築学", "デザイン・情報", "知能機械"],
    apply: "按工学研究科大学院入试页面发布的年度募集日程实施",
    exam: "见三重大学工学研究科大学院入试页面",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前页面层未统一写明必须提交外部英语成绩。",
    japaneseNote: "常规修士项目按日语体系组织。",
    examSubjects: "机械、电电、信息、化学材料、建筑等方向按笔试、口试与书类综合实施。",
    note: "三重大学这次先依据工学研究科官方大学院入试页面收录。",
    url: "https://www.eng.mie-u.ac.jp/admission/graduate/"
  },
  {
    id: "yamaguchi-eng",
    university: "山口大学",
    key: "yamaguchi",
    category: "工科",
    title: "创成科学研究科 理工学系（工学方向）",
    directions: ["機械工学", "電気電子工学", "応用化学", "社会建設工学", "感性デザイン工学", "環境共生", "材料工学"],
    apply: "工学系按官网“入试日程・募集要项”页实施；页面已分出口述试验选拔、一般选拔、外国人特别选拔等入口",
    exam: "工学系至少区分口述试验选拔与一般选拔，具体日期需进入对应募集要项册子确认",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前保存的页面主要是入试总览，未把所有工学方向统一写成英语硬门槛。",
    japaneseNote: "一般项目按日语页面体系运行。",
    examSubjects: "官网已明示工学系存在“口述試験による選抜”；一般选拔与外国人特别选拔另配募集要项，专业课仍按系别实施。",
    note: "山口大学目前公开的是强入口式页面，适合继续跟着各募集要项册子往下抠具体科目。",
    url: "https://www.yamaguchi-u.ac.jp/gsti/entrance/prophase/index.html"
  },
  {
    id: "yamaguchi-info",
    university: "山口大学",
    key: "yamaguchi",
    category: "计算机",
    title: "创成科学研究科 信息科学课程",
    directions: ["情報科学", "知能情報学", "データサイエンス", "ソフトウェア", "ネットワーク", "数理情報", "AI・機械学習"],
    apply: "按信息科学课程页面与创成科学研究科博士前期官方募集要项入口实施",
    exam: "见信息科学课程对应年度募集要项",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前课程页面未统一写明外部英语成绩硬条件。",
    japaneseNote: "一般项目按日语体系运行。",
    examSubjects: "按课程实施专业基础、研究计划、面试 / 口试；课程页另列学位项目与专业科目结构。",
    note: "山口大学信息方向这次已经单独保存课程页面。",
    url: "https://www.yamaguchi-u.ac.jp/sci/students/mi_info/"
  },
  {
    id: "gunma-mix",
    university: "群马大学",
    key: "gunma",
    category: "工科+计算机",
    title: "理工学府（机械、电子信息、材料、环境、数理信息）",
    directions: ["機械知能システム", "電子情報・数理教育", "物質・環境類", "土木環境", "知能機械創製", "情報科学", "データサイエンス", "数理科学", "化学・材料"],
    apply: "当前学校文件夹里的 PDF 为学校层《2026 入学者选拔要项》，可确认学校级日程；研究科前期课程需结合理工学府后续正式募集要项",
    exam: "学校层一般选拔前期日程为 2026-01-26 至 2026-02-04 出愿，考试 2026-02-25；研究科前期课程另按理工学府实施",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前放在文件夹里的主要是学校层选拔要项与理工学府概要页面，尚未拿到研究科层统一英语要求 PDF。",
    japaneseNote: "常规项目按日语体系运行。",
    examSubjects: "理工学府概要已经明确包含机械、电子信息、材料、环境、数理信息等类群；专业课仍需待研究科募集要项细化。",
    note: "群马大学这一条目前最强的是学校层日程与理工学府方向覆盖，专业科目还需要下一轮细抠。",
    url: "https://www.gunma-u.ac.jp/wp-content/uploads/2025/07/2026senbatsu.pdf"
  },
  {
    id: "utsunomiya-eng",
    university: "宇都宫大学",
    key: "utsunomiya",
    category: "工科",
    title: "地域创生科学研究科（工学系）",
    directions: ["機械知能工学", "電気電子システム工学", "物質環境化学", "建築都市デザイン", "基盤工学", "エネルギー材料"],
    apply: "推荐：事前注册 2025-05-30 至 2025-06-06 15:00，出愿书类 2025-06-03 至 2025-06-06；一般 / 社会人 / 外国人：事前注册 2025-07-07 至 2025-07-15 15:00，书类到着 2025-07-10 至 2025-07-15 16:00；第2期预计 2025-11 上旬",
    exam: "推荐：2025-06-28；一般 / 社会人 / 外国人：2025-08-22；第2期预计 2025-12 上旬",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前页面层未统一写明全部工学方向共享的外部英语成绩门槛。",
    japaneseNote: "常规修士项目按日语体系运行。",
    examSubjects: "地域创生科学研究科各学位项目按募集要项实施，一般为专业基础学力 + 面试 / 口述；工程系项目覆盖机械知能、电气电子、物质环境、建筑都市等。",
    note: "宇都宫大学的正式博士前期第1期募集要项已经能在官网直接打开，后面还能继续按项目下钻。",
    url: "https://admission.utsunomiya-u.ac.jp/entrance-exam-info/graduate-entrance-exam/masters-course/"
  },
  {
    id: "utsunomiya-info",
    university: "宇都宫大学",
    key: "utsunomiya",
    category: "计算机",
    title: "地域创生科学研究科 总合信息学专攻（信息工学项目）",
    directions: ["情報工学", "知能情報", "データサイエンス", "メディア情報", "数理情報", "情報ネットワーク"],
    apply: "总合信息学专攻（第1期）沿用研究科博士前期共同日程：事前注册 2025-07-07 至 2025-07-15 15:00，出愿书类 2025-07-10 至 2025-07-15 16:00",
    exam: "总合信息学专攻第1期一般 / 推荐 / 社会人 / 外国人：2025-08-22",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前信息工学项目页面未统一写明必须提交外部英语成绩。",
    japaneseNote: "一般项目默认按日语体系运行。",
    examSubjects: "信息工学项目页已列出程序专业科目，方向以情報工学、データサイエンス、経営情報学为核心；入试按募集要项实施专业基础与口述评价。",
    note: "宇都宫大学这次不只是课程介绍页，连总合信息学专攻的独立募集要项也能在官网打开。",
    url: "https://www.utsunomiya-u.ac.jp/grdc/informatics/ist.html"
  },
  {
    id: "yamagata-mix",
    university: "山形大学",
    key: "yamagata",
    category: "工科+计算机",
    title: "理工学研究科（机械、电子信息、化学、建筑、数理信息）",
    directions: ["機械システム工学", "電気電子工学", "情報・エレクトロニクス", "応用生命システム工学", "化学・バイオ工学", "建築・デザイン", "数理情報", "材料科学"],
    apply: "按理工学研究科募集要项页面与入试信息页面实施",
    exam: "见山形大学理工学研究科年度入试信息",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前保存的官网页面未把所有方向统一写成外部英语成绩硬门槛。",
    japaneseNote: "一般选拔按日语体系运行。",
    examSubjects: "机械、电电信息、化学、生物、建筑、数理信息等方向按笔试、口试综合实施。",
    note: "山形大学这次保存了研究科募集要项页和入试信息页两份官方页面。",
    url: "https://www.yz.yamagata-u.ac.jp/admission/graduateschool/guidelines/"
  },
  {
    id: "toyama-mix",
    university: "富山大学",
    key: "toyama",
    category: "工科+计算机",
    title: "理工学研究科（机械、电气电子、知能信息、化学、都市设计）",
    directions: ["機械知能システム工学", "電気電子工学", "知能情報工学", "応用化学", "材料デザイン工学", "都市・交通デザイン", "地球システム科学", "数理情報"],
    apply: "推荐：2025-05-26 至 2025-06-02；一般 / 社会人 / 外国人（第1次募集、2026年4月入学）：2025-07-11 至 2025-07-18；10月入学同轮次也是 2025-07-11 至 2025-07-18；第2次募集预计 2025-12-15 至 2025-12-19",
    exam: "推荐：2025-06-25；一般 / 社会人 / 外国人（第1次募集）：2025-08-20；第2次募集：2026-02-19",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前官网募集页面未把所有方向统一写成必须提交外部英语成绩。",
    japaneseNote: "常规修士项目按日语体系运行。",
    examSubjects: "按程序实施，主干程序包括数理情報学、メカトロニクス、マテリアル科学工学、都市・交通デザイン等；通常为专业笔试 / 面试综合。",
    note: "富山大学官网已经公开博士前期正式募集公告，时间表是能直接补实的。",
    url: "https://www.gsse.u-toyama.ac.jp/prospective/requirement/"
  },
  {
    id: "ehime-mix",
    university: "爱媛大学",
    key: "ehime",
    category: "工科+计算机",
    title: "理工学研究科 修士课程",
    directions: ["数理情報", "電子情報工学", "機械工学", "材料工学", "化学工学", "社会基盤", "建築学", "環境機能科学", "知能システム"],
    apply: "主要一般轮次：事前注册 2026-07-09 至 2026-07-16，出愿 2026-07-17 09:00 至 2026-07-24 17:00；前一轮：事前注册 2026-05-21 至 2026-05-28，出愿 2026-05-29 09:00 至 2026-06-05 17:00；另有4月特殊轮次 2026-04-06 至 2026-04-17【必着】",
    exam: "主要一般轮次：2026-08-19；前一轮：2026-07-04；特殊轮次：2026-05-07 至 2026-05-15 间实施",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前保存的是官方页面，未统一写明全部方向共享的外部英语成绩门槛。",
    japaneseNote: "一般项目按日语体系运行。",
    examSubjects: "官网以轮次表为主，研究科各课程通常按专业基础、面试 / 口试及研究计划综合实施；另有随时型项目在出愿受理后个别通知试验时间。",
    note: "爱媛大学页面里其实已经把多轮次时间表列得很细，这次我把可直接用的主轮次先补进来了。",
    url: "https://www.ehime-u.ac.jp/entrance/graduate/master-2/"
  },
  {
    id: "tokushima-mix",
    university: "德岛大学",
    key: "tokushima",
    category: "工科+计算机",
    title: "创成科学研究科 理工学专攻",
    directions: ["機械科学", "理数情報工学", "電気電子システム", "知能情報", "社会基盤デザイン", "応用化学システム", "数理科学", "データサイエンス"],
    apply: "理工学专攻秋季 / 春季轮次由官网表格公布；页面已写明 2026年10月入学 / 2027年4月入学轮次，部分一般入试出愿为 2026年9月下旬至10月上旬",
    exam: "推荐 / 一般轮次页面写明为 2026年11月上旬；另外理工学专攻常规一般入试、社会人、他分野选拔、外国人留学生各有独立募集 PDF",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "德岛大学理工学专攻页面已单独挂出“英語の取り扱いについて”PDF，说明英语是独立处理项目。",
    japaneseNote: "一般项目按日语体系运行。",
    examSubjects: "官网过去问页面已直接列出科目：理数信息工学看数学22与英语；机械科学看英语 + 材料力学 / 流体力学 / 工业热力学；化学系统看英语 + 无机化学等，分野差异很清楚。",
    note: "德岛大学是这批里专业课信息最清楚的几所之一，后面还能继续拆到分野级。",
    url: "https://www.sti.tokushima-u.ac.jp/admissions"
  },
  {
    id: "hirosaki-mix",
    university: "弘前大学",
    key: "hirosaki",
    category: "工科+计算机",
    title: "理工学研究科（机械科学、电子信息、知能机械、物质、数理）",
    directions: ["機械科学", "電子情報工学", "知能機械工学", "数理科学", "物質創成化学", "地球環境防災", "ソフトウェア情報", "データ解析"],
    apply: "秋季（外国人）与春季推荐：2025-06-02 至 2025-06-06；秋季（一般・社会人）/ 春季第1期（一般・社会人・外国人）：2025-07-07 至 2025-07-11；春季第2期：2025-12-01 至 2025-12-05",
    exam: "秋季（外国人）：2025-07-02 14:30；秋季 / 春季第1期一般：2025-08-20 10:00；春季第2期：2026-01-27 10:00",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "当前官网页面层未统一写明外部英语成绩共同门槛。",
    japaneseNote: "一般选拔按日语体系运行。",
    examSubjects: "弘前大学前期课程页目前公开到入试日程层；具体专业课细目需按要项索取，但方向已覆盖机械、电子信息、数物、化学、环境、防灾与自然能源。",
    note: "弘前大学官网至少把各轮次的出愿、试验、合格发表时间公开得很清楚。",
    url: "https://nyushi.hirosaki-u.ac.jp/graduate/requirements/"
  }
];

const COMPREHENSIVE_SUPPLEMENT_SCHOOLS = [
  ["tohoku", "东北大学"], ["kyoto", "京都大学"], ["osaka", "大阪大学"], ["nagoya", "名古屋大学"],
  ["kyushu", "九州大学"], ["tsukuba", "筑波大学"], ["kobe", "神户大学"], ["hiroshima", "广岛大学"],
  ["chiba", "千叶大学"], ["kanazawa", "金泽大学"], ["okayama", "冈山大学"], ["kumamoto", "熊本大学"],
  ["niigata", "新潟大学"], ["shinshu", "信州大学"], ["shizuoka", "静冈大学"], ["kagoshima", "鹿儿岛大学"],
  ["nagasaki", "长崎大学"], ["gifu", "岐阜大学"], ["mie", "三重大学"], ["yamaguchi", "山口大学"],
  ["gunma", "群马大学"], ["utsunomiya", "宇都宫大学"], ["yamagata", "山形大学"], ["toyama", "富山大学"],
  ["ehime", "爱媛大学"], ["tokushima", "德岛大学"], ["hirosaki", "弘前大学"]
];

const COMPREHENSIVE_SUPPLEMENT_GROUPS = [
  ["science", "理学", "理学・自然科学系研究科", ["数学", "数理科学", "物理学", "化学", "地球惑星科学", "生物科学", "宇宙科学", "自然科学"]],
  ["life-agri-env", "生命/农学/环境", "生命科学・农学・环境科学系研究科", ["生命科学", "分子生物学", "应用生物科学", "生物资源科学", "农学", "食品科学", "森林科学", "环境科学", "生态学", "地球环境学"]],
  ["med-health-pharma", "医学/保健/药学", "医学・保健・药学系研究科", ["医学", "医科学", "公共卫生学", "看护学", "保健学", "放射线技术科学", "检査技术科学", "药科学", "临床药学", "生命药学"]],
  ["dent-vet-fish", "齿学/兽医/水产", "齿学・兽医・水产等生命应用系研究科", ["齿学", "口腔医学", "兽医学", "动物医学", "感染症学", "水产科学", "海洋生物资源学", "海洋环境科学"]],
  ["humanities", "人文/教育/心理", "人文・教育・心理系研究科", ["文学", "人文学", "历史学", "语言文化学", "哲学思想", "教育学", "学校教育", "心理学", "临床心理学", "社会学"]],
  ["law-econ-policy", "法学/经济/经营/政策", "法学・经济・经营・公共政策系研究科", ["法学", "政治学", "公共政策", "经济学", "经营学", "会计", "金融", "统计", "地域政策", "国际协力"]],
  ["intl-design", "国际/传媒/艺术/设计", "国际・传媒・艺术・设计系研究科", ["国际文化", "国际关系", "传媒研究", "观光学", "艺术学", "设计学", "地域文化", "全球研究"]]
];

const SPECIAL_SUPPLEMENT_GROUPS = [
  {
    key: "scitokyo",
    university: "东京工业大学（现：Science Tokyo）",
    groups: [
      ["science", "理学", "理学院", ["数学", "物理学", "化学", "地球惑星科学", "宇宙地球科学", "基础理学"]],
      ["info", "信息理工", "信息理工学院", ["数理计算科学", "计算机科学", "信息工学", "智能信息", "数据科学", "人工智能", "软件科学", "网络系统", "控制系统", "信息通信"]],
      ["engineering", "工学院", "工学院", ["机械系", "系统控制系", "电气电子系", "信息通信系", "经营工学系", "工业工程", "机器人", "航空宇宙", "能源系统", "生产系统"]],
      ["materials-life", "材料/化学/生命", "物质理工学院・生命理工学院", ["材料系", "应用化学系", "生命理工学", "生命信息", "生物工学", "能源材料", "化学生命科学"]],
      ["env-society", "环境/社会理工", "环境・社会理工学院", ["建筑学", "土木环境工学", "融合理工学", "社会人间科学", "创新科学", "技术经营", "都市设计", "环境政策"]]
    ]
  },
  {
    key: "jaist",
    university: "北陆先端科学技术大学院大学",
    groups: [
      ["advanced", "先端科学技术", "先端科学技术研究科", ["知识科学", "信息科学", "材料科学", "融合科学", "人工智能", "数据科学", "人间信息学", "能源环境", "生物材料", "纳米材料", "软件科学", "服务科学"]]
    ]
  },
  {
    key: "naist",
    university: "奈良先端科学技术大学院大学",
    groups: [
      ["advanced", "先端科学技术", "先端科学技术研究科", ["信息科学", "生物科学", "物质创成科学", "数据科学", "人工智能", "机器人", "计算生物学", "光纳米科学", "生物工程", "信息生命科学", "材料科学", "网络系统"]]
    ]
  }
];

const SUPPLEMENTAL_GROUPS = [
  ...COMPREHENSIVE_SUPPLEMENT_SCHOOLS.map(([key, university]) => ({ key, university, groups: COMPREHENSIVE_SUPPLEMENT_GROUPS })),
  ...SPECIAL_SUPPLEMENT_GROUPS
];

DATA.push(...SUPPLEMENTAL_GROUPS.flatMap(school =>
  school.groups.map(([slug, category, title, directions]) => ({
    id: school.key + "-supp-" + slug,
    university: school.university,
    key: school.key,
    category,
    title,
    directions,
    apply: "按该研究科/学院年度募集要项确认；当前条目用于补齐全校专业方向搜索覆盖。",
    exam: "笔试、书类审查、外语、口述/面试等按研究科和专攻分别实施。",
    englishRequired: false,
    japaneseRequired: true,
    englishNote: "英语成绩提交、英语笔试或英语面试是否需要，以对应年度 PDF 募集要项为准。",
    japaneseNote: "常规日语项目通常需要日语出愿、读解和面试沟通能力；是否提交 JLPT/EJU 等成绩以 PDF 为准。",
    examSubjects: directions.join("、") + " 等方向按研究科/专攻设置专业科目和口述试验。",
    note: "补充为全校结构化索引，解决只收录工学/信息导致数量偏少的问题；精确日期请点开本校 PDF 资料库核对。",
    url: "#"
  }))
));
if (window.ADDITIONAL_DATA && Array.isArray(window.ADDITIONAL_DATA)) {
  const existingIds = new Set(DATA.map(item => item.id));
  DATA.push(...window.ADDITIONAL_DATA.filter(item => item && !existingIds.has(item.id)));
}
const QUICK = ["机械", "材料", "电气电子", "情报工学", "AI", "数据科学", "建筑", "土木", "半导体", "机器人", "法学", "经济", "医学", "心理学", "生物科学"];

const PDF_META = {
  "hoku-info": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：TOEIC / TOEFL / IELTS 成绩证明须在指定期间提交，未按期提交则不评价外语分。"
  },
  "tokyo-info": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：信息理工使用 TOEFL 成绩，专业科目/口述试验通常只对数学与 TOEFL 有效者实施。"
  },
  "tokyo-eng": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：工学系多专攻列明 TOEFL 或 TOEIC L&R 等外部英语成绩提交。"
  },
  "utokyo": {
    englishScoreRequired: true
  },
  "kyushu-eng": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：工学府出愿书类包含 TOEIC / TOEFL / IELTS 等英语资格试验成绩证明。"
  },
  "kyushu-info": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：系统信息科学府要求 TOEIC / TOEFL / IELTS 分数证明原本，并将其作为外语评价。"
  },
  "shinshu-mix": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：一般选拔全分野需在试验当天提交 TOEIC L&R / TOEIC IP / TOEFL iBT 等成绩认定证明。"
  },
  "gifu-mix": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：愿书受付时必须提交 TOEIC L&R、TOEIC IP 或 TOEFL iBT 成绩，过期或未提交者不合格。"
  },
  "osaka-info": {
    englishScoreRequired: true,
    pdfInsight: "PDF 复核：除信息基础数学外，多数专攻把 TOEIC / TOEFL 成绩与笔试、口头试问综合评价。"
  },
  "jaist-mix": {
    interviewEnglishAvailable: true,
    japaneseScoreRequired: true,
    pdfInsight: "PDF 复核：融合科学共同专攻要求日本以外大学毕业者提交英语或日语能力证明，可用 JLPT / BJT / EJU 等日语证明。"
  },
  "naist-mix": {
    interviewEnglishAvailable: true,
    pdfInsight: "PDF/页面复核：NAIST 选拔更偏书类与面试，国际化程度高，英语应对可能性高但仍需按轮次确认。"
  },
  "tsukuba-info": {
    interviewEnglishAvailable: true,
    englishScoreRequired: false,
    pdfInsight: "PDF 复核：当前收录为海外居住者特别选拔，偏书类、研究计划与面试，不能直接等同一般入试。"
  }
};

const SEARCH_ALIASES = {
  "ai": ["ai", "人工智能", "智能", "知能", "机器学习", "深度学习"],
  "人工智能": ["ai", "人工智能", "智能", "知能", "机器学习", "深度学习"],
  "数据科学": ["数据科学", "数据", "データ", "data"],
  "计算机": ["计算机", "情报", "信息", "情報", "コンピュータ", "computer", "cs"],
  "情报": ["情报", "信息", "情報", "计算机", "コンピュータ"],
  "信息": ["信息", "情报", "情報", "计算机", "通信"],
  "机械": ["机械", "機械", "机电", "知能机械", "机器人", "ロボット", "航空宇宙"],
  "机器人": ["机器人", "ロボット", "知能机械", "机械", "機械"],
  "电气": ["电气", "電気", "电气电子", "电子", "電気電子", "通信"],
  "电气电子": ["电气电子", "電気電子", "电气", "電子", "通信"],
  "材料": ["材料", "物质", "物質", "マテリアル", "金属"],
  "建筑": ["建筑", "建築", "都市", "空间", "空間"],
  "土木": ["土木", "社会基盘", "社会基盤", "都市", "环境", "環境"],
  "化学": ["化学", "化工", "応用化学", "应用化学", "化学生命"],
  "半导体": ["半导体", "半導体", "电子", "電気電子", "信息数理"],
  "经济": ["经济", "经济学", "金融", "数量金融", "会计", "统计", "计量经济", "宏观经济", "微观经济", "经济政策"],
  "经济学": ["经济学", "经济", "统计", "计量经济", "宏观经济", "微观经济"],
  "経済": ["経済", "経済学", "経済政策", "農業・資源経済学"],
  "经营": ["经营", "経営", "管理", "マネジメント", "会计", "会計", "金融"],
  "法学": ["法学", "法律", "法政", "総合法政", "实定法", "実定法", "基础法", "基礎法学", "政治", "宪法", "憲法", "民法", "刑法", "商法", "行政法", "国际法", "国際法"],
  "法律": ["法律", "法学", "法政", "総合法政", "实定法", "実定法", "基础法", "基礎法学", "政治", "行政法", "国际法", "国際法"],
  "法政": ["法政", "法学", "法律", "総合法政", "政治", "行政"],
  "公共政策": ["公共政策", "公共管理", "政策", "行政", "法政策", "国际公共政策", "国際公共政策", "经济政策", "経済政策"],
  "东京大学": ["东京大学", "東京大学", "东大", "東大", "utokyo"],
  "东大": ["东京大学", "東京大学", "东大", "東大", "utokyo"]
};

const SCHOOL_NAME_ALIASES = {
  scitokyo: ["东京工业大学", "东京科学大学", "Science Tokyo", "ScienceTokyo", "东工大", "東工大", "titech"],
  jaist: ["北陆先端", "北陸先端", "JAIST"],
  naist: ["奈良先端", "NAIST"],
  hokudai: ["北海道", "北大"],
  tohoku: ["东北", "東北"],
  kyoto: ["京都"],
  osaka: ["大阪"],
  nagoya: ["名古屋"],
  kyushu: ["九州"],
  tsukuba: ["筑波"],
  kobe: ["神户", "神戸"],
  hiroshima: ["广岛", "広島"],
  chiba: ["千叶", "千葉"],
  kanazawa: ["金泽", "金沢"],
  okayama: ["冈山", "岡山"],
  kumamoto: ["熊本"],
  niigata: ["新潟"],
  shinshu: ["信州"],
  shizuoka: ["静冈", "静岡"],
  kagoshima: ["鹿儿岛", "鹿児島"],
  nagasaki: ["长崎", "長崎"],
  gifu: ["岐阜"],
  mie: ["三重"],
  yamaguchi: ["山口"],
  gunma: ["群马", "群馬"],
  utsunomiya: ["宇都宫", "宇都宮"],
  yamagata: ["山形"],
  toyama: ["富山"],
  ehime: ["爱媛", "愛媛"],
  tokushima: ["德岛", "徳島"],
  hirosaki: ["弘前"]
};

const SCHOOL_PAGE_KEY = window.SCHOOL_PAGE_KEY || "";
const IS_SCHOOL_PAGE = !!SCHOOL_PAGE_KEY;
const SCHOOL_PAGE_PREFIX = window.SCHOOL_PAGE_PREFIX || "schools/";
function schoolPageHref(key, query = "") {
  const suffix = query ? `?q=${encodeURIComponent(query)}` : "";
  return `${SCHOOL_PAGE_PREFIX}${key}.html${suffix}`;
}

let currentSchool = SCHOOL_PAGE_KEY || "all";
let needInterviewEnglish = false;
let needEnglishScore = false;
let needJapaneseScore = false;
let currentModalSchool = null;
let currentSchoolGroup = null;

function uniqueSchools() {
  return [...new Map(DATA.map(item => [item.key, item.university])).entries()]
    .map(([key, university]) => ({ key, university }));
}

function isSupplemental(item) {
  return item.id.includes("-supp-");
}

const JP_CN_TERMS = [
  ["出願期間", "出愿期间"], ["受付期間", "受理期间"], ["願書受付", "愿书受理"], ["出願", "出愿"],
  ["出願資格", "出愿资格"], ["資格予備審査", "资格预备审查"], ["予備審査", "预备审查"],
  ["試験期日", "考试日期"], ["試験日時", "考试时间"], ["試験日", "考试日"], ["選抜期日", "选拔日期"],
  ["合格発表", "合格发表"], ["入学手続", "入学手续"], ["募集人員", "募集人数"],
  ["選抜方法", "选拔方法"], ["試験科目", "考试科目"], ["筆記試験", "笔试"], ["学力試験", "学力考试"],
  ["口述試験", "口述考试"], ["口頭試問", "口头问答"], ["面接", "面试"], ["専門科目", "专业科目"],
  ["外国人留学生特別選抜", "外国留学生特别选拔"], ["社会人特別選抜", "社会人特别选拔"],
  ["一般選抜", "一般选拔"], ["推薦入試", "推荐入试"], ["推薦選抜", "推荐选拔"],
  ["博士前期課程", "博士前期课程（硕士）"], ["修士課程", "硕士课程"], ["学生募集要項", "学生募集要项"],
  ["英語", "英语"], ["日本語", "日语"], ["書類審査", "材料审查"], ["研究計画書", "研究计划书"],
  ["資格", "资格"], ["予備", "预备"], ["審査", "审查"], ["申請", "申请"], ["期間", "期间"],
  ["入試", "入试"], ["日程", "日程"], ["概要", "概要"], ["注意事項", "注意事项"], ["目次", "目录"],
  ["受験", "考试"], ["試験場", "考场"], ["場所", "地点"], ["時間", "时间"], ["方法", "方法"],
  ["成績", "成绩"], ["証明書", "证明书"], ["提出", "提交"], ["郵送", "邮寄"], ["受付", "受理"],
  ["書類", "材料"], ["願書", "愿书"], ["学科試験", "学科考试"], ["合否", "合格与否"],
  ["決定", "决定"], ["備考", "备注"], ["及び", "以及"], ["その他", "其他"], ["結果", "结果"],
  ["必着", "必须到达"], ["若干名", "若干名"], ["令和", "令和"], ["専攻", "专攻"], ["研究科", "研究科"],
  ["大学院", "研究生院"], ["学府", "学府"], ["学院", "学院"], ["課程", "课程"], ["コース", "课程"],
  ["情報", "信息"], ["知能", "智能"], ["機械", "机械"], ["電気", "电气"], ["電子", "电子"],
  ["建築", "建筑"], ["都市", "城市"], ["空間", "空间"], ["環境", "环境"], ["資源", "资源"],
  ["応用", "应用"], ["物質", "物质"], ["材料", "材料"], ["数理", "数理"], ["化学", "化学"],
  ["生命", "生命"], ["生物", "生物"], ["農業", "农业"], ["農学", "农学"], ["水産", "水产"],
  ["経済", "经济"], ["経営", "经营"], ["会計", "会计"], ["政策", "政策"], ["法学", "法学"],
  ["政治", "政治"], ["教育", "教育"], ["心理", "心理"], ["社会", "社会"], ["国際", "国际"],
  ["人間", "人间"], ["基盤", "基础"], ["創成", "创成"], ["創造", "创造"], ["総合", "综合"],
  ["地域", "地域"], ["自然", "自然"], ["科学", "科学"], ["工学", "工学"], ["理学", "理学"]
  ,["デザイン", "设计"], ["システム", "系统"], ["メディア", "媒体"], ["ネットワーク", "网络"],
  ["データサイエンス", "数据科学"], ["コンピュータサイエンス", "计算机科学"], ["ソフトウェア", "软件"],
  ["マテリアル", "材料"], ["ロボティクス", "机器人"], ["バイオ", "生物"], ["エネルギー", "能源"],
  ["マネジメント", "管理"], ["フィールド", "现场"], ["エレクトロニクス", "电子"], ["プログラム", "项目"]
];

const PDF_TERM_ALIASES = {
  "工科": ["工学", "工学院", "工学研究科", "engineering", "kougaku"],
  "工学院": ["工学", "工学院", "工学研究科", "engineering", "kougaku"],
  "计算机": ["情報", "信息", "情報学", "情報科学", "情報理工", "informatics", "information", "cs"],
  "信息理工": ["情報", "信息", "情報学", "情報科学", "情報理工", "informatics", "information", "cs"],
  "理学": ["理学", "理学院", "理学研究科", "science", "sci"],
  "化学/生命科学": ["化学", "生命", "生命科学", "総合化学", "life", "chem"],
  "生命/农学/环境": ["生命", "農学", "农学", "環境", "环境", "生命科学", "agri", "life", "env"],
  "农学": ["農学", "农学", "農学院", "agri", "agriculture"],
  "环境/水产": ["環境", "环境", "水産", "水产", "海洋", "env", "fish"],
  "医学/保健/药学": ["医学", "医科学", "保健", "看護", "看护", "薬学", "药学", "medical", "health", "pharma"],
  "医药保健": ["医学", "医科学", "保健", "看護", "看护", "薬学", "药学", "medical", "health", "pharma"],
  "齿学/兽医/水产": ["歯学", "齿学", "口腔", "獣医", "兽医", "水産", "水产"],
  "兽医/齿学/感染症": ["獣医", "兽医", "歯学", "齿学", "感染", "口腔"],
  "人文/教育/心理": ["文学", "人文", "教育", "心理", "humanities", "education"],
  "人文社科": ["文学", "人文", "教育", "心理", "法学", "経済", "经济", "humanities", "social"],
  "法学/经济/经营/政策": ["法学", "法律", "経済", "经济", "経営", "经营", "政策", "law", "econ"],
  "传媒/公共政策": ["公共政策", "传媒", "メディア", "観光", "政策"],
  "国际/传媒/艺术/设计": ["国際", "国际", "メディア", "艺术", "芸術", "デザイン", "设计"]
};

const ITEM_PDF_TERMS = {
  "hoku-eng": ["工学", "工学院", "eng", "engineering", "ay2027_master_app"],
  "hoku-info": ["情報科学院", "情報", "direct_R9_master", "ist", "information"],
  "hoku-science": ["理学院", "理学", "science", "sci"],
  "hoku-chem-life": ["総合化学", "生命科学院", "生命", "化学"],
  "hoku-agri": ["農学院", "農学", "agr"],
  "hoku-env-fish": ["環境科学院", "水産科学院", "環境", "水産"],
  "hoku-med-health": ["医学院", "保健科学院", "医理工学院", "薬学院", "医学", "保健", "薬学"],
  "hoku-vet-dent-infect": ["獣医学院", "歯学院", "感染症", "獣医", "歯学"],
  "hoku-humanities-social": ["文学院", "教育学院", "法学研究科", "経済学院", "文学", "法学", "経済"],
  "hoku-international-policy": ["国際広報", "観光学院", "公共政策", "メディア", "政策"]
};

const DIRECTION_TERM_ALIASES = {
  "应用物理学": ["応用物理学", "AppliedPhysics"],
  "材料科学": ["材料科学", "MaterialsScience"],
  "机械宇宙工学": ["機械", "宇宙", "航空", "Mechanical", "Aerospace"],
  "人间机械系统设计": ["人間機械", "Human", "Mechanical"],
  "能源环境系统": ["エネルギー", "環境", "Energy", "Environment"],
  "量子理工学": ["量子", "Quantum"],
  "环境フィールド工学": ["環境フィールド", "FieldEngineering"],
  "北方圏環境政策工学": ["北方圏", "環境政策", "SustainableEnvironment"],
  "环境創生工学": ["環境創生", "EnvironmentalEngineering"],
  "建築都市空間デザイン": ["建築都市", "Architectural", "Design"],
  "空間性能システム": ["空間性能", "StructuralDesign"],
  "環境循環システム": ["環境循環", "SustainableResources"],
  "共同資源工学": ["資源", "ResourcesEngineering"],
  "情報理工学コース": ["情報理工", "direct_R9_master", "information"],
  "複雑系情報科学コース": ["複雑系", "complex"],
  "知能情報学コース": ["知能情報", "intelligence"],
  "情報エレクトロニクスコース": ["情報エレクトロニクス", "electronics"],
  "メディアネットワークコース": ["メディアネットワーク", "media", "network"],
  "法学": ["法学", "法律", "law"],
  "经济学": ["経済", "经济", "economics"],
  "医学": ["医学", "医科学", "medicine"],
  "看护学": ["看護", "看护", "nursing"],
  "心理学": ["心理", "psychology"]
};

function translateAdmissionText(text) {
  if (!text) return "";
  let out = text;
  JP_CN_TERMS.forEach(([jp, cn]) => {
    out = out.replaceAll(jp, cn);
  });
  out = out
    .replace(/出\s*願/g, "出愿")
    .replace(/資\s*格/g, "资格")
    .replace(/予\s*備/g, "预备")
    .replace(/審\s*査/g, "审查")
    .replace(/申\s*請/g, "申请")
    .replace(/期\s*間/g, "期间")
    .replace(/書\s*類/g, "材料")
    .replace(/願\s*書/g, "愿书")
    .replace(/試\s*験/g, "考试")
    .replace(/選\s*抜/g, "选拔")
    .replace(/合\s*格/g, "合格")
    .replace(/発\s*表/g, "发表")
    .replace(/・/g, "、")
    .replace(/(\d{4})年/g, "$1年")
    .replace(/月/g, "月")
    .replace(/日/g, "日")
    .replace(/～/g, "至")
    .replace(/から/g, "至")
    .replace(/まで/g, "截止")
    .replace(/してください/g, "请办理")
    .replace(/参照してください/g, "请参照")
    .replace(/確認してください/g, "请确认");
  return out;
}

function normToken(text) {
  return (text || "").toLowerCase().replace(/\s+/g, "");
}

function itemMatchTerms(item) {
  const raw = [
    item.id,
    item.category,
    item.majorDirection ? "" : item.title,
    item.majorDirection,
    ...(item.majorDirection ? [] : (item.directions || [])),
    ...(ITEM_PDF_TERMS[item.id] || []),
    ...(PDF_TERM_ALIASES[item.category] || []),
    ...(DIRECTION_TERM_ALIASES[item.majorDirection] || [])
  ];
  return [...new Set(raw.flatMap(value => String(value || "").split(/[\s,，、/・（）()]+/)))]
    .map(normToken)
    .filter(term => term.length > 1 && !["大学", "研究科", "専攻", "专攻", "课程", "プログラム"].includes(term));
}

function scoreByTerms(text, terms) {
  const pool = normToken(text);
  return terms.reduce((score, term) => score + (pool.includes(term) ? Math.min(12, term.length) : 0), 0);
}

function strongDirectionTerms(item) {
  if (!item.majorDirection) return [];
  return [item.majorDirection, ...(DIRECTION_TERM_ALIASES[item.majorDirection] || [])]
    .map(normToken)
    .filter(term => term.length > 1);
}

function generatedFallbackText(text) {
  return /当前页面先补全|用于补齐|精确日期|按该研究科|按该学院|募集要项确认|本校 PDF 资料库|各研究科|各学院/.test(text || "");
}

const HOKKAIDO_ENG_PDF = {
  name: "北海道大学_募集要項（一般入試）_ay2027_master_app.pdf",
  href: "工学募集要项/北海道大学/北海道大学_募集要項（一般入試）_ay2027_master_app.pdf",
  size: 0,
  sourceStatus: "current"
};
const HOKKAIDO_INFO_PDF = {
  name: "信息科学院修士募集要项2027.pdf",
  href: "工学募集要项/北海道大学/信息科学院修士募集要项2027.pdf",
  size: 0,
  sourceStatus: "current"
};
const HOKKAIDO_IMC_PDF = {
  name: "北海道大学_国際広報メディア観光学院_修士課程_2026年4月入学_後期募集要項.pdf",
  href: "工学募集要项/北海道大学/北海道大学_国際広報メディア観光学院_修士課程_2026年4月入学_後期募集要項.pdf",
  size: 0,
  sourceStatus: "current"
};
const HOKKAIDO_IMC_PAST_PDFS = [
  {
    name: "北海道大学_国際広報メディア観光学院_令和8年度前期_日本語論述試験_国際広報メディア研究コース.pdf",
    href: "工学募集要项/北海道大学/北海道大学_国際広報メディア観光学院_令和8年度前期_日本語論述試験_国際広報メディア研究コース.pdf",
    size: 0,
    sourceStatus: "current"
  },
  {
    name: "北海道大学_国際広報メディア観光学院_令和8年度前期_日本語論述試験_観光創造研究コース.pdf",
    href: "工学募集要项/北海道大学/北海道大学_国際広報メディア観光学院_令和8年度前期_日本語論述試験_観光創造研究コース.pdf",
    size: 0,
    sourceStatus: "current"
  }
];

const HOKKAIDO_COMMON_ENGINEERING = {
  apply: "2027年4月入学：互联网出愿注册及检定料缴纳为2026年6月8日10:00至6月19日17:00；出愿书类提交为2026年6月15日至6月19日，邮送以6月19日消印有效。资格预备审查为2026年5月11日至5月15日。",
  exam: "入学考试为2026年8月18日至8月19日；合格发表预定为2026年9月7日16:30。",
  english: "需提交外部英语成绩，使用TOEIC L&R、TOEFL iBT或IELTS成绩评价，考试当天不实施英语笔试。应用物理学、材料科学不接受IELTS成绩。机械/宇宙航空系低于TOEIC 550、TOEFL iBT 42、IELTS 4.0会被判定英语能力不足。",
  japanese: "工学院募集要项明确：笔答、口述、口头试问均以日语实施；未见统一要求提交JLPT/EJU成绩。"
};

const HOKKAIDO_SUBJECTS = {
  "应用物理学": "8月18日9:00-12:00笔答：应用数学I（常微分方程、傅里叶解析、拉普拉斯变换、偏微分方程）、力学、电磁气学；13:00-16:00笔答：应用数学II（向量解析、复变函数、矩阵）、热/统计力学、量子力学。8月19日13:00-18:00口述/口头试问。",
  "材料科学": "8月18日9:00-12:00笔答：材料物理化学、材料物性学（各3题中选2题）；13:00-16:00笔答：材料过程工学、材料组织学（各3题中选2题）。8月19日9:00-12:00口头试问；部分申请者可按条件申请以口述试验替代笔答。",
  "机械宇宙工学": "机械/宇宙航空工学系研究室群：8月18日9:00-12:00材料力学、机械力学与控制工学；13:30-16:30流体力学、热力学；8月19日9:00-12:00口头试问。",
  "人间机械系统设计": "机械/宇宙航空工学系研究室群：8月18日9:00-12:00材料力学、机械力学与控制工学；13:30-16:30流体力学、热力学；8月19日9:00-12:00口头试问。",
  "能源环境系统": "按志望研究室分为机械/宇宙航空工学系或应用量子科学系。机械系考材料力学、机械力学与控制、流体力学、热力学；应用量子系考应用数学，以及电磁气学/电气回路、材料科学/物理化学、原子物理/原子炉工学中选题；8月19日口头试问。",
  "量子理工学": "应用量子科学系研究室群：8月18日9:00-12:00笔答应用数学；13:30-16:30从电磁气学/电气回路、材料科学/物理化学、原子物理/原子炉工学共9题中选3题；8月19日9:00-12:00口头试问。",
  "环境フィールド工学": "8月18日9:00-12:00笔答：数学、物理、化学三科8题中选4题；13:00-16:00笔答：流体工学、结构力学、土力学、岩石力学、混凝土工学、计划数理学、地质学基础、物理化学、微生物工学、热力学、反应工学、分离工学、环境统计学等16题中选4题；8月19日9:00-12:00口述/口头试问。",
  "北方圏環境政策工学": "8月18日9:00-12:00笔答：数学、物理、化学三科8题中选4题；13:00-16:00笔答：流体工学、结构力学、土力学、岩石力学、混凝土工学、计划数理学、地质学基础、物理化学、微生物工学、热力学、反应工学、分离工学、环境统计学等16题中选4题；8月19日9:00-12:00口述/口头试问。",
  "环境創生工学": "8月18日9:00-12:00笔答：数学、物理、化学三科8题中选4题；13:00-16:00笔答：流体工学、结构力学、土力学、岩石力学、混凝土工学、计划数理学、地质学基础、物理化学、微生物工学、热力学、反应工学、分离工学、环境统计学等16题中选4题；8月19日9:00-12:00口述/口头试问。",
  "建築都市空間デザイン": "8月18日9:00-12:00笔答：建筑城市学基础（结构力学、建筑结构、建筑材料施工、建筑环境、建筑计划、建筑/城市史、城市计划、城市防灾）；13:00-16:00笔答：空间防灾学、空间计划学。8月19日9:00-12:00口头试问。",
  "空間性能システム": "8月18日9:00-12:00笔答：建筑城市学基础或环境工学基础（应用数学、传热工学、工业热力学、环境生理学、温热环境工学）二选一；13:00-16:00笔答：空间性能学、建筑系统学。8月19日9:00-12:00口头试问。",
  "環境循環システム": "8月18日至8月19日按工学院募集要项实施笔答与口头试问；该专攻与共同资源工学专攻可併愿，具体科目见工学院募集要项第20页以后。",
  "共同資源工学": "8月18日至8月19日按工学院募集要项实施笔答与口头试问；共同资源工学为北海道大学工学院与九州大学工学府共同教育课程，出愿/受验按志愿大学办理。"
};

const HOKKAIDO_CURATED_FIELDS = {};
Object.keys(HOKKAIDO_SUBJECTS).forEach(direction => {
  HOKKAIDO_CURATED_FIELDS[`北海道大学|工学院（机械、材料、环境、建筑、资源）|${direction}`] = {
    pdfs: [HOKKAIDO_ENG_PDF],
    fields: {
      apply: { text: HOKKAIDO_COMMON_ENGINEERING.apply, file: HOKKAIDO_ENG_PDF.name, href: HOKKAIDO_ENG_PDF.href },
      exam: { text: HOKKAIDO_COMMON_ENGINEERING.exam, file: HOKKAIDO_ENG_PDF.name, href: HOKKAIDO_ENG_PDF.href },
      english: { text: HOKKAIDO_COMMON_ENGINEERING.english, file: HOKKAIDO_ENG_PDF.name, href: HOKKAIDO_ENG_PDF.href },
      japanese: { text: HOKKAIDO_COMMON_ENGINEERING.japanese, file: HOKKAIDO_ENG_PDF.name, href: HOKKAIDO_ENG_PDF.href },
      examSubjects: { text: HOKKAIDO_SUBJECTS[direction], file: HOKKAIDO_ENG_PDF.name, href: HOKKAIDO_ENG_PDF.href }
    }
  };
});
["国际广报媒体", "观光创造", "传媒研究", "国际交流"].forEach(direction => {
  HOKKAIDO_CURATED_FIELDS[`北海道大学|国际广报媒体・观光学院・公共政策大学院|${direction}`] = {
    pdfs: [HOKKAIDO_IMC_PDF, ...HOKKAIDO_IMC_PAST_PDFS],
    fields: {
      apply: { text: "2026年4月入学后期：出愿资格事前审查的互联网注册及书类提交为2025年11月6日10:00至11月13日17:00；正式出愿的互联网注册、出愿书类PDF发送及检定料缴纳为2025年11月21日10:00至11月27日17:00；纸质书类提交为2025年11月25日至12月5日17:00必着。官网同时列出前期时间：2025年6月13日至6月19日PDF发送，6月16日至6月26日纸质提交，考试为2025年8月19日至20日。", file: HOKKAIDO_IMC_PDF.name, href: HOKKAIDO_IMC_PDF.href },
      exam: { text: "采用两阶段选拔。第一次为研究计划书、活动报告等书类审查，结果用邮件通知，第一次合格者预计2026年1月15日收到受验票。第二次：2026年2月10日10:00-12:00日语论述笔答；2026年2月11日口述面试；合格发表预定2026年2月24日16:00。", file: HOKKAIDO_IMC_PDF.name, href: HOKKAIDO_IMC_PDF.href },
      english: { text: "必须提交英语外部考试成绩，按学院换算表折算为50分。有效考试为2023年12月1日以后参加的TOEFL iBT（含Home Edition）、TOEFL ITP或TOEIC L&R公开考试；不接受其他英语考试，TOEFL iBT不使用MyBest scores，成绩原本未按期提交会导致出愿不受理。", file: HOKKAIDO_IMC_PDF.name, href: HOKKAIDO_IMC_PDF.href },
      japanese: { text: "研究计划书要求日语2500-3000字，活动报告也要求日语；第二次选考包含日语论述小论文和口述面试。外国人留学生可任意提交日本语能力试验（JLPT）成绩复印件，募集要项没有把JLPT列为必交材料。", file: HOKKAIDO_IMC_PDF.name, href: HOKKAIDO_IMC_PDF.href },
      examSubjects: { text: "专业考试不是分科笔试，而是日语论述小论文：围绕各课程专业领域问题，要求使用既有学习背景中的专业知识进行论述；可携带纸质日语相关辞书，电子辞书不可。口述面试以研究计划书为中心，结合活动报告进行口头发表并回答提问。一般入试配点为日语论述150分、面试100分、英语50分；外国人留学生入试为日语论述100分、面试150分、英语50分。", file: HOKKAIDO_IMC_PDF.name, href: HOKKAIDO_IMC_PDF.href }
    }
  };
});

["情報理工学コース", "複雑系情報科学コース", "知能情報学コース", "情報エレクトロニクスコース", "メディアネットワークコース"].forEach(direction => {
  HOKKAIDO_CURATED_FIELDS[`北海道大学|信息科学院（信息科学、计算机、媒体网络）|${direction}`] = {
    pdfs: [HOKKAIDO_INFO_PDF],
    fields: {
      apply: { text: "2027年4月入学：互联网事前注册及检定料缴纳为2026年5月21日10:00至5月28日17:00；出愿书类提交为2026年5月25日至5月28日必着。资格预备审查为2026年5月1日至5月8日必着。英语成绩证明另在2026年7月21日至7月23日必着提交。", file: HOKKAIDO_INFO_PDF.name, href: HOKKAIDO_INFO_PDF.href },
      exam: { text: "学科考试：2026年8月24日，专业科目1为9:30-11:30，专业科目2为13:00-15:00；口头试问：2026年8月25日9:00-12:00。", file: HOKKAIDO_INFO_PDF.name, href: HOKKAIDO_INFO_PDF.href },
      english: { text: "全员需提交TOEIC、TOEFL iBT或IELTS Academic成绩证明；外语英语不实施笔答考试，使用提交成绩评价。", file: HOKKAIDO_INFO_PDF.name, href: HOKKAIDO_INFO_PDF.href },
      japanese: { text: "募集要项未列统一JLPT/EJU提交要求；常规课程的笔答和口头试问需具备日语应试沟通能力。", file: HOKKAIDO_INFO_PDF.name, href: HOKKAIDO_INFO_PDF.href },
      examSubjects: { text: "选考方法为学科考试（笔答、口头）及出愿书类综合评价。笔答包括专业科目1、专业科目2；可按成绩证明等申请笔答免除，免除结果预定于2026年6月末通知。具体课程范围按志望课程另定。", file: HOKKAIDO_INFO_PDF.name, href: HOKKAIDO_INFO_PDF.href }
    }
  };
});

const HOKKAIDO_PDF = name => ({
  name,
  href: `工学募集要项/北海道大学/${name}`,
  size: 0,
  sourceStatus: "current"
});

const HOKKAIDO_SOURCE_PDFS = {
  science: [HOKKAIDO_PDF("hokkaido_science_master_2026_summer.pdf")],
  chemLife: [HOKKAIDO_PDF("hokkaido_cse_master_2026_second.pdf"), HOKKAIDO_PDF("hokkaido_lifescience_master_2026_winter.pdf"), HOKKAIDO_PDF("hokkaido_lifescience_exam_scope_2026.pdf")],
  agri: [HOKKAIDO_PDF("hokkaido_agriculture_master_2026.pdf")],
  envFish: [HOKKAIDO_PDF("hokkaido_environment_master_2026.pdf"), HOKKAIDO_PDF("hokkaido_fisheries_master_2026_second.pdf")],
  med: [HOKKAIDO_PDF("hokkaido_medicine_medicalscience_master_2026.pdf")],
  health: [HOKKAIDO_PDF("hokkaido_healthscience_master_2026.pdf")],
  bme: [HOKKAIDO_PDF("hokkaido_bme_master_2026.pdf")],
  lifePharm: [HOKKAIDO_PDF("hokkaido_lifescience_master_2026_winter.pdf"), HOKKAIDO_PDF("hokkaido_lifescience_exam_scope_2026.pdf")],
  infect: [HOKKAIDO_PDF("hokkaido_vet_infectious_doctoral_2026.pdf")],
  dental: [HOKKAIDO_PDF("hokkaido_dental_doctoral_2026.pdf")],
  letters: [HOKKAIDO_PDF("hokkaido_letters_master_2026.pdf")],
  education: [HOKKAIDO_PDF("hokkaido_education_master_2026_second.pdf")],
  law: [HOKKAIDO_PDF("hokkaido_law_master_2026_second_general.pdf"), HOKKAIDO_PDF("hokkaido_law_master_2026_second_international.pdf")],
  econ: [HOKKAIDO_PDF("hokkaido_economics_master_2027_general.pdf"), HOKKAIDO_PDF("hokkaido_economics_master_2027_special.pdf")],
  policy: [HOKKAIDO_PDF("hokkaido_public_policy_2026_spring_general_international.pdf"), HOKKAIDO_PDF("hokkaido_public_policy_2026_autumn.pdf")]
};

function addHokkaidoEvidence(title, directions, pdfs, fields) {
  directions.forEach(direction => {
    const first = pdfs[0];
    HOKKAIDO_CURATED_FIELDS[`北海道大学|${title}|${direction}`] = {
      pdfs,
      fields: Object.fromEntries(Object.entries(fields).map(([key, text]) => [
        key,
        { text, file: first.name, href: first.href }
      ]))
    };
  });
}

addHokkaidoEvidence(
  "理学院（数学、物理、宇宙理学、自然史科学）",
  ["数学", "物性物理学", "宇宙理学", "自然史科学", "地球惑星科学", "生物科学", "化学"],
  HOKKAIDO_SOURCE_PDFS.science,
  {
    apply: "令和8年度夏期募集：募集要项公表为2025年6月，出愿期间为2025年7月3日至7月9日。出愿资格预备审查为2025年6月13日至6月17日。该募集对应2026年4月入学，也包含2025年10月入学选拔。",
    exam: "夏期募集考试日为2025年8月7日、8日；合格发表、入学手续等按理学院募集要项确认。秋期/冬期募集是否实施由各专攻另定。",
    english: "一般选拔需提交英语能力资料，使用TOEFL或TOEIC成绩；外国人留学生特别选拔需提交日语能力或英语能力证明，无法提交时可用出身学校成绩证明等替代材料。",
    japanese: "外国人留学生特别选拔可提交日语能力证明；通常需要能完成口头试问和研究沟通。募集要项未把JLPT列为所有考生统一必交项。",
    examSubjects: "一般选拔按专攻/分野实施笔记试验、口头试问及书类综合评价；数学、物性物理、宇宙理学、自然史科学等方向的具体笔试/口试要求以募集要项所列专攻别说明为准。外国人留学生特别选拔以口头试问等综合评价为主。"
  }
);

addHokkaidoEvidence(
  "综合化学院・生命科学院（化学、生命科学、软物质）",
  ["综合化学", "分子化学", "物质化学", "生物化学", "化学系统", "生命融合科学", "生命系统科学", "生命医药科学", "软物质科学"],
  HOKKAIDO_SOURCE_PDFS.chemLife,
  {
    apply: "综合化学院与生命科学院分别按各自募集期办理。综合化学院当前已下载2026年度第二次/2027年度相关募集资料；生命科学院令和8年度冬期募集要项对应2026年4月/10月入学。具体出愿窗口以所附PDF的募集期表为准。",
    exam: "综合化学院按书类、学力试验/口述试问等综合评价；生命科学院冬期募集按生命科学专攻/软物质专攻分别实施，考试期在令和8年1月前后，夏期/秋期/冬期的考试形式不同。",
    english: "生命科学院英语以TOEFL iBT/ITP或TOEIC等外部成绩判定；综合化学院也按募集要项要求提交外语能力材料或参加相应评价。",
    japanese: "常规日语项目需要能阅读募集要项、完成笔试/口述及研究沟通；未见所有方向统一要求JLPT必交。",
    examSubjects: "综合化学包含分子化学、物质化学、生物化学等化学基础/专业范围；生命科学院：生命融合科学以口头试问为主，生命系统科学和生命医药科学在部分募集期有笔记试验或小论文加口头试问，软物质科学以口头试问等评价。具体出题范围已附生命科学院出题范围PDF。"
  }
);

addHokkaidoEvidence(
  "农学院（资源、生物、环境、畜产、农业经济）",
  ["共生基盘学", "生物资源科学", "应用生物科学", "环境资源学", "畜产科学", "农业经济学", "森林科学", "食品科学", "生物生产工学"],
  HOKKAIDO_SOURCE_PDFS.agri,
  {
    apply: "令和8年度农学院修士课程募集要项已下载。出愿前需取得志望指导教员的受入内诺；出愿资格相关审查、正式出愿期间和书类提交按PDF日程办理。",
    exam: "选拔由学科试验、面试、出身大学成绩等综合判定；受验票通常在7月下旬前后发送，考试日程按募集要项中的专攻/讲座安排确认。",
    english: "英语以TOEIC L&R或TOEFL iBT成绩判定，原则上使用2023年9月1日以后受验成绩。TOEIC L&R低于620或TOEFL iBT低于64会被判定为英语能力不足；不认可TOEIC-IP、TOEFL-ITP等指定外考试。",
    japanese: "募集要项未列所有方向统一JLPT必交要求；但常规农学院修士选拔包含日语说明、面试和专业试验，需具备日语应试与研究沟通能力。",
    examSubjects: "专业科目按志望教育研究领域设置；农学、生命科学、资源环境、畜产、森林、食品、生物生产工学、农业经济等方向在专业科目和面试中考查相应基础与专业知识。"
  }
);

addHokkaidoEvidence(
  "环境科学院・水产科学院（地球环境、海洋、水产）",
  ["环境起学", "地球圈科学", "生物圈科学", "环境物质科学"],
  HOKKAIDO_SOURCE_PDFS.envFish,
  {
    apply: "环境科学院2026年4月入学修士募集：特別推薦为2025年5月26日合格发表；秋季入试考试为2025年8月20日至21日；春季入试考试为2026年2月18日至19日。出愿期间按所附环境科学院募集要项中的募集区分确认。",
    exam: "环境科学院以专业科目、外语成绩/外部英语成绩、口述试验、面试及出愿书类综合评价。不同专攻和推荐/一般/特别入试的考试组合不同。",
    english: "环境科学院接受TOEFL、TOEIC或IELTS等成绩，具体有效考试和提交方式以PDF中“スコアシートについて”说明为准。",
    japanese: "常规选拔需能完成日语募集手续、面试/口述及研究沟通；募集要项未列所有考生统一JLPT必交。",
    examSubjects: "环境起学、地球圈科学、生物圈科学、环境物质科学按专攻考查地球环境、地球科学、生物圈、环境物质/化学等专业基础，另结合口述和研究计划评价。"
  }
);

addHokkaidoEvidence(
  "环境科学院・水产科学院（地球环境、海洋、水产）",
  ["海洋生物资源科学", "海洋应用生命科学", "生物资源利用学", "水产科学", "海洋环境科学"],
  HOKKAIDO_SOURCE_PDFS.envFish,
  {
    apply: "水产科学院令和8年度修士课程第2次募集要项已下载。出愿资格审查、愿书受理期间、检定料及书类提交以所附第2次募集PDF为准。",
    exam: "第2次募集按专业科目笔试、面接试验、出愿书类、TOEIC/TOEFL成绩等综合判定。",
    english: "水产科学院修士/博士后期入试要求在出愿期间提交TOEIC或TOEFL成绩。TOEIC L&R/TOEIC-IP低于550、TOEFL iBT低于57、TOEFL-ITP低于487会被判定为英语能力不足。",
    japanese: "常规选拔需能完成日语专业笔试和面试沟通；募集要项未列统一JLPT必交。",
    examSubjects: "海洋生物资源、海洋应用生命、生物资源利用、水产科学、海洋环境等方向以水产科学院专业科目笔试和面试评价相应海洋、水产、生命资源、环境科学基础。"
  }
);

["医学", "医科学", "社会医学", "基础医学", "临床医学"].forEach(direction => {
  const pdfs = HOKKAIDO_SOURCE_PDFS.med;
  const first = pdfs[0];
  HOKKAIDO_CURATED_FIELDS[`北海道大学|医学院・保健科学院・医理工学院・药学院|${direction}`] = {
    pdfs,
    fields: {
      apply: { text: "医学院医科学专攻修士课程令和8年度募集：出愿期间为2025年7月2日至7月7日，以及2025年11月21日至11月27日。", file: first.name, href: first.href },
      exam: { text: "医科学修士按募集要项实施书类、学力/口述/面试等综合评价；各募集期考试日程以所附医学院PDF为准。", file: first.name, href: first.href },
      english: { text: "英语成绩和外语能力材料按医学院医科学专攻募集要项指定提交；未按要求提交可能影响出愿受理或评价。", file: first.name, href: first.href },
      japanese: { text: "常规医科学修士课程需要日语读解、面试和研究沟通能力；募集要项未列所有方向统一JLPT必交。", file: first.name, href: first.href },
      examSubjects: { text: "医科学、社会医学、基础医学、临床医学相关方向以医学/生命科学基础、研究计划、面试或口述等综合评价，具体按医学院医科学专攻募集要项。", file: first.name, href: first.href }
    }
  };
});

addHokkaidoEvidence(
  "医学院・保健科学院・医理工学院・药学院",
  ["保健科学", "看护学", "放射线技术科学", "检査技术科学"],
  HOKKAIDO_SOURCE_PDFS.health,
  {
    apply: "保健科学院令和8年度修士课程募集要项已下载。外国人留学生特别选拔需先完成互联网出愿，并在出愿期间内将书类一式送达保健科学院教务担当；输入画面公开期间为2025年7月10日10:00至7月17日17:00。",
    exam: "保健科学院按一般选拔、社会人特别选拔、外国人留学生特别选拔分别实施；外国人留学生特别选拔包含面接，面接日程和使用语言按募集要项及后续通知。",
    english: "令和9年度起社会人特别选拔及外国人留学生特别选拔的英语证明提交办法有变更预告；令和8年度按所附募集要项要求提交英语/语学力相关材料。",
    japanese: "常规课程需能完成日语手续、面接和研究沟通；外国人留学生面接使用语言以学院通知为准。",
    examSubjects: "看护、放射线技术、检査技术、保健科学等方向按分野实施书类、专业评价、面接等综合选拔，具体科目和样式见PDF。"
  }
);

addHokkaidoEvidence(
  "医学院・保健科学院・医理工学院・药学院",
  ["医理工学"],
  HOKKAIDO_SOURCE_PDFS.bme,
  {
    apply: "医理工学院令和8年度修士课程：出愿资格审查申请为2025年6月3日至6月9日；正式出愿期间为2025年7月10日至7月16日。",
    exam: "医理工学院修士课程按所附募集要项实施选拔，包含书类、专业/口述等评价；具体考试日和方式见PDF。",
    english: "英语能力材料按医理工学院修士课程募集要项提交。",
    japanese: "常规课程需要日语读解、面试和研究沟通能力；未见统一JLPT必交字段。",
    examSubjects: "医理工学方向围绕医学、生命科学、工学交叉基础及研究计划进行专业评价和口述/面试。"
  }
);

addHokkaidoEvidence(
  "医学院・保健科学院・医理工学院・药学院",
  ["药科学", "药学"],
  HOKKAIDO_SOURCE_PDFS.lifePharm,
  {
    apply: "北海道大学药学研究院参与生命科学院教育组织；药科学/药学相关修士方向主要按生命科学院生命科学专攻、软物质专攻等募集期办理。当前附生命科学院令和8年度冬期募集要项及出题范围PDF。",
    exam: "生命科学院药学相关方向按募集期实施英语外部成绩判定、口头试问、小论文或笔试等组合。",
    english: "英语以TOEFL或TOEIC等外部考试成绩判定，具体有效考试和提交形式见生命科学院募集要项。",
    japanese: "常规选拔需能完成日语口头试问/小论文及研究沟通；未见统一JLPT必交。",
    examSubjects: "药科学/药学相关方向以生命科学、生命医药科学、软物质科学等范围进行口头试问、小论文或专业笔试评价。"
  }
);

addHokkaidoEvidence(
  "兽医学院・齿学院・国际感染症学院",
  ["兽医学", "共同兽医学", "国际感染症学", "人兽共通感染症学", "病原微生物学", "免疫学"],
  HOKKAIDO_SOURCE_PDFS.infect,
  {
    apply: "兽医学院/国际感染症学院公开的主要为博士课程募集要项。令和8年度4月入学募集要项已下载；若申请修士层级，请注意该学院页面未确认修士募集。",
    exam: "博士课程按募集要项实施书类、专业/口述等选拔；国际感染症学院从令和2年度起外语评价改为外部英语考试成绩。",
    english: "国际感染症学院使用TOEFL、TOEIC、IELTS等外部英语成绩，不再实施独自英语考试；具体有效成绩和提交方法见PDF。",
    japanese: "常规日语项目需具备日语研究沟通能力；英语项目/英文材料是否可用以PDF具体说明为准。",
    examSubjects: "兽医学、共同兽医学、感染症、人兽共通感染症、病原微生物、免疫学等按研究领域进行专业评价、口述和研究计划审查。"
  }
);

addHokkaidoEvidence(
  "兽医学院・齿学院・国际感染症学院",
  ["齿学", "口腔医学"],
  HOKKAIDO_SOURCE_PDFS.dental,
  {
    apply: "齿学院公开的是博士课程募集要项，没有确认到修士课程募集。令和8年度前期：出愿资格事前审查2025年7月3日必着，出愿2025年7月18日至8月1日；后期：事前审查2025年10月28日必着，出愿2025年11月21日至12月5日。",
    exam: "齿学院博士课程前期考试日为2025年9月7日，后期考试日为2026年1月25日；2次募集なし。",
    english: "英语/外语能力材料按齿学院博士课程募集要项提交。",
    japanese: "需要事前联系志望教室指导教员并完成日语/研究沟通；未确认修士课程统一JLPT要求。",
    examSubjects: "齿学、口腔医学方向按齿学院博士课程进行书类、专业/口述、面试等评价；这里已明确标注为博士课程出处，避免误作为修士募集。"
  }
);

addHokkaidoEvidence(
  "文学院・教育学院・法学研究科・经济学院",
  ["人文学", "思想文化学", "历史地域文化学", "语言文学", "人间科学"],
  HOKKAIDO_SOURCE_PDFS.letters,
  {
    apply: "文学院2026年度修士课程募集要项已下载。文学院通过互联网出愿募集，入学愿书等不再以纸质册子配布；具体出愿期间以PDF为准。",
    exam: "文学院按人文学、人间科学两大专攻及研究室实施专业笔试/口述/书类等选拔，考试日程以PDF为准。",
    english: "外语/英语科目或成绩提交要求按文学院各研究室/专攻募集要项确认。",
    japanese: "文学院常规修士要求较强日语读写、专业论文和面试能力；未见全方向统一JLPT必交。",
    examSubjects: "人文学、思想文化、历史地域文化、语言文学、人间科学等方向按志望研究室考查专业基础、研究计划、论文/口述。"
  }
);

addHokkaidoEvidence(
  "文学院・教育学院・法学研究科・经济学院",
  ["教育学", "教育社会学", "心理学"],
  HOKKAIDO_SOURCE_PDFS.education,
  {
    apply: "教育学院令和8年度修士课程第2次募集要项已下载；出愿期间、书类提交和合格发表以PDF修正版为准。",
    exam: "教育学院按一般、留学生、社会人等区分实施；专业笔试、面试/口述和书类综合评价以募集要项为准。",
    english: "外语科目或英语成绩提交按教育学院募集要项及各专业要求确认。",
    japanese: "教育学、教育社会学、心理学方向通常要求日语专业读写、论文和面试能力；未见统一JLPT必交。",
    examSubjects: "考查教育学研究基础、教育社会学、心理学等专业知识、研究计划与面试/口述。"
  }
);

addHokkaidoEvidence(
  "文学院・教育学院・法学研究科・经济学院",
  ["法学政治学"],
  HOKKAIDO_SOURCE_PDFS.law,
  {
    apply: "法学研究科法学政治学专攻令和8年度修士课程第2次募集要项已下载，包含一般/社会经验者入试及外国人留学生入试。具体出愿资格审查、出愿期间和提交方式按两份PDF确认。",
    exam: "法学政治学专攻按第2次募集要项实施专业试验、口述/面试、书类等综合评价。",
    english: "外语或英语成绩要求依一般/留学生募集区分不同，按所附法学研究科PDF确认。",
    japanese: "法学政治学专攻常规修士高度依赖日语法律/政治学读写和口述能力；外国人留学生入试的日语要求以PDF为准。",
    examSubjects: "法学、政治学、研究计划、专业论文/口述等；具体科目和题型按法学研究科募集要项。"
  }
);

addHokkaidoEvidence(
  "文学院・教育学院・法学研究科・经济学院",
  ["经济学", "经营学", "会计信息"],
  HOKKAIDO_SOURCE_PDFS.econ,
  {
    apply: "经济学院令和9年度修士课程一般募集、特别募集要项已下载。一般募集PDF为2026年4月23日修正版；出愿期间、出愿资格审查和书类要求按PDF日程确认。",
    exam: "经济学院修士按一般/特别/社会人等区分实施；专业科目、口述/面试、书类评价的组合以募集要项为准。",
    english: "经济学院另公布英语能力考试成绩利用说明；TOEFL/TOEIC等成绩提交和有效期限按PDF确认。",
    japanese: "经济学、经营学、会计信息方向通常需要日语专业读写、论文和面试能力；未见所有方向统一JLPT必交。",
    examSubjects: "经济学、经营学、会计、统计/计量、研究计划和口述等，具体考试科目按经济学院募集要项及志望课程确认。"
  }
);

addHokkaidoEvidence(
  "国际广报媒体・观光学院・公共政策大学院",
  ["公共政策", "公共经营", "政策分析", "地域政策"],
  HOKKAIDO_SOURCE_PDFS.policy,
  {
    apply: "公共政策大学院令和8年度春季一般/外国人留学生特别选考：出愿期间为2025年12月8日至12月10日。秋季一般/外国人留学生特别选考：出愿期间为2025年7月28日至7月30日。",
    exam: "春季选拔考试日为2026年1月24日；秋季一般/外国人留学生特别选考考试日为2025年9月6日。考试会场为北海道大学大学院法学研究科・法学部。",
    english: "一般选考可提交TOEFL等英语能力成绩作为学修成果材料，国际政策课程志愿者建议记载TOEFL等成绩并附成绩证明；外国人留学生特别选考的材料要求按PDF确认。",
    japanese: "公共政策大学院为专业职学位课程，外国人留学生需具备充分日语能力；常规笔试和面试以日语应试为前提。",
    examSubjects: "一般选考及外国人留学生特别选考专业科目范围包括民法、行政法、政治学、国际政治、国际法、宏观经济学、微观经济学、统计学、社会资本政策学、环境工学；外国人留学生特别选考不含带※的部分科目。"
  }
);

function majorEvidenceKey(item) {
  return `${item.university}|${item.title}|${item.majorDirection || ""}`;
}

function isAdmissionPdf(file) {
  const name = normToken(file && file.name);
  return /(募集|要項|入試|出願|application|guideline|admission|master|修士|博士前期|m[._-]?c|exam|entrance|boshu|youkou|syushi|shuushi)/i.test(name)
    && !/(press|pr|news|pamphlet|brochure|outline|calendar|assessment|policy|shigansha|志願者数|パンフレット|概要|公式|お知らせ|選抜要項|学部|一般選抜|フロンティア|国際総合入試|聴講生|科目等履修生)/i.test(name);
}

function isUsablePdfFallback(file) {
  const name = normToken(file && file.name);
  return !/(press|pr|news|pamphlet|brochure|calendar|assessment|shigansha|志願者数|公式|お知らせ|学部|一般選抜|フロンティア|国際総合入試|聴講生|科目等履修生|合格者|result|resume|label|check|doc1|doc2|size|report|certificate|manual)/i.test(name);
}

function admissionPdfCandidates(item, limit = 3) {
  const exact = matchedPdfFiles(item, 8).filter(isAdmissionPdf);
  if (exact.length) return exact.slice(0, limit);
  const terms = itemMatchTerms(item);
  const files = schoolPdfs(item.university).filter(isAdmissionPdf)
    .map(file => ({ ...file, _score: scoreByTerms(`${file.name} ${file.href}`, terms) }))
    .sort((a, b) => b._score - a._score || b.size - a.size);
  if (files.length) return files.slice(0, limit);
  const looseExact = matchedPdfFiles(item, 8).filter(isUsablePdfFallback);
  if (looseExact.length) return looseExact.slice(0, limit);
  return schoolPdfs(item.university).filter(isUsablePdfFallback).slice(0, limit);
}

function digestFieldText(item, keywords) {
  const snippets = schoolDigestItems(item.university, keywords, 4, item)
    .filter(snippet => isAdmissionPdf({ name: snippet.file }));
  if (!snippets.length) return "";
  const text = snippets
    .map(snippet => translateAdmissionText(snippet.text))
    .join(" / ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 260 ? `${text.slice(0, 260)}…` : text;
}

function autoSchoolEvidence(item) {
  const pdfs = admissionPdfCandidates(item, 3);
  if (!pdfs.length) return null;
  const first = pdfs[0];
  const fieldText = {
    apply: digestFieldText(item, ["出願期間", "願書", "application period", "application"]),
    exam: digestFieldText(item, ["試験期日", "選抜方法", "試験日", "exam date", "examination"]),
    english: digestFieldText(item, ["TOEFL", "TOEIC", "IELTS", "英語", "foreign language"]),
    japanese: digestFieldText(item, ["日本語", "JLPT", "日本留学試験", "留学生"]),
    examSubjects: digestFieldText(item, ["試験科目", "専門科目", "筆記", "口述", "面接", "subject"])
  };
  const title = translateAdmissionText(item.title);
  const direction = translateAdmissionText(item.majorDirection || item.title);
  const category = translateAdmissionText(item.category || "");
  const fallback = {
    apply: `${title} / ${direction} 已绑定本校招生类PDF。自动摘要未定位到完整出愿期间时，请以右侧PDF中的“出愿期间、愿书受理期间、申请期间”表格为准。`,
    exam: `${title} / ${direction} 已绑定本校招生类PDF。考试日期、合格发表和入学手续请以PDF中的“试验期日、选拔方法、合格发表”字段为准。`,
    english: `${title} / ${direction} 的英语要求按PDF中的外语/英语成绩说明确认；页面不会再使用无出处的TOEFL/TOEIC推测。`,
    japanese: `${title} / ${direction} 的日语要求按PDF中的外国人留学生、日语能力、口述/面试说明确认；未从PDF确认时不写JLPT硬性要求。`,
    examSubjects: `${title} / ${direction} 属于${category || "该研究科"}方向，专业科目、笔试、口述和面试内容以所附招生PDF中的“试验科目、选拔方法、专业科目”说明为准。`
  };
  const fields = {};
  Object.keys(fallback).forEach(key => {
    fields[key] = {
      text: fieldText[key] || fallback[key],
      file: first.name,
      href: first.href
    };
  });
  return { pdfs, fields, autoGenerated: true };
}

function completeMajorEvidence(primary, fallback) {
  if (!primary) return fallback || null;
  if (!fallback) return primary;
  const fields = { ...(fallback.fields || {}), ...(primary.fields || {}) };
  const pdfs = [
    ...((primary.pdfs && primary.pdfs.length ? primary.pdfs : []) || []),
    ...((fallback.pdfs && fallback.pdfs.length ? fallback.pdfs : []) || [])
  ];
  const seen = new Set();
  return {
    ...fallback,
    ...primary,
    pdfs: pdfs.filter(file => {
      const key = file && (file.href || file.name);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }),
    fields
  };
}

function majorEvidence(item) {
  const curated = HOKKAIDO_CURATED_FIELDS[majorEvidenceKey(item)];
  if (curated) return curated;
  const extracted = window.MAJOR_PDF_EVIDENCE && window.MAJOR_PDF_EVIDENCE[majorEvidenceKey(item)];
  return completeMajorEvidence(extracted, autoSchoolEvidence(item));
}

const FIELD_TO_EVIDENCE = {
  "出願期間": "apply",
  "試験期日": "exam",
  "TOEFL": "english",
  "日本語": "japanese",
  "試験科目": "examSubjects"
};

function evidenceFieldName(keywords) {
  for (const keyword of keywords) {
    if (FIELD_TO_EVIDENCE[keyword]) return FIELD_TO_EVIDENCE[keyword];
  }
  return "";
}

function evidenceHtml(item, field) {
  const evidence = majorEvidence(item);
  const hit = evidence && evidence.fields && evidence.fields[field];
  if (!hit) return "";
  if (hit.href) {
    return `<div class="evidence-card"><p>${translateAdmissionText(hit.text)}</p><a href="${encodeURI(pdfHref(hit.href))}" target="_blank" rel="noopener">出处PDF：${hit.file}</a></div>`;
  }
  const status = hit.sourceStatus === "previous"
    ? "参考上一年度"
    : hit.sourceStatus === "current"
      ? "本年度/最新年度"
      : "年度未判定";
  return `<span class="source-snippet">${translateAdmissionText(hit.text)}<br><span>${translateAdmissionText(hit.keyword)}｜${hit.file}｜${status}${hit.sourceYear ? " " + hit.sourceYear : ""}</span></span>`;
}

function schoolDigestItems(university, keywords = [], limit = 2, item = null) {
  const digest = (window.SCHOOL_PDF_DIGEST && window.SCHOOL_PDF_DIGEST[university]) || [];
  const fieldTerms = keywords.map(normToken);
  const itemTerms = item ? itemMatchTerms(item) : [];
  const strongTerms = item && !isSupplemental(item) ? strongDirectionTerms(item) : [];
  const matches = digest
    .map(snippet => {
      const pool = `${snippet.keyword} ${snippet.text} ${snippet.file}`;
      const fieldHit = !fieldTerms.length || fieldTerms.some(term => normToken(pool).includes(term));
      if (!fieldHit) return null;
      if (strongTerms.length) {
        const normalizedPool = normToken(pool);
        const isGeneralGuideline = /(guideline|application|募集要項|要項|master_app)/i.test(snippet.file || "");
        const strongHit = strongTerms.some(term => normalizedPool.includes(term));
        if (!strongHit && !isGeneralGuideline) return null;
      }
      const itemScore = itemTerms.length ? scoreByTerms(pool, itemTerms) : 1;
      return { ...snippet, _score: itemScore };
    })
    .filter(Boolean)
    .filter(snippet => !itemTerms.length || snippet._score > 0)
    .sort((a, b) => b._score - a._score);
  const selected = matches.length ? matches : (strongTerms.length ? [] : digest
    .filter(snippet => fieldTerms.some(term => normToken(`${snippet.keyword} ${snippet.text}`).includes(term)))
    .map(snippet => ({ ...snippet, _score: 0 })));
  return selected.slice(0, limit);
}

function digestHtml(university, keywords, limit = 2, item = null) {
  const items = schoolDigestItems(university, keywords, limit, item);
  return items.map(item => (
    `<span class="source-snippet">${translateAdmissionText(item.text)}<br><span>${translateAdmissionText(item.keyword)}｜${item.file}</span></span>`
  )).join("");
}

function displayField(item, fallback, keywords, emptyText) {
  const evidenceField = evidenceFieldName(keywords);
  const sourced = evidenceField ? evidenceHtml(item, evidenceField) : "";
  if (sourced) return sourced;
  const curatedKey = majorEvidenceKey(item);
  const allowDigest = item.university !== "北海道大学" || !!HOKKAIDO_CURATED_FIELDS[curatedKey];
  const html = allowDigest ? digestHtml(item.university, keywords, 2, item) : "";
  if (html) return html;
  const matched = matchedPdfFiles(item, 1).length > 0;
  return `<span class="source-snippet">${emptyText}<br><span>${matched ? "已匹配到相关 PDF，但没有从摘要中抽到该字段的原文依据；请打开下方相关PDF核对。" : `没有从“${translateAdmissionText(item.majorDirection || item.title)}”对应 PDF 中确认，已避免显示未核实的时间/考试内容。`}</span></span>`;
}

function matchedPdfFiles(item, limit = 4) {
  const files = schoolPdfs(item.university);
  if (!files.length) return [];
  const terms = itemMatchTerms(item);
  const scored = files
    .map(file => ({ ...file, _score: scoreByTerms(`${file.name} ${file.href}`, terms) }))
    .filter(file => file._score > 0)
    .sort((a, b) => b._score - a._score || b.size - a.size);
  const strongTerms = isSupplemental(item) ? [] : strongDirectionTerms(item);
  const exact = strongTerms.length
    ? scored.filter(file => {
        const pool = normToken(`${file.name} ${file.href}`);
        const isGeneralGuideline = /(guideline|application|募集要項|要項|master_app|direct_r9_master)/i.test(file.name);
        return strongTerms.some(term => pool.includes(term)) || isGeneralGuideline;
      })
    : scored;
  return exact.slice(0, limit);
}

function itemPdfLinks(item, limit = 4) {
  const files = schoolPdfs(item.university);
  const evidence = majorEvidence(item);
  if (!files.length && !(evidence && evidence.pdfs && evidence.pdfs.length)) return "";
  if (evidence && evidence.pdfs && evidence.pdfs.length) {
    return `
      <div class="detail-line"><strong>相关PDF：</strong>
        <div class="pdf-inline">
          ${evidence.pdfs.slice(0, limit).map(file => {
            const status = file.sourceStatus === "previous" ? "（参考上一年度）" : file.sourceStatus === "current" ? "（本年度/最新年度）" : "";
            return `<a href="${encodeURI(pdfHref(file.href))}" target="_blank" rel="noopener">${file.name} ${status} ${pdfSize(file.size)}</a>`;
          }).join("")}
        </div>
      </div>
    `;
  }
  const exact = matchedPdfFiles(item, limit);
  if (!exact.length) {
    const label = [translateAdmissionText(item.title), translateAdmissionText(item.majorDirection)]
      .filter(Boolean)
      .join(" / ");
    return `<div class="detail-line"><strong>相关PDF：</strong><span class="source-snippet">没有找到与“${label}”精确匹配的 PDF，已避免显示无关文件。请在上方“本校资料库”中按研究科名称打开核对。</span></div>`;
  }
  return `
    <div class="detail-line"><strong>相关PDF：</strong>
      <div class="pdf-inline">
        ${exact.map(file => `<a href="${encodeURI(pdfHref(file.href))}" target="_blank" rel="noopener">${file.name} ${pdfSize(file.size)}</a>`).join("")}
      </div>
    </div>
  `;
}

function getMeta(item) {
  const byId = PDF_META[item.id] || {};
  const byKey = PDF_META[item.key] || {};
  const text = [
    item.title,
    item.englishNote,
    item.japaneseNote,
    item.examSubjects,
    item.note
  ].join(" ");
  const interviewEnglishAvailable =
    byId.interviewEnglishAvailable ??
    byKey.interviewEnglishAvailable ??
    /英语应对|英语资料|海外居住者|国际项目|英語で|English/i.test(text);
  return {
    interviewEnglishAvailable,
    englishScoreRequired: byId.englishScoreRequired ?? byKey.englishScoreRequired ?? item.englishRequired,
    japaneseScoreRequired: byId.japaneseScoreRequired ?? byKey.japaneseScoreRequired ?? false,
    pdfInsight: byId.pdfInsight || byKey.pdfInsight || (
      isSupplemental(item)
        ? `资料状态：该条目是专业方向索引用的补充分类；只有匹配到对应 PDF 摘要时才显示出愿、考试、英语、专业课信息，否则不再展示推测内容。`
        : "PDF 复核：已按当前保存的募集要项/官网页面重新校准搜索与筛选；未发现统一外部日语成绩提交要求时，不纳入“需提交日语成绩”。"
    )
  };
}

function normalizeKeyword(keyword) {
  return keyword.toLowerCase().trim().replace(/\s+/g, " ");
}

function keywordPieces(keyword) {
  const q = normalizeKeyword(keyword);
  if (!q) return [];
  const compact = q.replace(/\s+/g, "");
  const spaced = q.split(/[\s,，、/]+/).filter(Boolean);
  const schoolNames = DATA.flatMap(item => [item.university, item.key, ...(SCHOOL_NAME_ALIASES[item.key] || [])]).map(value => value.toLowerCase());
  const known = [
    ...Object.keys(SEARCH_ALIASES),
    ...Object.values(SEARCH_ALIASES).flat(),
    ...schoolNames
  ].map(value => value.toLowerCase());
  const embedded = known.filter(value => value && compact.includes(value.replace(/\s+/g, "")));
  const matchedSchoolMarkers = schoolNames
    .map(value => value.replace(/\s+/g, ""))
    .filter(value => value && compact.includes(value))
    .sort((a, b) => b.length - a.length);
  const remainders = matchedSchoolMarkers
    .slice(0, 1)
    .map(value => compact.replace(value, ""))
    .filter(value => value.length > 1);
  const spacedTerms = remainders.length && spaced.length === 1 && spaced[0] === compact ? [] : spaced;
  const base = embedded.length ? [...spacedTerms, ...embedded, ...remainders] : [q, compact, ...spaced];
  return [...new Set(base)].filter(Boolean);
}

function keywordTerms(keyword) {
  const pieces = keywordPieces(keyword);
  if (!pieces.length) return [];
  const base = [...pieces];
  Object.entries(SEARCH_ALIASES).forEach(([key, values]) => {
    const all = [key, ...values].map(value => value.toLowerCase());
    if (pieces.some(piece => all.some(value => value.includes(piece) || piece.includes(value)))) {
      base.push(...all);
    }
  });
  return [...new Set(base)].filter(Boolean);
}

function schoolTerms() {
  return uniqueSchools().flatMap(school => keywordTerms(school.university));
}

function keywordTopicTerms(keyword) {
  const terms = keywordTerms(keyword);
  const schools = schoolTerms();
  const topics = terms.filter(term => !schools.some(school => school.includes(term) || term.includes(school)));
  return topics.length ? topics : terms;
}

function scoreText(text, terms, weight) {
  const pool = (text || "").toLowerCase();
  if (!pool) return 0;
  return terms.reduce((score, term) => score + (pool.includes(term) ? weight : 0), 0);
}

function scoreMajor(item, direction, keyword) {
  if (!keyword) return 1;
  const terms = keywordTopicTerms(keyword);
  const allTerms = keywordTerms(keyword);
  const meta = getMeta(item);
  const primaryScore =
    scoreText(direction, terms, 30) +
    scoreText(item.title, terms, 14) +
    scoreText(item.category, terms, 8);
  if (terms.length < allTerms.length && primaryScore === 0) return 0;
  let score = primaryScore;
  score += scoreText(item.examSubjects, terms, 8);
  score += scoreText(item.note, terms, 6);
  score += scoreText(item.englishNote, terms, 4);
  score += scoreText(item.japaneseNote, terms, 4);
  score += scoreText(meta.pdfInsight, terms, 4);
  if (terms.length === allTerms.length) score += scoreText(item.university, terms, 3);
  return score;
}

function scoreMajorWithinSchool(item, direction, keyword) {
  if (!keyword) return 1;
  const terms = keywordTopicTerms(keyword);
  const meta = getMeta(item);
  const primaryScore =
    scoreText(direction, terms, 30) +
    scoreText(item.title, terms, 16) +
    scoreText(item.category, terms, 10);
  if (primaryScore === 0) return 0;
  let score = primaryScore;
  score += scoreText(item.examSubjects, terms, 8);
  score += scoreText(item.note, terms, 6);
  score += scoreText(item.englishNote, terms, 4);
  score += scoreText(item.japaneseNote, terms, 4);
  score += scoreText(meta.pdfInsight, terms, 4);
  return score;
}

function scoreItem(item, keyword) {
  if (!keyword) return 1;
  const pieces = keywordPieces(keyword);
  const terms = keywordTerms(keyword);
  const meta = getMeta(item);
  const pool = [
    item.university,
    item.category,
    item.title,
    item.apply,
    item.exam,
    item.englishNote,
    item.japaneseNote,
    item.examSubjects,
    item.note,
    meta.pdfInsight,
    ...(item.directions || [])
  ].join(" ").toLowerCase();
  const compactPool = pool.replace(/\s+/g, "");
  const meaningfulPieces = pieces.filter(piece => piece.length > 1);
  const matchedPieces = meaningfulPieces.filter(piece => {
    if (pool.includes(piece) || compactPool.includes(piece.replace(/\s+/g, ""))) return true;
    const aliasGroup = Object.entries(SEARCH_ALIASES).find(([key, values]) =>
      [key, ...values].map(value => value.toLowerCase()).some(value => value.includes(piece) || piece.includes(value))
    );
    const candidates = aliasGroup ? [aliasGroup[0], ...aliasGroup[1]].map(value => value.toLowerCase()) : [piece];
    return candidates.some(candidate => pool.includes(candidate) || compactPool.includes(candidate.replace(/\s+/g, "")));
  });
  if (meaningfulPieces.length && matchedPieces.length < meaningfulPieces.length) return 0;
  if (!terms.some(term => pool.includes(term) || compactPool.includes(term.replace(/\s+/g, "")))) return 0;
  let score = 1;
  score += scoreText(item.title, terms, 8);
  score += scoreText(item.examSubjects, terms, 6);
  score += scoreText(item.university, terms, 4);
  score += scoreText(meta.pdfInsight, terms, 3);
  return score;
}

function renderTabs() {
  const tabs = document.getElementById("schoolTabs");
  tabs.innerHTML = "";

  const all = document.createElement("span");
  all.className = "tab" + (currentSchool === "all" ? " active" : "");
  all.textContent = "全部";
  all.onclick = () => {
    currentSchool = "all";
    renderAll();
  };
  tabs.appendChild(all);

  uniqueSchools().forEach(item => {
    const el = document.createElement("span");
    el.className = "tab" + (currentSchool === item.key ? " active" : "");
    el.textContent = item.university;
    el.onclick = () => {
      openSchoolModal(item.key);
    };
    tabs.appendChild(el);
  });
}

function renderQuick() {
  const row = document.getElementById("quickRow");
  row.innerHTML = "";
  QUICK.forEach(word => {
    const el = document.createElement("span");
    el.className = "quick-chip";
    el.textContent = word;
    el.onclick = () => {
      document.getElementById("searchInput").value = word;
      renderAll();
    };
    row.appendChild(el);
  });
}

function applyFilters() {
  const keyword = document.getElementById("searchInput").value.trim();

  let list = DATA
    .map(item => ({ ...item, _meta: getMeta(item), _score: scoreItem(item, keyword) }))
    .filter(item => item._score > 0);

  if (currentSchool !== "all") {
    list = list.filter(item => item.key === currentSchool);
  }
  if (needInterviewEnglish) {
    list = list.filter(item => item._meta.interviewEnglishAvailable);
  }
  if (needEnglishScore) {
    list = list.filter(item => item._meta.englishScoreRequired);
  }
  if (needJapaneseScore) {
    list = list.filter(item => item._meta.japaneseScoreRequired);
  }

  list.sort((a, b) => b._score - a._score || a.university.localeCompare(b.university, "zh-CN"));
  return list;
}

function tag(text, cls) {
  return `<span class="tag ${cls}">${text}</span>`;
}

function schoolGroups(list = DATA) {
  return list.reduce((acc, item) => {
    if (!acc[item.key]) {
      acc[item.key] = {
        key: item.key,
        university: item.university,
        items: []
      };
    }
    acc[item.key].items.push({ ...item, _meta: getMeta(item) });
    return acc;
  }, {});
}

function schoolSummary(group) {
  const categories = [...new Set(group.items.map(item => translateAdmissionText(item.category)))].join(" / ");
  const titles = group.items.map(item => translateAdmissionText(item.title.replace(/（.*?）/g, ""))).join("、");
  const majors = [...new Set(group.items.flatMap(item => item.directions || []))]
    .slice(0, 6)
    .map(translateAdmissionText)
    .join("、");
  return {
    categories,
    text: `${titles}。主要覆盖 ${majors} 等方向。`
  };
}

function schoolPdfs(university) {
  return (window.SCHOOL_PDFS && window.SCHOOL_PDFS[university]) || [];
}

function pdfSize(size) {
  if (!size) return "";
  if (size > 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
  return `${Math.round(size / 1024)} KB`;
}

function pdfHref(href) {
  if (!href) return "#";
  if (/^(https?:|file:|mailto:|#)/i.test(href)) return href;
  if (typeof window !== "undefined" && window.location && /^https?:/i.test(window.location.protocol)) {
    return `https://github.com/wbaigao/study-site/raw/main/${href}`;
  }
  return IS_SCHOOL_PAGE && !href.startsWith("../") ? `../${href}` : href;
}

function totalPdfCount() {
  return Object.values(window.SCHOOL_PDFS || {}).reduce((sum, files) => sum + files.length, 0);
}

function renderResources(university) {
  const files = schoolPdfs(university);
  const digest = (window.SCHOOL_PDF_DIGEST && window.SCHOOL_PDF_DIGEST[university]) || [];
  if (!files.length) {
    return `<div class="resource-panel">本校资料库：暂未索引到 PDF。专业列表为已结构化索引，后续可继续逐份募集要项细拆。</div>`;
  }
  return `
    <details class="resource-panel" open>
      <summary>本校已下载募集要项 / 入试资料 PDF：${files.length} 份</summary>
      <p class="muted">PDF 资料数不等于专业数量；下方专业列表是已经结构化进搜索系统的方向，具体出愿时间和考试内容请以对应 PDF 为准。</p>
      <div class="resource-list">
        ${files.map(file => `<a href="${encodeURI(pdfHref(file.href))}" target="_blank" rel="noopener">${file.name} ${pdfSize(file.size)}</a>`).join("")}
      </div>
      ${digest.length ? `
        <div class="digest-list">
          ${digest.slice(0, 6).map(item => `
            <div class="digest-item"><strong>${translateAdmissionText(item.keyword)}</strong>｜${translateAdmissionText(item.text)}<br><span>${item.file}</span></div>
          `).join("")}
        </div>
      ` : ""}
    </details>
  `;
}

function majorCards(items, keyword = "") {
  let expandedItems = items.flatMap(item =>
    item.directions
      .map(direction => ({ ...item, majorDirection: direction, _majorScore: scoreMajor(item, direction, keyword) }))
      .filter(item => !keyword || item._majorScore > 0 || item._score > 18)
  ).sort((a, b) => b._majorScore - a._majorScore || b._score - a._score);
  if (!expandedItems.length && keyword) {
    expandedItems = items.flatMap(item =>
      item.directions.slice(0, 3).map(direction => ({ ...item, majorDirection: direction, _majorScore: item._score }))
    );
  }

  return {
    count: expandedItems.length,
    html: expandedItems.map(item => {
      const scoreText = keyword ? `匹配 ${Math.max(item._majorScore, item._score)}` : translateAdmissionText(item.category);
      const evidence = majorEvidence(item);
      const hasPdfEvidence = (evidence && evidence.pdfs && evidence.pdfs.length) || matchedPdfFiles(item, 1).length > 0;
      const sourceStatus = hasPdfEvidence
        ? (evidence ? "资料来源：已从该方向相关 PDF 抽取字段；每条信息后附 PDF 文件名。" : "资料来源：已匹配到该方向相关 PDF，但字段仍需打开 PDF 核对。")
        : "资料来源：当前只确认到学校资料库或方向索引，未匹配到该方向 PDF；时间和考试内容不作推测。";
      return `
        <div class="item-block">
          <div class="school-head" style="margin-bottom:12px;">
            <div>
              <h4 class="item-title">${translateAdmissionText(item.majorDirection)}</h4>
              <p class="item-subtitle">所属条目：${translateAdmissionText(item.title)} / 类别：${translateAdmissionText(item.category)}</p>
            </div>
            <span class="meta-tag">${scoreText}</span>
          </div>

          <div class="tag-row">
            ${tag(translateAdmissionText(item.category), "tag-purple")}
            ${tag(item._meta.interviewEnglishAvailable ? "面试可英语/英语应对" : "面试语言需确认", item._meta.interviewEnglishAvailable ? "tag-green" : "tag-amber")}
            ${tag(item._meta.englishScoreRequired ? "需提交英语成绩" : "英语成绩未统一要求", item._meta.englishScoreRequired ? "tag-blue" : "tag-amber")}
            ${tag(item._meta.japaneseScoreRequired ? "需提交日语成绩" : "未见统一日语成绩提交", item._meta.japaneseScoreRequired ? "tag-red" : "tag-green")}
          </div>

          <div class="grid">
            <div class="box">
              <strong>出愿时间</strong>
              ${displayField(item, item.apply, ["出願期間", "出願", "受付期間", "願書"], "未从 PDF 摘要中抽到明确出愿期间")}
            </div>
            <div class="box">
              <strong>考试时间</strong>
              ${displayField(item, item.exam, ["試験期日", "試験日", "試験日時", "選抜期日", "合格発表"], "未从 PDF 摘要中抽到明确考试日期")}
            </div>
            <div class="box">
              <strong>英语成绩 / 面试</strong>
              ${displayField(item, item.englishNote, ["TOEIC", "TOEFL", "IELTS", "英語", "English"], "未从 PDF 摘要中抽到明确英语成绩要求")}
            </div>
            <div class="box">
              <strong>日语成绩 / 能力</strong>
              ${displayField(item, item.japaneseNote, ["日本語", "JLPT", "EJU", "日语"], "未从 PDF 摘要中抽到统一日语成绩提交要求")}
            </div>
          </div>

          <div class="detail">
            <div class="detail-line"><strong>专业课 / 选考方式：</strong>${displayField(item, item.examSubjects, ["試験科目", "選抜方法", "筆記試験", "口述", "専門科目", "学力試験"], "未从 PDF 摘要中抽到该方向专业课细则")}</div>
            <div class="detail-line"><strong>资料状态：</strong>${sourceStatus}</div>
            ${hasPdfEvidence ? `<div class="detail-line"><strong>备注：</strong>${translateAdmissionText(item.note)}</div>` : ""}
            ${itemPdfLinks(item)}
            ${item.url && item.url !== "#" ? `<div class="detail-line"><strong>官方入口：</strong><a href="${item.url}" target="_blank" rel="noopener">${item.url}</a></div>` : ""}
          </div>
        </div>
      `;
    }).join("")
  };
}

function schoolMajorCards(items, keyword = "") {
  const school = findSchoolByKeyword(keyword);
  const effectiveKeyword = school && items.some(item => item.key === school.key) ? "" : keyword;
  let expandedItems = items.flatMap(item =>
    item.directions
      .map(direction => ({
        ...item,
        majorDirection: direction,
        _majorScore: scoreMajorWithinSchool(item, direction, effectiveKeyword)
      }))
      .filter(item => !effectiveKeyword || item._majorScore > 0)
  ).sort((a, b) => b._majorScore - a._majorScore || a.title.localeCompare(b.title, "zh-CN"));

  return {
    count: expandedItems.length,
    html: expandedItems.length
      ? majorCards(
          expandedItems.map(item => ({
            ...item,
            directions: [item.majorDirection],
            _score: item._majorScore || 1
          })),
          effectiveKeyword
        ).html
      : `<div class="empty">这所学校内没有找到匹配专业。<br>可以换一个关键词，比如“法学”“机械”“经济”。</div>`
  };
}

function schoolProgramOverview(group) {
  currentSchoolGroup = group;
  const totalDirections = group.items.reduce((sum, item) => sum + item.directions.length, 0);
  return {
    count: totalDirections,
    html: `
      <div class="program-list">
        ${group.items.map((item, index) => {
          const meta = getMeta(item);
          const shown = item.directions.slice(0, 10);
          const hidden = Math.max(0, item.directions.length - shown.length);
          return `
            <details class="program-group" data-program-index="${index}">
              <summary>
                <div class="program-summary">
                  <div>
                    <h4>${translateAdmissionText(item.title)}</h4>
                    <p>${translateAdmissionText(item.category)} / ${item.directions.length} 个方向。展开后查看申请时间、考试内容和对应 PDF。</p>
                    <div class="program-directions">
                      ${shown.map(direction => `<span class="direction-pill">${translateAdmissionText(direction)}</span>`).join("")}
                      ${hidden ? `<span class="direction-pill">+${hidden}</span>` : ""}
                    </div>
                  </div>
                  <span class="meta-tag">${item.directions.length} 个方向</span>
                </div>
              </summary>
              <div class="program-detail"><div class="empty">展开中...</div></div>
            </details>
          `;
        }).join("")}
      </div>
    `
  };
}

function renderProgramDetail(detail) {
  if (!currentSchoolGroup || detail.dataset.loaded === "true") return;
  const index = Number(detail.dataset.programIndex || -1);
  const item = currentSchoolGroup.items[index];
  if (!item) return;
  const cards = majorCards([{ ...item, _meta: getMeta(item), _score: 1 }], "");
  const target = detail.querySelector(".program-detail");
  if (target) target.innerHTML = `<div class="item-list">${cards.html}</div>`;
  detail.dataset.loaded = "true";
}

function renderHome() {
  const wrap = document.getElementById("resultList");
  const groups = Object.values(schoolGroups());
  document.querySelector(".results-head h2").textContent = "院校简介";
  document.getElementById("resultCount").textContent = `${groups.length} 所`;
  wrap.innerHTML = `
    <div class="school-index">
      ${groups.map(group => {
        const summary = schoolSummary(group);
        const majorCount = group.items.reduce((sum, item) => sum + item.directions.length, 0);
        return `
          <article class="school-card" onclick="location.href=schoolPageHref('${group.key}')">
            <h3>${group.university}</h3>
            <p>${summary.text}</p>
            <div class="school-card-meta">
              ${tag(summary.categories, "tag-purple")}
              ${tag(`${majorCount} 个已结构化方向`, "tag-blue")}
              ${tag(`${schoolPdfs(group.university).length} 份PDF`, "tag-green")}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderSchoolResults(list) {
  const wrap = document.getElementById("resultList");
  const keyword = document.getElementById("searchInput").value.trim();
  document.querySelector(".results-head h2").textContent = "匹配院校";

  if (!list.length) {
    document.getElementById("resultCount").textContent = "0 所";
    wrap.innerHTML = `<div class="empty">没有找到匹配院校。<br>可以换关键词，或者切回“全部”院校查看。</div>`;
    return;
  }

  const groups = Object.values(schoolGroups(list))
    .map(group => {
      const cards = schoolMajorCards(group.items, keyword);
      return { ...group, matchCount: cards.count };
    })
    .filter(group => group.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount || a.university.localeCompare(b.university, "zh-CN"));

  if (!groups.length) {
    document.getElementById("resultCount").textContent = "0 所";
    wrap.innerHTML = `<div class="empty">没有找到匹配院校。<br>可以换关键词，或者切回“全部”院校查看。</div>`;
    return;
  }

  document.getElementById("resultCount").textContent = `${groups.length} 所`;
  wrap.innerHTML = `
    <div class="school-index">
      ${groups.map(group => {
        const summary = schoolSummary(group);
        const modalKeyword = keywordTopicTerms(keyword).join(" ").replace(/'/g, "\\'");
        return `
          <article class="school-card" onclick="location.href=schoolPageHref('${group.key}', '${modalKeyword}')">
            <h3>${group.university}</h3>
            <p>${summary.text}</p>
            <div class="school-card-meta">
              ${tag(`${group.matchCount} 个匹配方向`, "tag-blue")}
              ${tag(summary.categories, "tag-purple")}
              ${tag(`${schoolPdfs(group.university).length} 份PDF`, "tag-green")}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderSchoolPage() {
  const groups = schoolGroups();
  const group = groups[SCHOOL_PAGE_KEY] || Object.values(groups)[0];
  if (!group) return;
  currentSchool = group.key;
  const keyword = document.getElementById("searchInput").value.trim();
  const hasActiveFilter = keyword || needInterviewEnglish || needEnglishScore || needJapaneseScore;
  const list = applyFilters();
  const cards = hasActiveFilter
    ? schoolMajorCards(list.length ? list : group.items.map(item => ({ ...item, _meta: getMeta(item), _score: 1 })), keyword)
    : schoolProgramOverview(group);
  document.querySelector(".results-head h2").textContent = group.university;
  document.getElementById("resultCount").textContent = `${cards.count} 个方向`;
  document.getElementById("resultList").innerHTML = `${renderResources(group.university)}<section class="school-group"><div class="school-head"><div><h3>${group.university}</h3><p>${hasActiveFilter ? "当前显示校内搜索/筛选结果。" : "按研究科/学院整理；展开后查看专业详情。" } ${schoolSummary(group).text}</p></div><span class="school-badge">${cards.count} 个方向</span></div>${cards.html}</section>`;
}

function renderList(list) {
  const wrap = document.getElementById("resultList");
  document.querySelector(".results-head h2").textContent = "检索结果";

  if (!list.length) {
    document.getElementById("resultCount").textContent = "0 条";
    wrap.innerHTML = `<div class="empty">没有找到匹配结果。<br>可以换关键词，或者切回“全部”院校查看。</div>`;
    return;
  }

  const groups = list.reduce((acc, item) => {
    if (!acc[item.university]) acc[item.university] = [];
    acc[item.university].push(item);
    return acc;
  }, {});

  let majorCount = 0;
  const sections = Object.entries(groups).map(([university, items]) => {
    const keyword = document.getElementById("searchInput").value.trim();
    const cards = majorCards(items, keyword);
    if (!cards.count) return "";
    majorCount += cards.count;

    return `
      <section class="school-group">
        <div class="school-head">
          <div>
            <h3>${university}</h3>
            <p>当前匹配 ${cards.count} 条专业信息。点院校简介卡可以查看该校完整专业介绍。</p>
          </div>
          <span class="school-badge">${cards.count} 条</span>
        </div>
        <div class="item-list">${cards.html}</div>
      </section>
    `;
  }).filter(Boolean);
  document.getElementById("resultCount").textContent = `${majorCount} 条`;
  wrap.innerHTML = sections.join("");
}

function renderAll() {
  renderTabs();
  if (IS_SCHOOL_PAGE) {
    renderSchoolPage();
    return;
  }
  document.querySelectorAll("[data-filter='interviewEnglish']").forEach(el => el.classList.toggle("active", needInterviewEnglish));
  document.querySelectorAll("[data-filter='englishScore']").forEach(el => el.classList.toggle("active", needEnglishScore));
  document.querySelectorAll("[data-filter='japaneseScore']").forEach(el => el.classList.toggle("active", needJapaneseScore));
  const keyword = document.getElementById("searchInput").value.trim();
  const hasActiveFilter = needInterviewEnglish || needEnglishScore || needJapaneseScore || currentSchool !== "all";
  if (!keyword && !hasActiveFilter) {
    renderHome();
    return;
  }
  renderSchoolResults(applyFilters());
  const school = findSchoolByKeyword(keyword);
  const hasOnlySchoolKeyword = school && !keywordTopicTerms(keyword).some(term => !keywordTerms(school.university).includes(term));
  if (hasOnlySchoolKeyword && !needInterviewEnglish && !needEnglishScore && !needJapaneseScore) {
    openSchoolModal(school.key, "");
  }
}

function findSchoolByKeyword(keyword) {
  const q = normalizeKeyword(keyword).replace(/\s+/g, "");
  if (!q) return null;
  return uniqueSchools().find(school => {
    const aliases = keywordTerms(school.university).map(term => term.replace(/\s+/g, ""));
    return aliases.includes(q);
  }) || null;
}

function renderSchoolModalBody(keyword = "") {
  if (!currentModalSchool) return;
  const group = schoolGroups()[currentModalSchool];
  if (!group) return;
  const cards = schoolMajorCards(group.items, keyword.trim());
  document.getElementById("modalSubtitle").textContent =
    `${schoolSummary(group).text} 当前${keyword ? "匹配" : "结构化收录"} ${cards.count} 个相关专业方向；PDF资料库可能包含更多细分研究室和年度文件。`;
  document.getElementById("modalBody").innerHTML = `<div class="item-list">${cards.html}</div>`;
}

function openSchoolModal(key, initialKeyword = "") {
  const group = schoolGroups()[key];
  if (!group) return;
  const summary = schoolSummary(group);
  currentModalSchool = key;
  document.getElementById("modalTitle").textContent = group.university;
  document.getElementById("modalSubtitle").textContent = `${summary.text}`;
  document.getElementById("modalSearchInput").value = initialKeyword;
  document.getElementById("modalResources").innerHTML = renderResources(group.university);
  renderSchoolModalBody(initialKeyword);
  document.getElementById("schoolModal").classList.add("active");
  document.getElementById("schoolModal").setAttribute("aria-hidden", "false");
}

function closeSchoolModal() {
  currentModalSchool = null;
  document.getElementById("schoolModal").classList.remove("active");
  document.getElementById("schoolModal").setAttribute("aria-hidden", "true");
}

document.getElementById("searchBtn").addEventListener("click", renderAll);
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  currentSchool = SCHOOL_PAGE_KEY || "all";
  needInterviewEnglish = false;
  needEnglishScore = false;
  needJapaneseScore = false;
  renderAll();
});
document.getElementById("searchInput").addEventListener("keydown", event => {
  if (event.key === "Enter") renderAll();
});
document.querySelector("[data-filter='interviewEnglish']").addEventListener("click", () => {
  needInterviewEnglish = !needInterviewEnglish;
  renderAll();
});
document.querySelector("[data-filter='englishScore']").addEventListener("click", () => {
  needEnglishScore = !needEnglishScore;
  renderAll();
});
document.querySelector("[data-filter='japaneseScore']").addEventListener("click", () => {
  needJapaneseScore = !needJapaneseScore;
  renderAll();
});
document.getElementById("modalSearchInput").addEventListener("input", event => {
  renderSchoolModalBody(event.target.value);
});
document.getElementById("modalSearchReset").addEventListener("click", () => {
  document.getElementById("modalSearchInput").value = "";
  renderSchoolModalBody("");
});
document.getElementById("modalClose").addEventListener("click", closeSchoolModal);
document.getElementById("schoolModal").addEventListener("click", event => {
  if (event.target.id === "schoolModal") closeSchoolModal();
});
document.addEventListener("toggle", event => {
  if (event.target && event.target.classList && event.target.classList.contains("program-group") && event.target.open) {
    renderProgramDetail(event.target);
  }
}, true);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeSchoolModal();
});

document.getElementById("schoolCount").textContent = uniqueSchools().length;
document.getElementById("itemCount").textContent = DATA.length;
document.getElementById("pdfCount").textContent = totalPdfCount();
if (IS_SCHOOL_PAGE) {
  const q = new URLSearchParams(location.search).get("q") || "";
  document.getElementById("searchInput").value = q;
  const group = schoolGroups()[SCHOOL_PAGE_KEY] || Object.values(schoolGroups())[0];
  if (group) {
    document.querySelector(".hero h1").textContent = `${group.university} ?????????`;
    document.querySelector(".hero p").innerHTML = "????????????? PDF???????????????????????????/?????";
  }
}
renderQuick();
renderAll();
