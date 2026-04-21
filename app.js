const OWNER = "suhaimitoamy";
const REPO = "Materi-trading";
const BRANCH = "main";
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;

const state = {
  folders: [],
  allPages: [],
  currentPath: "",
  search: "",
  theme: localStorage.getItem("mt-theme") || "dark",
};

const els = {
  nav: document.getElementById("nav"),
  content: document.getElementById("content"),
  pageTitle: document.getElementById("pageTitle"),
  githubLink: document.getElementById("githubLink"),
  breadcrumb: document.getElementById("breadcrumb"),
  pager: document.getElementById("pager"),
  searchInput: document.getElementById("searchInput"),
  heroStats: document.getElementById("heroStats"),
  hero: document.getElementById("hero"),
  sidebar: document.getElementById("sidebar"),
  overlay: document.getElementById("overlay"),
  openSidebar: document.getElementById("openSidebar"),
  closeSidebar: document.getElementById("closeSidebar"),
  toggleTheme: document.getElementById("toggleTheme"),
};

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("mt-theme", theme);
  state.theme = theme;
}

function humanizeFolder(name) {
  return name.replace(/^(\d{2})-/, "$1 — ").replace(/-/g, " ");
}

function humanizeFile(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/^README$/i, "Pengantar Folder")
    .replace(/-/g, " ");
}

function normalizeForSearch(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function parseChapterNumber(name) {
  const match = name.match(/Bab-(\d+)/i);
  return match ? Number(match[1]) : -1;
}

function sortFolders(a, b) {
  return a.name.localeCompare(b.name, undefined, { numeric: true });
}

function sortFiles(a, b) {
  const aReadme = a.name.toLowerCase() === "readme.md";
  const bReadme = b.name.toLowerCase() === "readme.md";
  if (aReadme && !bReadme) return -1;
  if (!aReadme && bReadme) return 1;

  const aNum = parseChapterNumber(a.name);
  const bNum = parseChapterNumber(b.name);
  if (aNum !== -1 && bNum !== -1 && aNum !== bNum) return aNum - bNum;
  return a.name.localeCompare(b.name, undefined, { numeric: true });
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(`Gagal mengambil ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Gagal mengambil ${url}`);
  return res.text();
}

async function loadStructure() {
  const rootItems = await fetchJson(API_BASE);
  const folders = rootItems
    .filter((item) => item.type === "dir" && /^\d{2}-/.test(item.name))
    .sort(sortFolders);

  const enriched = [];
  for (const folder of folders) {
    const items = await fetchJson(`${API_BASE}/${encodeURIComponent(folder.name)}`);
    const files = items
      .filter((item) => item.type === "file" && /\.md$/i.test(item.name))
      .sort(sortFiles)
      .map((file) => ({
        name: file.name,
        path: file.path,
        html_url: file.html_url,
        folder: folder.name,
        label: humanizeFile(file.name),
      }));

    enriched.push({
      name: folder.name,
      label: humanizeFolder(folder.name),
      files,
    });
  }

  state.folders = enriched;
  state.allPages = [
    {
      path: "README.md",
      name: "README.md",
      folder: "",
      label: "Beranda",
      html_url: `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/README.md`,
    },
    ...enriched.flatMap((folder) => folder.files),
  ];

  renderStats();
  renderNav();
}

function renderStats() {
  const folderCount = state.folders.length;
  const pageCount = state.allPages.length - 1;
  els.heroStats.innerHTML = `
    <div class="stat"><strong>${folderCount}</strong><span>Folder utama</span></div>
    <div class="stat"><strong>${pageCount}</strong><span>Halaman materi</span></div>
  `;
}

function renderNav() {
  const query = normalizeForSearch(state.search);
  els.nav.innerHTML = "";

  const homeLink = document.createElement("a");
  homeLink.href = "#/";
  homeLink.className = `nav-home ${state.currentPath === "README.md" || !state.currentPath ? "active" : ""}`;
  homeLink.textContent = "Beranda";
  els.nav.appendChild(homeLink);

  state.folders.forEach((folder) => {
    const folderMatches = normalizeForSearch(folder.label).includes(query);
    const visibleFiles = folder.files.filter((file) => {
      if (!query) return true;
      return (
        normalizeForSearch(file.label).includes(query) ||
        normalizeForSearch(file.name).includes(query) ||
        folderMatches
      );
    });

    if (query && !folderMatches && visibleFiles.length === 0) return;

    const details = document.createElement("details");
    details.className = "nav-section";
    details.open = query ? true : (state.currentPath || "").startsWith(folder.name);

    const summary = document.createElement("summary");
    summary.textContent = folder.label;
    details.appendChild(summary);

    const list = document.createElement("div");
    list.className = "nav-links";

    visibleFiles.forEach((file) => {
      const link = document.createElement("a");
      link.href = `#/${file.path}`;
      link.textContent = file.label;
      if (state.currentPath === file.path) link.classList.add("active");
      list.appendChild(link);
    });

    details.appendChild(list);
    els.nav.appendChild(details);
  });
}

function getCurrentPage() {
  const hash = decodeURIComponent(window.location.hash || "#/");
  const path = hash.replace(/^#\//, "");
  return path || "README.md";
}

function getPageByPath(path) {
  return state.allPages.find((page) => page.path === path);
}

function buildGithubUrl(path) {
  return `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${path}`;
}

function buildRawUrl(path) {
  return `${RAW_BASE}/${path}`;
}

function renderBreadcrumb(page) {
  if (!page || page.path === "README.md") {
    els.breadcrumb.innerHTML = "<span>Beranda</span>";
    return;
  }

  const folder = state.folders.find((item) => item.name === page.folder);
  const parts = [
    '<a href="#/">Beranda</a>',
    folder ? `<a href="#/${folder.name}/README.md">${folder.label}</a>` : "",
    `<span>${page.label}</span>`,
  ].filter(Boolean);

  els.breadcrumb.innerHTML = parts.join("<span class='sep'>/</span>");
}

function renderPager(page) {
  const index = state.allPages.findIndex((item) => item.path === page.path);
  const prev = index > 0 ? state.allPages[index - 1] : null;
  const next = index < state.allPages.length - 1 ? state.allPages[index + 1] : null;

  els.pager.innerHTML = `
    ${prev ? `<a class="pager-link" href="#/${prev.path}"><span>Sebelumnya</span><strong>${prev.label}</strong></a>` : "<span></span>"}
    ${next ? `<a class="pager-link right" href="#/${next.path}"><span>Berikutnya</span><strong>${next.label}</strong></a>` : "<span></span>"}
  `;
}

function renderMarkdown(markdown) {
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false,
  });

  const html = marked.parse(markdown);
  return DOMPurify.sanitize(html);
}

