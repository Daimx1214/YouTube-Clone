
function setActive(el) {
    document.querySelectorAll('.cat-bar li').forEach(li => li.classList.remove('active'));
    el.classList.add('active');
}

// All CS/Programming videos — mix of Hindi & English
const videos = [
    // ── English ──
    {
        id: 'zOjov-2OZ0E',
        title: 'Harvard CS50 – Full Computer Science University Course',
        channel: 'freeCodeCamp.org',
        views: '4.2M views',
        time: '2 years ago',
        duration: '25:46:44',
    },
    {
        id: 'rfscVS0vtbw',
        title: 'Learn Python – Full Course for Beginners [Tutorial]',
        channel: 'freeCodeCamp.org',
        views: '37M views',
        time: '5 years ago',
        duration: '4:26:51',
    },
    {
        id: 'PkZNo7MFNFg',
        title: 'Learn JavaScript – Full Course for Beginners',
        channel: 'freeCodeCamp.org',
        views: '13M views',
        time: '5 years ago',
        duration: '3:26:42',
    },
    {
        id: 'bWPMSSsVdPk',
        title: 'C++ Full Course | C++ Tutorial | Data Structures & Algorithms',
        channel: 'Apna College',
        views: '3.5M views',
        time: '2 years ago',
        duration: '9:30:11',
    },
    {
        id: 'RBSGKlAvoiM',
        title: 'Data Structures Easy to Advanced – Full Tutorial from a Google Engineer',
        channel: 'freeCodeCamp.org',
        views: '7.5M views',
        time: '5 years ago',
        duration: '8:01:13',
    },
    {
        id: 'GazC3A4OQTE',
        title: 'CS Dojo – Data Structures & Algorithms for Beginners',
        channel: 'CS Dojo',
        views: '1.8M views',
        time: '6 years ago',
        duration: '8:00',
    },
    {
        id: 'BBpAmxU_NQo',
        title: 'System Design Interview – Step by Step Guide',
        channel: 'ByteByteGo',
        views: '1.3M views',
        time: '1 year ago',
        duration: '14:35',
    },
    {
        id: 'Ke90Tje7VS0',
        title: 'React JS Full Course for Beginners | Complete All-in-One Tutorial',
        channel: 'Dave Gray',
        views: '2.6M views',
        time: '2 years ago',
        duration: '9:49:00',
    },
    {
        id: 'OXGznpKZ_sA',
        title: 'Pointers in C / C++ – Full Course',
        channel: 'freeCodeCamp.org',
        views: '2.0M views',
        time: '4 years ago',
        duration: '3:47:22',
    },
    {
        id: 'SqvVm3QiQVk',
        title: 'Machine Learning for Beginners – Full University Course',
        channel: 'freeCodeCamp.org',
        views: '3.1M views',
        time: '2 years ago',
        duration: '6:18:24',
    },
    // ── Hindi ──
    {
        id: 'yRpLlJmRo2w',
        title: 'C Language Tutorial in Hindi – Beginner to Advanced | पूरा Course',
        channel: 'CodeWithHarry',
        views: '5.2M views',
        time: '3 years ago',
        duration: '11:07:17',
    },
    {
        id: 'vLnPwxZdW4Y',
        title: 'Operating System Full Course in Hindi | OS for GATE & University Exams',
        channel: 'Gate Smashers',
        views: '1.5M views',
        time: '3 years ago',
        duration: '20:00:00',
    },
    {
        id: 'eIrMbAQSU34',
        title: 'Competitive Programming in C++ – Hindi | Codeforces & LeetCode Strategy',
        channel: 'Luv',
        views: '900K views',
        time: '2 years ago',
        duration: '4:17:00',
    },
    {
        id: 'PkZNo7MFNFg',
        title: 'Learn JavaScript – Full Course for Beginners',
        channel: 'freeCodeCamp.org',
        views: '13M views',
        time: '5 years ago',
        duration: '3:26:42',
    },
];

const avatarColors = [
    '#e53935', '#8e24aa', '#1e88e5', '#43a047',
    '#fb8c00', '#00acc1', '#6d4c41', '#546e7a',
    '#c0392b', '#16a085', '#2980b9', '#8e44ad'
];

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function buildCard(v) {
    const colorIdx = Math.abs(v.channel.charCodeAt(0) + (v.channel.charCodeAt(1) || 0)) % avatarColors.length;
    const color = avatarColors[colorIdx];
    const thumb = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;
    const link = `https://www.youtube.com/watch?v=${v.id}`;

    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.title = v.title;

    card.addEventListener('click', () => window.open(link, '_blank'));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') window.open(link, '_blank'); });

    card.innerHTML = `
      <a href="${link}" target="_blank" rel="noopener" tabindex="-1" onclick="event.stopPropagation()">
        <div class="thumb-wrap">
          <img
            src="${thumb}"
            alt="${v.title}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/320x180/1a1a2e/4fc3f7?text=CS+Tutorial';"
          />
          <span class="duration">${v.duration}</span>
        </div>
      </a>
      <div class="video-info">
        <div class="ch-avatar">
          <div style="
            width:36px;height:36px;border-radius:50%;
            background:${color};
            display:flex;align-items:center;justify-content:center;
            color:#fff;font-weight:700;font-size:13px;
            font-family:Arial,sans-serif;
          ">${getInitials(v.channel)}</div>
        </div>
        <div class="video-text">
          <div class="v-title">${v.title}</div>
          <div class="v-meta">
            <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(v.channel)}"
               target="_blank" rel="noopener" onclick="event.stopPropagation()">
              ${v.channel}
            </a>
          </div>
          <div class="v-meta">${v.views} • ${v.time}</div>
        </div>
      </div>`;
    return card;
}

const grid = document.getElementById('videoGrid');
videos.forEach(v => grid.appendChild(buildCard(v)));

// Search filter
document.getElementById('searchInput').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.video-card').forEach(card => {
        const title = card.querySelector('.v-title').textContent.toLowerCase();
        const channel = card.querySelector('.v-meta').textContent.toLowerCase();
        card.style.display = (!q || title.includes(q) || channel.includes(q)) ? '' : 'none';
    });
});

// Enter → YouTube search
document.getElementById('searchInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && this.value.trim()) {
        window.open(
            `https://www.youtube.com/results?search_query=${encodeURIComponent(this.value.trim())}`,
            '_blank'
        );
    }
});
