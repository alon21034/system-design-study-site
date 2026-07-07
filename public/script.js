const LINKS = {
  primer: 'https://github.com/donnemartin/system-design-primer',
  studyGuide: 'https://github.com/donnemartin/system-design-primer#study-guide',
  topics: 'https://github.com/donnemartin/system-design-primer#index-of-system-design-topics',
  startHere: 'https://github.com/donnemartin/system-design-primer#system-design-topics-start-here',
  perfScale: 'https://github.com/donnemartin/system-design-primer#performance-vs-scalability',
  latencyThroughput: 'https://github.com/donnemartin/system-design-primer#latency-vs-throughput',
  availabilityConsistency: 'https://github.com/donnemartin/system-design-primer#availability-vs-consistency',
  cap: 'https://github.com/donnemartin/system-design-primer#cap-theorem',
  consistencyPatterns: 'https://github.com/donnemartin/system-design-primer#consistency-patterns',
  availabilityPatterns: 'https://github.com/donnemartin/system-design-primer#availability-patterns',
  dns: 'https://github.com/donnemartin/system-design-primer#domain-name-system',
  cdn: 'https://github.com/donnemartin/system-design-primer#content-delivery-network',
  lb: 'https://github.com/donnemartin/system-design-primer#load-balancer',
  reverseProxy: 'https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server',
  rdbms: 'https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms',
  masterSlave: 'https://github.com/donnemartin/system-design-primer#master-slave-replication',
  masterMaster: 'https://github.com/donnemartin/system-design-primer#master-master-replication',
  federation: 'https://github.com/donnemartin/system-design-primer#federation',
  sharding: 'https://github.com/donnemartin/system-design-primer#sharding',
  nosql: 'https://github.com/donnemartin/system-design-primer#nosql',
  keyValue: 'https://github.com/donnemartin/system-design-primer#key-value-store',
  documentStore: 'https://github.com/donnemartin/system-design-primer#document-store',
  wideColumn: 'https://github.com/donnemartin/system-design-primer#wide-column-store',
  sqlNoSQL: 'https://github.com/donnemartin/system-design-primer#sql-or-nosql',
  cache: 'https://github.com/donnemartin/system-design-primer#cache',
  asynchronism: 'https://github.com/donnemartin/system-design-primer#asynchronism',
  messageQueues: 'https://github.com/donnemartin/system-design-primer#message-queues',
  taskQueues: 'https://github.com/donnemartin/system-design-primer#task-queues',
  backPressure: 'https://github.com/donnemartin/system-design-primer#back-pressure',
  communication: 'https://github.com/donnemartin/system-design-primer#communication',
  security: 'https://github.com/donnemartin/system-design-primer#security',
  appendix: 'https://github.com/donnemartin/system-design-primer#appendix',
  realWorld: 'https://github.com/donnemartin/system-design-primer#real-world-architectures',
  interview: 'https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question',
  solutions: 'https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions',
  ood: 'https://github.com/donnemartin/system-design-primer#object-oriented-design-interview-questions-with-solutions',
  pastebin: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md',
  twitter: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md',
  crawler: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md',
  hashMap: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb',
  lru: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.ipynb',
  parking: 'https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.ipynb',
  bbgScale: 'https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users',
  bbgEstimate: 'https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation',
  bbgFramework: 'https://bytebytego.com/courses/system-design-interview/a-framework-for-system-design-interviews',
  bbgUrl: 'https://bytebytego.com/courses/system-design-interview/design-a-url-shortener',
  bbgCrawler: 'https://bytebytego.com/courses/system-design-interview/design-a-web-crawler',
  bbgFeed: 'https://bytebytego.com/courses/system-design-interview/design-a-news-feed-system',
  bbgSharding: 'https://bytebytego.com/guides/a-crash-course-in-database-sharding/',
  bbgDbScale: 'https://bytebytego.com/guides/7-must-know-strategies-to-scale-your-database/',
  bbgDbPerf: 'https://bytebytego.com/guides/a-cheatsheet-on-database-performance/',
  bbgKafka: 'https://bytebytego.com/guides/top-5-kafka-use-cases/',
  bbgAcid: 'https://bytebytego.com/guides/what-does-acid-mean/',
  bbgDbLocks: 'https://bytebytego.com/guides/what-are-the-differences-among-database-locks/',
  bbgProtocols: 'https://bytebytego.com/guides/explaining-8-popular-network-protocols-in-1-diagram/',
  capWiki: 'https://en.wikipedia.org/wiki/CAP_theorem',
  eventualConsistency: 'https://en.wikipedia.org/wiki/Eventual_consistency',
  cmu15445: 'https://15445.courses.cs.cmu.edu/',
  mit65840: 'https://pdos.csail.mit.edu/6.824/',
  mitMapReduce: 'https://pdos.csail.mit.edu/6.824/labs/lab-mr.html',
  helloCrawler: 'https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler',
  odinNode: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs',
  copilot: 'https://docs.github.com/en/copilot',
  copilotPrompts: 'https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot',
  owaspLLM: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
  cursor: 'https://docs.cursor.com/'
};

