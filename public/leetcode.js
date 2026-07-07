const leetLinks = {
  lc75: 'https://leetcode.com/studyplan/leetcode-75/',
  top150: 'https://leetcode.com/studyplan/top-interview-150/',
  neetcode: 'https://neetcode.io/roadmap',
  grind75: 'https://www.techinterviewhandbook.org/grind75/',
  handbookAlgo: 'https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/',
  cpAlgo: 'https://cp-algorithms.com/',
  structy: 'https://www.structy.net/',
  bigO: 'https://www.bigocheatsheet.com/',
};

function p(title, slug, diff = 'M') {
  return { title, url: `https://leetcode.com/problems/${slug}/`, diff };
}

const leetcodeDays = [
  ['Day 1', 'Array / Hash Map 基礎', '先練 frequency map、set lookup、一次掃描。', [p('Two Sum','two-sum','E'), p('Contains Duplicate','contains-duplicate','E'), p('Valid Anagram','valid-anagram','E'), p('Group Anagrams','group-anagrams','M')]],
  ['Day 2', 'Prefix Sum / Product', '練習用前綴資訊避免 O(n²)。', [p('Running Sum of 1d Array','running-sum-of-1d-array','E'), p('Find Pivot Index','find-pivot-index','E'), p('Product of Array Except Self','product-of-array-except-self','M')]],
  ['Day 3', 'Two Pointers', '練習排序後雙指針與左右夾逼。', [p('Valid Palindrome','valid-palindrome','E'), p('Two Sum II','two-sum-ii-input-array-is-sorted','M'), p('3Sum','3sum','M'), p('Container With Most Water','container-with-most-water','M')]],
  ['Day 4', 'Sliding Window 入門', '固定/變動 window，維護 window state。', [p('Best Time to Buy and Sell Stock','best-time-to-buy-and-sell-stock','E'), p('Maximum Average Subarray I','maximum-average-subarray-i','E'), p('Longest Substring Without Repeating Characters','longest-substring-without-repeating-characters','M')]],
  ['Day 5', 'String / Counting', '字串轉換、counter、排序與 bucket 思維。', [p('Isomorphic Strings','isomorphic-strings','E'), p('Ransom Note','ransom-note','E'), p('Top K Frequent Elements','top-k-frequent-elements','M')]],
  ['Day 6', 'Stack', '括號、monotonic stack、最小值 stack。', [p('Valid Parentheses','valid-parentheses','E'), p('Min Stack','min-stack','M'), p('Daily Temperatures','daily-temperatures','M'), p('Evaluate Reverse Polish Notation','evaluate-reverse-polish-notation','M')]],
  ['Day 7', 'Week 1 Review', '重寫本週錯題，整理 pattern。', [p('Two Sum','two-sum','E'), p('3Sum','3sum','M'), p('Longest Substring Without Repeating Characters','longest-substring-without-repeating-characters','M')]],
  ['Day 8', 'Binary Search 基礎', '搜尋答案與搜尋位置。', [p('Binary Search','binary-search','E'), p('Search Insert Position','search-insert-position','E'), p('Search in Rotated Sorted Array','search-in-rotated-sorted-array','M')]],
  ['Day 9', 'Binary Search on Answer', '把判斷函式轉成二分搜尋。', [p('Koko Eating Bananas','koko-eating-bananas','M'), p('Capacity To Ship Packages Within D Days','capacity-to-ship-packages-within-d-days','M'), p('Find Minimum in Rotated Sorted Array','find-minimum-in-rotated-sorted-array','M')]],
  ['Day 10', 'Linked List 基礎', '指標操作、dummy node、快慢指標。', [p('Reverse Linked List','reverse-linked-list','E'), p('Merge Two Sorted Lists','merge-two-sorted-lists','E'), p('Linked List Cycle','linked-list-cycle','E'), p('Middle of the Linked List','middle-of-the-linked-list','E')]],
  ['Day 11', 'Linked List Medium', '練習 reorder、remove、merge pattern。', [p('Remove Nth Node From End of List','remove-nth-node-from-end-of-list','M'), p('Reorder List','reorder-list','M'), p('Add Two Numbers','add-two-numbers','M')]],
  ['Day 12', 'Intervals', '排序後處理 overlap。', [p('Merge Intervals','merge-intervals','M'), p('Insert Interval','insert-interval','M'), p('Non-overlapping Intervals','non-overlapping-intervals','M')]],
  ['Day 13', 'Matrix', '座標、方向、in-place 更新。', [p('Spiral Matrix','spiral-matrix','M'), p('Set Matrix Zeroes','set-matrix-zeroes','M'), p('Rotate Image','rotate-image','M')]],
  ['Day 14', 'Week 2 Review', '重寫 binary search / linked list / intervals 錯題。', [p('Search in Rotated Sorted Array','search-in-rotated-sorted-array','M'), p('Remove Nth Node From End of List','remove-nth-node-from-end-of-list','M'), p('Merge Intervals','merge-intervals','M')]],
  ['Day 15', 'Tree DFS', '遞迴、base case、回傳值設計。', [p('Maximum Depth of Binary Tree','maximum-depth-of-binary-tree','E'), p('Invert Binary Tree','invert-binary-tree','E'), p('Diameter of Binary Tree','diameter-of-binary-tree','E'), p('Balanced Binary Tree','balanced-binary-tree','E')]],
  ['Day 16', 'Tree BFS / Level Order', 'Queue、level traversal、右視圖。', [p('Binary Tree Level Order Traversal','binary-tree-level-order-traversal','M'), p('Binary Tree Right Side View','binary-tree-right-side-view','M'), p('Average of Levels in Binary Tree','average-of-levels-in-binary-tree','E')]],
  ['Day 17', 'BST', '利用 BST ordering 降低複雜度。', [p('Search in a Binary Search Tree','search-in-a-binary-search-tree','E'), p('Validate Binary Search Tree','validate-binary-search-tree','M'), p('Kth Smallest Element in a BST','kth-smallest-element-in-a-bst','M')]],
  ['Day 18', 'Heap / Priority Queue', 'Top K、stream、merge sorted data。', [p('Kth Largest Element in an Array','kth-largest-element-in-an-array','M'), p('Last Stone Weight','last-stone-weight','E'), p('K Closest Points to Origin','k-closest-points-to-origin','M')]],
  ['Day 19', 'Backtracking', '選 / 不選、path、visited、剪枝。', [p('Subsets','subsets','M'), p('Combination Sum','combination-sum','M'), p('Permutations','permutations','M')]],
  ['Day 20', 'Trie / Prefix', 'prefix lookup、字典樹 API 設計。', [p('Implement Trie Prefix Tree','implement-trie-prefix-tree','M'), p('Word Search','word-search','M'), p('Design Add and Search Words Data Structure','design-add-and-search-words-data-structure','M')]],
  ['Day 21', 'Week 3 Review', '重寫 tree / heap / backtracking 錯題。', [p('Validate Binary Search Tree','validate-binary-search-tree','M'), p('K Closest Points to Origin','k-closest-points-to-origin','M'), p('Combination Sum','combination-sum','M')]],
  ['Day 22', 'Graph BFS / DFS', 'visited、adjacency list、connected components。', [p('Number of Islands','number-of-islands','M'), p('Clone Graph','clone-graph','M'), p('Max Area of Island','max-area-of-island','M')]],
  ['Day 23', 'Graph Topological Sort', 'dependency、in-degree、cycle detection。', [p('Course Schedule','course-schedule','M'), p('Course Schedule II','course-schedule-ii','M'), p('Find if Path Exists in Graph','find-if-path-exists-in-graph','E')]],
  ['Day 24', 'Greedy', '局部選擇與反例檢查。', [p('Maximum Subarray','maximum-subarray','M'), p('Jump Game','jump-game','M'), p('Gas Station','gas-station','M')]],
  ['Day 25', 'DP 1D', '狀態定義、transition、base case。', [p('Climbing Stairs','climbing-stairs','E'), p('Min Cost Climbing Stairs','min-cost-climbing-stairs','E'), p('House Robber','house-robber','M'), p('Coin Change','coin-change','M')]],
  ['Day 26', 'DP 2D / Sequence', '二維狀態、字串 DP。', [p('Unique Paths','unique-paths','M'), p('Longest Common Subsequence','longest-common-subsequence','M'), p('Longest Palindromic Substring','longest-palindromic-substring','M')]],
  ['Day 27', 'Bit / Math', '位元、數學邊界、overflow。', [p('Number of 1 Bits','number-of-1-bits','E'), p('Counting Bits','counting-bits','E'), p('Reverse Bits','reverse-bits','E'), p('Single Number','single-number','E')]],
  ['Day 28', 'Mixed Mock 1', '限時 75 分鐘，模擬面試節奏。', [p('Product of Array Except Self','product-of-array-except-self','M'), p('Min Stack','min-stack','M'), p('Number of Islands','number-of-islands','M')]],
  ['Day 29', 'Mixed Mock 2', '限時 75 分鐘，要求口說思路。', [p('Merge Intervals','merge-intervals','M'), p('Validate Binary Search Tree','validate-binary-search-tree','M'), p('Coin Change','coin-change','M')]],
  ['Day 30', 'Final Review', '整理模板、錯題、常見 patterns。', [p('Two Sum','two-sum','E'), p('Search in Rotated Sorted Array','search-in-rotated-sorted-array','M'), p('Course Schedule','course-schedule','M'), p('House Robber','house-robber','M')]],
];

