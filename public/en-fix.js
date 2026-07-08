const EXTRA_EN = new Map(Object.entries({
  '繁中': '繁中',
  '給面試準備者的入門導向學習安排': 'Beginner-friendly learning plan for interview preparation',
  'System Design Primer 一個月面試讀書計劃': 'One-Month System Design Primer Interview Study Plan',
  '用 30 天建立 system design 基本語言、練習常見題目、加入 AI / vibe coding 驗證流程，並完成可展示的小 project。': 'Build core system design vocabulary in 30 days, practice common interview questions, add an AI / vibe-coding verification loop, and complete small demonstrable projects.',
  '開始讀書計劃': 'Start the study plan',
  'LeetCode 題單': 'LeetCode plan',
  '天': 'days',
  '週 Project': 'weekly projects',
  'LeetCode 題': 'LeetCode problems',
  '學習目標與原則': 'Learning goals and principles',
  '一個月後的目標': 'Goal after one month',
  '每日節奏': 'Daily rhythm',
  'AI 使用方式': 'How to use AI',
  '每日筆記模板': 'Daily notes template',
  'AI 時代的補充能力': 'Additional skills in the AI era',
  '四週讀書計劃': 'Four-week study plan',
  '架構思考題': 'Architecture thinking questions',
  '常見設計文件與寫作方式': 'Common design documents and how to write them',
  '每週小 Project': 'Weekly mini projects',
  '一個月後應達到的標準': 'Expected outcomes after one month',
  '參考資源與延伸閱讀': 'References and further reading',
  '四週未涵蓋主題': 'Topics not covered in the four weeks',
  'LeetCode 一個月練習計劃': 'One-month LeetCode practice plan',
  '30 天題單': '30-day problem set',
  '教學資源': 'Teaching resources',
  'AI 檢討 Prompt': 'AI review prompt',
  '練完題目後貼給 ChatGPT 的檢討模板': 'Review prompt template to paste into ChatGPT after solving',
  '讀 repo': 'Read the repo',
  '閱讀範圍': 'Reading range',
  '重點': 'Focus',
  '讀完應知道': 'After reading, you should know',
  '延伸閱讀': 'Further reading',
  'AI / vibe coding': 'AI / vibe coding',
  '練習 / 產出': 'Practice / output',
  '思考題': 'Thinking questions',
  '參考資源': 'References',
  '延伸方式': 'How to continue',
  '英文資源': 'English resources',
  '為什麼四週內先不深入': 'Why this is not covered deeply in four weeks',
  '建議延伸方式': 'Suggested next steps',
  '何時使用': 'When to use it',
  '建議章節': 'Suggested sections',
  '撰寫提醒': 'Writing tips',
  '用途': 'Purpose',
  'AI 產生後要人工讀 code、跑測試、檢查安全與可維護性。': 'After AI generates code, read it manually, run tests, and check security and maintainability.',
  'AI 用來 review 正確性、style、best practice、edge cases 與口說表達，不直接代寫最佳解。': 'Use AI to review correctness, style, best practices, edge cases, and interview communication, not to directly write the optimal solution.',
  'System Design 讀 repo / 延伸閱讀；LeetCode 以 pattern 為單位練題；完成後用 AI 做 code review。': 'Read the system design repo and related resources; practice LeetCode by pattern; use AI for code review after solving.',
  '能在 30–45 分鐘內拆解一題簡單 system design 題目，並每天完成 3–5 題 easy–medium coding practice。': 'Be able to break down a simple system design question in 30–45 minutes and complete 3–5 easy-to-medium coding problems per day.',
  '這份計劃不要求把 System Design Primer 全部讀完，而是把面試最常用的基礎元件、回答流程、trade-off 判斷、coding patterns 與文件化能力練到能說出口。': 'This plan does not require reading all of System Design Primer. It focuses on the most interview-relevant components, answer structure, trade-off judgment, coding patterns, and documentation skills.',
  'AI / vibe coding 是加速學習與原型開發的工具，不是取代 system design 與 coding 基礎。工程師最大的價值，會越來越集中在需求釐清、判斷 trade-off、驗證 AI 產物與把決策寫清楚。': 'AI / vibe coding accelerates learning and prototyping, but it does not replace system design and coding fundamentals. Engineers create the most value by clarifying requirements, judging trade-offs, verifying AI output, and documenting decisions clearly.',
  '點擊週次可以展開/收合。每天都有 repo 閱讀、英文延伸閱讀、AI 補充、思考題與練習產出。': 'Click each week to expand or collapse it. Each day includes repo reading, English resources, AI practice, thinking questions, and outputs.',
  '每天讀完 repo 後，回答該日卡片裡的思考題。重點不是背答案，而是把 Context、Options、Decision、Consequences 說清楚。': 'After reading the repo each day, answer the thinking questions in that day’s card. The goal is not memorization, but explaining Context, Options, Decision, and Consequences clearly.',
  'PRD、ADR、Design Doc、RFC 等文件目的不同。好的工程師要能根據決策階段選擇合適文件，讓團隊對齊「要做什麼、為什麼做、怎麼做、為什麼這樣做」。': 'PRDs, ADRs, Design Docs, and RFCs serve different purposes. A good engineer chooses the right document for the decision stage and aligns the team on what to build, why, how, and why this approach.',
  '每週都把抽象概念落到 API、DB schema、queue/cache、測試與 README。': 'Each week turns abstract concepts into APIs, DB schemas, queues/caches, tests, and README documentation.',
  '以英文資源為主，適合搭配每天主題挑選閱讀。': 'Primarily English resources, suitable for daily topic-based reading.',
  '這份一個月計劃刻意以面試入門與可練習的核心題為主。下面主題在 System Design Primer 或相關英文資源中很重要，但四週內只輕觸或沒有深入，適合讀者依職位需求延伸閱讀。': 'This one-month plan intentionally focuses on interview fundamentals and practical core exercises. The following topics are important in System Design Primer and related English resources, but are only lightly touched or not deeply covered within four weeks. Explore them based on your target role.',
  '以 LeetCode 75、Top Interview 150、NeetCode Roadmap、Grind 75 等常見題單為參考，安排 easy–medium 題目。每天 3–5 題，重點是 pattern recognition、正確性、複雜度與口說能力。': 'Based on common lists such as LeetCode 75, Top Interview 150, NeetCode Roadmap, and Grind 75, this plan focuses on easy-to-medium problems. Practice 3–5 problems per day with an emphasis on pattern recognition, correctness, complexity, and communication.',
  '這份 prompt 會要求 AI 先問問題、引導你檢討，而不是直接給完整最佳解。建議先自己通過測資，再貼上題目、思路與程式碼。': 'This prompt asks AI to first ask questions and guide your review instead of directly giving a complete optimal solution. Try to pass the tests yourself before pasting the problem, approach, and code.',

  'Build System Design Vocabulary': 'Build System Design Vocabulary',
  'Data Layer, Cache, and Asynchrony': 'Data Layer, Cache, and Asynchrony',
  'Start Practicing Interview Questions': 'Start Practicing Interview Questions',
  'Mock Interviews, AI Security, and Reinforcement': 'Mock Interviews, AI Security, and Reinforcement',

  'Array / Hash Map 基礎': 'Array / Hash Map Basics',
  'Prefix Sum / Product': 'Prefix Sum / Product',
  'Two Pointers': 'Two Pointers',
  'Sliding Window 入門': 'Sliding Window Basics',
  'String / Counting': 'String / Counting',
  'Stack': 'Stack',
  'Binary Search 基礎': 'Binary Search Basics',
  'Binary Search on Answer': 'Binary Search on Answer',
  'Linked List 基礎': 'Linked List Basics',
  'Linked List Medium': 'Linked List Medium',
  'Intervals': 'Intervals',
  'Matrix': 'Matrix',
  'Tree DFS': 'Tree DFS',
  'Tree BFS / Level Order': 'Tree BFS / Level Order',
  'BST': 'BST',
  'Heap / Priority Queue': 'Heap / Priority Queue',
  'Backtracking': 'Backtracking',
  'Trie / Prefix': 'Trie / Prefix',
  'Graph BFS / DFS': 'Graph BFS / DFS',
  'Graph Topological Sort': 'Graph Topological Sort',
  'Greedy': 'Greedy',
  'DP 1D': '1D DP',
  'DP 2D / Sequence': '2D DP / Sequence DP',
  'Bit / Math': 'Bit / Math',
  'Mixed Mock 1': 'Mixed Mock 1',
  'Mixed Mock 2': 'Mixed Mock 2',
  'Final Review': 'Final Review',
  'Week 1 Review': 'Week 1 Review',
  'Week 2 Review': 'Week 2 Review',
  'Week 3 Review': 'Week 3 Review',

  '先練 frequency map、set lookup、一次掃描。': 'Practice frequency maps, set lookups, and one-pass scans.',
  '練習用前綴資訊避免 O(n²)。': 'Use prefix information to avoid O(n²) solutions.',
  '練習排序後雙指針與左右夾逼。': 'Practice two pointers after sorting and inward scanning.',
  '固定/變動 window，維護 window state。': 'Practice fixed and variable windows while maintaining window state.',
  '字串轉換、counter、排序與 bucket 思維。': 'Practice string transformations, counters, sorting, and bucket thinking.',
  '括號、monotonic stack、最小值 stack。': 'Practice parentheses, monotonic stacks, and min stacks.',
  '重寫本週錯題，整理 pattern。': 'Redo missed problems from this week and summarize the patterns.',
  '搜尋答案與搜尋位置。': 'Search for positions and search over the answer space.',
  '把判斷函式轉成二分搜尋。': 'Convert a monotonic predicate into binary search.',
  '指標操作、dummy node、快慢指標。': 'Practice pointer manipulation, dummy nodes, and fast/slow pointers.',
  '練習 reorder、remove、merge pattern。': 'Practice reorder, remove, and merge patterns.',
  '排序後處理 overlap。': 'Sort first, then handle overlaps.',
  '座標、方向、in-place 更新。': 'Practice coordinates, directions, and in-place updates.',
  '重寫 binary search / linked list / intervals 錯題。': 'Redo missed binary search, linked list, and interval problems.',
  '遞迴、base case、回傳值設計。': 'Practice recursion, base cases, and return-value design.',
  'Queue、level traversal、右視圖。': 'Practice queues, level traversal, and right-side view.',
  '利用 BST ordering 降低複雜度。': 'Use BST ordering to reduce complexity.',
  'Top K、stream、merge sorted data。': 'Practice Top K, streams, and merging sorted data.',
  '選 / 不選、path、visited、剪枝。': 'Practice choose/not choose, path state, visited state, and pruning.',
  'prefix lookup、字典樹 API 設計。': 'Practice prefix lookup and Trie API design.',
  '重寫 tree / heap / backtracking 錯題。': 'Redo missed tree, heap, and backtracking problems.',
  'visited、adjacency list、connected components。': 'Practice visited sets, adjacency lists, and connected components.',
  'dependency、in-degree、cycle detection。': 'Practice dependencies, in-degree, and cycle detection.',
  '局部選擇與反例檢查。': 'Practice local choices and counterexample checking.',
  '狀態定義、transition、base case。': 'Practice state definition, transitions, and base cases.',
  '二維狀態、字串 DP。': 'Practice 2D states and string DP.',
  '位元、數學邊界、overflow。': 'Practice bits, mathematical edge cases, and overflow.',
  '限時 75 分鐘，模擬面試節奏。': '75-minute timed mock interview practice.',
  '限時 75 分鐘，要求口說思路。': '75-minute timed mock with verbal explanation.',
  '整理模板、錯題、常見 patterns。': 'Review templates, missed problems, and common patterns.',
  '寫完後': 'After solving',
  '提交通過後，把題目、思路與程式碼貼到「AI 檢討 Prompt」，請 AI 用問題引導你檢查 correctness、style、best practice、complexity、edge cases 與 pattern。': 'After passing the tests, paste the problem, approach, and code into the AI Review Prompt. Ask AI to guide you through correctness, style, best practices, complexity, edge cases, and pattern recognition.',

  'Search Index / 搜尋系統': 'Search Index / Search Systems',
  'Observability / 監控與可觀測性': 'Observability / Monitoring',
  'Consensus / Leader Election / Quorum': 'Consensus / Leader Election / Quorum',
  'API Gateway / Service Discovery / Microservices': 'API Gateway / Service Discovery / Microservices',
  'SQL Tuning / Index Internals': 'SQL Tuning / Index Internals',
  'Security Deep Dive': 'Security Deep Dive',
  'Deployment / Rollout / Migration': 'Deployment / Rollout / Migration',
  'Cost Modeling / Capacity Planning': 'Cost Modeling / Capacity Planning'
}));

