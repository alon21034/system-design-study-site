const weeks = [
  {
    week: 'Week 1',
    title: '建立系統設計基本語言',
    goal: '讓面試準備者能聽懂 scalability、latency、availability、cache、load balancer 等核心詞彙。',
    days: [
      ['Day 1', 'System Design 是什麼？', 'Motivation、Study guide、System design topics: start here', 'System Design Primer README、ByteByteGo System Design 101', '請 AI 用兩種版本解釋 system design，然後自己修正成 5 句話。', '用 5 句話解釋：什麼是 system design interview？'],
      ['Day 2', 'Scalability 基礎', 'Scalability lecture / article、Vertical scaling、Horizontal scaling', 'ByteByteGo: Scale From Zero To Millions Of Users', '請 AI 列出留言板 bottleneck，再分類成 compute / database / network / storage。', '留言板從 100 人變 100 萬人，可能遇到什麼問題？'],
      ['Day 3', 'Performance vs Scalability / Latency vs Throughput', 'Performance vs scalability、Latency vs throughput', 'System Design Primer、ByteByteGo System Design 101', '請 AI 設計 latency/throughput 指標，再挑 2 個適合面試口說。', '比較聊天室和影片轉檔服務：哪個重視 latency？哪個重視 throughput？'],
      ['Day 4', 'Availability vs Consistency / CAP', 'Availability vs consistency、CAP theorem、Consistency patterns', 'ByteByteGo: CAP Theorem', '請 AI 舉 eventual consistency 例子，人工檢查是否能接受短暫不一致。', '銀行轉帳、like 數、購物車庫存，各需要什麼 consistency？'],
      ['Day 5', 'DNS / CDN / Load Balancer', 'DNS、CDN、Load balancer、Reverse proxy', 'ByteByteGo: Scalability Strategies', '把架構圖貼給 AI，請它找 single point of failure。', '畫出 User → DNS → CDN → Load Balancer → Web Server → Database。'],
      ['Day 6', 'Week 1 Mock：URL Shortener 入門版', 'Design Pastebin.com or Bit.ly solution', 'System Design Primer: Pastebin / Bit.ly', '請 AI 扮演面試官，只問 clarification questions。', '題目：Design a simple URL shortener。'],
      ['Day 7', '休息 / 補進度', '回顧 Week 1 筆記', '補齊不懂的概念', '整理本週 prompt log。', '回顧 Week 1 筆記，補齊不懂的概念。']
    ]
  },
  {
    week: 'Week 2',
    title: '資料層、Cache、非同步',
    goal: '知道 database、cache、message queue 在系統裡各自解決什麼問題。',
    days: [
      ['Day 8', 'RDBMS 基礎', 'RDBMS、Master-slave replication、Master-master replication', 'CMU 15-445、ByteByteGo Database and Storage', '請 AI 列出 posts table 查詢，再自己決定 index。', '設計 users table 和 posts table，並說明 index。'],
      ['Day 9', 'Partition / Sharding', 'Federation、Sharding', 'ByteByteGo Database Sharding', '請 AI 提出 shard key，再用 hot shard、query pattern、rebalancing 評分。', '1 億 user，要用 user_id 還是 country 當 shard key？'],
      ['Day 10', 'SQL vs NoSQL', 'NoSQL、Key-value、Document、Wide column、SQL or NoSQL', 'System Design Primer: SQL or NoSQL', '請 AI 反駁你的選擇，強迫自己補 trade-off。', 'User profile、order、session token、chat message 適合 SQL 還是 NoSQL？'],
      ['Day 11', 'Cache', 'Cache、Client/CDN/Application/Database caching、Cache-aside、Write-through', 'System Design Primer: Cache', '請 AI 產生 cache-aside pseudo code，自己檢查 stale data、TTL、stampede。', '熱門文章列表怎麼加 cache？資料更新時 cache 怎麼辦？'],
      ['Day 12', 'Message Queue / Task Queue', 'Asynchronism、Message queues、Task queues、Back pressure', 'MIT 6.5840、MIT 6.824 MapReduce', '請 AI 找 failure cases：worker crash、duplicate message、retry storm。', '圖片上傳後產生縮圖，畫同步版和非同步版。'],
      ['Day 13', 'Week 2 Mock：Image Upload Service', 'Object store / CDN topics', 'System Design Primer object store / CDN', '請 AI 當 reviewer，只追問 worker 失敗與重複處理。', '題目：Design an image upload service。'],
      ['Day 14', '休息 / 補進度', '回顧資料層、cache、queue', '補 Week 2 弱點', '把 URL shortener 加 cache 的設計講一次，請 AI 找不清楚處。', '整理 DB、cache、queue 的用途與差異。']
    ]
  },
  {
    week: 'Week 3',
    title: '開始練面試題',
    goal: '從讀知識轉成能回答題目，固定使用面試回答框架。',
    days: [
      ['Day 15', '面試回答框架', 'How to approach a system design interview question', 'System Design Primer interview approach', '用 AI 做 mock interviewer，一次只問一個問題。', '拿 URL shortener 寫出 10 個 clarification questions。'],
      ['Day 16', 'Design Pastebin / Bit.ly', 'Design Pastebin.com or Bit.ly solution', 'System Design Primer: Pastebin / Bit.ly', '請 AI 追問 collision、TTL、abuse prevention。', '不看答案，自己重畫一次架構圖。'],
      ['Day 17', 'Design Twitter Timeline / Feed 簡化版', 'Design Twitter timeline and search', 'System Design Primer Twitter timeline', '讓 AI 生成 fanout on write/read 流程圖文字版，再補 celebrity problem。', '比較 read-time query 與 precomputed timeline。'],
      ['Day 18', 'Design Web Crawler 簡化版', 'Design a web crawler', 'Hello Interview: Design a Web Crawler', '請 AI 檢查 robots.txt、rate limit、dedup。', '為什麼 crawler 需要 queue？為什麼不能無限制 request 同網站？'],
      ['Day 19', 'OOD 基礎', 'Hash map、LRU cache、Parking lot', 'System Design Primer OOD questions', '請 AI 產生 LRU Cache 錯誤實作，再指出為什麼不是 O(1)。', 'Design LRU Cache：get / put / O(1)。'],
      ['Day 20', 'Week 3 Mock', 'URL shortener 或 News feed', 'System Design Primer solutions', '錄音或文字稿給 AI，只針對需求與 trade-off 打分。', '30 分鐘回答；先問需求、畫圖、講 trade-off。'],
      ['Day 21', '休息 / 補進度', '整理 mock 答案', '補 Week 3 弱點', '把模板壓成 5/15/30 分鐘版本。', '把 mock 答案整理成一頁模板。']
    ]
  },
  {
    week: 'Week 4',
    title: '模擬面試、AI 安全與補強',
    goal: '把知識轉成面試表現，補 AI 時代必備的驗證與安全觀念。',
    days: [
      ['Day 22', 'Back-of-the-envelope calculations', 'Appendix、Powers of two、Latency numbers、Back-of-the-envelope', 'System Design Primer calculations', '先自己算，再請 AI 檢查單位與數量級。', '每天 100 萬 users，每人 10 筆短網址，一年資料量與 storage 粗估。'],
      ['Day 23', 'Real World Architecture 輕讀', 'Real world architectures 選 1–2 篇', 'ByteByteGo System Design 101', '請 AI 濃縮成架構元件表，但要自己檢查是否過度簡化。', '整理成 Problem → Bottleneck → Solution → Trade-off。'],
      ['Day 24', 'Security / Communication / AI Security', 'Communication、TCP/UDP、RPC/REST、Security', 'OWASP Top 10 for LLM Applications', '請 AI 做 security review，但權限、secret、input validation 要人工驗證。', 'URL shortener 可能被濫用成 phishing link，怎麼防？'],
      ['Day 25', 'Mock 1：URL Shortener 完整版', 'Design Pastebin / Bit.ly', 'System Design Primer solution', '請 AI 根據 rubric 評分，並引用你回答中的具體句子。', '45 分鐘完整 mock。'],
      ['Day 26', 'Mock 2：Feed / Timeline', 'Twitter timeline and search', 'System Design Primer solution', '請 AI 追問擴展到 1 億 users 的變化。', '完成 Feed / Timeline mock。'],
      ['Day 27', 'Mock 3：Image Upload / Processing', 'Object store / CDN / queue topics', 'Architecture patterns', '請 AI 從 failure mode 追問 duplicate、timeout、partial failure、retry。', '完成 Image Upload / Processing mock。'],
      ['Day 28', 'Mock 4：自由題', 'Chat app / notification / file sharing / simple search', 'System Design Primer question list', '用 AI 做 code/design review，找測試、觀測性、安全缺口。', '回答後整理成一頁模板。'],
      ['Day 29', '總複習', '常見元件與 trade-off', '自己的 cheat sheet', '請 AI 隨機抽 5 個 trade-off，要求 60 秒回答。', '整理一張 cheat sheet。'],
      ['Day 30', 'Final Mock Interview', 'URL shortener 或 image upload service', '最後看 repo solution', '請 AI 只基於 rubric 評分，不要提供新架構答案。', '45 分鐘完整回答。']
    ]
  }
];