const leetcodeResources = [
  ['LeetCode 75', '75 Essential & Trending Problems，適合 1–3 個月準備。', leetLinks.lc75],
  ['Top Interview 150', '150 Original & Classic Questions，主題覆蓋更完整。', leetLinks.top150],
  ['NeetCode Roadmap', '按照 pattern 的視覺化 roadmap，適合查解法與補觀念。', leetLinks.neetcode],
  ['Grind 75', 'Blind 75 作者整理的可客製題單。', leetLinks.grind75],
  ['Tech Interview Handbook Algorithms Cheatsheet', '英文演算法面試 cheat sheet。', leetLinks.handbookAlgo],
  ['Big-O Cheat Sheet', '快速查資料結構與演算法複雜度。', leetLinks.bigO],
];

const reviewPrompt = `你是一位嚴格但建設性的 coding interview coach。\n\n請幫我 review 我剛完成的 LeetCode 題目。\n\n題目名稱：<貼上題目名稱與連結>\n難度：<Easy / Medium>\n我使用的語言：<Python / JavaScript / Go / Java ...>\n我的解法想法：\n<用 3–5 句描述你的思路>\n\n我的程式碼：\n\`\`\`\n<貼上程式碼>\n\`\`\`\n\n請按照以下面向分析：\n\n1. 正確性\n- 是否能處理題目要求？\n- 是否有漏掉 edge cases？\n- 請列出至少 5 個測試案例，包含正常、邊界、極端、重複值、空輸入或最小輸入。\n\n2. 時間與空間複雜度\n- 請分析 time complexity 與 space complexity。\n- 是否有更好的複雜度？如果有，請只提示方向，不要直接貼完整解答。\n\n3. Coding style\n- 命名是否清楚？\n- control flow 是否容易讀？\n- 是否有不必要的變數、重複邏輯或過度複雜的寫法？\n\n4. Best practices\n- 是否符合該語言常見寫法？\n- 是否可以更簡潔、更安全、更可維護？\n- 是否有 mutation、副作用、overflow、index boundary、null/None 等風險？\n\n5. Interview communication\n- 如果我在面試中口說這題，應該怎麼解釋我的 approach？\n- 請幫我整理成：intuition → algorithm steps → complexity → edge cases。\n\n6. Pattern recognition\n- 這題屬於哪個 pattern？\n- 之後遇到什麼訊號可以想到同一個 pattern？\n- 推薦 2–3 題相似題讓我接著練。\n\n7. 請不要直接重寫完整最佳解，除非我的解法是錯的或我要求你提供。先用提示和 review 讓我自己修正。`;

