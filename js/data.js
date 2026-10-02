/*
 * Контент портфолио.
 * Здесь всё, что нужно менять чаще всего: проекты и контакты.
 * Тексты задаются на двух языках: { ru: "...", en: "..." }.
 */

/*
 * ПРОЕКТЫ
 * Каждый проект получает карточку на главной / на странице «Работы»
 * и собственную страницу-кейс: project.html?p=<slug>
 *
 *   slug      — короткий id латиницей для ссылки (например "lumex")
 *   title     — название проекта
 *   year      — год
 *   category  — тип работы (ru/en)
 *   short     — одна строка для карточки (ru/en)
 *   featured  — true = показывать на главной
 *   cover     — обложка, например "assets/projects/lumex/cover.jpg" (лучше 1600×1200)
 *   images    — дополнительные картинки для страницы кейса
 *   client, role, services — данные для шапки кейса
 *   overview, challenge, solution — тексты кейса (ru/en)
 *   live      — ссылка на живой сайт / прототип (можно оставить пустой)
 *   tags      — короткие теги
 * Если cover/images пустые — показываются аккуратные заглушки.
 */
window.PROJECTS = [
  {
    slug: "project-01",
    title: "Project 01",
    year: "2026",
    category: { ru: "UI/UX дизайн", en: "UI/UX Design" },
    short: { ru: "Скоро здесь появится проект", en: "A project is coming here soon" },
    featured: true,
    cover: "",
    images: [],
    client: "—",
    role: { ru: "Дизайн", en: "Design" },
    services: ["UI/UX", "Web"],
    overview: { ru: "Описание проекта появится здесь.", en: "Project overview will appear here." },
    challenge: { ru: "Какая была задача.", en: "What the challenge was." },
    solution: { ru: "Как я её решил.", en: "How I solved it." },
    live: "",
    tags: ["Figma", "Web"],
  },
  {
    slug: "project-02",
    title: "Project 02",
    year: "2026",
    category: { ru: "Вайбкодинг", en: "Vibe coding" },
    short: { ru: "Скоро здесь появится проект", en: "A project is coming here soon" },
    featured: true,
    cover: "",
    images: [],
    client: "—",
    role: { ru: "Дизайн и разработка", en: "Design & build" },
    services: ["AI", "Prototype"],
    overview: { ru: "Описание проекта появится здесь.", en: "Project overview will appear here." },
    challenge: { ru: "Какая была задача.", en: "What the challenge was." },
    solution: { ru: "Как я её решил.", en: "How I solved it." },
    live: "",
    tags: ["AI", "Prototype"],
  },
  {
    slug: "project-03",
    title: "Project 03",
    year: "2026",
    category: { ru: "Веб-дизайн", en: "Web design" },
    short: { ru: "Скоро здесь появится проект", en: "A project is coming here soon" },
    featured: true,
    cover: "",
    images: [],
    client: "—",
    role: { ru: "Дизайн", en: "Design" },
    services: ["Landing", "Framer"],
    overview: { ru: "Описание проекта появится здесь.", en: "Project overview will appear here." },
    challenge: { ru: "Какая была задача.", en: "What the challenge was." },
    solution: { ru: "Как я её решил.", en: "How I solved it." },
    live: "",
    tags: ["Landing", "Framer"],
  },
  {
    slug: "project-04",
    title: "Project 04",
    year: "2026",
    category: { ru: "Дизайн + код", en: "Design + code" },
    short: { ru: "Скоро здесь появится проект", en: "A project is coming here soon" },
    featured: true,
    cover: "",
    images: [],
    client: "—",
    role: { ru: "Дизайн и разработка", en: "Design & build" },
    services: ["MVP", "Web app"],
    overview: { ru: "Описание проекта появится здесь.", en: "Project overview will appear here." },
    challenge: { ru: "Какая была задача.", en: "What the challenge was." },
    solution: { ru: "Как я её решил.", en: "How I solved it." },
    live: "",
    tags: ["MVP", "Web app"],
  },
];

/*
 * КОНТАКТЫ
 * Чтобы добавить новый способ связи (LinkedIn, Behance, Instagram…),
 * просто добавь ещё один объект в список.
 *   copy: true — рядом появится кнопка «Скопировать»
 */
window.CONTACTS = [
  {
    label: { ru: "Почта", en: "Email" },
    value: "yakimush.oleg@gmail.com",
    href: "mailto:yakimush.oleg@gmail.com",
    copy: true,
  },
  {
    label: { ru: "Телеграм", en: "Telegram" },
    value: "@oleg_jak",
    href: "https://t.me/oleg_jak",
    copy: false,
  },
];
