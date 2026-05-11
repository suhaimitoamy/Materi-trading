const OWNER = "suhaimitoamy";
const REPO = "Materi-trading";
const CONTENT_BRANCH = "main";
const APP_BRANCH = "feature/duolingo-mvp";
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${CONTENT_BRANCH}`;
const GITHUB_BASE = `https://github.com/${OWNER}/${REPO}`;
const PASS_SCORE = 70;
const DEFAULT_XP = 10;
const REVIEW_PATH = "review-salah";

const supabaseClient =
  window.supabase &&
  typeof SUPABASE_URL !== "undefined" &&
  typeof SUPABASE_ANON_KEY !== "undefined"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

const state = {
  folders: [],
  allPages: [],
  lessonsByPath: new Map(),
  currentPath: "",
  search: "",
  theme: localStorage.getItem("mt-theme") || "dark",
  session: null,
  profile: null,
  progress: new Map(),
  selectedAnswers: {},
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

const ui = {
  authPanel: null,
  profileMini: null,
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
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
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

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function buildApiUrl(path = "") {
  const cleanPath = path ? `/${encodePath(path)}` : "";
  return `${API_BASE}${cleanPath}?ref=${encodeURIComponent(CONTENT_BRANCH)}`;
}

function buildGithubUrl(path) {
  return `${GITHUB_BASE}/blob/${CONTENT_BRANCH}/${path}`;
}

function buildRawUrl(path) {
  return `${RAW_BASE}/${encodePath(path)}`;
}

function localDate(value = new Date()) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isYesterday(dateString) {
  if (!dateString) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return dateString === localDate(yesterday);
}

function safeText(value) {
  const div = document.createElement("div");
  div.textContent = value || "";
  return div.innerHTML;
}

function getLocalProgress() {
  try {
    return JSON.parse(localStorage.getItem("mt-progress-v1") || "{}");
  } catch (error) {
    return {};
  }
}

function saveLocalProgress(data) {
  localStorage.setItem("mt-progress-v1", JSON.stringify(data));
}

function getProgress(path) {
  return state.progress.get(path) || getLocalProgress()[path] || null;
}

function setProgress(path, value) {
  state.progress.set(path, value);
  const local = getLocalProgress();
  local[path] = value;
  saveLocalProgress(local);
}

function isCompleted(path) {
  return getProgress(path)?.status === "completed";
}

function getContentPages() {
  return state.allPages.filter((page) => page.path !== "README.md");
}

function isUnlocked(path) {
  if (!path || path === "README.md" || path === REVIEW_PATH) return true;
  const pages = getContentPages();
  const index = pages.findIndex((page) => page.path === path);
  if (index <= 0) return true;
  return isCompleted(pages[index - 1].path);
}

function getModuleProgress(folder) {
  const total = folder.files.length;
  const completed = folder.files.filter((file) => isCompleted(file.path)).length;
  return { total, completed };
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
  const rootItems = await fetchJson(buildApiUrl());
  const folders = rootItems
    .filter((item) => item.type === "dir" && /^\d{2}-/.test(item.name))
    .sort(sortFolders);

  const enriched = [];
  for (const folder of folders) {
    const items = await fetchJson(buildApiUrl(folder.name));
    const files = items
      .filter((item) => item.type === "file" && /\.md$/i.test(item.name))
      .sort(sortFiles)
      .map((file) => ({
        name: file.name,
        path: file.path,
        html_url: buildGithubUrl(file.path),
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
      html_url: buildGithubUrl("README.md"),
    },
    ...enriched.flatMap((folder) => folder.files),
  ];

  await loadLessonIndex();
  renderStats();
  renderNav();
}

async function loadLessonIndex() {
  state.lessonsByPath = new Map();
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from("lessons")
    .select("id, github_path, title, xp_reward, module_id, order_index");

  if (error || !Array.isArray(data)) return;

  data.forEach((lesson) => {
    if (lesson.github_path) state.lessonsByPath.set(lesson.github_path, lesson);
  });
}

async function loadAuthState() {
  if (!supabaseClient) return;

  const { data } = await supabaseClient.auth.getSession();
  state.session = data?.session || null;

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    state.session = session;
    await loadUserData();
    renderAuth();
    renderStats();
    renderNav();
    await loadPage(getCurrentPage());
  });

  await loadUserData();
}

async function loadUserData() {
  state.profile = null;
  state.progress = new Map();

  if (!state.session?.user) return;

  await ensureProfile();
  await loadProfile();
  await loadUserProgress();
}

async function ensureProfile() {
  const user = state.session?.user;
  if (!user) return;

  await supabaseClient.from("profiles").upsert(
    {
      user_id: user.id,
      username: user.email?.split("@")[0] || "trader",
      total_xp: 0,
      current_streak: 0,
      last_active_date: null,
    },
    { onConflict: "user_id", ignoreDuplicates: true }
  );
}

async function loadProfile() {
  const user = state.session?.user;
  if (!user) return;

  const { data } = await supabaseClient
    .from("profiles")
    .select("user_id, username, total_xp, current_streak, last_active_date")
    .eq("user_id", user.id)
    .maybeSingle();

  state.profile = data || {
    user_id: user.id,
    username: user.email?.split("@")[0] || "trader",
    total_xp: 0,
    current_streak: 0,
    last_active_date: null,
  };
}

async function loadUserProgress() {
  const user = state.session?.user;
  if (!user) return;

  const { data, error } = await supabaseClient
    .from("user_progress")
    .select("lesson_id, status, score, completed_at")
    .eq("user_id", user.id);

  if (error || !Array.isArray(data)) return;

  const idToPath = new Map();
  state.lessonsByPath.forEach((lesson, path) => idToPath.set(lesson.id, path));

  data.forEach((row) => {
    const path = idToPath.get(row.lesson_id);
    if (!path) return;
    state.progress.set(path, {
      status: row.status,
      score: row.score,
      completed_at: row.completed_at,
    });
  });
}

function renderStats() {
  const folderCount = state.folders.length;
  const pageCount = state.allPages.length - 1;
  const completed = getContentPages().filter((page) => isCompleted(page.path)).length;
  const xp = state.profile?.total_xp || 0;
  const streak = state.profile?.current_streak || 0;

  els.heroStats.innerHTML = `
    <div class="stat"><strong>${folderCount}</strong><span>Folder utama</span></div>
    <div class="stat"><strong>${pageCount}</strong><span>Halaman materi</span></div>
    <div class="stat"><strong>${completed}</strong><span>Lesson selesai</span></div>
    <div class="stat"><strong>${xp}</strong><span>XP</span></div>
    <div class="stat"><strong>${streak}</strong><span>Streak</span></div>
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

  const reviewLink = document.createElement("a");
  reviewLink.href = `#/${REVIEW_PATH}`;
  reviewLink.className = `nav-home ${state.currentPath === REVIEW_PATH ? "active" : ""}`;
  reviewLink.textContent = "Review Salah";
  els.nav.appendChild(reviewLink);

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

    const moduleProgress = getModuleProgress(folder);
    const details = document.createElement("details");
    details.className = "nav-section";
    details.open = query ? true : (state.currentPath || "").startsWith(folder.name);

    const summary = document.createElement("summary");
    summary.textContent = `${folder.label} (${moduleProgress.completed}/${moduleProgress.total})`;
    details.appendChild(summary);

    const list = document.createElement("div");
    list.className = "nav-links";

    visibleFiles.forEach((file) => {
      const unlocked = isUnlocked(file.path);
      const completed = isCompleted(file.path);
      const link = document.createElement("a");
      link.href = unlocked ? `#/${file.path}` : `#/${file.path}`;
      link.textContent = `${completed ? "✓ " : unlocked ? "" : "🔒 "}${file.label}`;
      if (state.currentPath === file.path) link.classList.add("active");
      if (!unlocked) {
        link.style.opacity = "0.5";
        link.addEventListener("click", (event) => {
          event.preventDefault();
          renderLockedPage(file.path);
        });
      }
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

function renderBreadcrumb(page) {
  if (!page || page.path === "README.md") {
    els.breadcrumb.innerHTML = "<span>Beranda</span>";
    return;
  }

  if (page.path === REVIEW_PATH) {
    els.breadcrumb.innerHTML = `<a href="#/">Beranda</a><span class="sep">/</span><span>Review Salah</span>`;
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
  if (!page || page.path === REVIEW_PATH) {
    els.pager.innerHTML = "";
    return;
  }

  const index = state.allPages.findIndex((item) => item.path === page.path);
  const prev = index > 0 ? state.allPages[index - 1] : null;
  const next = index < state.allPages.length - 1 ? state.allPages[index + 1] : null;
  const nextUnlocked = next ? isUnlocked(next.path) : false;

  els.pager.innerHTML = `
    ${prev ? `<a class="pager-link" href="#/${prev.path}"><span>Sebelumnya</span><strong>${safeText(prev.label)}</strong></a>` : "<span></span>"}
    ${next && nextUnlocked ? `<a class="pager-link right" href="#/${next.path}"><span>Berikutnya</span><strong>${safeText(next.label)}</strong></a>` : next ? `<span class="pager-link right"><span>Terkunci</span><strong>${safeText(next.label)}</strong></span>` : "<span></span>"}
  `;
}

function renderMarkdown(markdown, pagePath) {
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false,
  });

  const html = DOMPurify.sanitize(marked.parse(markdown));
  const wrap = document.createElement("div");
  wrap.innerHTML = html;

  const baseFolder = pagePath.includes("/") ? pagePath.split("/").slice(0, -1).join("/") : "";
  wrap.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    if (!src || /^(https?:|data:|\/)/i.test(src)) return;
    const rawPath = baseFolder ? `${baseFolder}/${src}` : src;
    img.src = buildRawUrl(rawPath);
  });

  wrap.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href || /^(https?:|mailto:|#)/i.test(href)) return;
    if (/\.md(#.*)?$/i.test(href)) {
      const cleanHref = href.replace(/^\.\//, "");
      const targetPath = baseFolder ? `${baseFolder}/${cleanHref}` : cleanHref;
      link.href = `#/${targetPath}`;
      return;
    }
    const rawPath = baseFolder ? `${baseFolder}/${href}` : href;
    link.href = buildRawUrl(rawPath);
  });

  return wrap.innerHTML;
}

function renderLockedPage(path) {
  const page = getPageByPath(path);
  const pages = getContentPages();
  const index = pages.findIndex((item) => item.path === path);
  const previous = index > 0 ? pages[index - 1] : null;

  state.currentPath = path;
  els.pageTitle.textContent = "Lesson terkunci";
  els.githubLink.href = GITHUB_BASE;
  els.hero.style.display = "none";
  els.breadcrumb.innerHTML = `<a href="#/">Beranda</a><span class="sep">/</span><span>Terkunci</span>`;
  els.pager.innerHTML = "";
  els.content.innerHTML = `
    <div class="error">
      <h2>${safeText(page?.label || "Lesson ini")} masih terkunci</h2>
      <p>Selesaikan lesson sebelumnya dulu: <strong>${safeText(previous?.label || "lesson sebelumnya")}</strong>.</p>
    </div>
  `;
  renderNav();
  closeSidebar();
}

async function loadPage(path) {
  if (path === REVIEW_PATH) {
    await renderReviewPage();
    return;
  }

  const page = getPageByPath(path) || getPageByPath("README.md");

  if (!isUnlocked(page.path)) {
    renderLockedPage(page.path);
    return;
  }

  state.currentPath = page.path;
  state.selectedAnswers = {};
  renderNav();

  els.pageTitle.textContent = page.label;
  els.githubLink.href = page.html_url || buildGithubUrl(page.path);
  renderBreadcrumb(page);
  renderPager(page);

  els.hero.style.display = page.path === "README.md" ? "block" : "none";
  els.content.innerHTML = '<div class="loading">Memuat konten...</div>';

  try {
    const markdown = await fetchText(buildRawUrl(page.path));
    els.content.innerHTML = renderMarkdown(markdown, page.path);

    if (page.path === "README.md") {
      renderLearningPath();
    } else {
      await renderLessonTools(page);
    }

    closeSidebar();
  } catch (error) {
    els.content.innerHTML = '<div class="error">Konten gagal dimuat.</div>';
  }
}

function renderLearningPath() {
  const section = document.createElement("section");
  section.className = "learning-path";
  section.innerHTML = `<h2>Learning Path</h2>`;

  state.folders.forEach((folder) => {
    const progress = getModuleProgress(folder);
    const card = document.createElement("div");
    card.className = "path-card";
    card.style.border = "1px solid var(--line)";
    card.style.borderRadius = "18px";
    card.style.padding = "16px";
    card.style.margin = "14px 0";
    card.style.background = "color-mix(in srgb, var(--panel-2) 72%, transparent)";

    const lessons = folder.files
      .map((file) => {
        const unlocked = isUnlocked(file.path);
        const completed = isCompleted(file.path);
        const status = completed ? "Selesai" : unlocked ? "Mulai" : "Terkunci";
        return `
          <a class="button ${unlocked ? "secondary" : "ghost"}" href="#/${file.path}" style="display:inline-block;margin:6px 6px 0 0;opacity:${unlocked ? "1" : "0.48"};pointer-events:${unlocked ? "auto" : "none"}">
            ${completed ? "✓ " : unlocked ? "" : "🔒 "}${safeText(file.label)} · ${status}
          </a>
        `;
      })
      .join("");

    card.innerHTML = `
      <h3>${safeText(folder.label)}</h3>
      <p>${progress.completed}/${progress.total} lesson selesai</p>
      <div>${lessons}</div>
    `;
    section.appendChild(card);
  });

  els.content.appendChild(section);
}

async function getLessonMeta(page) {
  const cached = state.lessonsByPath.get(page.path);
  if (cached) return cached;
  if (!supabaseClient) return null;

  const { data } = await supabaseClient
    .from("lessons")
    .select("id, github_path, title, xp_reward, module_id, order_index")
    .eq("github_path", page.path)
    .maybeSingle();

  if (data?.github_path) state.lessonsByPath.set(data.github_path, data);
  return data || null;
}

async function getLessonQuestions(lesson) {
  if (!supabaseClient || !lesson?.id) return [];

  const { data, error } = await supabaseClient
    .from("questions")
    .select("id, lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation")
    .eq("lesson_id", lesson.id)
    .order("id", { ascending: true });

  if (error || !Array.isArray(data)) return [];
  return data;
}

function getQuestionOptions(question) {
  return [
    ["a", question.option_a],
    ["b", question.option_b],
    ["c", question.option_c],
    ["d", question.option_d],
  ].filter((item) => item[1]);
}

function normalizeAnswer(value) {
  return String(value || "").trim().toLowerCase().replace(/^option_/, "");
}

async function renderLessonTools(page) {
  const lesson = await getLessonMeta(page);
  const questions = await getLessonQuestions(lesson);
  const progress = getProgress(page.path);
  const xpReward = lesson?.xp_reward || DEFAULT_XP;

  const panel = document.createElement("section");
  panel.className = "lesson-tools";
  panel.style.borderTop = "1px solid var(--line)";
  panel.style.marginTop = "24px";
  panel.style.paddingTop = "18px";

  const progressHtml = progress
    ? `<p>Status: <strong>${safeText(progress.status)}</strong>${typeof progress.score === "number" ? ` · Skor: <strong>${progress.score}</strong>` : ""}</p>`
    : `<p>Status: <strong>Belum selesai</strong></p>`;

  panel.innerHTML = `
    <h2>Mode Lesson</h2>
    ${progressHtml}
    <p>Reward: <strong>${xpReward} XP</strong></p>
    <div id="quizArea"></div>
  `;

  els.content.appendChild(panel);

  if (!questions.length) {
    panel.querySelector("#quizArea").innerHTML = `
      <p>Quiz untuk lesson ini belum tersedia.</p>
      <button class="button" type="button" id="completeLessonBtn">Tandai selesai</button>
      <p id="lessonMessage"></p>
    `;
    document.getElementById("completeLessonBtn").addEventListener("click", async () => {
      await completeLesson(page, lesson, 100, xpReward);
    });
    return;
  }

  panel.querySelector("#quizArea").innerHTML = `
    <h3>Quiz</h3>
    ${questions.map(renderQuestion).join("")}
    <button class="button" type="button" id="checkQuizBtn">Cek jawaban</button>
    <p id="lessonMessage"></p>
  `;

  questions.forEach((question) => {
    panel.querySelectorAll(`[name="q-${question.id}"]`).forEach((input) => {
      input.addEventListener("change", (event) => {
        state.selectedAnswers[question.id] = event.target.value;
      });
    });
  });

  document.getElementById("checkQuizBtn").addEventListener("click", async () => {
    await checkQuiz(page, lesson, questions, xpReward);
  });
}

function renderQuestion(question, index) {
  const options = getQuestionOptions(question);
  return `
    <div class="question-card" data-question-id="${question.id}" style="border:1px solid var(--line);border-radius:16px;padding:14px;margin:12px 0;">
      <p><strong>${index + 1}. ${safeText(question.question)}</strong></p>
      ${options
        .map(
          ([key, text]) => `
            <label style="display:block;margin:8px 0;">
              <input type="radio" name="q-${question.id}" value="${key}">
              ${key.toUpperCase()}. ${safeText(text)}
            </label>
          `
        )
        .join("")}
      <div class="question-result" id="result-${question.id}"></div>
    </div>
  `;
}

async function checkQuiz(page, lesson, questions, xpReward) {
  const total = questions.length;
  const answered = questions.filter((question) => state.selectedAnswers[question.id]).length;
  const message = document.getElementById("lessonMessage");

  if (answered < total) {
    message.textContent = "Jawab semua pertanyaan dulu.";
    return;
  }

  let correct = 0;
  const wrongQuestions = [];

  questions.forEach((question) => {
    const selected = normalizeAnswer(state.selectedAnswers[question.id]);
    const expected = normalizeAnswer(question.correct_answer);
    const result = document.getElementById(`result-${question.id}`);
    const isRight = selected === expected;

    if (isRight) correct += 1;
    else wrongQuestions.push({ question, selected });

    result.innerHTML = `
      <p><strong>${isRight ? "Benar" : "Salah"}</strong></p>
      ${question.explanation ? `<p>${safeText(question.explanation)}</p>` : ""}
    `;
  });

  const score = Math.round((correct / total) * 100);
  await saveQuizAttempt(lesson, score, total);
  await saveWrongAnswers(wrongQuestions);

  if (score >= PASS_SCORE) {
    await completeLesson(page, lesson, score, xpReward);
  } else {
    setProgress(page.path, {
      status: "review",
      score,
      completed_at: null,
    });
    message.textContent = `Skor ${score}. Minimal ${PASS_SCORE} untuk membuka lesson berikutnya.`;
    renderStats();
    renderNav();
    renderPager(page);
  }
}

async function saveQuizAttempt(lesson, score, totalQuestions) {
  const user = state.session?.user;
  if (!supabaseClient || !user || !lesson?.id) return;

  await supabaseClient.from("quiz_attempts").insert({
    user_id: user.id,
    lesson_id: lesson.id,
    score,
    total_questions: totalQuestions,
  });
}

async function saveWrongAnswers(wrongQuestions) {
  const user = state.session?.user;
  if (!supabaseClient || !user || !wrongQuestions.length) return;

  const rows = wrongQuestions.map(({ question, selected }) => ({
    user_id: user.id,
    question_id: question.id,
    selected_answer: selected,
    reviewed: false,
  }));

  await supabaseClient.from("wrong_answers").insert(rows);
}

async function completeLesson(page, lesson, score, xpReward) {
  const alreadyCompleted = isCompleted(page.path);
  const completedAt = new Date().toISOString();

  setProgress(page.path, {
    status: "completed",
    score,
    completed_at: completedAt,
  });

  if (supabaseClient && state.session?.user && lesson?.id) {
    await supabaseClient.from("user_progress").upsert(
      {
        user_id: state.session.user.id,
        lesson_id: lesson.id,
        status: "completed",
        score,
        completed_at: completedAt,
      },
      { onConflict: "user_id,lesson_id" }
    );
  }

  if (!alreadyCompleted) await grantXp(xpReward);

  const message = document.getElementById("lessonMessage");
  if (message) message.textContent = `Lesson selesai. ${alreadyCompleted ? "XP sudah pernah diberikan." : `+${xpReward} XP.`}`;

  await loadUserProgress();
  renderAuth();
  renderStats();
  renderNav();
  renderPager(page);
}

async function grantXp(amount) {
  const today = localDate();
  const profile = state.profile || {
    total_xp: 0,
    current_streak: 0,
    last_active_date: null,
  };

  const nextStreak =
    profile.last_active_date === today
      ? profile.current_streak || 1
      : isYesterday(profile.last_active_date)
        ? (profile.current_streak || 0) + 1
        : 1;

  state.profile = {
    ...profile,
    total_xp: (profile.total_xp || 0) + amount,
    current_streak: nextStreak,
    last_active_date: today,
  };

  if (!supabaseClient || !state.session?.user) return;

  await supabaseClient.from("profiles").upsert(
    {
      user_id: state.session.user.id,
      username: state.profile.username || state.session.user.email?.split("@")[0] || "trader",
      total_xp: state.profile.total_xp,
      current_streak: state.profile.current_streak,
      last_active_date: state.profile.last_active_date,
    },
    { onConflict: "user_id" }
  );

  const { data } = await supabaseClient
    .from("daily_activity")
    .select("xp_earned, lesson_count")
    .eq("user_id", state.session.user.id)
    .eq("activity_date", today)
    .maybeSingle();

  await supabaseClient.from("daily_activity").upsert(
    {
      user_id: state.session.user.id,
      activity_date: today,
      xp_earned: (data?.xp_earned || 0) + amount,
      lesson_count: (data?.lesson_count || 0) + 1,
    },
    { onConflict: "user_id,activity_date" }
  );
}

async function renderReviewPage() {
  state.currentPath = REVIEW_PATH;
  els.pageTitle.textContent = "Review Salah";
  els.githubLink.href = `${GITHUB_BASE}/tree/${APP_BRANCH}`;
  els.hero.style.display = "none";
  renderBreadcrumb({ path: REVIEW_PATH, label: "Review Salah" });
  renderPager({ path: REVIEW_PATH });
  renderNav();
  closeSidebar();

  if (!supabaseClient || !state.session?.user) {
    els.content.innerHTML = '<div class="error">Login dulu untuk melihat review salah.</div>';
    return;
  }

  els.content.innerHTML = '<div class="loading">Memuat review...</div>';

  const { data: wrongRows, error } = await supabaseClient
    .from("wrong_answers")
    .select("id, question_id, selected_answer, reviewed, created_at")
    .eq("user_id", state.session.user.id)
    .eq("reviewed", false)
    .order("created_at", { ascending: false });

  if (error) {
    els.content.innerHTML = '<div class="error">Review salah gagal dimuat.</div>';
    return;
  }

  if (!wrongRows?.length) {
    els.content.innerHTML = '<h2>Review Salah</h2><p>Belum ada jawaban salah yang perlu direview.</p>';
    return;
  }

  const questionIds = [...new Set(wrongRows.map((row) => row.question_id))];
  const { data: questions } = await supabaseClient
    .from("questions")
    .select("id, question, option_a, option_b, option_c, option_d, correct_answer, explanation")
    .in("id", questionIds);

  const questionMap = new Map((questions || []).map((question) => [question.id, question]));

  els.content.innerHTML = `
    <h2>Review Salah</h2>
    ${wrongRows
      .map((row) => {
        const question = questionMap.get(row.question_id);
        return `
          <div style="border:1px solid var(--line);border-radius:16px;padding:14px;margin:12px 0;">
            <p><strong>${safeText(question?.question || "Pertanyaan tidak ditemukan")}</strong></p>
            <p>Jawaban kamu: <strong>${safeText(String(row.selected_answer || "").toUpperCase())}</strong></p>
            <p>Jawaban benar: <strong>${safeText(String(question?.correct_answer || "").toUpperCase())}</strong></p>
            ${question?.explanation ? `<p>${safeText(question.explanation)}</p>` : ""}
            <button class="button secondary" type="button" data-review-id="${row.id}">Tandai sudah direview</button>
          </div>
        `;
      })
      .join("")}
  `;

  els.content.querySelectorAll("[data-review-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-review-id");
      await supabaseClient.from("wrong_answers").update({ reviewed: true }).eq("id", id);
      await renderReviewPage();
    });
  });
}