function renderLeetcode() {
  if (document.querySelector('#leetcode')) return;
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'leetcode';
  section.innerHTML = `
    <div class="section-heading">
      <span class="tag">LeetCode Prep</span>
      <h2>LeetCode 一個月練習計劃</h2>
      <p>以 LeetCode 75、Top Interview 150、NeetCode Roadmap、Grind 75 等常見題單為參考，安排 easy–medium 題目。每天 3–5 題，重點是 pattern recognition、正確性、複雜度與口說能力。</p>
    </div>
    <div class="leetcode-tabs" role="tablist">
      <button class="leetcode-tab active" data-lc-tab="plan">30 天題單</button>
      <button class="leetcode-tab" data-lc-tab="resources">英文資源</button>
      <button class="leetcode-tab" data-lc-tab="prompt">AI 檢討 Prompt</button>
    </div>
    <div class="leetcode-panel active" data-lc-panel="plan">
      <div class="leetcode-plan">${leetcodeDays.map(renderLeetcodeDay).join('')}</div>
    </div>
    <div class="leetcode-panel" data-lc-panel="resources">
      <div class="resource-list">${leetcodeResources.map(([title, desc, url]) => `<article class="resource-card"><a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a><p>${desc}</p></article>`).join('')}</div>
    </div>
    <div class="leetcode-panel" data-lc-panel="prompt">
      <div class="prompt-card">
        <h3>練完題目後貼給 ChatGPT 的檢討模板</h3>
        <p>建議先自己通過測資，再貼上題目、思路與程式碼。不要一開始就要求 AI 給最佳解。</p>
        <textarea readonly>${reviewPrompt}</textarea>
        <button class="copy-prompt">複製 Prompt</button>
      </div>
    </div>
  `;

  const weeks = document.querySelector('#weeks');
  if (weeks) weeks.parentNode.insertBefore(section, weeks.nextSibling);

  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !navLinks.querySelector('a[href="#leetcode"]')) {
    const link = document.createElement('a');
    link.href = '#leetcode';
    link.textContent = 'LeetCode';
    const weeksLink = navLinks.querySelector('a[href="#weeks"]');
    navLinks.insertBefore(link, weeksLink ? weeksLink.nextSibling : navLinks.firstChild);
  }

  document.querySelectorAll('.leetcode-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.leetcode-tab').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.leetcode-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`[data-lc-panel="${btn.dataset.lcTab}"]`).classList.add('active');
    });
  });

  const copyButton = document.querySelector('.copy-prompt');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const textarea = document.querySelector('.prompt-card textarea');
      try {
        await navigator.clipboard.writeText(textarea.value);
        copyButton.textContent = '已複製';
        setTimeout(() => (copyButton.textContent = '複製 Prompt'), 1600);
      } catch {
        textarea.select();
        document.execCommand('copy');
      }
    });
  }
}

function renderLeetcodeDay(day) {
  const [label, topic, focus, problems] = day;
  return `<article class="leetcode-day">
    <div class="leetcode-day-head"><span>${label}</span><h3>${topic}</h3></div>
    <p>${focus}</p>
    <ul class="leetcode-problems">${problems.map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a><span class="difficulty ${item.diff === 'E' ? 'easy' : 'medium'}">${item.diff === 'E' ? 'Easy' : 'Medium'}</span></li>`).join('')}</ul>
    <div class="leetcode-after"><strong>寫完後</strong>：提交通過後，把題目、思路與程式碼貼到「AI 檢討 Prompt」，請 AI 檢查正確性、style、best practice、複雜度與 edge cases。</div>
  </article>`;
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderLeetcode);
else renderLeetcode();
