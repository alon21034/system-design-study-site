const LINKS = {
  primer: 'https://github.com/donnemartin/system-design-primer',
  studyGuide: 'https://github.com/donnemartin/system-design-primer#study-guide',
  topics: 'https://github.com/donnemartin/system-design-primer#index-of-system-design-topics',
  startHere: 'https://github.com/donnemartin/system-design-primer#system-design-topics-start-here',
  perfScale: 'https://github.com/donnemartin/system-design-primer#performance-vs-scalability',
  latencyThroughput: 'https://github.com/donnemartin/system-design-primer#latency-vs-throughput',
  cap: 'https://github.com/donnemartin/system-design-primer#cap-theorem',
  consistencyPatterns: 'https://github.com/donnemartin/system-design-primer#consistency-patterns',
  dns: 'https://github.com/donnemartin/system-design-primer#domain-name-system',
  cdn: 'https://github.com/donnemartin/system-design-primer#content-delivery-network',
  lb: 'https://github.com/donnemartin/system-design-primer#load-balancer',
  rdbms: 'https://github.com/donnemartin/system-design-primer#relational-database-management-system-rdbms',
  replication: 'https://github.com/donnemartin/system-design-primer#master-slave-replication',
  federation: 'https://github.com/donnemartin/system-design-primer#federation',
  sharding: 'https://github.com/donnemartin/system-design-primer#sharding',
  nosql: 'https://github.com/donnemartin/system-design-primer#nosql',
  sqlNoSQL: 'https://github.com/donnemartin/system-design-primer#sql-or-nosql',
  cache: 'https://github.com/donnemartin/system-design-primer#cache',
  asynchronism: 'https://github.com/donnemartin/system-design-primer#asynchronism',
  queues: 'https://github.com/donnemartin/system-design-primer#message-queues',
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
  prdAtlassian: 'https://www.atlassian.com/agile/product-management/requirements',
  prdWikipedia: 'https://en.wikipedia.org/wiki/Product_requirements_document',
  adrGitHub: 'https://github.com/joelparkerhenderson/architecture-decision-record',
  nygardADR: 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions',
  googleDesign: 'https://www.industrialempathy.com/posts/design-docs-at-google/',
  googleEngDocs: 'https://abseil.io/resources/swe-book/html/ch10.html',
  ietfRFC: 'https://www.ietf.org/archive/id/draft-rswg-rfc7990-updates-10.html',
  swaggerDocs: 'https://swagger.io/resources/articles/best-practices-in-api-documentation/',
  sreBook: 'https://sre.google/sre-book/table-of-contents/',
  owaspLLM: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/'
};

function rr(label, url, range, focus, know) { return { label, url, range, focus, know }; }
function er(label, url) { return [label, url]; }