function mountAuthPanel() {
  ui.profileMini = document.createElement("div");
  ui.profileMini.id = "profileMini";
  ui.profileMini.style.display = "flex";
  ui.profileMini.style.gap = "8px";
  ui.profileMini.style.alignItems = "center";
  els.githubLink.parentElement.prepend(ui.profileMini);

  ui.authPanel = document.createElement("section");
  ui.authPanel.id = "authPanel";
  ui.authPanel.style.border = "1px solid var(--line)";
  ui.authPanel.style.borderRadius = "18px";
  ui.authPanel.style.padding = "14px";
  ui.authPanel.style.marginBottom = "14px";
  ui.authPanel.style.background = "color-mix(in srgb, var(--panel-2) 70%, transparent)";
  els.content.parentElement.insertBefore(ui.authPanel, els.content);
}

function renderAuth() {
  if (!ui.authPanel || !ui.profileMini) return;

  if (!supabaseClient) {
    ui.profileMini.innerHTML = "";
    ui.authPanel.innerHTML = "<p>Supabase belum aktif.</p>";
    return;
  }

  if (state.session?.user) {
    const username = state.profile?.username || state.session.user.email || "User";
    const xp = state.profile?.total_xp || 0;
    const streak = state.profile?.current_streak || 0;

    ui.profileMini.innerHTML = `<span>${xp} XP · ${streak} 🔥</span>`;
    ui.authPanel.innerHTML = `
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;">
        <div>
          <strong>${safeText(username)}</strong>
          <p style="margin:4px 0 0;color:var(--muted);">${xp} XP · ${streak} hari streak</p>
        </div>
        <button class="button secondary" type="button" id="logoutBtn">Logout</button>
      </div>
    `;

    document.getElementById("logoutBtn").addEventListener("click", async () => {
      await supabaseClient.auth.signOut();
    });
    return;
  }

  ui.profileMini.innerHTML = `<span>Belum login</span>`;
  ui.authPanel.innerHTML = `
    <div>
      <strong>Login progress</strong>
      <p style="margin:4px 0 10px;color:var(--muted);">Progress, XP, streak, dan review salah tersimpan setelah login.</p>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-width:520px;">
        <input id="authEmail" type="email" placeholder="Email" style="width:100%;border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:12px;padding:10px;">
        <input id="authPassword" type="password" placeholder="Password" style="width:100%;border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:12px;padding:10px;">
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
        <button class="button" type="button" id="loginBtn">Login</button>
        <button class="button secondary" type="button" id="registerBtn">Register</button>
      </div>
      <p id="authMessage" style="color:var(--muted);"></p>
    </div>
  `;

  document.getElementById("loginBtn").addEventListener("click", () => signInOrRegister("login"));
  document.getElementById("registerBtn").addEventListener("click", () => signInOrRegister("register"));
}

async function signInOrRegister(mode) {
  const email = document.getElementById("authEmail")?.value.trim();
  const password = document.getElementById("authPassword")?.value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "Email dan password wajib diisi.";
    return;
  }

  const result =
    mode === "login"
      ? await supabaseClient.auth.signInWithPassword({ email, password })
      : await supabaseClient.auth.signUp({ email, password });

  if (result.error) {
    message.textContent = result.error.message;
    return;
  }

  message.textContent = mode === "login" ? "Login berhasil." : "Register berhasil. Cek email kalau konfirmasi aktif.";
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
  mountAuthPanel();
  bindEvents();

  try {
    await loadAuthState();
    renderAuth();
    await loadStructure();
    await loadPage(getCurrentPage());
  } catch (error) {
    els.pageTitle.textContent = "Materi Trading";
    els.content.innerHTML = '<div class="error">Struktur repo gagal dimuat. Coba refresh beberapa saat lagi.</div>';
  }
}

init();
