function applyContentFixes() {
  document.querySelectorAll('.tradeoff-questions strong').forEach((el) => {
    el.textContent = '思考題';
  });

  document.querySelectorAll('a[href="#tradeoffs"]').forEach((el) => {
    el.textContent = '思考題';
  });

  const tradeoffSection = document.querySelector('#tradeoffs .section-heading');
  if (tradeoffSection) {
    const tag = tradeoffSection.querySelector('.tag');
    const title = tradeoffSection.querySelector('h2');
    const desc = tradeoffSection.querySelector('p');
    if (tag) tag.textContent = 'Thinking Questions';
    if (title) title.textContent = '架構思考題';
    if (desc) desc.textContent = '每天讀完 repo 後，回答該日卡片裡的思考題。重點不是背答案，而是把 Context、Options、Decision、Consequences 說清楚。';
  }

  const replacements = new Map([
    ['如果只有一週時間，你會優先讀 topic index 還是直接刷 solution？為什麼？', '一個剛上線的小型服務，應該先採用單體架構還是直接拆成多個服務？請說明開發速度、部署複雜度與未來擴展性的取捨。'],
    ['面試中你會選擇先講完整架構，還是先問需求？這兩種做法的風險是什麼？', '需求尚不明確時，你會先設計通用平台，還是先針對已知 use case 做最小可行架構？兩者在成本與彈性上如何取捨？'],
    ['如果只能在面試中講 2 個 trade-off，你會選哪兩個？', '一個早期產品要不要一開始就加入 CDN、cache、load balancer？請說明效能、成本與維運複雜度的取捨。'],
    ['面試時間只有 30 分鐘，你會花多少時間在需求確認、估算、架構、deep dive？', '當流量規模還不確定時，你會先做可水平擴展的架構，還是先做簡單單機版並保留擴展路徑？'],
    ['同一題的 5 分鐘版與 30 分鐘版，應該刪掉哪些細節？', '如果只能 deep dive 一個部分，你會選 database、cache、queue 還是 API contract？請根據系統風險說明理由。'],
    ['如果只能講一個 deep dive，你會選 DB、cache、queue 還是 API？', '在 read-heavy 系統中，你會優先 deep dive cache strategy 還是 database schema/index？為什麼？'],
    ['自由題中，你會先追求簡單可行，還是先展示可擴展性？', '自由題中，第一版架構要先追求簡單可行，還是先加入可擴展元件？請說明 over-engineering 與未來重構成本。'],
    ['哪些需求應該明確說「暫不處理」？', '哪些非功能需求會大幅改變架構，例如安全、可用性、延遲、合規或成本？你會如何決定第一版先不處理哪些？'],
    ['Week 1 的元件中，哪三個最容易被濫用成 over-engineering？', 'Week 1 的元件中，CDN、load balancer、cache 哪些在小流量階段可能是 over-engineering？什麼指標出現後才值得加入？']
  ]);

  document.querySelectorAll('.tradeoff-questions li').forEach((li) => {
    const text = li.textContent.trim();
    if (replacements.has(text)) {
      li.textContent = replacements.get(text);
    }
  });

  if (!document.querySelector('#uncovered')) {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'uncovered';
    section.innerHTML = `
      <div class="section-heading">
        <span class="tag">Further Study</span>
        <h2>四週未涵蓋主題</h2>
        <p>這份一個月計劃刻意以面試入門與可練習的核心題為主。下面主題在 System Design Primer 或相關英文資源中很重要，但四週內只輕觸或沒有深入，適合讀者依職位需求延伸閱讀。</p>
      </div>
      <div class="uncovered-grid">
        ${uncoveredTopics.map(renderUncoveredTopic).join('')}
      </div>
    `;
    const resources = document.querySelector('#resources');
    if (resources) resources.parentNode.insertBefore(section, resources);
  }

  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !navLinks.querySelector('a[href="#uncovered"]')) {
    const link = document.createElement('a');
    link.href = '#uncovered';
    link.textContent = '未涵蓋';
    const resourcesLink = navLinks.querySelector('a[href="#resources"]');
    navLinks.insertBefore(link, resourcesLink || null);
  }
}