const weeks = [
  {
    week: 'Week 1', title: '建立系統設計基本語言', goal: '先建立共同語言：scale、latency、availability、DNS/CDN/LB。',
    days: [
      { day: 'Day 1', title: 'System Design 是什麼？', repo: [rr('Study guide', LINKS.studyGuide, 'Study guide → timeline table', '不要全讀；依時間與經驗取捨，先建立廣度再練題。', '知道 repo 是面試準備地圖，不是逐字課本。'), rr('Index of system design topics', LINKS.topics, 'Index → topics list', '看主題全貌：availability、DNS/CDN/LB、DB、cache、async、security。', '能說出 system design 常見知識地圖。')], reading: [er('ByteByteGo: Scale From Zero To Millions Of Users', LINKS.bbgScale)], tradeoffs: ['如果只有一週時間，你會優先讀 topic index 還是直接刷 solution？為什麼？', '面試中你會選擇先講完整架構，還是先問需求？這兩種做法的風險是什麼？'], ai: '請 AI 用兩種版本解釋 system design，然後自己修正成 5 句話。', output: '用 5 句話解釋 system design interview。' },
      { day: 'Day 2', title: 'Scalability 基礎', repo: [rr('Start here: scalability basics', LINKS.startHere, 'Start here → Step 1 / Step 2 / Next steps', '入門核心：vertical scaling、horizontal scaling、caching、LB、replication、partitioning。', '能用網站流量成長說明為什麼要加 cache、LB、replica。')], reading: [er('ByteByteGo: Scale From Zero To Millions', LINKS.bbgScale), er('ByteByteGo: Scale Your Database', LINKS.bbgDbScale)], tradeoffs: ['使用者從 1 萬成長到 100 萬，你會先 vertical scale 還是 horizontal scale？原因是什麼？', '你會先加 cache 還是先加 read replica？請說明成本、複雜度、資料新鮮度的取捨。'], ai: '請 AI 列出留言板 bottleneck，再分類成 compute / database / network / storage。', output: '留言板從 100 人變 100 萬人會遇到什麼問題？' },
      { day: 'Day 3', title: 'Performance vs Scalability / Latency vs Throughput', repo: [rr('Performance vs scalability', LINKS.perfScale, 'Performance vs scalability 全段', '單一使用者慢是 performance；高流量才慢是 scalability。', '能分辨單次請求慢與負載增加後變慢。'), rr('Latency vs throughput', LINKS.latencyThroughput, 'Latency vs throughput 全段', 'latency 是單次等待時間，throughput 是單位時間處理量。', '能回答不同產品更重視 latency 還是 throughput。')], reading: [er('ByteByteGo: Database Performance', LINKS.bbgDbPerf)], tradeoffs: ['聊天室要優先最佳化 latency 還是 throughput？影片轉檔服務呢？', '如果批次處理能提高 throughput 但增加單次等待時間，你會在哪些場景接受？'], ai: '請 AI 設計 5 個 latency/throughput 指標。', output: '比較聊天室和影片轉檔服務。' },
      { day: 'Day 4', title: 'Availability vs Consistency / CAP', repo: [rr('CAP theorem + consistency patterns', LINKS.cap, 'Availability vs consistency → CAP theorem → Consistency patterns', '看 CP/AP 與 weak/eventual/strong consistency。', '能判斷不同業務資料需要的一致性程度。')], reading: [er('CAP theorem overview', LINKS.capWiki), er('Eventual consistency overview', LINKS.eventualConsistency)], tradeoffs: ['購物車庫存要 strong consistency 還是 eventual consistency？超賣與使用者體驗如何取捨？', 'Like count 可以 eventual consistency 嗎？如果是銀行餘額呢？為什麼？'], ai: '請 AI 舉 eventual consistency 例子，再人工檢查。', output: '銀行轉帳、like 數、購物車庫存需要什麼 consistency？' },
      { day: 'Day 5', title: 'DNS / CDN / Load Balancer', repo: [rr('DNS / CDN / Load balancer', LINKS.dns, 'DNS → CDN → Load balancer → Reverse proxy', '理解 request 前半段路徑，以及各元件的責任。', '能畫出 User → DNS → CDN → LB → Web server。')], reading: [er('ByteByteGo: Network Protocols', LINKS.bbgProtocols)], tradeoffs: ['靜態圖片要直接從 app server 回傳還是放 CDN？成本、延遲、cache invalidation 怎麼取捨？', 'Load balancer 加在早期系統是否過度設計？什麼訊號出現後才值得加？'], ai: '把架構圖貼給 AI，請它找 single point of failure。', output: '為每個元件寫一句說明。' },
      { day: 'Day 6', title: 'Week 1 Mock：URL Shortener 入門版', repo: [rr('Pastebin / Bit.ly solution', LINKS.pastebin, 'Step 1 → Step 3，先不要深讀 Step 4', '看 use cases、constraints、粗估、high-level design、core components。', '能說出 short code、DB mapping、collision、read-heavy 的基本設計。')], reading: [er('ByteByteGo: Design A URL Shortener', LINKS.bbgUrl)], tradeoffs: ['短網址 code 要隨機產生還是用自增 ID + Base62？collision、可預測性、實作複雜度如何取捨？', '第一次版本要用 SQL 還是 NoSQL？查詢模式與擴展需求怎麼影響選擇？'], ai: '請 AI 扮演面試官，只問 clarification questions。', output: 'Design a simple URL shortener。' },
      { day: 'Day 7', title: '休息 / 補進度', repo: [rr('Review: Week 1 topics', LINKS.topics, 'Index 裡 Week 1 涉及章節', '回頭看哪些概念還講不順。', '能不用筆記說明 DNS、CDN、LB、latency、throughput、CAP。')], reading: [er('ByteByteGo: Scale From Zero To Millions', LINKS.bbgScale)], tradeoffs: ['Week 1 的元件中，哪三個最容易被濫用成 over-engineering？', '如果只能在面試中講 2 個 trade-off，你會選哪兩個？'], ai: '整理本週 prompt log。', output: '補齊不懂的概念。' }
    ]
  },
  {
    week: 'Week 2', title: '資料層、Cache、非同步', goal: '理解 DB、cache、queue 各解決什麼問題。',
    days: [
      { day: 'Day 8', title: 'RDBMS 基礎', repo: [rr('RDBMS', LINKS.rdbms, 'Database → RDBMS', '看 relational DB 適合 structured data 與 ACID 需求。', '能說出為什麼 order/payment 類資料通常先考慮 SQL。'), rr('Replication', LINKS.replication, 'Master-slave → Master-master replication', '比較 read replica、write conflict、failover。', '知道 read-heavy 可用 replica 擴讀，但會有 replication lag。')], reading: [er('CMU 15-445 Database Systems', LINKS.cmu15445), er('ByteByteGo: ACID', LINKS.bbgAcid)], tradeoffs: ['Read replica 可以解決什麼問題？它不能解決什麼問題？', 'Master-slave 與 master-master replication 的衝突處理與營運複雜度如何取捨？'], ai: '請 AI 列出 posts table 查詢，再自己決定 index。', output: '設計 users table 和 posts table。' },
      { day: 'Day 9', title: 'Partition / Sharding', repo: [rr('Federation', LINKS.federation, 'Federation 全段', '按業務功能拆資料庫。', '知道 federation 是按業務領域拆，不是按 row 拆。'), rr('Sharding', LINKS.sharding, 'Sharding 全段', '看 shard key、hot shard、rebalancing、join 複雜度。', '能用 user_id vs country 解釋 shard key 選擇。')], reading: [er('ByteByteGo: Database Sharding', LINKS.bbgSharding)], tradeoffs: ['Shard key 用 user_id、country、created_at 分別有什麼風險？', '什麼時候你會先做 federation，而不是直接 sharding？'], ai: '請 AI 提出 3 個 shard key，再評分。', output: '1 億 user 用 user_id 還是 country 當 shard key？' },
      { day: 'Day 10', title: 'SQL vs NoSQL', repo: [rr('NoSQL stores + SQL or NoSQL', LINKS.sqlNoSQL, 'NoSQL → SQL or NoSQL', '重點是 schema、transaction、query pattern、scale trade-off。', '能避免「NoSQL 一定比較快」這種說法。')], reading: [er('ByteByteGo: Database Performance', LINKS.bbgDbPerf)], tradeoffs: ['Chat message 要用 SQL 還是 NoSQL？請根據查詢模式、排序、分頁、擴展性回答。', '如果產品需求還不穩定，你會選 schema 彈性較高的資料庫嗎？代價是什麼？'], ai: '請 AI 反駁你的選擇。', output: 'User profile、order、session token、chat message 適合 SQL 還是 NoSQL？' },
      { day: 'Day 11', title: 'Cache', repo: [rr('Cache overview + update patterns', LINKS.cache, 'Cache → caching layers → cache update patterns', '看 cache 層次與 cache-aside/write-through/write-behind。', '能說出 cache-aside 流程與 stale data 風險。')], reading: [er('ByteByteGo: Database Performance', LINKS.bbgDbPerf)], tradeoffs: ['熱門文章列表要 cache 30 秒、5 分鐘、還是不 cache？請說明 freshness 與效能取捨。', 'Cache-aside 與 write-through 的失敗情境有什麼不同？'], ai: '請 AI 產生 cache-aside pseudo code，再檢查 stale data。', output: '熱門文章列表怎麼加 cache？' },
      { day: 'Day 12', title: 'Message Queue / Task Queue', repo: [rr('Asynchronism + queues', LINKS.asynchronism, 'Asynchronism → Message queues → Task queues → Back pressure', '看 async 如何降低等待、削峰、解耦與保護下游。', '能說出 worker crash、duplicate message、retry 的風險。')], reading: [er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka), er('MIT 6.824 MapReduce Lab', LINKS.mitMapReduce)], tradeoffs: ['圖片縮圖要同步處理還是丟 queue？對使用者體驗、可靠性、複雜度有何影響？', 'Queue 至少一次投遞造成 duplicate message 時，如何用 idempotency 取捨簡單性與正確性？'], ai: '請 AI 找出 worker crash、duplicate、retry storm。', output: '圖片上傳後產生縮圖：畫同步版和非同步版。' },
      { day: 'Day 13', title: 'Week 2 Mock：Image Upload Service', repo: [rr('CDN + async + queue', LINKS.cdn, 'CDN、Asynchronism、Message queues', '把 object storage / CDN / queue / worker / metadata DB 組合。', '能設計 upload API、metadata DB、worker status 與 retry。')], reading: [er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka)], tradeoffs: ['圖片原檔要存在 DB、local disk、還是 object storage？', '縮圖失敗時要讓使用者重傳、背景重試、還是顯示 pending？'], ai: '請 AI 只追問 worker 失敗與重複處理。', output: 'Design an image upload service。' },
      { day: 'Day 14', title: '休息 / 補進度', repo: [rr('Review: DB / cache / async', LINKS.topics, 'Database → Cache → Asynchronism', '把三者用途整理成一張比較表。', '能回答什麼時候加 cache，什麼時候加 queue。')], reading: [er('ByteByteGo: Database Sharding', LINKS.bbgSharding)], tradeoffs: ['如果系統慢，你會如何判斷要加 index、cache、replica、還是 queue？', '哪一個方案最容易短期見效？哪一個最可能造成長期技術債？'], ai: '把 URL shortener 加 cache 的設計講一次。', output: '整理 DB、cache、queue 的差異。' }
    ]
  },
  {
    week: 'Week 3', title: '開始練面試題', goal: '把知識轉成回答流程。',
    days: [
      { day: 'Day 15', title: '面試回答框架', repo: [rr('How to approach a system design interview question', LINKS.interview, 'Step 1 → Step 4', '需求/限制/假設 → high-level design → core components → scale。', '能用固定框架回答，而不是一開始就畫架構。')], reading: [er('ByteByteGo: Framework', LINKS.bbgFramework)], tradeoffs: ['面試時間只有 30 分鐘，你會花多少時間在需求確認、估算、架構、deep dive？', '什麼情況下你會主動說「這版先不做 sharding」？'], ai: '用 AI 做 mock interviewer。', output: 'URL shortener 寫出 10 個 clarification questions。' },
      { day: 'Day 16', title: 'Design Pastebin / Bit.ly', repo: [rr('Pastebin / Bit.ly solution', LINKS.pastebin, 'Step 1 → Step 4', '完整題：use cases、估算、API、DB schema、unique URL、read path、scale。', '能講 collision、Base62、SQL/NoSQL、cache 與 sharding。')], reading: [er('ByteByteGo: URL Shortener', LINKS.bbgUrl)], tradeoffs: ['URL shortener 要不要支援自訂 alias？這會對 collision、abuse、資料模型造成什麼影響？', '短網址 redirect 要查 DB 還是先查 cache？cache miss 與 stale data 怎麼處理？'], ai: '請 AI 追問 collision、TTL、abuse prevention。', output: '不看答案，自己重畫一次架構圖。' },
      { day: 'Day 17', title: 'Twitter Timeline / Feed', repo: [rr('Twitter timeline solution', LINKS.twitter, 'Step 1 constraints → Step 3 user posts tweet', '重點看 fanout、home timeline、read-heavy/write-heavy、Memory Cache。', '能比較 fanout on write vs fanout on read。')], reading: [er('ByteByteGo: News Feed', LINKS.bbgFeed)], tradeoffs: ['一般使用者用 fanout on write，名人帳號用 fanout on read，這種 hybrid design 的好處與複雜度是什麼？', 'Timeline 要追求完全即時還是允許幾秒延遲？'], ai: '讓 AI 生成 fanout 流程圖，再補 celebrity problem。', output: '比較 read-time query 與 precomputed timeline。' },
      { day: 'Day 18', title: 'Web Crawler', repo: [rr('Web crawler solution', LINKS.crawler, 'Step 1 constraints → Step 3 crawl list of urls', '看 URL frontier、dedup、cycle prevention、freshness、NoSQL/Redis sorted set。', '能說出 crawler 為什麼需要 queue、dedup、rate limit。')], reading: [er('ByteByteGo: Web Crawler', LINKS.bbgCrawler), er('Hello Interview: Web Crawler', LINKS.helloCrawler)], tradeoffs: ['Crawler 要優先 crawl 新網站還是更新舊頁面？freshness 與 coverage 如何取捨？', '同一 domain 的 rate limit 設太嚴或太鬆，各有什麼後果？'], ai: '請 AI 檢查 robots.txt、rate limit、dedup。', output: '為什麼 crawler 需要 queue？' },
      { day: 'Day 19', title: 'OOD 基礎', repo: [rr('LRU cache solution', LINKS.lru, 'Notebook: problem → implementation idea', 'O(1) get/put 背後通常需要 hash map + doubly linked list。', '能解釋為什麼單用 array/list 達不到 O(1)。')], reading: [er('System Design Primer OOD question list', LINKS.ood)], tradeoffs: ['LRU cache 要自己實作還是用語言內建 OrderedDict / LinkedHashMap？面試與產品開發的答案會一樣嗎？', 'Parking lot 設計中要用 inheritance 還是 composition？'], ai: '請 AI 產生 LRU Cache 錯誤實作。', output: 'Design LRU Cache。' },
      { day: 'Day 20', title: 'Week 3 Mock', repo: [rr('System design questions with solutions', LINKS.solutions, 'Solutions table → Pastebin / Twitter 任選一題', '用 repo solution 當答案校準，但先自己講一次。', '能在 30 分鐘內講需求、API、資料模型、架構、trade-off。')], reading: [er('ByteByteGo: URL Shortener', LINKS.bbgUrl), er('ByteByteGo: News Feed', LINKS.bbgFeed)], tradeoffs: ['你的 mock answer 中，有哪個設計選擇是為了簡化？哪個是為了擴展？', '如果面試官要求降低成本，你會移除哪個元件？'], ai: '錄音或文字稿給 AI，只針對需求與 trade-off 打分。', output: '30 分鐘回答。' },
      { day: 'Day 21', title: '休息 / 補進度', repo: [rr('Interview approach review', LINKS.interview, 'Step 1 → Step 4', '把回答模板壓成短版。', '能用 5/15/30 分鐘三種長度回答同一題。')], reading: [er('ByteByteGo: Framework', LINKS.bbgFramework)], tradeoffs: ['同一題的 5 分鐘版與 30 分鐘版，應該刪掉哪些細節？', '如果只能講一個 deep dive，你會選 DB、cache、queue 還是 API？'], ai: '把模板壓成 5/15/30 分鐘版本。', output: '整理一頁模板。' }
    ]
  },
  {
    week: 'Week 4', title: '模擬面試、AI 安全與補強', goal: '補估算、安全、文件化與完整 mock。',
    days: [
      { day: 'Day 22', title: 'Back-of-the-envelope calculations', repo: [rr('Back-of-the-envelope section', LINKS.interview, 'Back-of-the-envelope calculations → Appendix', '看 powers of two、latency numbers、手算估算。', '能估 QPS、storage、bandwidth 的數量級。')], reading: [er('ByteByteGo: Back-of-the-envelope Estimation', LINKS.bbgEstimate)], tradeoffs: ['估算時要用精準數字還是保守上限？面試中兩者的風險是什麼？', '如果估算後發現資料量不大，你會如何避免過度設計？'], ai: '先自己算，再請 AI 檢查單位與數量級。', output: '一年資料量與 storage 粗估。' },
      { day: 'Day 23', title: 'Real World Architecture 輕讀', repo: [rr('Real world architectures', LINKS.realWorld, 'Appendix → Real world architectures', '只看問題、瓶頸、採用元件、trade-off。', '能把一篇架構文整理成 Problem → Bottleneck → Solution → Trade-off。')], reading: [er('ByteByteGo: Scale From Zero To Millions', LINKS.bbgScale)], tradeoffs: ['真實公司架構中，哪些設計是因為規模大才需要？小產品照抄會有什麼問題？', '你會如何判斷一篇 architecture blog 的做法是否適合自己的產品？'], ai: '請 AI 濃縮成架構元件表。', output: '整理成四段。' },
      { day: 'Day 24', title: 'Security / Communication / AI Security', repo: [rr('Communication + Security', LINKS.communication, 'Communication → Security', '理解 REST/RPC/TCP/UDP 與基礎安全檢查。', '能把安全列為非功能需求。')], reading: [er('OWASP Top 10 for LLM Applications', LINKS.owaspLLM), er('ByteByteGo: Network Protocols', LINKS.bbgProtocols)], tradeoffs: ['API rate limit 設嚴會影響正常使用者，設鬆會增加 abuse 風險，怎麼決定？', 'AI 產生的安全建議是否能直接採用？你會如何驗證？'], ai: '請 AI 做 security review，但人工驗證。', output: 'URL shortener 如何防 phishing / abuse？' },
      { day: 'Day 25', title: 'Mock 1：URL Shortener 完整版', repo: [rr('Pastebin / Bit.ly full solution', LINKS.pastebin, '整篇 solution', '完整走 Step 1~4。', '能做 45 分鐘完整回答。')], reading: [er('ByteByteGo: URL Shortener', LINKS.bbgUrl)], tradeoffs: ['若使用者要求 analytics，你會在第一版就做事件 pipeline 嗎？', '自訂短網址、過期時間、abuse detection，哪個最值得先做？'], ai: '請 AI 根據 rubric 評分。', output: '完成 45 分鐘 URL Shortener mock。' },
      { day: 'Day 26', title: 'Mock 2：Feed / Timeline', repo: [rr('Twitter timeline full solution', LINKS.twitter, '整篇 solution', '完整走 fanout、timeline、search。', '能講 fanout trade-off 與高讀取流量。')], reading: [er('ByteByteGo: News Feed', LINKS.bbgFeed)], tradeoffs: ['Timeline 要 precompute 到 Redis，還是每次讀 DB join？', '新貼文要保證立刻出現在所有 follower timeline 嗎？'], ai: '請 AI 追問擴展到 1 億 users。', output: '完成 Feed / Timeline mock。' },
      { day: 'Day 27', title: 'Mock 3：Image Upload / Processing', repo: [rr('CDN + async + queue review', LINKS.topics, 'CDN → Asynchronism → Message queues', '把 Week 2 元件重新組成 image processing design。', '能回答 duplicate、timeout、partial failure、retry。')], reading: [er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka)], tradeoffs: ['如果縮圖服務掛了，主流程要失敗、等待、還是先成功回應？', '原圖與縮圖 URL 要公開還是簽名 URL？安全與便利性如何取捨？'], ai: '請 AI 從 failure mode 追問。', output: '完成 Image Upload mock。' },
      { day: 'Day 28', title: 'Mock 4：自由題', repo: [rr('Solutions index', LINKS.solutions, 'System design interview questions with solutions', '選 chat/notification/file sharing/search 類似題。', '能把陌生題目套進同一套回答流程。')], reading: [er('ByteByteGo: Web Crawler', LINKS.bbgCrawler), er('ByteByteGo: News Feed', LINKS.bbgFeed)], tradeoffs: ['自由題中，你會先追求簡單可行，還是先展示可擴展性？', '哪些需求應該明確說「暫不處理」？'], ai: '用 AI 做 code/design review。', output: '回答後整理成一頁模板。' },
      { day: 'Day 29', title: '總複習', repo: [rr('Topics + solutions review', LINKS.topics, 'Index + solutions table', '回顧所有常見元件與題型。', '能整理自己的 cheat sheet。')], reading: [er('ByteByteGo: Back-of-the-envelope', LINKS.bbgEstimate)], tradeoffs: ['列出你最常用的 5 組 trade-off：SQL/NoSQL、sync/async、cache freshness/performance 等。', '哪一組 trade-off 最容易被 AI 生成的答案忽略？'], ai: '請 AI 隨機抽 5 個 trade-off。', output: '整理 cheat sheet。' },
      { day: 'Day 30', title: 'Final Mock Interview', repo: [rr('Final solution check', LINKS.solutions, '先 mock，再對照 solution', '不要先看答案；用 solution 補洞。', '能完成 45 分鐘 final mock。')], reading: [er('ByteByteGo: Framework', LINKS.bbgFramework)], tradeoffs: ['你的 final design 中，最重要的 3 個決策是什麼？每個決策犧牲了什麼？', '如果要把這份設計寫成 ADR，你會記錄哪一個決策？'], ai: '請 AI 只基於 rubric 評分。', output: '45 分鐘完整回答。' }
    ]
  }
];

