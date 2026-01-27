export const navigationConfig = {
    menu: [
        { label: "Проекты", to: "/projects" },
        { label: "Компания", to: "/company" },
        { label: "Направления", to: "/fields" },
        { label: "Карьера", to: "/job" },
        { label: "Блог", to: "/blog" },
        { label: "Контакты", to: "/contacts" }
    ],
    socials: [
        { label: 'be', href: "https://www.behance.net/onlydigitalagency" },
        { label: 'dp', href: "https://dprofile.ru/only" },
        { label: 'tg', href: "https://t.me/onlycreativedigitalagency" },
        { label: 'vk', href: "https://vk.com/onlydigitalagency" },
    ],
    presentation: [
        { label: 'pdf', href: "https://only.digital/pdf/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F_Only.pdf" },
        { label: 'pitch', href: "https://pitch.com/v/only-x9f8ka" },
    ],
    telegram: { label: "@onlydigitalagency", href: "https://t.me/onlydigitalagency" },
    email: { label: "hello@only.digital", href: "mailto:hello@only.digital" },
    phone: { label: "+7 (495) 740 99 79", href: "tel:+7 (495) 740 99 79" },
    copyright: { company: "Only.digital", years: "© 2014 - 2025" },
    confidentiality: {
        href: "https://only.digital/pdf/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%9E%D0%BD%D0%BB%D0%B8_2025.pdf"
    }
} as const