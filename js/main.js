/* =====================================================================
   MUSE & BLOOM — SITE ENGINE
   You don't need to edit this file. It reads everything from
   content.js and builds the header, footer and each page section.
   ===================================================================== */
(function () {
  var SITE = window.SITE || {};
  var EPISODES = window.EPISODES || [];
  var LETTERS = window.LETTERS || [];
  var WEEKS = window.WEEKLY_READS || [];
  var WOMEN = window.WOMEN || [];

  var root = document.querySelector("[data-page]");
  var PAGE = root ? root.getAttribute("data-page") : "home";
  var SUBSCRIBE = (SITE.substack || "").replace(/\/$/, "") + "/subscribe";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function all(sel) { return document.querySelectorAll(sel); }
  function out(url) { return url && url !== "#" ? ' target="_blank" rel="noopener"' : ""; }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  /* Little drawings used around the site */
  var ART = {
    sparkle: '<svg viewBox="0 0 24 24"><path d="M12 0l2.6 8.4L23 11l-8.4 2.6L12 22l-2.6-8.4L1 11l8.4-2.6z" fill="#ff7700" stroke="#004936" stroke-width="1.2"/></svg>',
    flower: '<svg viewBox="0 0 64 64"><g fill="#ff7700" stroke="#004936" stroke-width="2"><ellipse cx="32" cy="15" rx="9" ry="14"/><ellipse cx="32" cy="15" rx="9" ry="14" transform="rotate(60 32 32)"/><ellipse cx="32" cy="15" rx="9" ry="14" transform="rotate(120 32 32)"/><ellipse cx="32" cy="15" rx="9" ry="14" transform="rotate(180 32 32)"/><ellipse cx="32" cy="15" rx="9" ry="14" transform="rotate(240 32 32)"/><ellipse cx="32" cy="15" rx="9" ry="14" transform="rotate(300 32 32)"/></g><circle cx="32" cy="32" r="8" fill="#f2cce7" stroke="#004936" stroke-width="2"/></svg>',
    smile: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#b0f123" stroke="#004936" stroke-width="2.5"/><circle cx="23" cy="26" r="3.5" fill="#004936"/><circle cx="41" cy="26" r="3.5" fill="#004936"/><path d="M20 38c6 9 18 9 24 0" fill="none" stroke="#004936" stroke-width="3" stroke-linecap="round"/></svg>',
    heart: '<svg viewBox="0 0 64 64"><path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="#f2cce7" stroke="#004936" stroke-width="2.5" stroke-linejoin="round"/></svg>',
    mic: '<svg viewBox="0 0 40 40" fill="none" stroke="#004936" stroke-width="2.2" stroke-linecap="round"><rect x="14" y="4" width="12" height="20" rx="6" fill="#f2cce7"/><path d="M9 19a11 11 0 0 0 22 0M20 30v6M14 36h12"/></svg>',
    mail: '<svg viewBox="0 0 40 40" fill="none" stroke="#004936" stroke-width="2.2" stroke-linejoin="round"><rect x="5" y="9" width="30" height="22" rx="3" fill="#b3d7e7"/><path d="M6 11l14 11 14-11"/></svg>',
    waves: '<svg viewBox="0 0 120 60" fill="none" stroke="#004936" stroke-width="2" stroke-linecap="round"><path d="M2 12c10-10 18 10 29 0s19 10 29 0 19 10 29 0 19 10 29 0"/><path d="M2 30c10-10 18 10 29 0s19 10 29 0 19 10 29 0 19 10 29 0"/><path d="M2 48c10-10 18 10 29 0s19 10 29 0 19 10 29 0 19 10 29 0"/></svg>',
    star: '<svg viewBox="0 0 40 40"><path d="M20 4l4.7 10 10.8 1.2-8 7.4 2.2 10.7L20 27.9l-9.7 5.4 2.2-10.7-8-7.4L15.3 14z" fill="#b0f123" stroke="#004936" stroke-width="2.2" stroke-linejoin="round"/></svg>'
  };

  function spinBadge(text) {
    return (
      '<div class="sticker spin-badge" aria-hidden="true">' +
      '<svg viewBox="0 0 120 120"><defs><path id="c' + text.length + '" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"/></defs>' +
      '<text><textPath textLength="266" lengthAdjust="spacing" href="#c' + text.length + '">' + esc(text) + "</textPath></text></svg>" +
      '<img class="center" src="images/rose.svg" alt=""></div>'
    );
  }
  all("[data-badge]").forEach(function (el) { el.outerHTML = spinBadge(el.getAttribute("data-badge")); });
  all("[data-art]").forEach(function (el) { el.innerHTML = ART[el.getAttribute("data-art")] || ""; });

  function listenBtn(url, label, cls) {
    if (!url) return '<span class="btn is-soon" aria-disabled="true">' + label + " · soon</span>";
    return '<a class="btn ' + (cls || "") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + "</a>";
  }

  /* ---------- Top bar + header ---------- */
  var NAV = [
    ["index.html", "Home", "home"],
    ["podcast.html", "Podcast", "podcast"],
    ["archive.html", "Archive", "archive"],
    ["reads.html", "Weekly reads", "reads"]
  ];
  var header = document.getElementById("site-header");
  if (header) {
    var latestEp = EPISODES[0];
    header.outerHTML =
      (latestEp
        ? '<div class="topbar">New episode with ' + esc(latestEp.guest) + ' is out now. <a href="' + esc(latestEp.spotify || SITE.spotify) + '" target="_blank" rel="noopener">Listen on Spotify →</a></div>'
        : "") +
      '<header class="site-header"><nav class="wrap nav" aria-label="Main">' +
      '<a class="brand" href="index.html"><img src="images/logo-stretched.svg" alt="Muse &amp; Bloom"></a>' +
      '<button class="btn menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav-links">Menu</button>' +
      '<ul class="nav-links" id="nav-links">' +
      NAV.map(function (n) {
        return '<li><a href="' + n[0] + '"' + (n[2] === PAGE ? ' aria-current="page"' : "") + ">" + n[1] + "</a></li>";
      }).join("") +
      '<li><a class="btn btn-dark" href="' + esc(SUBSCRIBE) + '" target="_blank" rel="noopener">Subscribe</a></li>' +
      "</ul></nav></header>";
    var btn = $("#menu-btn");
    btn.addEventListener("click", function () {
      var open = $("#nav-links").classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Photo frames: show the photo if you've added it ---------- */
  all(".photo img").forEach(function (img) {
    img.addEventListener("error", function () { img.remove(); });
  });

  /* ---------- Home hero ---------- */
  var heroBtns = $("#hero-buttons");
  if (heroBtns) {
    heroBtns.innerHTML =
      listenBtn(SITE.spotify, 'Listen on Spotify <span class="arrow">→</span>', "btn-dark") +
      '<a class="btn btn-blush" href="' + esc(SUBSCRIBE) + '" target="_blank" rel="noopener">Get the letters</a>';
  }
  var now = $("#now-playing");
  if (now && EPISODES[0]) {
    var e0 = EPISODES[0];
    now.innerHTML =
      '<div class="kicker">Now playing <span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>' +
      "<h4>" + esc(e0.title) + "</h4>" +
      '<a href="' + esc(e0.spotify || SITE.spotify) + '" target="_blank" rel="noopener">Play episode ' + esc(e0.number) + " →</a>";
  }

  /* ---------- Latest episode ---------- */
  var latest = EPISODES[0];
  var feat = $("#latest-episode");
  if (feat && latest) {
    feat.innerHTML =
      '<div class="sticker" aria-hidden="true">new!</div>' +
      '<div class="num">' + esc(latest.number) + "</div>" +
      "<div>" +
      '<div class="kicker">Latest episode</div>' +
      "<h3>" + esc(latest.title) + "</h3>" +
      '<div class="role">' + esc(latest.role) + "</div>" +
      '<p class="desc">' + esc(latest.description) + "</p>" +
      '<div class="btn-row">' +
      listenBtn(latest.spotify || SITE.spotify, 'Listen on Spotify <span class="arrow">→</span>', "btn-dark") +
      listenBtn(latest.apple || SITE.apple, "Apple Podcasts") +
      listenBtn(latest.youtube || SITE.youtube, "YouTube") +
      '</div><div class="meta" style="margin-top:16px"><span>' + esc(latest.date) + "</span><span>" + esc(latest.length) + "</span></div></div>";
  }

  /* ---------- Episode list ---------- */
  var list = $("#episode-list");
  if (list) {
    var limit = parseInt(list.getAttribute("data-limit") || "0", 10);
    var eps = limit ? EPISODES.slice(1, 1 + limit) : EPISODES.slice(1);
    list.innerHTML = eps.map(function (ep) {
      return (
        '<li class="ep">' +
        '<span class="n">' + esc(ep.number) + "</span>" +
        "<div><h3>" + esc(ep.title) + "</h3>" +
        '<div class="role">' + esc(ep.role) + "</div>" +
        (limit ? "" : '<p class="desc">' + esc(ep.description) + "</p>") +
        '<div class="meta"><span>' + esc(ep.date) + "</span><span>" + esc(ep.length) + "</span></div></div>" +
        '<div class="ep-links">' +
        listenBtn(ep.spotify || SITE.spotify, "Spotify", "btn-lime") +
        (limit ? "" : listenBtn(ep.apple || SITE.apple, "Apple") + listenBtn(ep.youtube || SITE.youtube, "YouTube")) +
        "</div></li>"
      );
    }).join("");
  }

  /* ---------- Where to listen ---------- */
  var listen = $("#listen-grid");
  if (listen) {
    var places = [
      ["Spotify", SITE.spotify, "Follow the show and never miss a Friday.", "l1"],
      ["Apple Podcasts", SITE.apple, "For iPhone, iPad and Mac.", "l2"],
      ["YouTube", SITE.youtube, "Watch the full conversations.", "l3"]
    ];
    listen.innerHTML = places.map(function (p) {
      return p[1]
        ? '<a class="listen ' + p[3] + '" href="' + esc(p[1]) + '" target="_blank" rel="noopener"><strong>' + p[0] + "</strong><span>" + p[2] + '</span><span class="go">Listen →</span></a>'
        : '<div class="listen is-soon ' + p[3] + '"><strong>' + p[0] + "</strong><span>" + p[2] + '</span><span class="go">Coming soon</span></div>';
    }).join("");
  }
  var podBtns = $("#podcast-buttons");
  if (podBtns) {
    podBtns.innerHTML = listenBtn(SITE.spotify, 'Listen on Spotify <span class="arrow">→</span>', "btn-dark") + listenBtn(SITE.apple, "Apple Podcasts") + listenBtn(SITE.youtube, "YouTube");
  }

  /* ---------- Letters ---------- */
  var letters = $("#letters");
  if (letters) {
    letters.innerHTML = LETTERS.slice(0, 3).map(function (l) {
      return (
        '<a class="letter" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        '<span class="stamp"><img src="images/rose.svg" alt=""></span>' +
        '<span class="kicker" style="padding-inline:6px">A letter · ' + esc(l.date) + "</span>" +
        "<h3>" + esc(l.title) + "</h3>" +
        '<span class="foot"><span class="by">love, Muse &amp; Bloom</span><span>Read →</span></span></a>'
      );
    }).join("");
  }

  /* ---------- Weekly reads ---------- */
  function readCard(a) {
    return (
      '<a class="window" href="' + esc(a.url) + '"' + out(a.url) + ">" +
      '<span class="bar" aria-hidden="true"><i></i><i></i><i></i><span>' + esc(a.tag) + "</span></span>" +
      '<span class="body"><h3>' + esc(a.title) + "</h3>" +
      "<p>" + esc(a.why) + "</p>" +
      '<span class="src"><span>' + esc(a.source) + "</span><span>Read →</span></span></span></a>"
    );
  }
  var week = WEEKS[0];
  var readsBox = $("#reads");
  if (readsBox && week) {
    var lim = parseInt(readsBox.getAttribute("data-limit") || "0", 10);
    readsBox.innerHTML = (lim ? week.articles.slice(0, lim) : week.articles).map(readCard).join("");
    all("[data-week]").forEach(function (el) { el.textContent = week.week; });
    var note = $("#reads-note");
    if (note) note.textContent = week.note;
  }
  var past = $("#reads-past");
  if (past) {
    var older = WEEKS.slice(1);
    if (!older.length) { past.closest("section").hidden = true; }
    past.innerHTML = older.map(function (w) {
      return (
        '<article class="past-card">' +
        '<div class="kicker">' + esc(w.week) + "</div>" +
        (w.note ? '<p class="past-note">' + esc(w.note) + "</p>" : "") +
        "<ul>" + w.articles.map(function (a) {
          return '<li><a href="' + esc(a.url) + '"' + out(a.url) + ">" + esc(a.title) + "</a><span>" + esc(a.source) + "</span></li>";
        }).join("") + "</ul></article>"
      );
    }).join("");
  }

  /* ---------- Women archive ---------- */
  function initials(name) {
    return name.replace(/^(Dr|Hajia|Hajiya|Alhaja)\.?\s+/i, "").split(/\s+/).filter(Boolean)
      .map(function (w) { return w[0]; }).slice(0, 2).join("");
  }
  function womanCard(w) {
    var i = WOMEN.indexOf(w);
    var face = w.photo ? '<img src="' + esc(w.photo) + '" alt="' + esc(w.name) + '">' : esc(initials(w.name));
    var fieldClass = "f-" + String(w.field).split(/[ &]/)[0];
    return (
      '<article class="woman">' +
      '<div class="head"><div class="monogram shape-' + (i % 4) + '">' + face + "</div>" +
      "<div><h3>" + esc(w.name) + "</h3>" +
      "</div></div>" +
      '<div class="role">' + esc(w.role) + "</div>" +
      '<p class="story">' + esc(w.story) + "</p>" +
      '<div class="bottom"><span class="tag ' + fieldClass + '">' + esc(w.field) + "</span>" +
      (w.source ? '<a href="' + esc(w.source) + '" target="_blank" rel="noopener">Read her story ↗</a>' : "") +
      "</div></article>"
    );
  }
  var womenPreview = $("#women-preview");
  if (womenPreview) {
    womenPreview.innerHTML = WOMEN.slice(0, 3).map(womanCard).join("");
    all("[data-women-total]").forEach(function (el) { el.textContent = WOMEN.length; });
  }
  all("[data-women-total]").forEach(function (el) { el.textContent = WOMEN.length; });

  var grid = $("#women-grid");
  if (grid) {
    var fields = ["All fields"];
    WOMEN.forEach(function (w) { if (fields.indexOf(w.field) < 0) fields.push(w.field); });
    var activeField = "All fields";
    var hash = (location.hash || "").replace("#", "").toLowerCase();
    if (hash === "tech") activeField = "Tech";

    function chips(box, items, active, attr) {
      box.innerHTML = items.map(function (f) {
        return '<button class="chip" type="button" aria-pressed="' + (f === active) + '" data-' + attr + '="' + esc(f) + '">' + esc(f) + "</button>";
      }).join("");
    }
    var fieldBox = $("#field-chips"), search = $("#search");
    chips(fieldBox, fields, activeField, "f");

    function draw() {
      var q = search.value.trim().toLowerCase();
      var shown = WOMEN.filter(function (w) {
        var okF = activeField === "All fields" || w.field === activeField;
        var okQ = !q || (w.name + " " + w.role + " " + w.story + " " + w.field + " " + w.country).toLowerCase().indexOf(q) > -1;
        return okF && okQ;
      });
      grid.innerHTML = shown.length ? shown.map(womanCard).join("") : '<p class="empty">No one matches that yet. Try another word or filter.</p>';
    }
    fieldBox.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      activeField = b.getAttribute("data-f"); chips(fieldBox, fields, activeField, "f"); draw();
    });
    search.addEventListener("input", draw);
    draw();

    var nom = $("#nominate");
    if (nom) { if (SITE.nominate) nom.href = SITE.nominate; else nom.parentNode.hidden = true; }
  }

  /* ---------- Newsletter band (every page) ---------- */
  var news = document.getElementById("newsletter");
  if (news) {
    news.innerHTML =
      '<div class="wrap letter-grid">' +
      "<div>" +
      '<div class="kicker">The letters · Free on Substack</div>' +
      '<h2>Something good in your inbox, <span class="pill-word">every week.</span></h2>' +
      "<p>Open letters, guides and stories of Muslim women in career and life. Written like a note from your older sister.</p>" +
      '<div class="btn-row" style="margin-top:28px">' +
      '<a class="btn btn-dark" href="' + esc(SUBSCRIBE) + '" target="_blank" rel="noopener">Subscribe on Substack <span class="arrow">→</span></a>' +
      '<a class="btn" href="' + esc(SITE.substack) + '" target="_blank" rel="noopener">Read past letters</a>' +
      "</div>" +
      '<p class="small">You\'ll pop over to Substack to pop in your email. It\'s free.</p></div>' +
      '<a class="envelope" href="' + esc(SUBSCRIBE) + '" target="_blank" rel="noopener" aria-label="Subscribe on Substack">' +
      '<svg class="flap" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 L150 118 L300 0 Z" fill="#f9e4f2"/><path d="M1 1 L150 118 L299 1" fill="none" stroke="#004936" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>' +
      '<span class="seal"><img src="images/rose.svg" alt=""></span><span class="to">to: you, with love</span></a>' +
      "</div>";
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    var follow = [
      ["Spotify", SITE.spotify], ["Apple Podcasts", SITE.apple], ["YouTube", SITE.youtube],
      ["Substack", SITE.substack], ["Instagram", SITE.instagram]
    ].filter(function (x) { return x[1]; });
    footer.outerHTML =
      '<footer class="site-footer"><div class="wrap">' +
      '<div class="foot-grid">' +
      '<div><img src="images/logo-main.svg" alt="Muse &amp; Bloom"><p>' + esc(SITE.about) + "</p></div>" +
      "<div><h4>Explore</h4><ul>" +
      NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      "</ul></div>" +
      "<div><h4>Follow along</h4><ul>" +
      follow.map(function (f) { return '<li><a href="' + esc(f[1]) + '" target="_blank" rel="noopener">' + f[0] + "</a></li>"; }).join("") +
      "</ul></div></div>" +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' Muse &amp; Bloom</span><span class="script">' + esc(SITE.slogan) + "</span></div>" +
      "</div></footer>";
  }
})();