const tradeoffThemes = [
  ['AI 時代的工程師價值', 'AI 可以快速產生候選方案，但仍需要工程師根據產品階段、成本、風險、團隊能力與維運負擔做判斷。每天的 Trade-off 思考題就是訓練這個能力。'],
  ['回答格式', '建議用「Context → Options → Trade-offs → Decision → Risk / Follow-up」回答，不要只說 A 比 B 好。'],
  ['面試評分重點', '能不能說明為什麼現在不做某件事，往往比能不能列出很多高級元件更重要。']
];

const documents = [
  { name: 'PRD — Product Requirements Document', purpose: '定義產品要解決什麼問題、目標使用者、範圍、成功指標與非目標。', when: '功能還在定義階段，工程設計前使用。', sections: ['Problem / background', 'Goals and non-goals', 'User stories / use cases', 'Requirements', 'Success metrics', 'Open questions'], tips: 'PRD 不應直接指定技術解法；它應該把「為什麼做」與「做成什麼才算成功」寫清楚。', refs: [er('Atlassian: Product requirements', LINKS.prdAtlassian), er('Wikipedia: PRD', LINKS.prdWikipedia)] },
  { name: 'ADR — Architecture Decision Record', purpose: '記錄一個重要架構決策：背景、可選方案、決定、理由與後果。', when: '已經要選 A 或 B，例如 SQL vs NoSQL、queue vs sync、monolith vs service。', sections: ['Status', 'Context', 'Decision', 'Consequences', 'Alternatives considered'], tips: 'ADR 要短，重點是「為什麼當時這樣決定」，方便未來回頭理解。', refs: [er('Documenting Architecture Decisions', LINKS.nygardADR), er('ADR GitHub templates', LINKS.adrGitHub)] },
  { name: 'Design Doc', purpose: '說明技術設計、資料模型、API、流程、取捨、風險與 rollout plan。', when: '功能需求已清楚，要讓工程團隊 review 技術方案時。', sections: ['Context / goals', 'Non-goals', 'Proposed design', 'API / data model', 'Trade-offs', 'Security / reliability', 'Rollout plan', 'Open questions'], tips: '好的 design doc 不是炫技，而是讓 reviewer 能快速看懂方案與風險。', refs: [er('Design Docs at Google', LINKS.googleDesign), er('Google SWE Book: Engineering Docs', LINKS.googleEngDocs)] },
  { name: 'RFC — Request for Comments', purpose: '提出需要多人討論的方案，收集意見後再決定。', when: '影響跨團隊、平台、API contract 或長期方向時。', sections: ['Summary', 'Motivation', 'Proposal', 'Alternatives', 'Compatibility', 'Migration', 'Unresolved questions'], tips: 'RFC 強調討論，不一定一開始就有最終答案。', refs: [er('IETF RFC process overview', LINKS.ietfRFC)] },
  { name: 'API / Technical Spec', purpose: '把 API contract、request/response、error cases、auth、rate limit 寫清楚。', when: '前後端、client/server 或外部整合需要對齊時。', sections: ['Endpoints', 'Request / response schema', 'Errors', 'Auth', 'Rate limits', 'Examples', 'Versioning'], tips: 'API spec 要特別寫錯誤情境，不要只寫 happy path。', refs: [er('Swagger: API documentation best practices', LINKS.swaggerDocs)] },
  { name: 'Runbook / README', purpose: '讓別人能部署、操作、debug、維護系統。', when: 'Project 完成或服務上線前。', sections: ['How to run', 'Configuration', 'Deployment', 'Monitoring', 'Common failures', 'Rollback', 'Troubleshooting'], tips: 'Runbook 的讀者通常是在壓力下處理事故的人，所以要具體、可操作。', refs: [er('Google SRE Book', LINKS.sreBook)] }
];

