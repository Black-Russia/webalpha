const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_badge: "Made in Kazakhstan",
        hero_title_1: "Forging the",
        hero_title_2: "Digital Future",
        hero_desc: "We build immersive educational engines and gaming experiences that push the boundaries of logic and creativity.",
        hero_btn: "View Projects",
        about_title: "Who We Are",
        about_card_1_title: "🚀 Innovation",
        about_card_1_desc: "We don't just write code; we architect ecosystems. From custom game engines to complex educational platforms.",
        about_card_2_title: "🌍 Global Vision",
        about_card_2_desc: "Born in Kazakhstan, designing for the world. Our products are localized and ready for global markets.",
        about_card_3_title: "💎 Quality",
        about_card_3_desc: "Premium aesthetics and robust architecture are non-negotiable standards at Alpharaon.",
        projects_title: "Our Portfolio",
        project_1_desc: "A next-generation \"Duolingo for Logic\". Multiplayer educational game engine with a custom Visual Programming Editor, PvP duels, and user-generated content.",
        project_1_stat_1: "10k+",
        project_1_label_1: "Potential Users",
        project_1_stat_2: "14+",
        project_1_label_2: "Interactive Lessons",
        project_1_label_3: "Community Levels",
        project_link: "View Case Study →",
        project_2_title: "Project: Nebula",
        project_2_desc: "Upcoming confidential project. Revolutionizing the way we interact with digital assets.",
        project_status: "In Development",
        footer_privacy: "Privacy",
        footer_terms: "Terms"
    },
    ru: {
        nav_about: "О нас",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        hero_badge: "Сделано в Казахстане",
        hero_title_1: "Создаем",
        hero_title_2: "Цифровое Будущее",
        hero_desc: "Мы делаем не просто софт — мы строим новые миры. Игры и образовательные платформы, где логика встречается с творчеством.",
        hero_btn: "Смотреть проекты",
        about_title: "Кто мы такие",
        about_card_1_title: "🚀 Инновации",
        about_card_1_desc: "Мы не просто пишем код, мы создаем целые экосистемы. Свои игровые движки, уникальные редакторы и платформы.",
        about_card_2_title: "🌍 Глобальный уровень",
        about_card_2_desc: "Сделано в Казахстане — для всего мира. Наши продукты говорят на одном языке с пользователями из любой страны.",
        about_card_3_title: "💎 Качество",
        about_card_3_desc: "Красивый дизайн и надежная работа. Мы не делаем «тяп-ляп». Если делаем — то на совесть.",
        projects_title: "Портфолио",
        project_1_desc: "«Duolingo для программирования». Учись кодить, играя. Создавай свои уровни в редакторе и сражайся с друзьями в реальном времени.",
        project_1_stat_1: "10k+",
        project_1_label_1: "Пользователей",
        project_1_stat_2: "14+",
        project_1_label_2: "Уроков",
        project_1_label_3: "Уровней",
        project_link: "Подробнее →",
        project_2_title: "Проект: Nebula",
        project_2_desc: "Секретный проект. Скоро мы изменим представление о цифровых активах.",
        project_status: "В разработке",
        footer_privacy: "Конфиденциальность",
        footer_terms: "Условия"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for sphere
    document.addEventListener('mousemove', (e) => {
        const sphere = document.querySelector('.gradient-sphere');
        if (sphere) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            sphere.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
        }
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
});
