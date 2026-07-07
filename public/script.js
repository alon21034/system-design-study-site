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
  bbgProtocols: 'https://bytebytego.com/guides/explaining-8-popular-network-protocols-in-1-diagram/',
  capWiki: 'https://en.wikipedia.org/wiki/CAP_theorem',
  eventualConsistency: 'https://en.wikipedia.org/wiki/Eventual_consistency',
  cmu15445: 'https://15445.courses.cs.cmu.edu/',
  mitMapReduce: 'https://pdos.csail.mit.edu/6.824/labs/lab-mr.html',
  helloCrawler: 'https://www.hellointerview.com/learn/system-design/problem-breakdowns/web-crawler',
  odinNode: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs',
  copilot: 'https://docs.github.com/en/copilot',
  owaspLLM: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/'
};

function rr(label, url, range, focus, know) { return { label, url, range, focus, know }; }
function er(label, url) { return [label, url]; }

const weeks = [
  {
    week: 'Week 1', title: '建立系統設計基本語言', goal: '先建立共同語言：scale、latency、availability、DNS/CDN/LB。',
    days: [
      { day: 'Day 1', title: 'System Design 是什麼？', repo: [
        rr('Study guide', LINKS.studyGuide, 'Study guide → timeline table', '不要全讀；依時間與經驗取捨。repo 明確建議先廣度、再選幾題練深度。', '知道這份 repo 是面試準備地圖，不是逐字課本。'),
        rr('Index of system design topics', LINKS.topics, 'Index → topics list', '先看全貌：trade-off、availability、DNS/CDN/LB、DB、cache、async、communication、security。', '能說出 system design 常見知識地圖。'),
        rr('Motivation / interview prep', LINKS.primer, 'Motivation → Prep for interview', '了解 repo 目的：學大規模系統與準備面試。', '知道面試看的是討論、圖、取捨，不只是背答案。')
      ], reading: [er('ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale), er('GitHub: System Design Primer', LINKS.primer)], ai: '請 AI 用「給非工程師聽」與「給面試官聽」兩種版本解釋 system design，然後自己修正成 5 句話。', output: '用 5 句話解釋：什麼是 system design interview？' },
      { day: 'Day 2', title: 'Scalability 基礎', repo: [
        rr('System design topics: start here', LINKS.startHere, 'Start here → Step 1 / Step 2 / Next steps', '這段是入門核心：vertical scaling、horizontal scaling、caching、load balancing、DB replication、partitioning。', '能用一個網站流量成長的例子說明為什麼要加 cache、LB、replica。'),
        rr('Load balancer', LINKS.lb, 'Load balancer → Horizontal scaling', '看 LB 如何把流量分散到多台 server，是 horizontal scaling 的入口。', '知道 LB 解決流量分散，但也會帶來 SPOF 與複雜度。')
      ], reading: [er('ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale), er('ByteByteGo: 7 Must-Know Strategies to Scale Your Database', LINKS.bbgDbScale)], ai: '請 AI 幫你列出留言板的 bottleneck，但要自己分類成 compute / database / network / storage。', output: '留言板從 100 人變 100 萬人使用，可能會遇到什麼問題？' },
      { day: 'Day 3', title: 'Performance vs Scalability / Latency vs Throughput', repo: [
        rr('Performance vs scalability', LINKS.perfScale, 'Performance vs scalability 全段', 'repo 用很好的判斷：單一使用者慢是 performance；高流量才慢是 scalability。', '能分辨「慢」到底是單次請求慢，還是負載增加後變慢。'),
        rr('Latency vs throughput', LINKS.latencyThroughput, 'Latency vs throughput 全段', '看 latency 是單次動作時間，throughput 是單位時間處理量。', '能回答「聊天室 vs 轉檔服務」哪個重視 latency / throughput。')
      ], reading: [er('ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf)], ai: '請 AI 設計 5 個測量 latency/throughput 的指標，再挑 2 個最適合面試口說。', output: '比較聊天室和影片轉檔服務：哪個重視 latency？哪個重視 throughput？' },
      { day: 'Day 4', title: 'Availability vs Consistency / CAP', repo: [
        rr('Availability vs consistency / CAP theorem', LINKS.cap, 'Availability vs consistency → CAP theorem → CP/AP', '看 consistency、availability、partition tolerance 的定義，以及 CP/AP 的取捨。', '知道網路不可靠時，系統常要在一致性與可用性之間取捨。'),
        rr('Consistency patterns', LINKS.consistencyPatterns, 'Weak / Eventual / Strong consistency', '比較不同一致性模型適合的場景。', '能判斷銀行轉帳、like 數、庫存各適合哪種 consistency。')
      ], reading: [er('CAP theorem overview', LINKS.capWiki), er('Eventual consistency overview', LINKS.eventualConsistency)], ai: '請 AI 舉 3 個 eventual consistency 的例子；人工檢查是否真的能接受短暫不一致。', output: '銀行轉帳、Instagram like 數、購物車庫存，分別需要什麼 consistency？' },
      { day: 'Day 5', title: 'DNS / CDN / Load Balancer', repo: [
        rr('Domain name system', LINKS.dns, 'Domain name system 全段', '理解 DNS 把 domain 轉成 IP、TTL/cache 可能造成 propagation delay。', '能畫出 request 最前面的 DNS 查詢流程。'),
        rr('Content delivery network', LINKS.cdn, 'CDN → Push CDNs / Pull CDNs', '看 CDN 為什麼能讓使用者就近拿靜態內容，並減少 origin 壓力。', '知道 CDN 適合圖片、影片、CSS/JS，且有 cache 更新問題。'),
        rr('Load balancer / reverse proxy', LINKS.lb, 'Load balancer → Reverse proxy', '理解 LB、L4/L7、reverse proxy 的角色與差異。', '能說明 User → DNS → CDN → LB → Web server 的職責。')
      ], reading: [er('ByteByteGo: Explaining 8 Popular Network Protocols', LINKS.bbgProtocols)], ai: '把架構圖貼給 AI，請它找出 single point of failure；自己判斷哪些問題值得在入門面試中提。', output: '畫出 User → DNS → CDN → Load Balancer → Web Server → Database。' },
      { day: 'Day 6', title: 'Week 1 Mock：URL Shortener 入門版', repo: [
        rr('Pastebin / Bit.ly solution', LINKS.pastebin, 'Step 1 → Step 3，先不要深讀 Step 4', '看 use cases、constraints、粗估、high-level design、core components。', '能說出 short code、DB mapping、collision、read-heavy 的基本設計。')
      ], reading: [er('ByteByteGo: Design A URL Shortener', LINKS.bbgUrl)], ai: '請 AI 扮演面試官，只問 clarification questions，不要直接給答案。', output: '題目：Design a simple URL shortener。' },
      { day: 'Day 7', title: '休息 / 補進度', repo: [rr('Review: Week 1 topics', LINKS.topics, 'Index 裡 Week 1 涉及的章節', '回頭看哪些概念還講不順。', '能不用筆記說明 DNS、CDN、LB、latency、throughput、CAP。')], reading: [er('ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale)], ai: '整理本週 prompt log：哪些 prompt 有幫助？哪些 prompt 讓答案變得太空泛？', output: '回顧 Week 1 筆記，補齊不懂的概念。' }
    ]
  },
  {
    week: 'Week 2', title: '資料層、Cache、非同步', goal: '理解 DB、cache、queue 各解決什麼問題。',
    days: [
      { day: 'Day 8', title: 'RDBMS 基礎', repo: [
        rr('RDBMS', LINKS.rdbms, 'Database → RDBMS', '看 relational DB 適合 structured data 與 ACID 需求。', '能說出為什麼 order/payment 類資料通常先考慮 SQL。'),
        rr('Replication', LINKS.masterSlave, 'Master-slave → Master-master replication', '比較 read replica、write conflict、failover。', '知道 read-heavy 系統可用 replica 擴讀，但會有 replication lag。')
      ], reading: [er('CMU 15-445 Database Systems', LINKS.cmu15445), er('ByteByteGo: What does ACID mean?', LINKS.bbgAcid)], ai: '請 AI 幫你列出 posts table 可能的查詢；根據查詢自己決定 index。', output: '設計 users table 和 posts table，並說明 index。' },
      { day: 'Day 9', title: 'Partition / Sharding', repo: [
        rr('Federation', LINKS.federation, 'Federation 全段', '看按功能拆資料庫，例如 user DB、forum DB、product DB。', '知道 federation 是按業務領域拆，不是按 row 拆。'),
        rr('Sharding', LINKS.sharding, 'Sharding 全段', '看 shard key、hot shard、rebalancing、join 複雜度。', '能用 user_id vs country 解釋 shard key 選擇。')
      ], reading: [er('ByteByteGo: Database Sharding', LINKS.bbgSharding), er('ByteByteGo: Scale Your Database', LINKS.bbgDbScale)], ai: '請 AI 提出 3 個 shard key；自己用 hot shard、query pattern、rebalancing 三個角度評分。', output: '1 億 user，用 user_id 還是 country 當 shard key？' },
      { day: 'Day 10', title: 'SQL vs NoSQL', repo: [
        rr('NoSQL stores', LINKS.nosql, 'NoSQL → Key-value / Document / Wide column', '看不同 NoSQL 類型對應不同 access pattern。', '能把 session token、profile、chat message 分到合理儲存類型。'),
        rr('SQL or NoSQL', LINKS.sqlNoSQL, 'SQL or NoSQL 全段', '重點不是誰比較快，而是 schema、transaction、query pattern、scale trade-off。', '能避免「NoSQL 一定比較快」這種過度簡化說法。')
      ], reading: [er('ByteByteGo: A Cheatsheet on Database Performance', LINKS.bbgDbPerf)], ai: '請 AI 反駁你的選擇，強迫自己補 trade-off。', output: 'User profile、order、session token、chat message 適合 SQL 還是 NoSQL？' },
      { day: 'Day 11', title: 'Cache', repo: [
        rr('Cache overview', LINKS.cache, 'Cache → caching layers', '看 client/CDN/web server/database/application caching 的層次。', '知道 cache 可以放在不同位置，解決 read-heavy 與 latency 問題。'),
        rr('When to update the cache', LINKS.cache, 'When to update cache → Cache-aside / Write-through / Write-behind / Refresh-ahead', '比較常見 cache update pattern。', '能說出 cache-aside 的基本流程與 stale data 風險。')
      ], reading: [er('ByteByteGo: Database Performance', LINKS.bbgDbPerf)], ai: '請 AI 產生 cache-aside pseudo code；自己檢查 stale data、TTL、cache stampede。', output: '熱門文章列表怎麼加 cache？資料更新時 cache 怎麼辦？' },
      { day: 'Day 12', title: 'Message Queue / Task Queue', repo: [
        rr('Asynchronism', LINKS.asynchronism, 'Asynchronism overview', '看 async 如何降低使用者等待、削峰與解耦。', '知道 email、thumbnail、notification 為什麼適合 async。'),
        rr('Message queues / Task queues / Back pressure', LINKS.messageQueues, 'Message queues → Task queues → Back pressure', '比較 queue、worker、retry 與下游保護。', '能說出 worker crash、duplicate message、retry 的風險。')
      ], reading: [er('ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka), er('MIT 6.824 MapReduce Lab', LINKS.mitMapReduce)], ai: '請 AI 找出 worker crash、duplicate message、retry storm、poison message。', output: '圖片上傳後產生縮圖：畫同步版和非同步版。' },
      { day: 'Day 13', title: 'Week 2 Mock：Image Upload Service', repo: [
        rr('CDN + asynchronism', LINKS.cdn, 'CDN、Asynchronism、Message queues', '把 Week 2 元件組合：object storage / CDN / queue / worker / metadata DB。', '能設計 upload API、metadata DB、worker status 與 retry。')
      ], reading: [er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka)], ai: '請 AI 當 reviewer，只追問 worker 失敗與重複處理。', output: '題目：Design an image upload service。' },
      { day: 'Day 14', title: '休息 / 補進度', repo: [rr('Review: DB / cache / async', LINKS.topics, 'Database → Cache → Asynchronism', '把三者用途整理成一張比較表。', '能回答「什麼時候加 cache？什麼時候加 queue？」')], reading: [er('ByteByteGo: Database Sharding', LINKS.bbgSharding)], ai: '把 URL shortener 加 cache 的設計講一次，請 AI 找不清楚處。', output: '整理 DB、cache、queue 的用途與差異。' }
    ]
  },
  {
    week: 'Week 3', title: '開始練面試題', goal: '把知識轉成回答流程。',
    days: [
      { day: 'Day 15', title: '面試回答框架', repo: [
        rr('How to approach a system design interview question', LINKS.interview, 'Step 1 → Step 4', '這是最重要的面試流程：需求/限制 → high-level design → core components → scale。', '能用固定框架回答，而不是一開始就畫架構。')
      ], reading: [er('ByteByteGo: Framework For System Design Interviews', LINKS.bbgFramework)], ai: '用 AI 做 mock interviewer，一次只問一個問題。', output: '拿 URL shortener 寫出 10 個 clarification questions。' },
      { day: 'Day 16', title: 'Design Pastebin / Bit.ly', repo: [
        rr('Pastebin / Bit.ly solution', LINKS.pastebin, 'Step 1 → Step 4', '看完整題：use cases、估算、API、DB schema、unique URL、read path、scale。', '能講 collision、Base62/short code、SQL/NoSQL、cache 與 sharding。')
      ], reading: [er('ByteByteGo: Design A URL Shortener', LINKS.bbgUrl)], ai: '請 AI 追問 collision、TTL、abuse prevention。', output: '不看答案，自己重畫一次架構圖。' },
      { day: 'Day 17', title: 'Design Twitter Timeline / Feed 簡化版', repo: [
        rr('Twitter timeline solution', LINKS.twitter, 'Step 1 constraints → Step 3 user posts tweet', '重點看 fanout、home timeline、read-heavy/write-heavy、Memory Cache。', '能比較 fanout on write vs fanout on read，並說出 celebrity problem。')
      ], reading: [er('ByteByteGo: Design A News Feed System', LINKS.bbgFeed)], ai: '讓 AI 生成 fanout on write/read 流程圖，再補 celebrity problem。', output: '比較 read-time query 與 precomputed timeline。' },
      { day: 'Day 18', title: 'Design Web Crawler 簡化版', repo: [
        rr('Web crawler solution', LINKS.crawler, 'Step 1 constraints → Step 3 crawl list of urls', '看 URL frontier、dedup、cycle prevention、freshness、NoSQL/Redis sorted set。', '能說出 crawler 為什麼需要 queue、dedup、rate limit。')
      ], reading: [er('ByteByteGo: Design A Web Crawler', LINKS.bbgCrawler), er('Hello Interview: Web Crawler', LINKS.helloCrawler)], ai: '請 AI 檢查 robots.txt、rate limit、dedup。', output: '為什麼 crawler 需要 queue？為什麼不能無限制 request 同網站？' },
      { day: 'Day 19', title: 'OOD 基礎', repo: [
        rr('LRU cache solution', LINKS.lru, 'Notebook: problem → implementation idea', '看 O(1) get/put 背後通常需要 hash map + doubly linked list。', '能解釋為什麼單用 array/list 達不到 O(1)。'),
        rr('Parking lot solution', LINKS.parking, 'Notebook: classes / relationships', '看如何拆 class responsibility。', '能說出 object、interface、edge case，而不是只寫一堆 inheritance。')
      ], reading: [er('System Design Primer OOD question list', LINKS.ood)], ai: '請 AI 產生 LRU Cache 錯誤實作，再指出為什麼不是 O(1)。', output: 'Design LRU Cache：get / put / O(1)。' },
      { day: 'Day 20', title: 'Week 3 Mock', repo: [
        rr('System design questions with solutions', LINKS.solutions, 'Solutions table → Pastebin / Twitter 任選一題', '用 repo solution 當答案校準，但先自己講一次。', '能在 30 分鐘內講需求、API、資料模型、架構、trade-off。')
      ], reading: [er('ByteByteGo: URL Shortener', LINKS.bbgUrl), er('ByteByteGo: News Feed', LINKS.bbgFeed)], ai: '錄音或文字稿給 AI，只針對需求與 trade-off 打分。', output: '30 分鐘回答；先問需求、畫圖、講 trade-off。' },
      { day: 'Day 21', title: '休息 / 補進度', repo: [rr('Interview approach review', LINKS.interview, 'Step 1 → Step 4', '把回答模板壓成短版。', '能用 5/15/30 分鐘三種長度回答同一題。')], reading: [er('ByteByteGo: Framework', LINKS.bbgFramework)], ai: '把模板壓成 5/15/30 分鐘版本。', output: '把 mock 答案整理成一頁模板。' }
    ]
  },
  {
    week: 'Week 4', title: '模擬面試、AI 安全與補強', goal: '補估算、安全與完整 mock。',
    days: [
      { day: 'Day 22', title: 'Back-of-the-envelope calculations', repo: [
        rr('Back-of-the-envelope section', LINKS.interview, 'Back-of-the-envelope calculations → Appendix', '看 powers of two、latency numbers、手算估算。', '能估 QPS、storage、bandwidth 的數量級。')
      ], reading: [er('ByteByteGo: Back-of-the-envelope Estimation', LINKS.bbgEstimate)], ai: '先自己算，再請 AI 檢查單位與數量級。', output: '每天 100 萬 users，每人 10 筆短網址，一年資料量與 storage 粗估。' },
      { day: 'Day 23', title: 'Real World Architecture 輕讀', repo: [
        rr('Real world architectures', LINKS.realWorld, 'Appendix → Real world architectures', '只看問題、瓶頸、採用元件、trade-off，不深挖所有細節。', '能把一篇架構文整理成 Problem → Bottleneck → Solution → Trade-off。')
      ], reading: [er('ByteByteGo: Scale From Zero To Millions', LINKS.bbgScale)], ai: '請 AI 濃縮成架構元件表，但要自己檢查是否過度簡化。', output: '選一篇 architecture blog，整理成四段。' },
      { day: 'Day 24', title: 'Security / Communication / AI Security', repo: [
        rr('Communication', LINKS.communication, 'Communication → TCP / UDP / RPC / REST', '理解常見通訊方式與 API style。', '能說明 REST API 與 service-to-service RPC 的差異。'),
        rr('Security', LINKS.security, 'Security 全段', '看基礎安全檢查：TLS、auth、rate limit、input validation。', '能把安全列為 system design 的非功能需求。')
      ], reading: [er('OWASP Top 10 for LLM Applications', LINKS.owaspLLM), er('ByteByteGo: Network Protocols', LINKS.bbgProtocols)], ai: '請 AI 做 security review，但權限、secret、input validation 要人工驗證。', output: 'URL shortener 如何防 phishing / abuse？' },
      { day: 'Day 25', title: 'Mock 1：URL Shortener 完整版', repo: [rr('Pastebin / Bit.ly full solution', LINKS.pastebin, '整篇 solution', '完整走一次 Step 1~4。', '能做 45 分鐘完整回答。')], reading: [er('ByteByteGo: URL Shortener', LINKS.bbgUrl)], ai: '請 AI 根據 rubric 評分，引用你回答中的具體句子。', output: '完成 45 分鐘 URL Shortener mock。' },
      { day: 'Day 26', title: 'Mock 2：Feed / Timeline', repo: [rr('Twitter timeline full solution', LINKS.twitter, '整篇 solution', '完整走一次 fanout、timeline、search 的設計。', '能講 fanout trade-off 與高讀取流量。')], reading: [er('ByteByteGo: News Feed', LINKS.bbgFeed)], ai: '請 AI 追問擴展到 1 億 users 的變化。', output: '完成 Feed / Timeline mock。' },
      { day: 'Day 27', title: 'Mock 3：Image Upload / Processing', repo: [rr('CDN + async + queue review', LINKS.topics, 'CDN → Asynchronism → Message queues', '把 Week 2 元件重新組成 image processing design。', '能回答 duplicate、timeout、partial failure、retry。')], reading: [er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka)], ai: '請 AI 從 failure mode 追問 duplicate、timeout、partial failure、retry。', output: '完成 Image Upload / Processing mock。' },
      { day: 'Day 28', title: 'Mock 4：自由題', repo: [rr('Solutions index', LINKS.solutions, 'System design interview questions with solutions', '選 chat/notification/file sharing/search 類似題，照 framework 自己拆。', '能把陌生題目套進同一套回答流程。')], reading: [er('ByteByteGo: Web Crawler', LINKS.bbgCrawler), er('ByteByteGo: News Feed', LINKS.bbgFeed)], ai: '用 AI 做 code/design review，找測試、觀測性、安全缺口。', output: '回答後整理成一頁模板。' },
      { day: 'Day 29', title: '總複習', repo: [rr('Topics + solutions review', LINKS.topics, 'Index + solutions table', '回顧所有常見元件與題型。', '能整理自己的 cheat sheet。')], reading: [er('ByteByteGo: Back-of-the-envelope', LINKS.bbgEstimate)], ai: '請 AI 隨機抽 5 個 trade-off，要求 60 秒回答。', output: '整理一張 cheat sheet。' },
      { day: 'Day 30', title: 'Final Mock Interview', repo: [rr('Final solution check', LINKS.solutions, '先 mock，再對照 solution', '不要先看答案；用 solution 補洞。', '能完成 45 分鐘 final mock。')], reading: [er('ByteByteGo: Framework', LINKS.bbgFramework)], ai: '請 AI 只基於 rubric 評分，不要提供新架構答案。', output: '45 分鐘完整回答。' }
    ]
  }
];

const projects = [
  ['Week 1', 'Mini URL Shortener', ['API', 'DB schema', 'collision', 'index'], 'POST /urls 產生 short_code，GET /{short_code} 查詢或 redirect，處理 duplicate URL、invalid URL、collision。', [['System Design Primer: Pastebin / Bit.ly', LINKS.pastebin], ['ByteByteGo: Design A URL Shortener', LINKS.bbgUrl], ['The Odin Project NodeJS', LINKS.odinNode]]],
  ['Week 2', 'Image Upload + Async Thumbnail Worker', ['Queue', 'Worker', 'Retry', 'Idempotency'], '上傳圖片 metadata 或本地檔案，透過 queue/worker 產生 thumbnail，支援狀態查詢與 failure handling。', [['System Design Primer: Asynchronism', LINKS.asynchronism], ['ByteByteGo: Top 5 Kafka Use Cases', LINKS.bbgKafka], ['MIT 6.824 MapReduce lab', LINKS.mitMapReduce]]],
  ['Week 3', 'Mini Feed / Timeline Service', ['Fanout', 'Pagination', 'Index', 'Benchmark'], '支援 follow、post、timeline，實作 read-time query 與 precomputed timeline 兩種簡化策略。', [['System Design Primer: Twitter timeline', LINKS.twitter], ['ByteByteGo: Design A News Feed System', LINKS.bbgFeed]]],
  ['Week 4', 'Final Capstone', ['Portfolio', 'README', 'Mock interview', 'AI verification'], '從前三週 project 擇一補完整，形成可在面試展示的作品，包含 scale-up 設計與 AI 使用紀錄。', [['GitHub Copilot best practices', LINKS.copilot], ['OWASP LLM Top 10', LINKS.owaspLLM], ['ByteByteGo: Framework', LINKS.bbgFramework]]]
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
  ['OWASP Top 10 for LLM Applications', 'AI app security 與 prompt injection 基礎。', LINKS.owaspLLM]
];

function repoList(items) {
  return `<div class="repo-guide-list">${items.map(item => `<article class="repo-guide"><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}<span>↗</span></a><dl><dt>閱讀範圍</dt><dd>${item.range}</dd><dt>重點</dt><dd>${item.focus}</dd><dt>讀完應知道</dt><dd>${item.know}</dd></dl></article>`).join('')}</div>`;
}
function linkList(items) { return `<ul class="link-list">${items.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul>`; }

function render() {
  const accordion = document.querySelector('#weekAccordion');
  if (accordion) accordion.innerHTML = weeks.map((week, idx) => `<article class="accordion-item ${idx === 0 ? 'open' : ''}"><button class="accordion-header" aria-expanded="${idx === 0 ? 'true' : 'false'}"><div class="accordion-title"><span>${week.week}</span><strong>${week.title}</strong><p>${week.goal}</p></div><div class="accordion-icon">${idx === 0 ? '−' : '+'}</div></button><div class="accordion-content"><div class="day-grid">${week.days.map(day => `<article class="day-card"><span class="day-meta">${day.day}</span><h3>${day.title}</h3><div class="day-sections"><div><strong>讀 repo</strong>${repoList(day.repo)}</div><div><strong>延伸閱讀</strong>${linkList(day.reading)}</div><div><strong>AI / vibe coding</strong><p>${day.ai}</p></div><div><strong>練習 / 產出</strong><p>${day.output}</p></div></div></article>`).join('')}</div></div></article>`).join('');
  const projectGrid = document.querySelector('#projectGrid');
  if (projectGrid) projectGrid.innerHTML = projects.map(p => `<article class="project-card"><div class="week">${p[0]}</div><h3>${p[1]}</h3><p>${p[3]}</p><div class="badges">${p[2].map(skill => `<span class="badge">${skill}</span>`).join('')}</div><h4>參考資源</h4>${linkList(p[4])}</article>`).join('');
  const finalChecklist = document.querySelector('#finalChecklist');
  if (finalChecklist) finalChecklist.innerHTML = checks.map(item => `<div class="check-item"><span>✓</span><div>${item}</div></div>`).join('');
  const resourceList = document.querySelector('#resourceList');
  if (resourceList) resourceList.innerHTML = resources.map(([title, desc, url]) => `<article class="resource-card"><a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a><p>${desc}</p></article>`).join('');
  document.querySelectorAll('.accordion-header').forEach(button => button.addEventListener('click', () => { const item = button.closest('.accordion-item'); const icon = item.querySelector('.accordion-icon'); const isOpen = item.classList.toggle('open'); button.setAttribute('aria-expanded', String(isOpen)); icon.textContent = isOpen ? '−' : '+'; }));
  const menuButton = document.querySelector('.menu-toggle'); const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) { menuButton.addEventListener('click', () => navLinks.classList.toggle('open')); navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open'))); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