const projects = [
  ['Week 1', 'Mini URL Shortener', ['API', 'DB schema', 'collision', 'index'], 'POST /urls 產生 short_code，GET /{short_code} 查詢或 redirect，處理 duplicate URL、invalid URL、collision。', [er('System Design Primer: Pastebin / Bit.ly', LINKS.pastebin), er('ByteByteGo: URL Shortener', LINKS.bbgUrl), er('The Odin Project NodeJS', LINKS.odinNode)]],
  ['Week 2', 'Image Upload + Async Thumbnail Worker', ['Queue', 'Worker', 'Retry', 'Idempotency'], '上傳圖片 metadata 或本地檔案，透過 queue/worker 產生 thumbnail，支援狀態查詢與 failure handling。', [er('System Design Primer: Asynchronism', LINKS.asynchronism), er('ByteByteGo: Kafka Use Cases', LINKS.bbgKafka)]],
  ['Week 3', 'Mini Feed / Timeline Service', ['Fanout', 'Pagination', 'Index', 'Benchmark'], '支援 follow、post、timeline，實作 read-time query 與 precomputed timeline 兩種簡化策略。', [er('System Design Primer: Twitter timeline', LINKS.twitter), er('ByteByteGo: News Feed', LINKS.bbgFeed)]],
  ['Week 4', 'Final Capstone', ['Portfolio', 'README', 'Mock interview', 'AI verification'], '從前三週 project 擇一補完整，形成可在面試展示的作品，包含 scale-up 設計與 AI 使用紀錄。', [er('GitHub Copilot best practices', LINKS.copilot), er('ADR templates', LINKS.adrGitHub)]]
];
const checks = ['看到題目後，不會直接開始畫架構。','會先問需求。','會定義 API。','會設計基本 DB schema。','會畫出合理的 high-level architecture。','知道什麼時候用 cache、queue、load balancer。','能說出至少 2–3 個 trade-off。','能用 Context → Options → Decision → Consequences 說明架構選擇。','能展示至少一個小 project 的 README、架構圖、測試與 trade-off。'];
const resources = [er('System Design Primer', LINKS.primer), er('ByteByteGo: Scale From Zero To Millions', LINKS.bbgScale), er('ByteByteGo: URL Shortener', LINKS.bbgUrl), er('ByteByteGo: News Feed', LINKS.bbgFeed), er('ByteByteGo: Web Crawler', LINKS.bbgCrawler), er('Design Docs at Google', LINKS.googleDesign), er('Architecture Decision Records', LINKS.adrGitHub), er('Atlassian PRD guide', LINKS.prdAtlassian), er('OWASP Top 10 for LLM Applications', LINKS.owaspLLM)];

