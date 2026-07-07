function applyLeetCodeResourceFix() {
  const resourcesPanel = document.querySelector('[data-lc-panel="resources"]');
  if (!resourcesPanel) return;

  const preciseTeachingResources = [
    {
      topic: 'Algorithmic Thinking / Complexity',
      note: '用 MIT 6.006 的 Peak Finding 建立演算法設計思維，再搭配複雜度 cheat sheet。',
      links: [
        ['MIT 6.006 Lecture 1: Algorithmic Thinking, Peak Finding', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-1-algorithmic-thinking-peak-finding/'],
        ['MIT 6.006 Lecture Videos index', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/'],
        ['Big-O Cheat Sheet', 'https://www.bigocheatsheet.com/']
      ]
    },
    {
      topic: 'Array / Linked List / Sentinel / Invariants',
      note: 'CS61B Lists2/Lists3 直接講 linked list wrapper、sentinel node、invariants、doubly linked list 與 array 基礎。',
      links: [
        ['CS61B Lecture 4: Lists2 Study Guide', 'https://sp21.datastructur.es/materials/lectures/lec4/lec4'],
        ['CS61B Lecture 5: Lists3 Study Guide', 'https://sp21.datastructur.es/materials/lectures/lec5/lec5'],
        ['VisuAlgo: Linked List, Stack, Queue, Deque', 'https://visualgo.net/en/list']
      ]
    },
    {
      topic: 'Hashing / Hash Table / Rolling Hash',
      note: '用 MIT 6.006 Lecture 9 讀 table doubling 與 Karp-Rabin，對應 LeetCode 裡的 hash map、set、字串 hash 題型。',
      links: [
        ['MIT 6.006 Lecture 9: Table Doubling, Karp-Rabin', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-9-table-doubling-karp-rabin/'],
        ['CP-Algorithms: String Hashing', 'https://cp-algorithms.com/string/string-hashing.html'],
        ['USFCA Algorithm Visualizations', 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html']
      ]
    },
    {
      topic: 'Binary Search / Search on Answer',
      note: 'CP-Algorithms 這頁直接講 sorted array、lower/upper bound、overflow-safe midpoint、arbitrary monotonic predicate，最適合補 LeetCode binary search pattern。',
      links: [
        ['CP-Algorithms: Binary Search', 'https://cp-algorithms.com/num_methods/binary_search.html'],
        ['MIT 6.006 Lecture 1: Peak Finding', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-1-algorithmic-thinking-peak-finding/']
      ]
    },
    {
      topic: 'Heap / Priority Queue',
      note: 'MIT 6.006 Lecture 4 以 priority queue 引入 heap，涵蓋 heap operations 與 heapsort，對應 Top K、K closest、stream 題。',
      links: [
        ['MIT 6.006 Lecture 4: Heaps and Heap Sort', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/'],
        ['VisuAlgo: Binary Heap', 'https://visualgo.net/en/heap']
      ]
    },
    {
      topic: 'BST / Balanced Tree / Tree Traversal',
      note: 'CS61B BST 頁面講 ADT、BST invariant、bushy vs spindly tree；Tree Traversals 頁面講 level-order、pre/in/post-order 與 graph DFS 的差異。',
      links: [
        ['CS61B Lecture 16: ADTs and BST Study Guide', 'https://sp21.datastructur.es/materials/lectures/lec16/lec16'],
        ['CS61B Lecture 23: Trees and Graph Traversals Guide', 'https://sp21.datastructur.es/materials/lectures/lec23/lec23'],
        ['MIT 6.006 Lecture 6: AVL Trees, AVL Sort', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-6-avl-trees-avl-sort/']
      ]
    },
    {
      topic: 'Graph BFS / DFS / Connected Components',
      note: 'CS61B 先補 tree vs graph traversal；CP-Algorithms 再補 BFS/DFS implementation 與典型圖論模板。',
      links: [
        ['CS61B Lecture 23: Trees and Graph Traversals Guide', 'https://sp21.datastructur.es/materials/lectures/lec23/lec23'],
        ['CP-Algorithms: Breadth First Search', 'https://cp-algorithms.com/graph/breadth-first-search.html'],
        ['CP-Algorithms: Depth First Search', 'https://cp-algorithms.com/graph/depth-first-search.html']
      ]
    },
    {
      topic: 'Topological Sort / Dependency Graph',
      note: 'CP-Algorithms 這頁直接講 DAG、topological order 可能不存在、用 DFS exit time 建構 order，對應 Course Schedule 類題。',
      links: [
        ['CP-Algorithms: Topological Sorting', 'https://cp-algorithms.com/graph/topological-sort.html'],
        ['CP-Algorithms: DFS', 'https://cp-algorithms.com/graph/depth-first-search.html']
      ]
    },
    {
      topic: 'Union-Find / Disjoint Set Union',
      note: 'CS61B 用 dynamic connectivity 解釋 quick find、quick union、weighted quick union、path compression；CP-Algorithms 提供競程模板。',
      links: [
        ['CS61B Lecture 14: Disjoint Sets Study Guide', 'https://sp21.datastructur.es/materials/lectures/lec14/lec14'],
        ['CP-Algorithms: Disjoint Set Union', 'https://cp-algorithms.com/data_structures/disjoint_set_union.html']
      ]
    },
    {
      topic: 'Dynamic Programming',
      note: 'MIT 6.006 Lecture 19 用 Fibonacci 與 shortest paths 引入 DP；CP-Algorithms 補 memoization / tabulation 與典型轉移思路。',
      links: [
        ['MIT 6.006 Lecture 19: Dynamic Programming I', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/'],
        ['CP-Algorithms: Introduction to Dynamic Programming', 'https://cp-algorithms.com/dynamic_programming/intro-to-dp.html'],
        ['CP-Algorithms: Longest Increasing Subsequence', 'https://cp-algorithms.com/sequences/longest_increasing_subsequence.html']
      ]
    },
    {
      topic: 'Bit Manipulation / Math',
      note: '用 CP-Algorithms 補位元操作基礎，對應 Counting Bits、Single Number、Reverse Bits 類題。',
      links: [
        ['CP-Algorithms: Bit Manipulation', 'https://cp-algorithms.com/algebra/bit-manipulation.html']
      ]
    },
    {
      topic: 'Testing / Edge Cases / Code Quality',
      note: 'CS61B Testing Study Guide 很適合用來補「寫完題後怎麼驗證」：簡單案例、edge cases、TDD、unit tests。',
      links: [
        ['CS61B Lecture 7: Testing Study Guide', 'https://sp21.datastructur.es/materials/lectures/lec7/lec7'],
        ['Tech Interview Handbook: Algorithms Study Cheatsheet', 'https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/']
      ]
    }
  ];

  resourcesPanel.innerHTML = `<div class="teaching-grid">${preciseTeachingResources.map(renderPreciseTeachingResource).join('')}</div>`;
}

function renderPreciseTeachingResource(item) {
  return `<article class="teaching-card">
    <h3>${item.topic}</h3>
    <p>${item.note}</p>
    <ul class="link-list">${item.links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul>
  </article>`;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLeetCodeResourceFix);
} else {
  applyLeetCodeResourceFix();
}
