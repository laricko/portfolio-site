import type { Language } from "@/components/settings-provider"

import { socialLinks } from "./social-links"
import type { Copy } from "./types"

export const copy: Record<Language, Copy> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      languageLabel: "Language",
      themeLabel: "Theme",
      light: "Light",
      dark: "Dark",
    },
    home: {
      greeting: "Hi, I'm Lari.",
      introduction:
        "Software engineer with 5 years of experience building full stack applications with Python and JavaScript.",
      highlight:
        "Primarily focused on backend development: REST APIs, data pipelines, internal tools, and services that just work.",
      secondary:
        "This site collects a few notes on that work and the stack I rely on every day. Go click around!",
    },

    // About page
    about: {
      title: "About me",
      lead: "A quick look at who I am and how I work.",
      // Intro section
      introHeading: "Background",
      introDescription:
        "How it starts.",
      introBody: [
        "I'm a senior Software engineer who started learning computer science in 2018 and now designs large Python services over the past five years.",
        "I care about code quality that the team can keep alive: clear boundaries, measured rollouts, and tests that catch what reviews miss.",
      ],

      // Stack section
      stackTitle: "Tools that stick",
      stackDescription:
        "These are the languages, frameworks, and services that usually end up in my toolbox.",

      // Philosophy section
      philosophyTitle: "How I approach code",
      philosophyDescription:
        "Principles I lean on when shaping services of backend.",
      philosophyBody: [
        "I lean on SOLID, DDD, and Clean Architecture to keep systems modular and readable.",
        "Love to write tests. Unit, integration, and end-to-end. They make change safer and smoother.",
      ],

      // Achievements section
      achievementsTitle: "Recent tasks",
      achievementsDescription:
        "Practical highlights from the last few projects.",
      achievements: [
        "Integrated payment providers like Sber, Tinkoff, and YooMoney.",
        "Integrating with OpenAI's language model to generate user's content.",
        "Working with database indexes and query plans to speed up slow SQL queries.",
        "Put CI/CD pipelines in place for teams that had none.",
        "Designed REST APIs across different microservices.",
        "Refactor legacy code.",
      ],

      // Education section
      educationTitle: "Education",
      educationDetails:
        "Rostov State University of Economics — Mathematics and Informatics.",
    },


    // Contact Page
    contact: {
      badge: "Let's work together",
      title: "Contact",
      description:
        "Planning a new build or joining an existing platform? I'm happy to talk through the backend side.",
      resumeTitle: "Resume",
      resumeDescription: "Download a short overview of my work history and skills.",
      resumeAction: "Download PDF",
      linksTitle: "Useful links",
      emailTitle: "Prefer email?",
      emailDescription: "Text me at laritsiuriumov@gmail.com and I'll reply within a day.",
    },

    // projects page
    projects: {
      badge: "Selected case studies",
      title: "Projects",
      description:
        "Platforms, Services I've helped design, extend, and keep in good shape.",
      caseBadge: "Case study",
      viewDetails: "View project details",
      backToProjects: "← Back to projects",

      // usecases section
      useCasesTitle: "Usecases",
      useCasesDescription: "What the product supports day to day.",

      // achievements section
      achievementsTitle: "My contributions",
      achievementsDescription: "A snapshot of the work I owned.",

      // role section
      roleTitle: "Role",
      roleDescription: "Scope and responsibilities.",
    },

    // about page - tech stack section
    techStack: [
      {
        title: "Programming languages",
        icon: "braces",
        entries: ["Python", "JavaScript", "TypeScript"],
      },
      {
        title: "Frameworks",
        icon: "layers",
        entries: [
          "Django",
          "Django REST Framework",
          "Flask",
          "FastAPI",
          "Aiohttp",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Databases",
        icon: "database",
        entries: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Elasticsearch",
          "MongoDB",
          "Amazon RDS",
        ],
      },
      {
        title: "Core tools",
        icon: "wrench",
        entries: [
          "RabbitMQ",
          "Kafka",
          "AWS (S3, ECR, EC2, Lambda, etc.)",
          "SQLAlchemy",
          "Celery",
          "Alembic",
          "Selenium",
          "Nginx",
          "Git",
          "Docker",
          "Linux",
          "CI/CD",
          "Swagger",
          "Asyncio",
          "Jira",
          "Pytest",
          "unittest.mock",
          "ArgoCD",
          "Grafana",
          "Postman",
        ],
      },
      {
        title: "Ways of working",
        icon: "server",
        entries: [
          "Microservices",
          "REST APIs",
          "Containerization",
          "TDD",
          "DDD",
          "OOP",
          "Stateless design",
          "Clean Architecture",
          "Troubleshooting",
          "Debugging",
        ],
      },
    ],

    // social links
    socialLinks,
  },
  ru: {
    navigation: {
      home: "Главная",
      projects: "Проекты",
      about: "Обо мне",
      contact: "Контакты",
      languageLabel: "Язык",
      themeLabel: "Тема",
      light: "Светлая",
      dark: "Тёмная",
    },
    home: {
      greeting: "Привет, я Лари.",
      introduction:
        "Software engineer с 5-летним опытом разработки full stack приложений на Python и JavaScript.",
      highlight:
        "В основном занимаюсь backend частью: REST API, дата-пайплайны, внутренние сервисы и инструменты, которые просто работают.",
      secondary:
        "Здесь я собрал несколько примеров таких проектов и инструменты, на которые опираюсь. Осмотритесь!",
    },
    about: {
      title: "Обо мне",
      introHeading: "Кратко",
      lead: "Немного обо мне и о подходе к работе.",
      introBody: [
        "Я старший бэкенд-разработчик. За пять лет прошёл путь от автоматизации рутинных скриптов до проектирования крупных Python-сервисов.",
        "Люблю понятные границы модулей, поэтапные релизы и тесты, которые ловят то, что не заметили на ревью.",
      ],
      introDescription: "Чем занимаюсь и как к этому пришёл.",
      stackTitle: "Инструменты",
      stackDescription: "Что чаще всего беру в работу.",
      philosophyTitle: "Подход",
      philosophyDescription:
        "Ключевые принципы в работе.",
      philosophyBody: [
        "Использую SOLID, DDD и Clean Architecture, чтобы код оставался модульным и читаемым.",
        "Без стабильных тестов не обойтись — только так изменения проходят спокойно.",
      ],
      achievementsTitle: "Последние результаты",
      achievementsDescription: "Несколько заметных задач из недавних проектов.",
      educationTitle: "Образование",
      educationDetails:
        "РГЭУ (РИНХ) — прикладная математика и информатика.",
      achievements: [
        "Подключил платёжные провайдеры без простоя",
        "Ускорил тяжёлые SQL-запросы за счёт переработки и индексов",
        "Настроил CI/CD там, где его не было",
        "Поднял покрытие тестами: API, интеграционные и e2e",
        "Спроектировал REST API и границы сервисов для микросервисов",
        "Провёл рефакторинг и сократил технический долг",
        "Настроил очереди и фоновые воркеры для задач",
      ],
    },
    contact: {
      badge: "Давайте работать вместе",
      title: "Контакты",
      description:
        "Нужна помощь с новым проектом или поддержкой существующего сервиса? Готов обсудить детали.",
      resumeTitle: "Резюме",
      resumeDescription: "Краткое описание опыта и навыков.",
      resumeAction: "Скачать PDF",
      linksTitle: "Связаться",
      emailTitle: "Предпочитаете почту?",
      emailDescription: "Пишите на laritsiuriumov@gmail.com — отвечу в течение дня.",
    },
    projects: {
      badge: "Избранные кейсы",
      title: "Проекты",
      description: "Несколько примеров платформ, над которыми я работал.",
      caseBadge: "Кейс",
      viewDetails: "Подробнее о проекте",
      backToProjects: "← Ко всем проектам",
      useCasesTitle: "Чем помог сервис",
      useCasesDescription: "Основные сценарии использования.",
      achievementsTitle: "Мой вклад",
      achievementsDescription: "Что именно сделал.",
      roleTitle: "Роль",
      roleDescription: "Зона ответственности.",
    },
    techStack: [
      {
        title: "Языки",
        icon: "braces",
        entries: ["Python", "JavaScript", "TypeScript"],
      },
      {
        title: "Фреймворки",
        icon: "layers",
        entries: [
          "Django",
          "Django REST Framework",
          "Flask",
          "FastAPI",
          "Aiohttp",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Базы данных",
        icon: "database",
        entries: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Elasticsearch",
          "MongoDB",
          "Amazon RDS",
        ],
      },
      {
        title: "Инструменты",
        icon: "wrench",
        entries: [
          "RabbitMQ",
          "Kafka",
          "AWS (S3, ECR, EC2, Lambda и др.)",
          "SQLAlchemy",
          "Celery",
          "Alembic",
          "Selenium",
          "Nginx",
          "Git",
          "Docker",
          "Linux",
          "CI/CD",
          "Swagger",
          "Asyncio",
          "Jira",
          "Pytest",
          "unittest.mock",
          "ArgoCD",
          "Grafana",
          "Postman",
        ],
      },
      {
        title: "Подходы",
        icon: "server",
        entries: [
          "Микросервисы",
          "REST API",
          "Контейнеризация",
          "TDD",
          "DDD",
          "OOP",
          "Stateless",
          "Clean Architecture",
          "Troubleshooting",
          "Debugging",
        ],
      },
    ],
    socialLinks,
  },
}