const EN_PROMPT = `You are a strict but constructive coding interview coach.\n\nPlease review my LeetCode solution using a Socratic review style. Do not immediately give me the full optimal solution.\n\nProblem name: <paste problem name and link>\nDifficulty: <Easy / Medium>\nLanguage: <Python / JavaScript / Go / Java ...>\nMy approach:\n<describe your approach in 3–5 sentences>\n\nMy code:\n\`\`\`\n<paste your code here>\n\`\`\`\n\nPlease review using the following structure:\n\n1. Correctness\n- First judge whether my solution is likely correct.\n- If you find a bug, guide me with questions first, for example: “What would your code return when the input is ___?”\n- Provide at least 5 test cases, including normal, boundary, extreme, duplicate-value, empty-input, or minimum-input cases.\n\n2. Time and space complexity\n- Ask me: What do you think the time complexity and space complexity are?\n- After I answer, confirm or correct my analysis.\n- If a better complexity exists, hint at the direction first instead of pasting the full optimal solution.\n\n3. Coding style\n- Review naming, control flow, repeated logic, and readability.\n- Point out the 2–3 most valuable improvements.\n- If improvement is possible, explain why first and show only small snippets, not a full rewrite.\n\n4. Best practices\n- Check whether my solution follows common practices in this language.\n- Pay special attention to mutation, side effects, overflow, index boundaries, null/None, early returns, and input validation.\n- Ask me: Which of these risks do you think an interviewer is most likely to ask about?\n\n5. Interview communication — guide me with questions\n- Do not directly write the full interview script for me.\n- Ask me in order:\n  a. What is your intuition?\n  b. What are your algorithm steps?\n  c. What is the complexity, and why?\n  d. Which edge cases would you proactively mention?\n- After I answer, help me refine my response into a clearer interview explanation.\n\n6. Pattern recognition — guide me with questions\n- Do not directly tell me the answer first.\n- Ask me:\n  a. What pattern do you think this problem belongs to?\n  b. What signals in the prompt point to this pattern?\n  c. If the input constraints changed, would the pattern change?\n- After I answer, supplement the correct pattern, common variations, and 2–3 similar problems.\n\n7. Cheat book / code template\n- Based on this pattern, provide an interview-prep cheat book:\n  - Pattern name\n  - When to use it\n  - Common problem signals\n  - Common edge cases\n  - Time / space complexity template\n  - Interview explanation template\n- Provide a short code template, but do not fill in the full answer to this exact problem.\n\n8. Review conclusion\n- End with 3 improvement tasks:\n  1. One correctness task\n  2. One style / best-practice task\n  3. One pattern-recognition task`;