const weeks = [
  {
    week: 'Week 1',
    title: '建立系統設計基本語言',
    goal: '讓面試準備者能聽懂 scalability、latency、availability、cache、load balancer 等核心詞彙。',
    days: [
      { day: 'Day 1', title: 'System Design 是什麼？', repo: [['Study guide', LINKS.studyGuide], ['Index of system design topics', LINKS.topics], ['System design topics: start here', LINKS.startHere]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['GitHub: System Design Primer README', LINKS.primer]], ai: '請 AI 用「給非工程師聽」與「給面試官聽」兩種版本解釋 system design，然後自己修正成 5 句話。', output: '用 5 句話解釋：什麼是 system design interview？' },
      { day: 'Day 2', title: 'Scalability 基礎', repo: [['System design topics: start here', LINKS.startHere], ['Load balancer / horizontal scaling', LINKS.lb]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['ByteByteGo: 7 Must-Know Strategies to Scale Your Database', LINKS.bbgDbScale]], ai: '請 AI 幫你列出留言板的 bottleneck，但要自己分類成 compute / database / network / storage。', output: '留言板從 100 人變 100 萬人使用，可能會遇到什麼問題？' },
      { day: 'Day 3', title: 'Performance vs Scalability / Latency vs Throughput', repo: [['Performance vs scalability', LINKS.perfScale], ['Latency vs throughput', LINKS.latencyThroughput]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf]], ai: '請 AI 設計 5 個測量 latency/throughput 的指標，再挑 2 個最適合面試口說。', output: '比較聊天室和影片轉檔服務：哪個重視 latency？哪個重視 throughput？' },
      { day: 'Day 4', title: 'Availability vs Consistency / CAP', repo: [['Availability vs consistency', LINKS.availabilityConsistency], ['CAP theorem', LINKS.cap], ['Consistency patterns', LINKS.consistencyPatterns]], reading: [['CAP theorem overview', LINKS.capWiki], ['Eventual consistency overview', LINKS.eventualConsistency]], ai: '請 AI 舉 3 個 eventual consistency 的例子；人工檢查是否真的能接受短暫不一致。', output: '銀行轉帳、Instagram like 數、購物車庫存，分別需要什麼 consistency？' },
      { day: 'Day 5', title: 'DNS / CDN / Load Balancer', repo: [['Domain name system', LINKS.dns], ['Content delivery network', LINKS.cdn], ['Load balancer', LINKS.lb], ['Reverse proxy', LINKS.reverseProxy]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['ByteByteGo: Explaining 8 Popular Network Protocols', LINKS.bbgProtocols]], ai: '把架構圖貼給 AI，請它找出 single point of failure；自己判斷哪些問題值得在入門面試中提。', output: '畫出 User → DNS → CDN → Load Balancer → Web Server → Database，並為每個元件寫一句說明。' },
      { day: 'Day 6', title: 'Week 1 Mock：URL Shortener 入門版', repo: [['Design Pastebin.com or Bit.ly solution', LINKS.pastebin]], reading: [['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl]], ai: '請 AI 扮演面試官，只問 clarification questions，不要直接給答案。', output: '題目：Design a simple URL shortener。' },
      { day: 'Day 7', title: '休息 / 補進度', repo: [['Review: system design topics index', LINKS.topics]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['System Design Primer: Study guide', LINKS.studyGuide]], ai: '整理本週 prompt log：哪些 prompt 有幫助？哪些 prompt 讓答案變得太空泛？', output: '回顧 Week 1 筆記，補齊不懂的概念。' }
    ]
  },
  {
    week: 'Week 2',
    title: '資料層、Cache、非同步',
    goal: '知道 database、cache、message queue 在系統裡各自解決什麼問題。',
    days: [
      { day: 'Day 8', title: 'RDBMS 基礎', repo: [['RDBMS', LINKS.rdbms], ['Master-slave replication', LINKS.masterSlave], ['Master-master replication', LINKS.masterMaster]], reading: [['CMU 15-445 Database Systems', LINKS.cmu15445], ['ByteByteGo: What does ACID mean?', LINKS.bbgAcid]], ai: '請 AI 幫你列出 posts table 可能的查詢；根據查詢自己決定 index。', output: '設計 users table 和 posts table，並說明 index 應該放在哪裡。' },
      { day: 'Day 9', title: 'Partition / Sharding', repo: [['Federation', LINKS.federation], ['Sharding', LINKS.sharding]], reading: [['ByteByteGo: A Crash Course on Database Sharding', LINKS.bbgSharding], ['ByteByteGo: 7 Must-Know Strategies to Scale Your Database', LINKS.bbgDbScale]], ai: '請 AI 提出 3 個 shard key；自己用 hot shard、query pattern、rebalancing 三個角度評分。', output: '如果有 1 億個 user，你會用 user_id 還是 country 當 shard key？為什麼？' },
      { day: 'Day 10', title: 'SQL vs NoSQL', repo: [['NoSQL', LINKS.nosql], ['Key-value store', LINKS.keyValue], ['Document store', LINKS.documentStore], ['Wide column store', LINKS.wideColumn], ['SQL or NoSQL', LINKS.sqlNoSQL]], reading: [['ByteByteGo: What does ACID mean?', LINKS.bbgAcid], ['ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf]], ai: '請 AI 反駁你的選擇，強迫自己補 trade-off。', output: 'User profile、shopping order、session token、chat message，各自適合 SQL 還是 NoSQL？' },
      { day: 'Day 11', title: 'Cache', repo: [['Cache', LINKS.cache], ['Cache-aside / Write-through / Write-behind', LINKS.cache]], reading: [['ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf], ['ByteByteGo: 7 Must-Know Strategies to Scale Your Database', LINKS.bbgDbScale]], ai: '請 AI 產生 cache-aside pseudo code；自己檢查 stale data、TTL、cache stampede。', output: '設計一個熱門文章列表，要怎麼加 cache？資料更新時 cache 怎麼辦？' },
      { day: 'Day 12', title: 'Message Queue / Task Queue', repo: [['Asynchronism', LINKS.asynchronism], ['Message queues', LINKS.messageQueues], ['Task queues', LINKS.taskQueues], ['Back pressure', LINKS.backPressure]], reading: [['ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka], ['MIT 6.824 Lab 1: MapReduce', LINKS.mitMapReduce]], ai: '請 AI 幫你找出非同步流程的 failure cases：worker crash、duplicate message、retry storm、poison message。', output: '使用者上傳圖片後，要產生縮圖。請畫出同步版和非同步版架構。' },
      { day: 'Day 13', title: 'Week 2 Mock：Image Upload Service', repo: [['Object store / CDN topics', LINKS.cdn], ['Asynchronism', LINKS.asynchronism]], reading: [['ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka], ['MIT 6.824 Lab 1: MapReduce', LINKS.mitMapReduce]], ai: '請 AI 當 reviewer：只問「如果 worker 失敗怎麼辦？」、「如何避免重複處理？」這類追問。', output: '題目：Design an image upload service。' },
      { day: 'Day 14', title: '休息 / 補進度', repo: [['Review: Database', LINKS.rdbms], ['Review: Cache', LINKS.cache], ['Review: Asynchronism', LINKS.asynchronism]], reading: [['ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf], ['ByteByteGo: Database Sharding', LINKS.bbgSharding]], ai: '把 URL shortener 加上 cache 的設計用文字講一次，請 AI 幫你找不清楚的地方。', output: '回顧資料層、cache、queue 三者的用途與差異。' }
    ]
  },
  {
    week: 'Week 3',
    title: '開始練面試題',
    goal: '從讀知識轉成能回答題目，並固定使用面試回答框架。',
    days: [
      { day: 'Day 15', title: '面試回答框架', repo: [['How to approach a system design interview question', LINKS.interview]], reading: [['ByteByteGo: A Framework For System Design Interviews', LINKS.bbgFramework], ['System Design Primer: interview approach', LINKS.interview]], ai: '用 AI 做 mock interviewer，但要求它一次只問一個問題，不要透露標準答案。', output: '拿 URL shortener 寫出 10 個 clarification questions。' },
      { day: 'Day 16', title: 'Design Pastebin / Bit.ly', repo: [['System Design Primer: Pastebin / Bit.ly solution', LINKS.pastebin]], reading: [['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl]], ai: '請 AI 用 senior interviewer 角度追問 collision、TTL、abuse prevention；自己整理回答。', output: '不看答案，自己重畫一次架構圖。' },
      { day: 'Day 17', title: 'Design Twitter Timeline / Feed 簡化版', repo: [['System Design Primer: Twitter timeline and search', LINKS.twitter]], reading: [['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]], ai: '讓 AI 生成 fanout on write/read 的流程圖文字版，再自己補 celebrity problem。', output: '比較 read-time query 與 precomputed timeline 的優缺點。' },
      { day: 'Day 18', title: 'Design Web Crawler 簡化版', repo: [['System Design Primer: Web crawler solution', LINKS.crawler]], reading: [['ByteByteGo: Design A Web Crawler', LINKS.bbgCrawler], ['Hello Interview: Design a Web Crawler', LINKS.helloCrawler]], ai: '請 AI 檢查 crawler 是否尊重 robots.txt、rate limit、dedup；自己決定入門版要講哪些。', output: '為什麼 crawler 需要 queue？為什麼不能無限制 request 同一個網站？' },
      { day: 'Day 19', title: 'Object-Oriented Design 基礎', repo: [['Design a hash map solution', LINKS.hashMap], ['Design LRU cache solution', LINKS.lru], ['Design parking lot solution', LINKS.parking]], reading: [['System Design Primer: OOD question list', LINKS.ood]], ai: '請 AI 產生 LRU Cache 的錯誤實作，再自己指出為什麼不是 O(1)。', output: 'Design LRU Cache：get(key)、put(key, value)、O(1)。' },
      { day: 'Day 20', title: 'Week 3 Mock', repo: [['System design interview questions with solutions', LINKS.solutions], ['URL shortener solution', LINKS.pastebin], ['Twitter timeline solution', LINKS.twitter]], reading: [['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl], ['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]], ai: '錄音或文字稿丟給 AI，請它只針對「是否有問需求、是否有 trade-off」打分。', output: '題目二選一：Design a URL shortener / Design a news feed。' },
      { day: 'Day 21', title: '休息 / 補進度', repo: [['System Design Primer: interview approach', LINKS.interview], ['System Design Primer: solutions', LINKS.solutions]], reading: [['ByteByteGo: A Framework For System Design Interviews', LINKS.bbgFramework]], ai: '把模板交給 AI 做壓縮：一版 5 分鐘、一版 15 分鐘、一版 30 分鐘。', output: '把 Week 3 的 mock 答案整理成一頁模板。' }
    ]
  },
  {
    week: 'Week 4',
    title: '模擬面試、AI 安全與補強',
    goal: '把知識轉成面試表現，並補 AI 時代必備的驗證與安全觀念。',
    days: [
      { day: 'Day 22', title: 'Back-of-the-envelope calculations', repo: [['Appendix', LINKS.appendix], ['How to approach: Back-of-the-envelope calculations', LINKS.interview]], reading: [['ByteByteGo: Back-of-the-envelope Estimation', LINKS.bbgEstimate]], ai: '先自己算，再請 AI 檢查單位與數量級，不要反過來。', output: '每天 100 萬 users，每人 10 筆短網址。一年資料量與 storage 粗估。' },
      { day: 'Day 23', title: 'Real World Architecture 輕讀', repo: [['Real world architectures', LINKS.realWorld]], reading: [['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale], ['System Design Primer: real world architectures', LINKS.realWorld]], ai: '請 AI 幫你把長文濃縮成架構元件表，但要自己檢查是否過度簡化。', output: '選一篇 architecture blog，整理成 Problem → Bottleneck → Solution → Trade-off。' },
      { day: 'Day 24', title: 'Security / Communication / AI Security', repo: [['Communication', LINKS.communication], ['Security', LINKS.security]], reading: [['ByteByteGo: Explaining 8 Popular Network Protocols', LINKS.bbgProtocols], ['OWASP Top 10 for LLM Applications', LINKS.owaspLLM], ['GitHub Copilot prompt engineering', LINKS.copilotPrompts]], ai: '請 AI 做 security review，但所有權限、secret、input validation 都要用程式或測試驗證。', output: 'URL shortener 可能被濫用成 phishing link，怎麼防？AI 產生的安全檢查清單有哪些要人工驗證？' },
      { day: 'Day 25', title: 'Mock 1：URL Shortener 完整版', repo: [['System Design Primer: Pastebin / Bit.ly solution', LINKS.pastebin]], reading: [['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl]], ai: '請 AI 根據 rubric 評分，但要求它引用你回答中的具體句子。', output: '完成一題 45 分鐘 URL Shortener mock，並用評分表檢查。' },
      { day: 'Day 26', title: 'Mock 2：Feed / Timeline', repo: [['System Design Primer: Twitter timeline solution', LINKS.twitter]], reading: [['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]], ai: '請 AI 當面試官追問擴展到 1 億 users 的變化。', output: '完成一題 Feed / Timeline mock，重點放在 fanout trade-off。' },
      { day: 'Day 27', title: 'Mock 3：Image Upload / Processing', repo: [['System Design Primer: CDN', LINKS.cdn], ['System Design Primer: Asynchronism', LINKS.asynchronism]], reading: [['ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka], ['ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf]], ai: '請 AI 只從 failure mode 角度追問：duplicate、timeout、partial failure、retry。', output: '完成一題 Image Upload / Processing mock。' },
      { day: 'Day 28', title: 'Mock 4：自由題', repo: [['System Design Primer: question list', LINKS.solutions]], reading: [['ByteByteGo: Design A Web Crawler', LINKS.bbgCrawler], ['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]], ai: '用 AI 做最後一輪 code/design review：找出缺少測試、缺少觀測性、缺少安全檢查之處。', output: '回答完後，把答案整理成一頁模板。' },
      { day: 'Day 29', title: '總複習', repo: [['System Design Primer: topics index', LINKS.topics], ['System Design Primer: solutions', LINKS.solutions]], reading: [['ByteByteGo: Back-of-the-envelope Estimation', LINKS.bbgEstimate], ['ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale]], ai: '請 AI 隨機抽 5 個 trade-off，要求你用 60 秒回答。', output: '整理一張 cheat sheet。' },
      { day: 'Day 30', title: 'Final Mock Interview', repo: [['System Design Primer: URL shortener solution', LINKS.pastebin], ['System Design Primer: solutions index', LINKS.solutions]], reading: [['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl], ['ByteByteGo: A Framework For System Design Interviews', LINKS.bbgFramework]], ai: '完成後請 AI 只基於 rubric 評分，不要提供新架構答案；你自己先改一次，再看 repo solution。', output: '題目：Design a URL shortener 或 image upload service。' }
    ]
  }
];

const projects = [
  ['Week 1', 'Mini URL Shortener', ['API', 'DB schema', 'collision', 'index'], 'POST /urls 產生 short_code，GET /{short_code} 查詢或 redirect，處理 duplicate URL、invalid URL、collision。', [['System Design Primer: Pastebin / Bit.ly', LINKS.pastebin], ['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl], ['The Odin Project NodeJS', LINKS.odinNode]]],
  ['Week 2', 'Image Upload + Async Thumbnail Worker', ['Queue', 'Worker', 'Retry', 'Idempotency'], '上傳圖片 metadata 或本地檔案，透過 queue/worker 產生 thumbnail，支援狀態查詢與 failure handling。', [['System Design Primer: Asynchronism', LINKS.asynchronism], ['ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka], ['MIT 6.824 MapReduce lab', LINKS.mitMapReduce]]],
  ['Week 3', 'Mini Feed / Timeline Service', ['Fanout', 'Pagination', 'Index', 'Benchmark'], '支援 follow、post、timeline，實作 read-time query 與 precomputed timeline 兩種簡化策略。', [['System Design Primer: Twitter timeline', LINKS.twitter], ['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]]],
  ['Week 4', 'Final Capstone', ['Portfolio', 'README', 'Mock interview', 'AI verification'], '從前三週 project 擇一補完整，形成可在面試展示的作品，包含 scale-up 設計與 AI 使用紀錄。', [['GitHub Copilot best practices', LINKS.copilot], ['OWASP LLM Top 10', LINKS.owaspLLM], ['ByteByteGo: A Framework For System Design Interviews', LINKS.bbgFramework]]]
];

const checks = ['看到題目後，不會直接開始畫架構。','會先問需求。','會定義 API。','會設計基本 DB schema。','會畫出合理的 high-level architecture。','知道什麼時候用 cache、queue、load balancer。','能說出至少 2–3 個 trade-off。','能說明自己如何使用 AI coding tool，以及如何人工驗證 AI 產物。','能展示至少一個小 project 的 README、架構圖、測試與 trade-off。'];

const resources = [
  ['System Design Primer', '主要參考 repo，包含 topics、interview approach、solutions 與 OOD 題目。', LINKS.primer],
  ['ByteByteGo: Scale From Zero To Millions Of Users', '從單機逐步擴展到百萬用戶，適合 Week 1。', LINKS.bbgScale],
  ['ByteByteGo: Database Sharding', '搭配 sharding 主題閱讀。', LINKS.bbgSharding],
  ['ByteByteGo: Design A URL Shortener', 'URL shortener 面試題完整範例。', LINKS.bbgUrl],
  ['ByteByteGo: Design A Web Crawler', 'Web crawler 面試題完整範例。', LINKS.bbgCrawler],
  ['ByteByteGo: Design A News Feed System', 'Feed/timeline 面試題完整範例。', LINKS.bbgFeed],
  ['CMU 15-445 Database Systems', '資料庫系統課程，適合延伸理解 DB internals。', LINKS.cmu15445],
  ['MIT 6.5840 Distributed Systems', '分散式系統課程，適合 Week 2/4 補充。', LINKS.mit65840],
  ['OWASP Top 10 for LLM Applications', 'AI app security 與 prompt injection 基礎。', LINKS.owaspLLM]
];

function linkList(items) {
  return `<ul class="link-list">${items.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul>`;
}

function render() {
  const accordion = document.querySelector('#weekAccordion');
  if (accordion) {
    accordion.innerHTML = weeks.map((week, idx) => `
      <article class="accordion-item ${idx === 0 ? 'open' : ''}">
        <button class="accordion-header" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <div class="accordion-title"><span>${week.week}</span><strong>${week.title}</strong><p>${week.goal}</p></div>
          <div class="accordion-icon">${idx === 0 ? '−' : '+'}</div>
        </button>
        <div class="accordion-content"><div class="day-grid">
          ${week.days.map(day => `
            <article class="day-card">
              <span class="day-meta">${day.day}</span>
              <h3>${day.title}</h3>
              <div class="day-sections">
                <div><strong>讀 repo</strong>${linkList(day.repo)}</div>
                <div><strong>延伸閱讀</strong>${linkList(day.reading)}</div>
                <div><strong>AI / vibe coding</strong><p>${day.ai}</p></div>
                <div><strong>練習 / 產出</strong><p>${day.output}</p></div>
              </div>
            </article>`).join('')}
        </div></div>
      </article>`).join('');
  }

  const projectGrid = document.querySelector('#projectGrid');
  if (projectGrid) {
    projectGrid.innerHTML = projects.map(p => `
      <article class="project-card">
        <div class="week">${p[0]}</div><h3>${p[1]}</h3><p>${p[3]}</p>
        <div class="badges">${p[2].map(skill => `<span class="badge">${skill}</span>`).join('')}</div>
        <h4>參考資源</h4>${linkList(p[4])}
      </article>`).join('');
  }

  const finalChecklist = document.querySelector('#finalChecklist');
  if (finalChecklist) finalChecklist.innerHTML = checks.map(item => `<div class="check-item"><span>✓</span><div>${item}</div></div>`).join('');

  const resourceList = document.querySelector('#resourceList');
  if (resourceList) {
    resourceList.innerHTML = resources.map(([title, desc, url]) => `<article class="resource-card"><a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a><p>${desc}</p></article>`).join('');
  }

  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      const icon = item.querySelector('.accordion-icon');
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      icon.textContent = isOpen ? '−' : '+';
    });
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
else render();