const uncoveredTopics = [
  {
    title: 'Search Index / 搜尋系統',
    summary: '四週中只有透過 Web Crawler 和 feed 題目輕觸搜尋，沒有深入 inverted index、ranking、query parsing、全文搜尋與 reindexing。',
    whySkipped: '對入門面試準備者來說，搜尋系統容易展開成大型專題，會壓縮 DB/cache/queue 等基礎時間。',
    next: '先理解 inverted index、document indexing、ranking，再練習 Design a search autocomplete 或 simple search service。',
    links: [
      ['System Design Primer: Search', 'https://github.com/donnemartin/system-design-primer#search'],
      ['Elasticsearch: What is an inverted index?', 'https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html']
    ]
  },
  {
    title: 'Observability / 監控與可觀測性',
    summary: '目前只在 project 交付物中提到測試與 README，沒有深入 metrics、logs、traces、SLO、alerting 與 incident response。',
    whySkipped: '可觀測性對實務很重要，但通常不是入門 system design 第一輪的主軸。',
    next: '學會為每個系統設計至少 3 個 metrics：latency、error rate、throughput；再補 logging、tracing、dashboard 與 alert。',
    links: [
      ['Google SRE Book', 'https://sre.google/sre-book/table-of-contents/'],
      ['OpenTelemetry Docs', 'https://opentelemetry.io/docs/']
    ]
  },
  {
    title: 'Consensus / Leader Election / Quorum',
    summary: 'CAP 和 consistency 有介紹，但沒有深入 Raft、Paxos、leader election、quorum read/write。',
    whySkipped: '這類分散式系統主題難度高，對多數入門面試題不是必要前置。',
    next: '如果目標是 infra/backend platform role，可以補 MIT 6.5840，再閱讀 Raft paper。',
    links: [
      ['MIT 6.5840 Distributed Systems', 'https://pdos.csail.mit.edu/6.824/'],
      ['Raft paper', 'https://raft.github.io/raft.pdf']
    ]
  },
  {
    title: 'API Gateway / Service Discovery / Microservices',
    summary: '計劃中使用 load balancer 和 reverse proxy 建立基礎，但沒有深入 API gateway、service discovery、service mesh、microservice boundary。',
    whySkipped: '入門階段過早進入 microservices 容易導致 over-engineering，反而忽略需求與資料模型。',
    next: '先能說清 monolith vs microservices 的 trade-off，再學 gateway、service registry、circuit breaker。',
    links: [
      ['System Design Primer: Reverse proxy', 'https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server'],
      ['Microsoft: API Gateway pattern', 'https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway']
    ]
  },
  {
    title: 'SQL Tuning / Index Internals',
    summary: 'Week 2 有設計 table/index，但沒有深入 query planner、B-tree、covering index、normalization/denormalization 與 SQL tuning。',
    whySkipped: '這是 DB 專題，對後端職位很有價值，但一個月入門計劃只能先建立 index 與 query pattern 的觀念。',
    next: '補 CMU 15-445 的 indexing、query processing，再用自己的 project 做 EXPLAIN 分析。',
    links: [
      ['CMU 15-445 Database Systems', 'https://15445.courses.cs.cmu.edu/'],
      ['Use The Index, Luke', 'https://use-the-index-luke.com/']
    ]
  },
  {
    title: 'Security Deep Dive',
    summary: 'Week 4 有安全與 AI security，但沒有深入 threat modeling、OAuth/OIDC、secrets management、encryption、audit logging。',
    whySkipped: '安全議題範圍很大，入門面試先要求不要忽略 auth、rate limit、input validation 即可。',
    next: '補 OWASP Top 10、OAuth/OIDC 基礎，並練習為 URL shortener 做 abuse prevention design。',
    links: [
      ['OWASP Top 10', 'https://owasp.org/www-project-top-ten/'],
      ['OWASP Top 10 for LLM Applications', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/']
    ]
  },
  {
    title: 'Deployment / Rollout / Migration',
    summary: 'Project 有部署到 Vercel 的實作，但計劃沒有深入 blue-green deployment、canary rollout、feature flags、schema migration。',
    whySkipped: '這些偏實務營運與平台工程，適合在完成基本系統設計後補。',
    next: '練習為 capstone project 寫 rollout plan：如何灰度發布、如何回滾、如何做 DB migration。',
    links: [
      ['Martin Fowler: Feature Toggles', 'https://martinfowler.com/articles/feature-toggles.html'],
      ['Google SRE Book: Release Engineering', 'https://sre.google/sre-book/release-engineering/']
    ]
  },
  {
    title: 'Cost Modeling / Capacity Planning',
    summary: 'Day 22 有 back-of-the-envelope estimation，但沒有深入 cloud cost、storage tier、egress、autoscaling policy。',
    whySkipped: '成本模型需要實際雲平台背景，入門計劃先學數量級估算。',
    next: '把每個 project 補一段成本假設：storage、bandwidth、compute、cache、queue 各自怎麼成長。',
    links: [
      ['ByteByteGo: Back-of-the-envelope Estimation', 'https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation'],
      ['AWS Well-Architected: Cost Optimization', 'https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html']
    ]
  }
];

function renderUncoveredTopic(topic) {
  return `<article class="uncovered-card">
    <h3>${topic.title}</h3>
    <p>${topic.summary}</p>
    <dl>
      <dt>為什麼四週內先不深入</dt><dd>${topic.whySkipped}</dd>
      <dt>建議延伸方式</dt><dd>${topic.next}</dd>
    </dl>
    <h4>延伸閱讀</h4>
    <ul class="link-list">${topic.links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul>
  </article>`;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyContentFixes);
} else {
  applyContentFixes();
}
