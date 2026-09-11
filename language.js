(() => {
  const button = document.getElementById('lang-toggle');
  // Snapshot original markup once so switching back preserves links and emphasis.
  const translations = [
    ['.skip', '跳转到正文'],
    ['.field', '信息系统'],
    ['.affiliation', '新加坡国立大学<br>计算机学院'],
    ['.contact li:nth-child(1) a', '邮箱：chunfeng@u.nus.edu'],
    ['.contact li:nth-child(2) a', '谷歌学术'],
    ['.contact li:nth-child(3) a', '教育与研究经历'],
    ['.contact li:nth-child(4) a', '小红书'],
    ['.profile-note', '人机协同<br>AI Agent<br>自动化实验'],
    ['.interests', '<strong>研究兴趣：</strong>人机协同；AI Agent；自动化实验；在线劳动力市场；社会网络；自然实验。'],
    ['#education .entries > div:nth-child(1) dt', '2026–2030<br><small>预计</small>'],
    ['#education .entries > div:nth-child(1) dd', '<strong>新加坡国立大学</strong><br>计算机学院，信息系统博士'],
    ['#education .entries > div:nth-child(2) dd', '<strong>西安交通大学</strong><br>统计学硕士<br><span>导师：蒋仁爱</span>'],
    ['#education .entries > div:nth-child(3) dd', '<strong>华南理工大学</strong><br>经济学学士'],
    ['#experience dt', '自 2025 年起'],
    ['#experience dd', '<strong>研究助理</strong><br>长江商学院数字化转型中心<br><span>与 <a class="faculty-link" href="https://www.ckgsb.edu.cn/faculty/professor_team/detail/156/SunTianshu.html" target="_blank" rel="noopener noreferrer">Tianshu Sun</a>（长江商学院）、<a class="faculty-link" href="https://scholar.google.com/citations?user=hyK_NeYAAAAJ&amp;hl=zh-CN" target="_blank" rel="noopener noreferrer">Xiaoning Wang</a>（德州大学达拉斯分校）和 <a class="faculty-link" href="https://www.gsm.pku.edu.cn/faculty/yingjiezhang/" target="_blank" rel="noopener noreferrer">Yingjie Zhang</a>（北京大学光华管理学院）合作开展研究</span>'],
    ['#awards li:nth-child(1)', '<span class="year">2024–2025</span> 西安交通大学一等学业奖学金（前 10%）'],
    ['#awards li:nth-child(2)', '<span class="year">2024</span> 西安交通大学优秀学生（前 5%）'],
    ['#awards li:nth-child(3)', '<span class="year">2023</span> 西安交通大学研究生新生奖学金'],
    ['#projects p:nth-of-type(1)', '<strong>AI 辅助科研。</strong>我在<a href="https://xhslink.cn/o/9Y0FJp1kQRa" target="_blank" rel="noopener noreferrer">小红书</a>分享科研工作流、博士申请准备和与 AI 协作的经验。'],
    ['.paper .note', '已接收'],
    ['p.note', '最佳会议论文提名'],
    ['.paper:last-child p:last-child', '<em>Management Science</em>，major revision，2026 年。'],
    ['footer span', '最后更新：2026 年 9 月']
  ];
  const records = [...document.querySelectorAll('[data-en][data-zh]')]
    .filter(node => !node.closest('.interests'))
    .map(node => ({ node, en: node.innerHTML, zh: node.dataset.zh }));
  translations.forEach(([selector, zh]) => {
    const node = document.querySelector(selector);
    if (node) records.push({ node, en: node.innerHTML, zh });
  });
  const collaboratorAbout = document.querySelector('#about p:nth-of-type(3)');
  if (collaboratorAbout) {
    records.push({
      node: collaboratorAbout,
      en: 'At the Digital Transformation Center, Cheung Kong Graduate School of Business, I collaborate with <a class="faculty-link" href="https://www.ckgsb.edu.cn/faculty/professor_team/detail/156/SunTianshu.html" target="_blank" rel="noopener noreferrer">Tianshu Sun</a> (Cheung Kong Graduate School of Business), <a class="faculty-link" href="https://scholar.google.com/citations?user=hyK_NeYAAAAJ&amp;hl=zh-CN" target="_blank" rel="noopener noreferrer">Xiaoning Wang</a> (The University of Texas at Dallas), and <a class="faculty-link" href="https://www.gsm.pku.edu.cn/faculty/yingjiezhang/" target="_blank" rel="noopener noreferrer">Yingjie Zhang</a> (Guanghua School of Management, Peking University) on AI, organizations, labor markets, and social networks.',
      zh: '我在长江商学院数字化转型中心与 <a class="faculty-link" href="https://www.ckgsb.edu.cn/faculty/professor_team/detail/156/SunTianshu.html" target="_blank" rel="noopener noreferrer">Tianshu Sun</a>（长江商学院）、<a class="faculty-link" href="https://scholar.google.com/citations?user=hyK_NeYAAAAJ&amp;hl=zh-CN" target="_blank" rel="noopener noreferrer">Xiaoning Wang</a>（德州大学达拉斯分校）和 <a class="faculty-link" href="https://www.gsm.pku.edu.cn/faculty/yingjiezhang/" target="_blank" rel="noopener noreferrer">Yingjie Zhang</a>（北京大学光华管理学院）合作，开展人工智能、组织、劳动力市场与社会网络相关研究。'
    });
  }
  document.querySelectorAll('figcaption').forEach(node => {
    const captions = { Cosplay: '角色扮演', 'Instant portraits': '拍立得', Graduation: '毕业留影', 'Everyday moments': '日常留影' };
    records.push({ node, en: node.innerHTML, zh: captions[node.textContent] });
  });
  const images = [
    'Feng Chun wearing a navy-blue dress',
    'Feng Chun in a turquoise cosplay costume',
    'Feng Chun in a dark cosplay costume',
    'Two instant cosplay portraits of Feng Chun',
    'Feng Chun in graduation attire outside the library',
    'An outdoor portrait of Feng Chun'
  ];
  const imageRecords = [...document.images].map((node, i) => ({
    node, en: images[i], zh: i === 0 ? '冯纯的深蓝色衣服半身肖像' : node.alt
  }));
  const labels = [...document.querySelectorAll('[aria-label]')].filter(node => node !== button);
  const labelRecords = labels.map(node => ({
    node, en: node.getAttribute('aria-label'),
    zh: node.tagName === 'NAV' ? '主导航' : node.tagName === 'ASIDE' ? '个人资料' : '查看完整照片'
  }));
  let current = 'en';
  function applyLanguage(value) {
    current = value === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
    records.forEach(({ node, en, zh }) => { node.innerHTML = current === 'zh' ? zh : en; });
    imageRecords.forEach(record => { record.node.alt = record[current]; });
    labelRecords.forEach(record => { record.node.setAttribute('aria-label', record[current]); });
    button.textContent = current === 'zh' ? 'EN' : '中';
    const label = current === 'zh' ? 'Switch to English' : '切换到中文';
    button.setAttribute('aria-label', label);
    button.title = label;
    document.title = current === 'zh' ? '冯纯 | 个人学术主页' : 'Feng Chun | Academic Homepage';
    try { localStorage.setItem('homepage-language', current); } catch {}
  }
  let saved = 'en';
  try { saved = localStorage.getItem('homepage-language'); } catch {}
  applyLanguage(saved);
  button.addEventListener('click', () => applyLanguage(current === 'en' ? 'zh' : 'en'));
})();
