(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ===== Переводы ===== */
  const I18N = {
    ru: {
      "nav.work": "Работы",
      "nav.about": "Обо мне",
      "nav.contact": "Контакты",
      "nav.cta": "Связаться",
      "hero.role": "Дизайнер и вайбкодер",
      "hero.title": "Создаю понятные интерфейсы и превращаю их в живые продукты с помощью AI.",
      "hero.status": "Открыт к новым проектам",
      "hero.btnWork": "Смотреть работы",
      "hero.btnContact": "Написать мне",
      "work.title": "Избранные работы",
      "work.all": "Все работы →",
      "work.eyebrow": "Портфолио",
      "work.allTitle": "Все работы",
      "work.allSub": "Дизайн интерфейсов, сайты и проекты, собранные с помощью вайбкодинга.",
      "work.soon": "Скоро",
      "about.label": "Обо мне",
      "about.big": "Привет! Я Олег — дизайнер, который не останавливается на макете.",
      "about.small": "Делаю понятные и красивые интерфейсы, а потом сам собираю из них живые сайты и прототипы вместе с AI. Короткий путь от идеи до результата: без долгих передач «дизайн → разработка».",
      "about.f1k": "Фокус",
      "about.f1v": "UI/UX и веб-дизайн",
      "about.f2k": "Подход",
      "about.f2v": "Дизайн + вайбкодинг",
      "about.f3k": "Инструменты",
      "services.title": "Чем могу помочь",
      "services.s1t": "UI/UX дизайн",
      "services.s1": "Интерфейсы приложений и сервисов: от user flow до готовых экранов.",
      "services.s2t": "Веб-дизайн",
      "services.s2": "Лендинги, портфолио и сайты для бизнеса с аккуратной типографикой.",
      "services.s3t": "Вайбкодинг",
      "services.s3": "Превращаю дизайн в работающий сайт, прототип или MVP с помощью AI.",
      "contact.label": "Контакты",
      "contact.title": "Есть идея? Давайте сделаем её вместе.",
      "contact.sub": "Пишите в почту или телеграм — отвечаю быстро.",
      "contact.open": "Открыть",
      "contact.copy": "Скопировать",
      "contact.copied": "Скопировано",
      "case.back": "← Все работы",
      "case.client": "Клиент",
      "case.year": "Год",
      "case.role": "Роль",
      "case.services": "Услуги",
      "case.overview": "Обзор",
      "case.challenge": "Задача",
      "case.solution": "Решение",
      "case.live": "Открыть проект",
      "case.next": "Следующий проект",
      "case.notFound": "Проект не найден",
      "footer.top": "Наверх ↑",
    },
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "hero.role": "Designer & vibe coder",
      "hero.title": "I design clear interfaces and turn them into living products with AI.",
      "hero.status": "Available for new projects",
      "hero.btnWork": "View work",
      "hero.btnContact": "Contact me",
      "work.title": "Selected work",
      "work.all": "All work →",
      "work.eyebrow": "Portfolio",
      "work.allTitle": "All work",
      "work.allSub": "Interface design, websites and projects built with vibe coding.",
      "work.soon": "Coming soon",
      "about.label": "About",
      "about.big": "Hi! I'm Oleg — a designer who doesn't stop at the mockup.",
      "about.small": "I craft clear, beautiful interfaces and then build them into live websites and prototypes with AI. A short path from idea to result — no long design-to-dev handoffs.",
      "about.f1k": "Focus",
      "about.f1v": "UI/UX & web design",
      "about.f2k": "Approach",
      "about.f2v": "Design + vibe coding",
      "about.f3k": "Tools",
      "services.title": "How I can help",
      "services.s1t": "UI/UX design",
      "services.s1": "App and product interfaces: from user flows to polished screens.",
      "services.s2t": "Web design",
      "services.s2": "Landing pages, portfolios and business websites with careful typography.",
      "services.s3t": "Vibe coding",
      "services.s3": "Turning designs into working websites, prototypes or MVPs with AI.",
      "contact.label": "Contact",
      "contact.title": "Got an idea? Let's build it together.",
      "contact.sub": "Write to me by email or Telegram — I reply fast.",
      "contact.open": "Open",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "case.back": "← All work",
      "case.client": "Client",
      "case.year": "Year",
      "case.role": "Role",
      "case.services": "Services",
      "case.overview": "Overview",
      "case.challenge": "Challenge",
      "case.solution": "Solution",
      "case.live": "View project",
      "case.next": "Next project",
      "case.notFound": "Project not found",
      "footer.top": "Back to top ↑",
    },
  };

  const PLACEHOLDER_COLORS = [
    ["#efe7dc", "#e2e4e8"],
    ["#e6e9e2", "#efe4d6"],
    ["#ebe5ee", "#e4e9e8"],
    ["#f0e5df", "#e2e6dd"],
  ];

  const PROJECTS = window.PROJECTS || [];
  const page = document.body.getAttribute("data-page");
  let lang = getInitialLang();
  let firstRender = true;

  function getInitialLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ru" || saved === "en") return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
  }

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key;
  }

  function pick(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[lang] || value.ru || value.en || "";
    }
    return value || "";
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function projectUrl(p) {
    return "project.html?p=" + encodeURIComponent(p.slug);
  }

  function placeholder(index, big) {
    const ph = el("div", "placeholder" + (big ? " placeholder--big" : ""));
    const colors = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];
    ph.style.setProperty("--ph-a", colors[0]);
    ph.style.setProperty("--ph-b", colors[1]);
    ph.appendChild(el("span", "placeholder__num", String(index + 1).padStart(2, "0")));
    ph.appendChild(el("span", "placeholder__tag", t("work.soon")));
    return ph;
  }

  /* ===== Карточки работ ===== */
  function renderWorks() {
    document.querySelectorAll("[data-works]").forEach(function (root) {
      const list = root.getAttribute("data-works") === "featured"
        ? PROJECTS.filter(function (p) { return p.featured; })
        : PROJECTS;
      root.textContent = "";

      list.forEach(function (p) {
        const index = PROJECTS.indexOf(p);
        const card = el("a", firstRender ? "work reveal" : "work reveal is-visible");
        card.href = projectUrl(p);

        const media = el("div", "work__media");
        if (p.cover) {
          const img = el("img");
          img.src = p.cover;
          img.alt = p.title;
          img.loading = "lazy";
          media.appendChild(img);
        } else {
          media.appendChild(placeholder(index));
        }
        media.appendChild(el("span", "work__arrow", "→"));
        card.appendChild(media);

        const info = el("div", "work__info");
        const left = el("div");
        left.appendChild(el("h3", "work__title", p.title));
        left.appendChild(el("p", "work__meta", pick(p.short)));
        info.appendChild(left);
        info.appendChild(el("span", "work__pill", pick(p.category)));
        card.appendChild(info);

        root.appendChild(card);
      });
    });

    document.querySelectorAll("[data-count]").forEach(function (node) {
      const n = node.getAttribute("data-count") === "featured"
        ? PROJECTS.filter(function (p) { return p.featured; }).length
        : PROJECTS.length;
      node.textContent = "(" + String(n).padStart(2, "0") + ")";
    });
  }

  /* ===== Страница кейса ===== */
  function renderCase() {
    const root = document.querySelector("[data-case]");
    if (!root) return;

    const slug = new URLSearchParams(location.search).get("p");
    const index = Math.max(0, PROJECTS.findIndex(function (p) { return p.slug === slug; }));
    const p = PROJECTS[index];
    const set = function (attr, value) {
      const node = root.querySelector("[" + attr + "]");
      if (node) node.textContent = value;
    };

    if (!p) {
      set("data-case-title", t("case.notFound"));
      return;
    }

    document.title = p.title + " — Oleg Jakimush";
    set("data-case-category", pick(p.category));
    set("data-case-title", p.title);
    set("data-case-short", pick(p.short));
    set("data-case-client", pick(p.client) || "—");
    set("data-case-year", p.year || "—");
    set("data-case-role", pick(p.role) || "—");
    set("data-case-services", (p.services || []).join(", ") || "—");
    set("data-case-overview", pick(p.overview));
    set("data-case-challenge", pick(p.challenge));
    set("data-case-solution", pick(p.solution));

    const cover = root.querySelector("[data-case-cover]");
    cover.textContent = "";
    if (p.cover) {
      const img = el("img");
      img.src = p.cover;
      img.alt = p.title;
      cover.appendChild(img);
    } else {
      cover.appendChild(placeholder(index, true));
    }

    const gallery = root.querySelector("[data-case-gallery]");
    gallery.textContent = "";
    const images = p.images && p.images.length ? p.images : [null, null];
    images.forEach(function (src, i) {
      const item = el("div", "case__shot reveal is-visible");
      if (src) {
        const img = el("img");
        img.src = src;
        img.alt = p.title + " — " + (i + 1);
        img.loading = "lazy";
        item.appendChild(img);
      } else {
        item.appendChild(placeholder(index + i + 1));
      }
      gallery.appendChild(item);
    });

    const live = root.querySelector("[data-case-live]");
    if (p.live) {
      live.href = p.live;
      live.hidden = false;
    } else {
      live.hidden = true;
    }

    const next = PROJECTS[(index + 1) % PROJECTS.length];
    const nextLink = root.querySelector("[data-case-next]");
    if (next && next !== p) {
      nextLink.href = projectUrl(next);
      set("data-case-next-title", next.title + " →");
    } else {
      nextLink.hidden = true;
    }
  }

  /* ===== Контакты ===== */
  function renderContacts() {
    document.querySelectorAll("[data-contacts]").forEach(function (root) {
      root.textContent = "";
      (window.CONTACTS || []).forEach(function (c) {
        const item = el("li", "contact__item");
        item.appendChild(el("span", "contact__label", pick(c.label)));

        const link = el("a", "contact__link", c.value);
        link.href = c.href;
        if (!c.href.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noopener";
        }
        item.appendChild(link);

        let action;
        if (c.copy) {
          action = el("button", "contact__btn", t("contact.copy"));
          action.type = "button";
          action.addEventListener("click", function () { copy(c.value); });
        } else {
          action = el("a", "contact__btn", t("contact.open") + " ↗");
          action.href = c.href;
          action.target = "_blank";
          action.rel = "noopener";
        }
        item.appendChild(action);
        root.appendChild(item);
      });
    });
  }

  function copy(text) {
    const done = function () { showToast(t("contact.copied") + ": " + text); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  function fallbackCopy(text) {
    const area = el("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    area.remove();
  }

  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  }

  /* ===== Язык ===== */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    renderWorks();
    renderCase();
    renderContacts();
    firstRender = false;
  }

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lang = btn.getAttribute("data-lang");
      try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
      applyLang();
    });
  });

  /* Подсветка текущего раздела в меню */
  if (page === "works" || page === "project") {
    const link = document.querySelector('.nav__link[href="works.html"]');
    if (link) link.classList.add("is-active");
  }

  /* ===== Появление при скролле ===== */
  function initReveal() {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  document.querySelectorAll("[data-year]").forEach(function (n) {
    n.textContent = new Date().getFullYear();
  });
  applyLang();
  initReveal();
})();