function hasCJK(text) {
  return /[\u3400-\u9FFF]/.test(text);
}

function translateMore(text) {
  if (!text || !text.trim()) return text;
  if (EXTRA_EN.has(text.trim())) return text.replace(text.trim(), EXTRA_EN.get(text.trim()));
  let out = text;
  for (const [zh, en] of EXTRA_EN.entries()) {
    if (zh && out.includes(zh)) out = out.split(zh).join(en);
  }
  const tokens = [
    ['使用者', 'users'], ['系統', 'system'], ['題目', 'problem'], ['資料', 'data'], ['資料庫', 'database'], ['架構', 'architecture'], ['面試', 'interview'], ['回答', 'answer'], ['練習', 'practice'], ['完成', 'complete'], ['測試', 'tests'], ['程式碼', 'code'], ['正確性', 'correctness'], ['複雜度', 'complexity'], ['常見', 'common'], ['主題', 'topic'], ['如何', 'how to'], ['為什麼', 'why'], ['什麼', 'what'], ['哪個', 'which'], ['需要', 'need'], ['選擇', 'choose'], ['取捨', 'trade-off'], ['風險', 'risk'], ['成本', 'cost'], ['延遲', 'latency'], ['可用性', 'availability'], ['一致性', 'consistency'], ['快取', 'cache'], ['佇列', 'queue'], ['讀完後', 'after reading'], ['重點', 'focus'], ['範圍', 'range']
  ];
  for (const [zh, en] of tokens) out = out.split(zh).join(en);
  return out;
}

function translateResidualNodes() {
  if (document.documentElement.dataset.lang !== 'en') return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.datasetOriginal) node.datasetOriginal = node.nodeValue;
    node.nodeValue = translateMore(node.datasetOriginal);
  });
  document.querySelectorAll('.prompt-card textarea').forEach((ta) => { ta.value = EN_PROMPT; });
}

function installEnglishFix() {
  translateResidualNodes();
  const observer = new MutationObserver(() => setTimeout(translateResidualNodes, 20));
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener('click', (event) => {
    if (event.target.closest('.language-toggle')) setTimeout(translateResidualNodes, 80);
  });
  setTimeout(translateResidualNodes, 600);
  setTimeout(translateResidualNodes, 1500);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installEnglishFix);
else installEnglishFix();
