(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ===== Переводы ===== */
  const I18N = {
    ru: {
      "nav.work": "Работы",
      "nav.about": "Обо мне",
      "nav.services": "Услуги",
      "nav.contact": "Контакты",
      "nav.cta": "Связаться",
      "hero.status": "Открыт к новым проектам",
      "hero.lead": "Дизайнер и вайбкодер. Придумываю интерфейсы и сайты — и сам довожу их до работающего продукта с помощью AI.",
      "hero.btnWork": "Смотреть работы",
      "hero.btnContact": "Написать мне",
      "work.title": "Избранные работы",
      "work.sub": "Проекты в дизайне и вайбкодинге. Скоро здесь будет больше.",
      "work.soon": "Скоро",
      "about.label": "Обо мне",
      "about.big": "Привет! Я Олег — дизайнер, который не останавливается на макете. Делаю понятные и красивые интерфейсы, а потом превращаю их в живые сайты и прототипы вместе с AI.",
      "about.small": "Мне нравится короткий путь от идеи до результата: вместо долгих передач «дизайн → разработка» я сразу собираю рабочую версию, тестирую её и докручиваю детали.",
      "about.s1t": "Разбираюсь",
      "about.s1": "Задача, аудитория, референсы и цель проекта.",
      "about.s2t": "Проектирую",
      "about.s2": "Структура, визуальный стиль и дизайн в Figma.",
      "about.s3t": "Собираю",
      "about.s3": "Вайбкодинг: рабочий сайт или прототип с помощью AI.",
      "services.title": "Чем могу помочь",
      "services.s1t": "UI/UX дизайн",
      "services.s1": "Интерфейсы приложений и сервисов: от user flow до готовых экранов.",
      "services.s2t": "Веб-дизайн",
      "services.s2": "Лендинги, портфолио и сайты для бизнеса с аккуратной типографикой.",
      "services.s3t": "Вайбкодинг",
      "services.s3": "Превращаю дизайн в работающий сайт или MVP с помощью AI-инструментов.",
      "services.s4t": "Прототипы",
      "services.s4": "Быстрые кликабельные и живые прототипы, чтобы проверить идею.",
      "services.tools": "Инструменты",
      "contact.label": "Контакты",
      "contact.title": "Есть идея? Давайте сделаем её вместе.",
      "contact.sub": "Пишите в почту или телеграм — отвечаю быстро.",
      "contact.open": "Открыть",
      "contact.copy": "Скопировать",
      "contact.copied": "Скопировано",
      "footer.top": "Наверх ↑",
    },
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "hero.status": "Available for new projects",
      "hero.lead": "Designer and vibe coder. I design interfaces and websites — and bring them to a working product myself with the help of AI.",
      "hero.btnWork": "View work",
      "hero.btnContact": "Contact me",
      "work.title": "Selected work",
      "work.sub": "Projects in design and vibe coding. More coming soon.",
      "work.soon": "Coming soon",
      "about.label": "About",
      "about.big": "Hi! I'm Oleg — a designer who doesn't stop at the mockup. I craft clear, beautiful interfaces and then turn them into live websites and prototypes with AI.",
      "about.small": "I love the short path from idea to result: instead of long design-to-dev handoffs, I build a working version right away, test it and polish the details.",
      "about.s1t": "Understand",
      "about.s1": "The task, the audience, references and goals.",
      "about.s2t": "Design",
      "about.s2": "Structure, visual style and design in Figma.",
      "about.s3t": "Build",
      "about.s3": "Vibe coding: a working site or prototype with AI.",
      "services.title": "How I can help",
      "services.s1t": "UI/UX design",
      "services.s1": "App and product interfaces: from user flows to polished screens.",
      "services.s2t": "Web design",
      "services.s2": "Landing pages, portfolios and business websites with careful typography.",
      "services.s3t": "Vibe coding",
      "services.s3": "Turning designs into working websites or MVPs with AI tools.",
      "services.s4t": "Prototypes",
      "services.s4": "Fast clickable and live prototypes to validate an idea.",
      "services.tools": "Tools",
      "contact.label": "Contact",
      "contact.title": "Got an idea? Let's build it together.",
      "contact.sub": "Write to me by email or Telegram — I reply fast.",
      "contact.open": "Open",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "footer.top": "Back to top ↑",
    },
  };

  const PLACEHOLDER_COLORS = [
    ["#ece9e2", "#d8dce6"],
    ["#e4e9e3", "#e9e1d7"],
    ["#e6e3ee", "#dfe7e9"],
    ["#efe6e1", "#dde3dc"],
  ];

  let lang = getInitialLang();
  let worksRendered = false;

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
    if (value && typeof value === "object") return value[lang] || value.ru || value.en || "";
    return value || "";
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ===== Проекты ===== */
  function renderWorks() {
    const root = document.getElementById("works");
    const projects = window.PROJECTS || [];
    root.textContent = "";

    projects.forEach(function (p, i) {
      const card = el(p.url ? "a" : "div", worksRendered ? "work reveal is-visible" : "work reveal");
      if (p.url) {
        card.href = p.url;
        card.target = "_blank";
        card.rel = "noopener";
      }

      const media = el("div", "work__media");
      if (p.image) {
        const img = el("img");
        img.src = p.image;
        img.alt = p.title;
        img.loading = "lazy";
        media.appendChild(img);
      } else {
        const ph = el("div", "work__placeholder");
        const colors = PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length];
        ph.style.setProperty("--ph-a", colors[0]);
        ph.style.setProperty("--ph-b", colors[1]);
        ph.appendChild(el("span", "work__placeholder-num", String(i + 1).padStart(2, "0")));
        ph.appendChild(el("span", "work__placeholder-tag", t("work.soon")));
        media.appendChild(ph);
      }
      if (p.url) media.appendChild(el("span", "work__arrow", "→"));
      card.appendChild(media);

      const info = el("div", "work__info");
      info.appendChild(el("h3", "work__title", p.title));
      info.appendChild(el("span", "work__year", p.year || ""));
      card.appendChild(info);

      const meta = [pick(p.category), pick(p.text)].filter(Boolean).join(" — ");
      if (meta) card.appendChild(el("p", "work__meta", meta));

      if (p.tags && p.tags.length) {
        const tags = el("ul", "work__tags");
        p.tags.forEach(function (tag) { tags.appendChild(el("li", "", tag)); });
        card.appendChild(tags);
      }

      root.appendChild(card);
    });

    worksRendered = true;
    document.getElementById("work-count").textContent =
      "(" + String(projects.length).padStart(2, "0") + ")";
  }

  /* ===== Контакты ===== */
  function renderContacts() {
    const root = document.getElementById("contacts");
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

      const actions = el("div", "contact__actions");
      if (c.copy) {
        const btn = el("button", "contact__btn", t("contact.copy"));
        btn.type = "button";
        btn.addEventListener("click", function () { copy(c.value); });
        actions.appendChild(btn);
      } else {
        const open = el("a", "contact__btn", t("contact.open") + " ↗");
        open.href = c.href;
        open.target = "_blank";
        open.rel = "noopener";
        actions.appendChild(open);
      }
      item.appendChild(actions);
      root.appendChild(item);
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
    renderContacts();
  }

  document.querySelectorAll(".lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lang = btn.getAttribute("data-lang");
      try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
      applyLang();
    });
  });

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
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (n, i) {
      n.style.transitionDelay = (n.closest(".hero") ? i * 80 : 0) + "ms";
      io.observe(n);
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
  initReveal();
})();