function repoList(items){return `<div class="repo-guide-list">${items.map(item=>`<article class="repo-guide"><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}<span>↗</span></a><dl><dt>閱讀範圍</dt><dd>${item.range}</dd><dt>重點</dt><dd>${item.focus}</dd><dt>讀完應知道</dt><dd>${item.know}</dd></dl></article>`).join('')}</div>`}
function linkList(items){return `<ul class="link-list">${items.map(([label,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul>`}
function questionList(items){return `<div class="tradeoff-questions"><strong>Trade-off 思考題</strong><ol>${items.map(q=>`<li>${q}</li>`).join('')}</ol></div>`}
function bulletList(items){return `<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`}

function render(){
  const accordion=document.querySelector('#weekAccordion');
  if(accordion) accordion.innerHTML=weeks.map((week,idx)=>`<article class="accordion-item ${idx===0?'open':''}"><button class="accordion-header" aria-expanded="${idx===0?'true':'false'}"><div class="accordion-title"><span>${week.week}</span><strong>${week.title}</strong><p>${week.goal}</p></div><div class="accordion-icon">${idx===0?'−':'+'}</div></button><div class="accordion-content"><div class="day-grid">${week.days.map(day=>`<article class="day-card"><span class="day-meta">${day.day}</span><h3>${day.title}</h3><div class="day-sections"><div><strong>讀 repo</strong>${repoList(day.repo)}${questionList(day.tradeoffs)}</div><div><strong>延伸閱讀</strong>${linkList(day.reading)}</div><div><strong>AI / vibe coding</strong><p>${day.ai}</p></div><div><strong>練習 / 產出</strong><p>${day.output}</p></div></div></article>`).join('')}</div></div></article>`).join('');
  const tradeoffGrid=document.querySelector('#tradeoffGrid');
  if(tradeoffGrid) tradeoffGrid.innerHTML=tradeoffThemes.map(t=>`<article class="tradeoff-card"><h3>${t[0]}</h3><p>${t[1]}</p></article>`).join('');
  const docGrid=document.querySelector('#docGrid');
  if(docGrid) docGrid.innerHTML=documents.map(doc=>`<article class="doc-card"><h3>${doc.name}</h3><p>${doc.purpose}</p><dl><dt>何時使用</dt><dd>${doc.when}</dd><dt>建議章節</dt><dd>${bulletList(doc.sections)}</dd><dt>撰寫提醒</dt><dd>${doc.tips}</dd></dl><h4>英文資源</h4>${linkList(doc.refs)}</article>`).join('');
  const projectGrid=document.querySelector('#projectGrid');
  if(projectGrid) projectGrid.innerHTML=projects.map(p=>`<article class="project-card"><div class="week">${p[0]}</div><h3>${p[1]}</h3><p>${p[3]}</p><div class="badges">${p[2].map(skill=>`<span class="badge">${skill}</span>`).join('')}</div><h4>參考資源</h4>${linkList(p[4])}</article>`).join('');
  const finalChecklist=document.querySelector('#finalChecklist');
  if(finalChecklist) finalChecklist.innerHTML=checks.map(item=>`<div class="check-item"><span>✓</span><div>${item}</div></div>`).join('');
  const resourceList=document.querySelector('#resourceList');
  if(resourceList) resourceList.innerHTML=resources.map(([title,url])=>`<article class="resource-card"><a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a><p>英文參考資源</p></article>`).join('');
  document.querySelectorAll('.accordion-header').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.accordion-item');const icon=item.querySelector('.accordion-icon');const isOpen=item.classList.toggle('open');button.setAttribute('aria-expanded',String(isOpen));icon.textContent=isOpen?'−':'+';}));
  const menuButton=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');
  if(menuButton&&navLinks){menuButton.addEventListener('click',()=>navLinks.classList.toggle('open'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')))}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