const projects = [
  ['Week 1', 'Mini URL Shortener', ['API', 'DB schema', 'collision', 'index'], 'POST /urls 產生 short_code，GET /{short_code} 查詢或 redirect，處理 duplicate URL、invalid URL、collision。', ['README', '架構圖', 'API spec', '測試結果']],
  ['Week 2', 'Image Upload + Async Thumbnail Worker', ['Queue', 'Worker', 'Retry', 'Idempotency'], '上傳圖片 metadata 或本地檔案，透過 queue/worker 產生 thumbnail，支援狀態查詢與 failure handling。', ['同步/非同步流程', '狀態轉移', 'integration tests', 'failure checklist']],
  ['Week 3', 'Mini Feed / Timeline Service', ['Fanout', 'Pagination', 'Index', 'Benchmark'], '支援 follow、post、timeline，實作 read-time query 與 precomputed timeline 兩種簡化策略。', ['策略比較', 'schema + indexes', '壓測結果', 'celebrity problem 解釋']],
  ['Week 4', 'Final Capstone', ['Portfolio', 'README', 'Mock interview', 'AI verification'], '從前三週 project 擇一補完整，形成可在面試展示的作品，包含 scale-up 設計與 AI 使用紀錄。', ['GitHub repo 或 zip', 'README 首頁', '架構圖', '測試結果', '一頁口說稿']]
];