async function loadPage(path) {
  const page = getPageByPath(path) || getPageByPath("README.md");
  state.currentPath = page.path;
  renderNav();

  els.pageTitle.textContent = page.label;
  els.githubLink.href = page.html_url || buildGithubUrl(page.path);
  renderBreadcrumb(page);
  renderPager(page);

  els.hero.style.display = page.path === "README.md" ? "block" : "none";
  els.content.innerHTML = '<div class="loading">Memuat konten...</div>';

  try {
    const markdown = await fetchText(buildRawUrl(page.path));
    els.content.innerHTML = renderMarkdown(markdown);
    closeSidebar();
  } catch (error) {
    els.content.innerHTML = '<div class="error">Konten gagal dimuat.</div>';
  }
}

function openSidebar() {
  els.sidebar.classList.add("show");
  els.overlay.classList.add("show");
}

function closeSidebar() {
  els.sidebar.classList.remove("show");
  els.overlay.classList.remove("show");
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    loadPage(getCurrentPage());
  });

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderNav();
  });

  els.openSidebar.addEventListener("click", openSidebar);
  els.closeSidebar.addEventListener("click", closeSidebar);
  els.overlay.addEventListener("click", closeSidebar);

  els.toggleTheme.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });
}

async function init() {
  applyTheme(state.theme);
  bindEvents();

  try {
    await loadStructure();
    await loadPage(getCurrentPage());
  } catch (error) {
    els.pageTitle.textContent = "Materi Trading";
    els.content.innerHTML = '<div class="error">Struktur repo gagal dimuat. Coba refresh beberapa saat lagi.</div>';
  }
}

init();
