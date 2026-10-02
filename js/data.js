/*
 * Контент портфолио.
 * Здесь всё, что нужно менять чаще всего: проекты и контакты.
 * Тексты задаются на двух языках: { ru: "...", en: "..." }.
 */

/*
 * ПРОЕКТЫ
 * Чтобы добавить проект, заполни объект ниже:
 *   title    — название проекта
 *   year     — год
 *   category — тип работы (ru/en)
 *   text     — короткое описание (ru/en)
 *   image    — путь к обложке, например "assets/projects/my-project.jpg"
 *              (лучше 1600×1200, соотношение 4:3)
 *   url      — ссылка на кейс / живой сайт (можно оставить пустой)
 *   tags     — короткие теги
 * Если image пустой — показывается аккуратная заглушка «Скоро».
 */
window.PROJECTS = [
  {
    title: "Project 01",
    year: "2026",
    category: { ru: "UI/UX дизайн", en: "UI/UX Design" },
    text: { ru: "Здесь скоро появится проект.", en: "A project is coming here soon." },
    image: "",
    url: "",
    tags: ["Figma", "Web"],
  },
  {
    title: "Project 02",
    year: "2026",
    category: { ru: "Вайбкодинг", en: "Vibe coding" },
    text: { ru: "Здесь скоро появится проект.", en: "A project is coming here soon." },
    image: "",
    url: "",
    tags: ["AI", "Prototype"],
  },
  {
    title: "Project 03",
    year: "2026",
    category: { ru: "Веб-дизайн", en: "Web design" },
    text: { ru: "Здесь скоро появится проект.", en: "A project is coming here soon." },
    image: "",
    url: "",
    tags: ["Landing", "Framer"],
  },
  {
    title: "Project 04",
    year: "2026",
    category: { ru: "Дизайн + код", en: "Design + code" },
    text: { ru: "Здесь скоро появится проект.", en: "A project is coming here soon." },
    image: "",
    url: "",
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
