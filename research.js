'use strict';
// B 层：只有进入研究池的学校才有，按 id 对应 schools.js。字段说明见 SPEC.md 第 3.4 节。
// synthesizer 四项：realProblems 跨领域真实问题 / crossResources 跨领域资源 / methods 方法训练 / expression 写作与表达
//   evidence: verified 已核实 | partial 部分 | none 未查到
// admission 五档：远距离冲刺 / 冲刺 / 匹配偏冲 / 匹配 / 匹配偏稳；health.level: stable | watch | adjusting
const research = [
 {
  "id": "richmond",
  "headline": "",
  "headlineQuestion": "",
  "value": "这里的优势，是老师更容易真正认识学生。学习、做项目和想未来这几件事，也比较容易连起来。对需要一点带领、进入状态后会认真投入的 Mira，这种环境值得看。",
  "tradeoff": "我最想确认的是社交。如果不参加 Greek life，她能不能自然找到自己的朋友，周末也有舒服的生活？已知事实：Greek 没有住宿楼，最早第二学期才能加入，姐妹会参与约 17%。",
  "miraQuestion": "如果不参加 Greek life，我能不能在这里过得自在，也有稳定的朋友圈？",
  "career": "经济、领导力、心理这些方向，都能接到分析、咨询、研究或知识服务类工作。",
  "learningPath": "",
  "focusMajors": [
   "Economics",
   "Psychology",
   "Leadership Studies"
  ],
  "majorNote": "可以先从人的选择、行为和群体中的领导关系看起。经济学和心理学都有文理学院路径；Leadership Studies 属于 Jepson，不能把跨学院组合等同于无条件转入。",
  "flexibility": "社科之间组合空间不错，还有 PPEL（哲学、政治、经济与法律）这种跨学科专业。Jepson 领导力学院和 Robins 商学院都有各自的要求，要提前看。",
  "synthesizer": {
   "realProblems": {
    "text": "Richmond Guarantee 资助一次暑期实习或研究（最高 5,300 美元），但 F-1 国际生只有部分情形可用，其他校外实习需先申请 CPT。",
    "evidence": "partial",
    "source": "https://ursf.richmond.edu/apply/international-students.html"
   },
   "crossResources": {
    "text": "PPEL（哲学、政治、经济与法律）跨学科专业；文理、Jepson 领导力、Robins 商学院在同一小校园。",
    "evidence": "verified",
    "source": "https://ppel.richmond.edu/"
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "冲刺",
   "target": "冲刺",
   "sat1380": "不交",
   "basis": "录取约 20.9%，SAT 中段 1450–1520；竞争性 TOEFL 为 5.5。官网写明：不申请资助的国际生，录取率与美国学生相同。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "捐赠基金约 34.9 亿美元，2026 年申请人数创纪录。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 91,
   "grad4": 78,
   "grad6": 85,
   "studentFaculty": "7:1",
   "fraternity": 12,
   "sorority": 17,
   "note": "Greek 没有住宿楼，最早第二学期才能加入。"
  },
  "tags": [
   "跨领域资源"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://ifx.richmond.edu/pdfs/CDS2025-2026SectionB.pdf",
   "CDS B1: 3052 undergraduates; clearer dated definition than undated About figure 3055. Nature/setting: https://president.richmond.edu/university/",
   "Focus majors checked 2026-09-23 (official): https://www.richmond.edu/academics/majors/"
  ]
 },
 {
  "id": "macalester",
  "headline": "",
  "headlineQuestion": "",
  "value": "它很适合从“我对什么人、什么社会问题好奇”开始，慢慢走到研究、行动和项目里。",
  "tradeoff": "机会不少，但很多项目要自己申请。不能一直等老师把事情送到面前。",
  "miraQuestion": "我是不是真的愿意长期关注社区、跨文化和社会问题，而不只是觉得这些话题有意思？",
  "career": "经济学和社区项目都能积累研究、分析和协作经验，对以后走研究、咨询、公共事务都有帮助。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Economics",
   "Sociology"
  ],
  "majorNote": "可以从一个人的行为，看到更大的经济和社会环境。心理系明确列出与经济、社会学等方向双主修或辅修的学生，值得继续看课程怎么搭配。",
  "flexibility": "心理、经济、社会学、国际研究之间常见双主修或主辅修组合；International Studies 要求一个 5 门课的学科方向，可以顺势发展成第二专业。学校没有传统商学院。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "远距离冲刺",
   "target": "远距离冲刺",
   "sat1380": "倾向不交",
   "basis": "官网：近年国际生整体录取率 6%–11%；需要资助最多的学生竞争最激烈。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "捐赠基金约 8.99 亿美元，未见裁员或招生危机信号。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/Quick-Facts-Spring-2026.pdf",
   "2002, spring census. Nature: https://www.macalester.edu/provost/wp-content/uploads/sites/268/2025/10/Phil-Ad-2526-rev.pdf ; setting: https://www.macalester.edu/mscs/wp-content/uploads/sites/591/2015/10/Twin_Cities-Mac_Facts_10-6-2015.pdf",
   "Focus majors checked 2026-09-23 (official): https://www.macalester.edu/psychology/about/"
  ]
 },
 {
  "id": "denison",
  "headline": "",
  "headlineQuestion": "",
  "value": "从大一开始就有人帮你想四年怎么走，住宿生活也比较完整。它的好处是，不太容易一开始就把学生丢进很大的系统里。",
  "tradeoff": "住在一起，不代表一定会交到真正合拍的朋友。真实项目和实践机会到底多不多，还要继续看。",
  "miraQuestion": "我喜欢四年都住在校园里，和一群熟悉的人一起学习、生活吗？",
  "career": "学校有国际生职业支持，商业、数据和社科交叉方向也有比较实际的职业出口。",
  "learningPath": "",
  "focusMajors": [
   "Journalism",
   "Global Commerce",
   "Data Analytics"
  ],
  "majorNote": "Journalism 是 2021 年新开的专业，和她做学生记者、采访的经历最直接相关。一个看商业如何跨越文化，另一个用数据追问实际问题。Data Analytics 可以把心理等领域作为研究方向，但数学、计算机课程和实习都要认真安排。",
  "flexibility": "新闻、传播、数据分析、全球商业都是本科专业，可以组合，但 Data Analytics 和 Global Commerce 有自己的先修课，要提前安排。",
  "synthesizer": {
   "realProblems": {
    "text": "Denison Edge 设在哥伦布市中心，对接企业项目和实习，并有个人规划项目 Journey。",
    "evidence": "partial",
    "source": "https://denison.edu/career/knowlton-center/feature/136329"
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "冲刺",
   "target": "冲刺",
   "sat1380": "可以交",
   "basis": "整体录取约 17%；test-optional 且承诺不因分数扣分。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "捐赠基金超过 10 亿美元，正在新增 Journalism、Finance、Data 等项目。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 89,
   "grad4": 72,
   "grad6": 79,
   "studentFaculty": "9:1",
   "fraternity": 20,
   "sorority": 33,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://denison.edu/sites/default/files/forms/2026-08/cds_du_20252026_published_updated2026.08.14.pdf",
   "2458 undergraduates; setting: https://denison.edu/fast-facts (Granville village).",
   "Focus majors checked 2026-09-23 (official): https://denison.edu/academics/global-commerce/about ; https://denison.edu/academics/data-analytics/about",
   "Journalism major checked 2026-09-23: https://denison.edu/academics/journalism"
  ]
 },
 {
  "id": "dickinson",
  "headline": "",
  "headlineQuestion": "",
  "value": "它很适合把“我对不同文化和人的兴趣”，慢慢变成对组织、商业和社会的理解。",
  "tradeoff": "语言、海外学习、双专业都很占课程空间，想要的东西太多，最后可能会互相挤时间。",
  "miraQuestion": "我不仅喜欢跨文化交流，也愿意学统计、经济和分析这些更硬的方法吗？",
  "career": "经济和国际商业都有比较清楚的职业去向，但不能把个别专业的就业情况套到所有社科学生身上。",
  "learningPath": "",
  "focusMajors": [
   "International Business & Management",
   "Economics"
  ],
  "majorNote": "可以先比较：自己更喜欢理解跨文化组织，还是用经济学分析问题。国际商业与管理要学经济、统计等课程，也有实习要求，不能只把它当成跨文化交流。",
  "flexibility": "国际商业与管理、Law & Policy、经济、数据分析之间都能组合；Data Analytics 本身就要求在另一个领域修三门课。语言、海外学习和双专业很占学分，要提前算清楚。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "另有 Law & Policy、International Business & Management 等跨学科专业。",
    "evidence": "partial",
    "source": ""
   },
   "methods": {
    "text": "Data Analytics 专业（2021 年起）要求在另一个领域修三门课，把数据方法用到具体问题上。",
    "evidence": "verified",
    "source": "https://www.dickinson.edu/news/article/4595/dickinson_announces_new_major_in_data_analytics"
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "录取约 42%，SAT 中段 1310–1460。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "捐赠基金约 7.2 亿美元新高，预算中已建立储备。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 92,
   "grad4": 68,
   "grad6": 80,
   "studentFaculty": "11:1",
   "fraternity": 8,
   "sorority": 24,
   "note": ""
  },
  "tags": [
   "方法训练"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.dickinson.edu/download/downloads/id/17473/fall_2026_enrollment_report.pdf",
   "2030 official IPEDS enrollment (1965 matriculants + 65 non-matriculants), not 2078 total headcount including auditors etc. Setting: https://www.dickinson.edu/homepage/297/parents_of_prospective_students",
   "Focus majors checked 2026-09-23 (official): https://www.dickinson.edu/info/20028/academic_programs ; https://www.dickinson.edu/homepage/457/international_business_and_management_curriculum"
  ]
 },
 {
  "id": "wooster",
  "headline": "",
  "headlineQuestion": "",
  "value": "这里很强调“把一个问题真正做深”。老师会带着你学方法，最后要自己完成一项完整研究。",
  "tradeoff": "毕业研究不是点缀，而是一件很重的事。另外，校外实习的现实限制也要继续关注。",
  "miraQuestion": "我愿不愿意为了一个问题，反复读、反复写、反复改？",
  "career": "毕业研究本身就是一份很有分量的作品，再加上导师推荐和职业支持，比较适合走研究、分析和知识型工作。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Sociology",
   "Economics"
  ],
  "majorNote": "先看自己更想研究个人、群体，还是经济生活。学校允许组合主辅修；也值得想一想，什么问题能让自己愿意做一整年的独立研究。",
  "flexibility": "方向可以换，也有学生自己设计专业的先例。越晚改，前面的方法课越难接上后面的毕业研究。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "录取约 60%，SAT 中段 1250–1420（ChatGPT 整理，待核）。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "结构性赤字、长期招生下降；2026 年裁员 22 人，重组学生事务等直接服务学生的部门。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://wooster.edu/about/fast-facts",
   "Official page says over 1600 undergraduates without census year; year left unverified. Nature/setting: https://wooster.edu/about/",
   "Focus majors checked 2026-09-23 (official): https://wooster.edu/academics/areas-of-study ; https://wooster.edu/academics"
  ]
 },
 {
  "id": "st-olaf",
  "headline": "",
  "headlineQuestion": "",
  "value": "校园关系比较紧，大一开始就有职业教练，也有机会跟老师做研究。整体像一个会有人陪你慢慢进入状态的环境。",
  "tradeoff": "生活会比较集中在校园里。另外，部分社科方向做校外实习目前也有现实限制。",
  "miraQuestion": "我喜欢把大部分日常和周末都留在校园里吗？",
  "career": "有职业教练，也有本科研究项目，能比较早开始积累研究和职业经验。",
  "learningPath": "",
  "focusMajors": [
   "Economics",
   "Psychology",
   "Sociology/Anthropology"
  ],
  "majorNote": "这几扇门都围绕人，但问问题的方法不同。可以先试基础课；如果更喜欢数量分析，再留意 Quantitative Economics，它比 Economics 多一些数学和定量研究要求。",
  "flexibility": "有正式的个人专业（Individual Major）通道，可以自己设计跨学科专业，但需要自己推动。Business Management 是 concentration，不是完整的商科学位。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "录取约 43%，入学班 SAT 中位数 1380。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "watch",
   "note": "学校预算简报称若不调整，FY2027 会出现约 300–500 万美元缺口。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://wp.stolaf.edu/iea/student-faculty-ratios-most-recent-5-years/",
   "3114 total students at this undergraduate college. Setting: https://wp.stolaf.edu/admissions/visit/northfield/",
   "Focus majors checked 2026-09-23 (official): https://catalog.stolaf.edu/academic-programs/economics/ ; https://catalog.stolaf.edu/academic-programs/psychology/ ; https://catalog.stolaf.edu/academic-programs/sociology-anthropology/"
  ]
 },
 {
  "id": "oberlin",
  "headline": "",
  "headlineQuestion": "",
  "value": "Winter Term 很有意思：一开始可以跟着老师做，之后也可以自己设计项目。它给学生很大的空间去试。",
  "tradeoff": "如果以后明显想走传统商科，它的路径没有商学院那么直接。",
  "miraQuestion": "我是真的喜欢自己设计项目，还是其实更喜欢任务边界清楚、有人告诉我下一步做什么？",
  "career": "研究、创作和跨学科项目都能变成自己的作品和经历，对研究、内容、创意、咨询类方向都有价值。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Sociology",
   "Economics"
  ],
  "majorNote": "可以把对人的好奇放进心理、社会和经济三个视角里试一试。这些都是文理学院的方向；先比较课程和研究问题，不急着决定双主修。",
  "flexibility": "10 个 Integrative Concentration 可以和主修并行，把课程和实践连起来；也有正式的 Individual Major。文理学院和音乐学院之间不能默认想转就转。",
  "synthesizer": {
   "realProblems": {
    "text": "Integrative Concentration 要求课程 + 实习、研究或社区项目 + 作品集。",
    "evidence": "verified",
    "source": "https://www.oberlin.edu/center-engaged-liberal-arts/integrative-concentrations"
   },
   "crossResources": {
    "text": "10 个方向，包括 Journalism、International Affairs、Data Science、Business，可以和主修并行。",
    "evidence": "verified",
    "source": "https://www.oberlin.edu/center-engaged-liberal-arts/integrative-concentrations"
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "远距离冲刺",
   "target": "远距离冲刺",
   "sat1380": "倾向不交",
   "basis": "国际生录取率通常低于 8%（出处待核）；国际录取生 TOEFL 历史中段约相当于 5.5。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "捐赠基金约 14.8 亿美元，未见近期裁员或本科项目收缩。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [
   "跨领域真实问题",
   "跨领域资源"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.oberlin.edu/financial-aid/basics/disclosures-and-consumer-information/enrollment-and-student-outcomes-data",
   "3067 undergraduate students; includes conservatory, excludes graduates. Nature/setting: https://www.oberlin.edu/",
   "Focus majors checked 2026-09-23 (official): https://www.oberlin.edu/arts-and-sciences/areas-of-study"
  ]
 },
 {
  "id": "rochester",
  "headline": "",
  "headlineQuestion": "",
  "value": "它最大的特点是自由。可以先多试一些课，再慢慢找到真正想做的方向。",
  "tradeoff": "自由也意味着很多事要自己找。研究机会不会自动落到你头上，实习也有现实限制。另外，开放课表对需要结构、需要有人帮忙起步的学生是一种考验，要确认新生导师制度实际怎么运作。",
  "miraQuestion": "面对一张很开放的课表，我会觉得兴奋，还是反而不知道从哪里开始？",
  "career": "本科有自己的职业中心和专业路径，研究、分析、商业方向都能接，不需要借用研究生商学院的资源来证明自己。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Economics",
   "Data Science"
  ],
  "majorNote": "可以先问自己：更喜欢解释人的行为，还是用数据检验一个想法？这三项都有本科专业；如果考虑组合，先看数学、统计和课程安排是否适合自己。",
  "flexibility": "课表非常开放，除写作外没有统一必修，但要在另外两大领域各修一组课，社科之间很好组合。还有 Take Five 项目可以免学费多读一年。本科 Business 的数学和先修课不能绕过去。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "除主修外，必须在另外两大领域各完成一个 cluster（约 3 门课），制度上就是\"一门深入 + 多领域连接\"。",
    "evidence": "verified",
    "source": "https://www.rochester.edu/college/ccas/undergraduate/curriculum/clusters.html"
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏冲",
   "target": "匹配",
   "sat1380": "倾向不交",
   "basis": "录取约 44%，SAT 中段 1400–1510；推荐 TOEFL 5.0。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "watch",
   "note": "因联邦经费和招生不确定性控制预算、限制教师招聘；未见本科支持被削弱的证据。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 91,
   "grad4": 71,
   "grad6": 85,
   "studentFaculty": "9:1",
   "fraternity": 8,
   "sorority": 10,
   "note": ""
  },
  "tags": [
   "跨领域资源"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.rochester.edu/provost/university-data/data-insights-reporting/university-of-rochester-fact-book/",
   "6096 undergraduates. Setting: https://www.rochester.edu/about/ (academic campuses next to downtown; Eastman downtown).",
   "Focus majors checked 2026-09-23 (official): https://www.rochester.edu/bulletin/college/programs.html"
  ]
 },
 {
  "id": "brandeis",
  "headline": "",
  "headlineQuestion": "",
  "value": "它对“还没完全想清楚自己要研究什么”的学生比较友好，有专门的人帮你找题目、导师和资金。",
  "tradeoff": "学校小，不代表朋友圈会自动形成。另外，学校正处在四大学院重构和新领导周期中，未来两三年组织变化较大，需要继续观察。",
  "miraQuestion": "我愿不愿意带着一个还很模糊的兴趣，去找老师聊、不断改、慢慢把它做清楚？",
  "career": "职业中心和研究经历都比较实用，在中国也有可以核实的校友网络。",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "社科、公共政策、健康与社会等跨学科方向可以组合，本科也有 Business 专业。先修课和重复计分的规则要提前看。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏冲",
   "target": "匹配偏稳",
   "sat1380": "倾向不交",
   "basis": "2025 年录取率约 45%，SAT 中段约 1380–1480（ChatGPT 整理，待核）。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "运营已恢复平衡，但正处于四大学院重构和新领导周期（2024 年曾出现赤字、裁员和校长辞职）。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.brandeis.edu/about/facts/index.html",
   "Official About, admissions and CDS pages returned 403 in browser and direct requests; do not use search excerpts as verified facts. Four factual fields deliberately unverified.",
   "Focus majors checked 2026-09-23 (official): https://www.brandeis.edu/economics/undergraduate/ — 403 Forbidden; focusMajors and majorNote left unverified.",
   "Basic facts checked 2026-09-23: https://www.brandeis.edu/about/facts/index.html (3,342 undergraduates fall 2025; Waltham, ~9 miles west of Boston; campus setting classified as Suburban by us)"
  ]
 },
 {
  "id": "william-mary",
  "headline": "",
  "headlineQuestion": "",
  "value": "它的学习方式比较扎实：从大一开始训练阅读、提问、讨论，到高年级自己完成更完整的研究。",
  "tradeoff": "想进 Mason 商学院要再次申请，不是进了学校就等于进了商科。",
  "miraQuestion": "我喜欢大量阅读、讨论和写作吗？还是会觉得这种学习方式太慢、太重？",
  "career": "本科职业中心和研究训练都比较完整，能接研究、分析、咨询和商业方向。",
  "learningPath": "",
  "focusMajors": [
   "Public Policy",
   "Economics",
   "Psychology"
  ],
  "majorNote": "公共政策把经济、政府和社会问题放在一起，适合从一个真实问题开始看课程。它包含定量与经济分析；如果更喜欢人的行为，也可以先了解心理学。",
  "flexibility": "文理学院里探索比较自由，COLL 课程体系从大一到毕业都在训练跨学科思考；还有正式的自主设计跨学科专业。想读 Mason 商学院要单独申请。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "COLL 200 专门比较不同学科怎样认识同一个问题，COLL 300 放入全球视角。",
    "evidence": "verified",
    "source": "https://www.wm.edu/as/undergraduate/coll/"
   },
   "methods": {
    "text": "COLL 400 要求毕业前完成整合性的原创研究。",
    "evidence": "verified",
    "source": "https://www.wm.edu/as/undergraduate/coll/"
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "冲刺",
   "target": "冲刺",
   "sat1380": "不交",
   "basis": "录取约 35%，SAT 中段 1420–1520；TOEFL 5 已达通常要求。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "FY27 预算中学生服务支出增长，州财政支持增加。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 95,
   "grad4": 84,
   "grad6": 89,
   "studentFaculty": "12:1",
   "fraternity": 24,
   "sorority": 26,
   "note": "国际本科生约 224 人（约 3%），国际生社群很小。"
  },
  "tags": [
   "跨领域资源",
   "方法训练"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.wm.edu/offices/provost/data-trends/student-enrollment/undergraduate/",
   "6867 full time + 84 part time = 6951 undergraduate students. Nature: https://www.wm.edu/about/leadership-values/vision-mission-values/ ; setting: https://law.wm.edu/about/ourtown/",
   "Focus majors checked 2026-09-23 (official): https://www.wm.edu/as/publicpolicy/undergrad/ ; https://catalog.wm.edu/undergraduate/requirements-degrees/"
  ]
 },
 {
  "id": "wake-forest",
  "headline": "",
  "headlineQuestion": "",
  "value": "它既有导师和研究支持，又保留了从经济学走向商业职业的现实通道。",
  "tradeoff": "商学院需要另申。另一个还没看清的问题，是不参加 Greek life 的学生平时怎么交朋友、怎么过周末。",
  "miraQuestion": "如果我不参加 Greek life，我还能不能找到一群稳定、舒服的朋友？",
  "career": "经济学本身就有不错的职业入口，也能参与一部分原本面向商科学生的招聘机会。",
  "learningPath": "",
  "focusMajors": [
   "Economics",
   "Psychology",
   "Communication"
  ],
  "majorNote": "可以从人的选择、行为和表达三个角度试课。学院允许双主修，但要得到两个系同意，并分别完成要求；课程不能默认重复计入。",
  "flexibility": "经济、心理、传播可以组合，还有新闻辅修和面向全校的跨学科辅修。双主修要两个系都同意。商学院要另外申请，达到最低条件也不保证录取。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "面向全体本科生的跨学科辅修（社会创业、全球贸易、国际研究）；可自主设计跨学科专业。",
    "evidence": "verified",
    "source": "https://business.wfu.edu/undergraduate-programs/interdisciplinary-minors/"
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "有新闻辅修。",
    "evidence": "verified",
    "source": "https://bulletin.wfu.edu/undergraduate/departments-programs/journalism/minor-journalism/"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "远距离冲刺",
   "target": "冲刺",
   "sat1380": "不交",
   "basis": "录取约 18%，提交成绩者 SAT 平均约 1470。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "公开信号正常；校长换届属于计划性交接。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 93,
   "grad4": 84,
   "grad6": 89,
   "studentFaculty": "10:1",
   "fraternity": 28,
   "sorority": 65,
   "note": ""
  },
  "tags": [
   "跨领域资源",
   "写作与表达"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://about.wfu.edu/",
   "5595 undergraduate students. Setting left unverified: https://sustainability.wfu.edu/operations/landscaping-tree-care/ describes urban and suburban campus forest, insufficient for a single classification.",
   "Focus majors checked 2026-09-23 (official): https://bulletin.wfu.edu/undergraduate/requirements-degrees/majors-minors/"
  ]
 },
 {
  "id": "clark",
  "headline": "",
  "headlineQuestion": "",
  "value": "对还没完全定方向的学生比较友好，大一有比较明确的指导，也容易从社会问题和社区实践开始。",
  "tradeoff": "我们现在还没有足够证据证明，中国籍社科学生在这里的职业机会有多强。",
  "miraQuestion": "我是真的对社区和社会问题有兴趣，还是只是喜欢“有人带着我”这种感觉？",
  "career": "有实习课程和经济学职业支持，但国际生到底能用到哪些机会，还要继续核。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Sociology",
   "International Development and Social Change"
  ],
  "majorNote": "可以先看心理、社会关系，以及发展和社会变化这些问题，哪一种最让自己想追问。三项都有本科专业；是否组合，等看过课程再决定。",
  "flexibility": "International Development and Social Change 本身就是跨学科专业，和社会学、心理都容易搭配。数据、管理方向好不好转，还要继续核实。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "ChatGPT 判断，待核。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "校方承认现有运营模式不可持续，计划缩减人员和部分专业。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.clarku.edu/about/facts/",
   "2112 undergraduates in College of Arts and Sciences; no enrollment census year supplied (endowment date is not enrollment year). Setting: https://www.clarku.edu/about/mission/",
   "Focus majors checked 2026-09-23 (official): https://www.clarku.edu/programs/majors-and-minors/"
  ]
 },
 {
  "id": "lehigh",
  "headline": "",
  "headlineQuestion": "",
  "value": "这里比较强调团队做真实项目，不只是课堂讨论，而是要一起把事情做出来。",
  "tradeoff": "特色项目往往要申请；另外，不参加 Greek life 的社交体验也有一些学生给出过不同反馈。",
  "miraQuestion": "我喜欢和别人一起做真实项目吗？也能接受分歧、分工和不完全按自己想法来吗？",
  "career": "项目经历能积累团队协作、分析和解决问题的能力，对咨询、商业和项目型工作都比较实用。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Economics",
   "Sociology & Anthropology"
  ],
  "majorNote": "先看看自己更想理解个人、市场，还是群体和文化。这些方向都在文理学院的本科清单里，不必一开始就把探索收窄到商学院。",
  "flexibility": "文理学院内部可以组合社科和传播类方向；Mountaintop 等项目让不同专业的学生一起做真实问题。转 Business 有明确的成绩、学分和先修要求，还受课程容量影响。",
  "synthesizer": {
   "realProblems": {
    "text": "Mountaintop 暑期项目：10 周，跨学科小组与教师、校外伙伴一起做真实问题；选拔更看合作能力而非技术背景。",
    "evidence": "verified",
    "source": "https://creativeinquiry.lehigh.edu/impactfellowships/mountaintop-summer-experience"
   },
   "crossResources": {
    "text": "工程、商业、文理等多个学院在同一所大学；跨学院是否好走，待查。",
    "evidence": "partial",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "冲刺",
   "target": "匹配偏冲",
   "sat1380": "不交",
   "basis": "录取约 29%；TOEFL 5.5 以上才被学校视为 strong readiness。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "上一财年实现预算平衡，以福利调整提前控制成本。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 94,
   "grad4": 80,
   "grad6": 88,
   "studentFaculty": "10:1",
   "fraternity": 18,
   "sorority": 25,
   "note": "学生报纸 2024 年社论：约 21% 在 Greek、约 30% 是招募运动员，其余学生常感到社交上的隔阂；2026 年 2 月 Greek 社交活动因种族歧视事件被无限期暂停。"
  },
  "tags": [
   "跨领域真实问题"
  ],
  "factSources": [
   "Basic facts checked 2026-09-23: https://data.lehigh.edu/sites/data.lehigh.edu/files/LUprofile_2025.pdf",
   "5986 undergraduate students. Setting not unambiguously classified by https://www2.lehigh.edu/about ; left unverified.",
   "Focus majors checked 2026-09-23 (official): https://college.cas.lehigh.edu/undergraduate/majors-minors"
  ]
 },
 {
  "id": "syracuse",
  "headline": "",
  "headlineQuestion": "",
  "value": "它很适合把“我对人和社会的观察”变成真正的采访、传播和作品，尤其适合愿意做内容的人。",
  "tradeoff": "学院之间边界比较明显。越晚想转进 Whitman，时间成本越高。",
  "miraQuestion": "我是真的喜欢做媒体、采访和公众表达，还是只是喜欢“采访”这件事本身？",
  "career": "社区学习和媒体实践都能留下真实作品，但 Newhouse、Whitman 的资源不能默认其他学院学生都能直接使用。",
  "learningPath": "",
  "focusMajors": [
   "Magazine, News and Digital Journalism",
   "Broadcast and Digital Journalism",
   "Policy Studies"
  ],
  "majorNote": "前两个属于 Newhouse 新闻传播学院，更接近采访、报道和公共表达；Policy Studies 属于 Maxwell 学院，从真实社会问题出发。学校有 Newhouse 和文理学院/Maxwell 的双学院路径，但入学时就要想清楚申请哪个学院。",
  "flexibility": "Newhouse 和文理学院/Maxwell 之间有双学院项目，可以组合两院专业、拿一个联合学位，但各学院边界明显，越晚想转，成本越高。Whitman 商学院同样要另外申请。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "Newhouse 与文理学院/Maxwell 有双学院项目，可组合两院专业，获得一个联合学位；何时加入、门槛待查。",
    "evidence": "partial",
    "source": "https://newhouse.syracuse.edu/academics/dual-degree-with-the-college-of-arts-and-sciences-as-maxwell-school-of-citizenship-and-public-affairs/"
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "冲刺",
   "target": "匹配偏冲",
   "sat1380": "倾向交",
   "basis": "暂无 Newhouse 单独录取数据，先保守判断；Newhouse 偏好 TOEFL 5.0。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "watch",
   "note": "2026 年本科招生未达目标，预计运营赤字约 1.5%；梳理并关闭了一批（多为零学生的）项目。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 90,
   "grad4": 73,
   "grad6": 84,
   "studentFaculty": "15:1",
   "fraternity": 25,
   "sorority": 41,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.syracuse.edu/about/facts-figures/",
   "Official page: 15K+ undergraduates, no census year. Latest CDS could not be reliably parsed. Campus classification not clearly supported by accessible official facts page.",
   "Focus majors checked 2026-09-23 (official): https://www.syracuse.edu/academics/programs/communication-rhetorical-studies/ ; https://www.syracuse.edu/academics/programs/television-radio-film/",
   "Majors updated 2026-09-23. Citizenship & Civic Engagement BA not admitting students from Fall 2025: https://coursecatalog.syracuse.edu/undergraduate/arts-sciences/citizenship-civic-engagement-ba/"
  ]
 },
 {
  "id": "denver",
  "headline": "",
  "headlineQuestion": "",
  "value": "它试着把学习、个人成长和职业探索放在一起，不把大学四年只理解成“上课拿学分”。",
  "tradeoff": "这套支持到底能不能真正覆盖到每个学生，还要看。职业数据也不能拿研究生或商学院的数据来替本科生证明。",
  "miraQuestion": "我喜欢 Denver 这座城市和这里的日常吗？如果有导师资源，我会不会真的主动去用？",
  "career": "Korbel 本科有自己的职业支持，但要和研究生资源分开看。",
  "learningPath": "",
  "focusMajors": [
   "International Studies",
   "Economics",
   "Public Policy"
  ],
  "majorNote": "可以从国际问题入手，再看看经济或政策是不是自己想继续追的线。International Studies 要求搭配第二主修或辅修，官方列出的主修选择包括经济和公共政策。",
  "flexibility": "International Studies 要求搭配第二主修或辅修，本身就是一种跨学科组合。Daniels 商学院的转入条件待核。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "录取生 SAT 中段 1230–1410（ChatGPT 整理，待核）。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "约 600 万美元预算缺口，启动 Academic Transformation，合并学院、下调新生目标。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.du.edu/sites/default/files/2026-02/quick_facts.pdf",
   "5766 undergraduate students. Nature/setting: https://www.du.edu/sites/default/files/2024-12/university_of_denver_eis.pdf (Denver main urban campus, not Kennedy Mountain Campus).",
   "Focus majors checked 2026-09-23 (official): https://korbel.du.edu/blog/international-studies-or-international-business/"
  ]
 },
 {
  "id": "pitt",
  "headline": "",
  "headlineQuestion": "",
  "value": "它是大城市里的研究型大学，但又给国际新生提供了一些比较早的工作和训练入口。",
  "tradeoff": "学校大，学习、研究和社交都不会自动发生，需要自己去建立关系。",
  "miraQuestion": "我愿不愿意先从一个小圈子、小项目开始，再慢慢把这所大大学打开？",
  "career": "校内工作和培训能帮助学生较早积累经验，但有资格要求，不是每个人都能直接参加。",
  "learningPath": "",
  "focusMajors": [
   "Psychology",
   "Economics",
   "Computational Social Science"
  ],
  "majorNote": "可以先比较研究人的行为、经济问题和用计算方法研究社会这三种路。它们都有 Dietrich 本科专业；对计算社会科学有兴趣时，也要看看自己是否喜欢编程和定量方法。",
  "flexibility": "社科专业很多，Computational Social Science 可以把社科和计算方法结合起来。转商学院有明确的学分、GPA 和先修课要求。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "匹兹堡校区录取约 59%。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "stable",
   "note": "FY27 预算平衡；受联邦科研经费环境影响。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": 9,
   "sorority": 12,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.chancellor.pitt.edu/annual-report/student-success",
   "21406 undergraduates, Pittsburgh campus only, excludes regional campuses. Nature: https://www.pitt.edu/about ; setting: https://sites.pitt.edu/~pittcntr/Being_here/visiting.htm",
   "Focus majors checked 2026-09-23 (official): https://www.asundergrad.pitt.edu/academics/majors"
  ]
 },
 {
  "id": "umass-amherst",
  "headline": "",
  "headlineQuestion": "",
  "value": "学科很多，社科内部的选择也丰富，而且学院本身有职业支持，不一定非要靠商学院。",
  "tradeoff": "Isenberg 商学院有给在校生的内部申请通道，但要先修完指定的先修课，而且有竞争，不能当成一定能转进去的后备方案。学校规模很大，很多事情要自己主动去找。",
  "miraQuestion": "如果最后没有进商学院，只读社科，我还会喜欢在这里的四年吗？",
  "career": "社科学院有自己的职业路径，心理学也有带研讨的本科研究项目。",
  "learningPath": "",
  "focusMajors": [
   "Economics",
   "Sociology",
   "Communication"
  ],
  "majorNote": "可以从经济、社会关系或传播切入，先看哪种课程最想上。这些都有本科 BA 路径；这里列的是探索入口，不代表需要同时读三个专业。",
  "flexibility": "社科内部选择丰富，有正式的自主设计专业（BDIC），还能在五校联盟（Amherst、Smith、Mount Holyoke 等）跨校选课。Isenberg 有内部申请通道，但有先修课要求和竞争。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "录取约 59%，SAT 中段 1330–1480（指社科入口，不是 Isenberg、CS）。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "watch",
   "note": "联邦科研经费压力，曾要求部门准备 3%/5% 削减方案；本科招生很强。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": 7,
   "sorority": 7,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.umass.edu/uair/",
   "24019 undergraduates, includes University Without Walls; not the narrower admissions population. Nature: https://www.umass.edu/gateway/why-umass/about ; setting: https://www.umass.edu/admissions/meet-amherst",
   "Focus majors checked 2026-09-23 (official): https://www.umass.edu/social-sciences/academics/programs",
   "Isenberg internal transfer checked 2026-09-23: https://www.isenberg.umass.edu/programs/undergraduate/on-campus/admissions/current-umass-students/bba"
  ]
 },
 {
  "id": "uw-madison",
  "headline": "",
  "headlineQuestion": "",
  "value": "学校大、学科多，文理学院和经济系都有自己的职业支持，不需要什么都依赖商学院。",
  "tradeoff": "选课、研究、住房、找老师，很多事情都要自己提前规划。",
  "miraQuestion": "我能不能主动预约顾问、找同伴、追着自己的计划往前走？",
  "career": "SuccessWorks 和经济系都有职业支持，能接经济、分析、研究和商业方向。",
  "learningPath": "",
  "focusMajors": [
   "Economics",
   "Sociology"
  ],
  "majorNote": "可以把同一个社会问题分别放进经济学和社会学里看。经济学包含理论和实证方法，社会学也要学研究与统计；先确认自己愿不愿意做这些训练。",
  "flexibility": "文理学院内部可以组合经济、社会学等方向，新闻专业也在文理学院之下（入专业条件待核）。转商学院是另一套申请。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏冲",
   "target": "匹配偏冲",
   "sat1380": "不交",
   "basis": "整体录取约 41%，州外和国际申请不能直接套用。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "watch",
   "note": "各学院被要求削减约 5%，不排除裁员；校长离任，由临时校长领导。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.wisc.edu/about/facts/",
   "37198 undergraduate students. Nature: https://www.wisc.edu/about/ ; setting: https://madison.wisc.edu/ (city and campus integrated).",
   "Focus majors checked 2026-09-23 (official): https://guide.wisc.edu/undergraduate/letters-science/economics/economics-ba/ ; https://guide.wisc.edu/undergraduate/letters-science/sociology/sociology-bs/"
  ]
 },
 {
  "id": "american",
  "headline": "",
  "headlineQuestion": "",
  "value": "它适合把课堂里的社会问题带到真实社区和机构里去做，不只是“谈公共议题”。",
  "tradeoff": "身在 DC，不代表所有机会国际生都能参加。实习身份限制要认真看。",
  "miraQuestion": "我是真的愿意围绕公共问题做事情，也愿意自己安排城市里的学习和生活吗？",
  "career": "社区研究和专业职业服务都能积累作品和经历，但公共部门的一些岗位对国际生有限制。",
  "learningPath": "",
  "focusMajors": [
   "International Studies",
   "Communication Studies"
  ],
  "majorNote": "可以从全球议题或媒体与社会的关系入手。International Studies 有不同主题和区域选择，也有向全校开放的辅修，适合先留一点探索空间。",
  "flexibility": "有 CLEG 这样现成的跨学科专业，把传播、法律、经济、政府放在一起。国际研究和传播之间怎么跨学院，还要继续核实。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "GPA 中段 3.35–3.84，SAT 1320–1430（ChatGPT 整理，待核）。",
   "verified": false,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "招生低于预算，FY26 超过 8200 万美元结构性调整、招聘冻结；校长离任，临时校长领导。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://www.american.edu/provost/oira/fast-facts-text-version.cfm",
   "7498 undergraduate students including 251 non-degree students. Latest readable dated official table; 2025 CDS inaccessible, do not relabel as 2025. Nature/setting: https://www.american.edu/about/fast-facts.cfm",
   "Focus majors checked 2026-09-23 (official): https://www.american.edu/sis/undergrad/ ; https://american.edu/soc/communication-studies/ba/index.cfm"
  ]
 },
 {
  "id": "gwu",
  "headline": "",
  "headlineQuestion": "",
  "value": "它最大的特点是“城市就是校园的一部分”。课堂之外，很多机构、议题和机会就在身边。",
  "tradeoff": "机会多，但要自己找；社交也不会自动形成。校外实习同样有身份限制。",
  "miraQuestion": "我喜欢把城市放进每天的大学生活里，还是更想要一个完整、稳定的校园世界？",
  "career": "社科研究和校友网络能接到不少非商科职业方向，但不能把这些理解成岗位保证。",
  "learningPath": "",
  "focusMajors": [
   "International Affairs",
   "Economics"
  ],
  "majorNote": "可以把国际问题和经济分析放在一起看，但先分清自己更喜欢议题还是方法。International Affairs 涉及多个社科学科，也有外语要求；两个专业分属不同学院。",
  "flexibility": "国际事务本身跨多个社科学科，可以和文理学院的经济等专业组合，但两者分属不同学院，转学院有学期、先修和成绩要求。",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "crossResources": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "methods": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "expression": {
    "text": "",
    "evidence": "none",
    "source": ""
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配",
   "sat1380": "可以交",
   "basis": "SAT 中段 1360–1470；但学校健康风险需要单独考虑。",
   "verified": true,
   "baseline": "GPA 3.8 / SAT 1380 / TOEFL 5（目标 SAT 1480 / TOEFL 5.5）"
  },
  "health": {
   "level": "adjusting",
   "note": "结构性赤字，FY27 净削减 4650 万美元，2025 年裁掉 43 个在岗职位；需做学院级核查。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "Basic facts checked 2026-09-23: https://irp.gwu.edu/sites/g/files/zaxdzs6056/files/2026-08/CDS-2025-2026.pdf",
   "11495 total undergraduates (10795 FT + 700 PT). Nature/setting: https://bulletin.gwu.edu/about-university/ (privately endowed; Foggy Bottom downtown).",
   "Focus majors checked 2026-09-23 (official): https://elliott.gwu.edu/node/32 ; https://bulletin.gwu.edu/arts-sciences/economics/"
  ]
 },
 {
  "id": "fordham",
  "headline": "",
  "headlineQuestion": "",
  "value": "纽约城市资源，加上中等规模的私立大学；社科、经济、传播、商业之间可以互通，实习场景很强。",
  "tradeoff": "城市型校园，社交和生活要自己在城市里慢慢建立；学院之间怎么转换，还要查清楚。",
  "miraQuestion": "我喜欢把纽约这座城市放进每天的大学生活里吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配",
   "target": "匹配偏稳",
   "sat1380": "倾向不交",
   "basis": "2026 年录取率约 47%，录取生平均 GPA 3.76，SAT 中段 1380–1490（ChatGPT 整理，待核）。",
   "verified": false
  },
  "health": {
   "level": "stable",
   "note": "暂未见公开的大规模裁员、学院关闭或招生下滑信号（ChatGPT 整理，待核）。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": 89,
   "grad4": 76,
   "grad6": 82,
   "studentFaculty": "14:1",
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "新加入研究池（2026-09-23），资料来自 ChatGPT 整理，待逐项核实。"
  ]
 },
 {
  "id": "elon",
  "headline": "",
  "headlineQuestion": "",
  "value": "重视本科体验和培养的学校，仍在扩张（新建工程与计算学院）；录取余量比研究池多数学校大。",
  "tradeoff": "学术声望和国际知名度不如研究池其他学校，要看具体专业和项目的质量。",
  "miraQuestion": "我更看重被照顾得很好的本科体验，还是学校的名气？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "2025–26 年约 18,557 人申请、11,740 人录取（约 63%），平均 SAT 1257（ChatGPT 整理，待核）。",
   "verified": false
  },
  "health": {
   "level": "stable",
   "note": "仍在扩张，未见收缩信号（ChatGPT 整理，待核）。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "新加入研究池（2026-09-23），资料来自 ChatGPT 整理，待逐项核实。"
  ]
 },
 {
  "id": "indiana",
  "headline": "",
  "headlineQuestion": "",
  "value": "大型公立大学，学科多、资源多；录取生 GPA 中段 3.73–4.00、SAT 1250–1450，对 Mira 是相对有把握的位置。",
  "tradeoff": "规模很大，需要自己主动找老师、找资源；州拨款削减带来预算压力。",
  "miraQuestion": "在一所几万人的大学里，我能不能先找到一个属于自己的小圈子？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "2025 年录取生 GPA 中段 3.73–4.00，SAT 1250–1450（ChatGPT 整理，待核）。",
   "verified": false
  },
  "health": {
   "level": "watch",
   "note": "州拨款削减，FY26 约 1 亿美元费用调整；但整体预算和教学投入仍在增长。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "新加入研究池（2026-09-23），资料来自 ChatGPT 整理，待逐项核实。"
  ]
 },
 {
  "id": "minnesota",
  "headline": "",
  "headlineQuestion": "",
  "value": "大型公立大学；文理学院录取生 GPA 中段 3.37–3.88、SAT 1330–1470。",
  "tradeoff": "明尼阿波利斯冬天极冷，不在 Mira 的选校范围。",
  "miraQuestion": "",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": {
   "current": "匹配偏稳",
   "target": "匹配偏稳",
   "sat1380": "交",
   "basis": "文理学院录取生 GPA 中段 3.37–3.88，SAT 1330–1470（ChatGPT 整理，待核）。",
   "verified": false
  },
  "health": {
   "level": "watch",
   "note": "有预算压力，但 2026 年通过约 54 亿美元的平衡预算。",
   "checked": "2026-09-23"
  },
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "新加入研究池（2026-09-23），资料来自 ChatGPT 整理，待逐项核实。"
  ]
 },
 {
  "id": "uc-davis",
  "headline": "",
  "headlineQuestion": "",
  "value": "加州大学系统里规模很大的一所，环境、农学和社会科学都有传统；戴维斯是安静的大学城。",
  "tradeoff": "规模大，需要自己主动找资源。加州大学不看 SAT，几所分校用同一份申请；国际生录取竞争激烈，各校的国际生录取情况还要单独核实。",
  "miraQuestion": "我喜欢安静大学城里的大型公立大学吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "uc-irvine",
  "headline": "",
  "headlineQuestion": "",
  "value": "南加州的大型公立大学，气候温和；除社会科学学院外，还有专门关注社会问题与政策的 Social Ecology 学院。",
  "tradeoff": "规模大，需要自己主动。加州大学不看 SAT，几所分校用同一份申请；国际生录取竞争激烈，各校的国际生录取情况还要单独核实。",
  "miraQuestion": "我能接受几万人的学校，只要气候和环境让我舒服吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "ucsb",
  "headline": "",
  "headlineQuestion": "",
  "value": "海边校园，本科教育口碑好；有 Communication 专业，社科选择多。",
  "tradeoff": "社交氛围活跃，要确认是否适合自己。加州大学不看 SAT，几所分校用同一份申请；国际生录取竞争激烈，各校的国际生录取情况还要单独核实。",
  "miraQuestion": "我喜欢海边、轻松一些的校园生活吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "ucsd",
  "headline": "",
  "headlineQuestion": "",
  "value": "研究实力强；本科采用住宿学院制，每个学院有自己的通识要求和生活社区。",
  "tradeoff": "常被形容为理工气氛较重。加州大学不看 SAT，几所分校用同一份申请；国际生录取竞争激烈，各校的国际生录取情况还要单独核实。",
  "miraQuestion": "我会不会在一个理工气氛较重的学校里找到自己的社科小圈子？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "uw-seattle",
  "headline": "",
  "headlineQuestion": "",
  "value": "西雅图的大型公立大学，城市资源多、离科技公司近；冬天多雨，但不冷。",
  "tradeoff": "州外和国际学生的录取与学费都更高；规模大，需要主动。",
  "miraQuestion": "我喜欢一座多雨、但文化和机会很多的城市吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "umd",
  "headline": "",
  "headlineQuestion": "",
  "value": "紧邻华盛顿特区的大型公立大学，公共政策、新闻（Merrill 学院）资源多。",
  "tradeoff": "规模大；部分热门专业要单独准入。",
  "miraQuestion": "我想离华盛顿的公共事务和媒体机构近一点吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "rutgers",
  "headline": "",
  "headlineQuestion": "",
  "value": "新泽西的旗舰公立大学，离纽约市约一小时，学科齐全。",
  "tradeoff": "规模很大，新布朗斯维克的校区分散，日常要坐校车往返。",
  "miraQuestion": "我能适应在几个校区之间来回的大学生活吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "ohio-state",
  "headline": "",
  "headlineQuestion": "",
  "value": "美国规模最大的大学之一，学科和资源都非常多；哥伦布是中等城市。",
  "tradeoff": "规模非常大，冬天冷；需要很强的主动性。",
  "miraQuestion": "在一所超大型大学里，我会觉得机会很多，还是会有点迷失？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "bu",
  "headline": "",
  "headlineQuestion": "",
  "value": "波士顿市区的大型私立大学，传播学院（COM）很有名，城市实习机会多。",
  "tradeoff": "校园沿城市街道展开，没有传统的封闭校园感；冬天冷。",
  "miraQuestion": "我喜欢城市就是校园的一部分吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "northeastern",
  "headline": "",
  "headlineQuestion": "",
  "value": "以 co-op 著称：读书期间可以交替参加几个月的全职工作，把课堂和真实工作连起来。",
  "tradeoff": "录取竞争非常激烈；国际生参加 co-op 要符合工作许可规定。",
  "miraQuestion": "我想在本科期间就进入真实的工作场景吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "emory",
  "headline": "",
  "headlineQuestion": "",
  "value": "亚特兰大的私立研究型大学，冬天温和；本科社科和商科都强，还有牛津学院（Oxford College）两年制入口。",
  "tradeoff": "录取竞争非常激烈。",
  "miraQuestion": "我更想要一个安静的小校区起步，还是直接在大校园里开始？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 },
 {
  "id": "nyu",
  "headline": "",
  "headlineQuestion": "",
  "value": "纽约市中心，城市就是校园；专业很多，包括新闻、全球公共政策等。",
  "tradeoff": "没有传统校园，社交要自己建立；录取竞争激烈，花费高。",
  "miraQuestion": "我能在一座大城市里独立建立自己的生活和朋友圈吗？",
  "career": "",
  "learningPath": "",
  "focusMajors": [],
  "majorNote": "",
  "flexibility": "",
  "synthesizer": {
   "realProblems": {
    "text": "",
    "evidence": "none"
   },
   "crossResources": {
    "text": "",
    "evidence": "none"
   },
   "methods": {
    "text": "",
    "evidence": "none"
   },
   "expression": {
    "text": "",
    "evidence": "none"
   },
   "summary": ""
  },
  "pathways": [],
  "admission": null,
  "health": null,
  "miraLens": {
   "start": "",
   "pace": "",
   "social": "",
   "thread": ""
  },
  "experience": {
   "retention": null,
   "grad4": null,
   "grad6": null,
   "studentFaculty": null,
   "fraternity": null,
   "sorority": null,
   "note": ""
  },
  "tags": [],
  "factSources": [
   "2026-09-23 为让名单更多元而加入\"新发现\"；录取、学校状态等待研究。"
  ]
 }
];