const checks = [
  '看到題目後，不會直接開始畫架構。',
  '會先問需求。',
  '會定義 API。',
  '會設計基本 DB schema。',
  '會畫出合理的 high-level architecture。',
  '知道什麼時候用 cache、queue、load balancer。',
  '能說出至少 2–3 個 trade-off。',
  '能說明自己如何使用 AI coding tool，以及如何人工驗證 AI 產物。',
  '能展示至少一個小 project 的 README、架構圖、測試與 trade-off。'
];

const resources = [
  ['System Design Primer', '主要參考 repo，包含 topics、interview approach、solutions 與 OOD 題目。', 'https://github.com/donnemartin/system-design-primer'],
  ['ByteByteGo System Design 101', '適合用圖解快速補 system design 基礎概念。', 'https://blog.bytebytego.com/'],
  ['ByteByteGo Database Sharding', '搭配 sharding 主題閱讀。', 'https://bytebytego.com/'],
  ['CMU 15-445 Database Systems', '資料庫系統課程，適合延伸理解 DB internals。', 'https://15445.courses.cs.cmu.edu/'],
  ['MIT 6.5840 Distributed Systems', '分散式系統課程，適合 Week 2/4 補充。', 'https://pdos.csail.mit.edu/6.824/'],
  ['The Odin Project NodeJS', '適合參考 backend project style。', 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs'],
  ['GitHub Copilot best practices', 'AI coding tool 使用與 prompt 建議。', 'https://docs.github.com/en/copilot'],
  ['OWASP Top 10 for LLM Applications', 'AI app security 與 prompt injection 基礎。', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/'],
  ['Cursor', 'AI coding agent 與 workflow 相關文件。', 'https://docs.cursor.com/']
];

function listFromText(text) {
  return `<ul>${String(text).split('、').map(item => `<li>${item.trim()}</li>`).join('')}</ul>`;
}

function list(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
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
        <div class="accordion-content">
          <div class="day-grid">
            ${week.days.map(day => `
              <article class="day-card">
                <span class="day-meta">${day[0]}</span>
                <h3>${day[1]}</h3>
                <div class="day-sections">
                  <div><strong>讀 repo</strong>${listFromText(day[2])}</div>
                  <div><strong>延伸閱讀</strong>${listFromText(day[3])}</div>
                  <div><strong>AI / vibe coding</strong><p>${day[4]}</p></div>
                  <div><strong>練習 / 產出</strong><p>${day[5]}</p></div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');
  }

  const projectGrid = document.querySelector('#projectGrid');
  if (projectGrid) {
    projectGrid.innerHTML = projects.map(p => `
      <article class="project-card">
        <div class="week">${p[0]}</div>
        <h3>${p[1]}</h3>
        <p>${p[3]}</p>
        <div class="badges">${p[2].map(skill => `<span class="badge">${skill}</span>`).join('')}</div>
        <h4>交付物</h4>
        ${list(p[4])}
      </article>
    `).join('');
  }

  const finalChecklist = document.querySelector('#finalChecklist');
  if (finalChecklist) {
    finalChecklist.innerHTML = checks.map(item => `<div class="check-item"><span>✓</span><div>${item}</div></div>`).join('');
  }

  const resourceList = document.querySelector('#resourceList');
  if (resourceList) {
    resourceList.innerHTML = resources.map(([title, desc, url]) => `
      <article class="resource-card">
        <a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a>
        <p>${desc}</p>
      </article>
    `).join('');
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}
