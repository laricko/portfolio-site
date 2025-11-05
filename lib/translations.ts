import type { Language } from "@/components/settings-provider"

type LocalizedString = Record<Language, string>
type LocalizedList = Record<Language, string[]>

type NavigationCopy = {
  home: string
  projects: string
  about: string
  contact: string
  languageLabel: string
  themeLabel: string
  light: string
  dark: string
}

type HomeCopy = {
  greeting: string
  introduction: string
  highlight: string
  secondary: string
}

type AboutCopy = {
  title: string
  introHeading: string
  lead: string
  introBody: string[]
  introDescription: string
  stackTitle: string
  stackDescription: string
  philosophyTitle: string
  philosophyDescription: string
  philosophyBody: string[]
  achievementsTitle: string
  achievementsDescription: string
  educationTitle: string
  educationDetails: string
  achievements: string[]
}

type ContactCopy = {
  badge: string
  title: string
  description: string
  resumeTitle: string
  resumeDescription: string
  resumeAction: string
  linksTitle: string
  linksDescription: string
  emailTitle: string
  emailDescription: string
}

type ProjectsCopy = {
  badge: string
  title: string
  description: string
  caseBadge: string
  viewDetails: string
  backToProjects: string
  useCasesTitle: string
  useCasesDescription: string
  achievementsTitle: string
  achievementsDescription: string
  roleTitle: string
  roleDescription: string
}

type SocialLink = {
  name: string
  href: string
  icon: "github" | "stackOverflow" | "telegram" | "leetCode"
  description: LocalizedString
}

type TechStackSection = {
  title: string
  icon: "braces" | "layers" | "database" | "wrench" | "server"
  entries: string[]
}

type Copy = {
  navigation: NavigationCopy
  home: HomeCopy
  about: AboutCopy
  contact: ContactCopy
  projects: ProjectsCopy
  techStack: TechStackSection[]
  socialLinks: SocialLink[]
}

export type ProjectData = {
  slug: string
  title: LocalizedString
  summary: LocalizedString
  overview: LocalizedString
  useCases: LocalizedList
  achievements: LocalizedList
  myRole: LocalizedList
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/laricko",
    icon: "github",
    description: {
      en: "Side projects, experiments, and open-source fixes.",
      ru: "Пет-проекты, эксперименты и патчи с открытым исходным кодом.",
    },
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/14486187/larick",
    icon: "stackOverflow",
    description: {
      en: "Answers I've posted and problems I've solved for others.",
      ru: "Ответы на технические вопросы и накопленная репутация.",
    },
  },
  {
    name: "Telegram",
    href: "https://t.me/regularsizedman",
    icon: "telegram",
    description: {
      en: "Fastest way to reach me for a quick chat.",
      ru: "Самый быстрый способ обсудить задачу.",
    },
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/larick/",
    icon: "leetCode",
    description: {
      en: "Algorithms practice and interview prep notes.",
      ru: "Практика алгоритмов и заметки к собеседованиям.",
    },
  },
]

const projects: ProjectData[] = [
  {
    slug: "microplatforma",
    title: {
      en: "Microplatforma",
      ru: "Микроплатформа",
    },
    summary: {
      en: "Internal developer platform that keeps analytics services catalogued and healthy.",
      ru: "Внутренняя платформа, которая ведёт каталог аналитических сервисов и следит за их состоянием.",
    },
    overview: {
      en: "I helped build an internal hub that maps every analytics microservice, tracks their health, and keeps scorecards up to date.",
      ru: "Участвовал в создании внутреннего хаба: он знает о каждом аналитическом микросервисе, следит за их здоровьем и обновляет рейтинги.",
    },
    useCases: {
      en: [
        "Catalog of repositories and API schemas for the whole company",
        "Service health tracking with uptime and metadata",
        "Score formulas for projects, pages, queries, and clusters",
        "Scheduled GitHub/GitLab integrations for fresh data",
        "Dashboards and aggregations powered by ClickHouse",
        "Redis caching for quick lookups",
      ],
      ru: [
        "Каталог репозиториев и схем API для всей компании",
        "Мониторинг состояния сервисов с аптаймом и метаданными",
        "Формулы рейтингов для проектов, страниц, запросов и кластеров",
        "Плановые интеграции с GitHub/GitLab для актуальных данных",
        "Дашборды и агрегации на ClickHouse",
        "Кэширование в Redis для быстрых ответов",
      ],
    },
    achievements: {
      en: [
        "Led the Clean Architecture layout across core modules",
        "Built GitHub App ingestion for indexing repositories and APIs",
        "Delivered dashboard and scoring API endpoints",
        "Modelled CTR and visibility formulas with filters",
        "Coordinated async workers for periodic jobs",
        "Set up containerized services with CI/CD",
      ],
      ru: [
        "Настроил каркас по Clean Architecture для ключевых модулей",
        "Реализовал интеграцию через GitHub App для индексации репозиториев и API",
        "Собрал эндпоинты для дашбордов и рейтингов",
        "Проработал формулы CTR и видимости с фильтрами",
        "Организовал работу асинхронных воркеров для периодических задач",
        "Поднял контейнерную инфраструктуру и настроил CI/CD",
      ],
    },
    myRole: {
      en: [
        "Tech lead and backend architect",
        "FastAPI services with async SQLAlchemy and Pydantic v2",
        "ClickHouse schema design and Redis caching",
        "Docker Compose setup and GitHub Actions pipelines",
      ],
      ru: [
        "Тимлид и архитектор бэкенда",
        "Сервисы на FastAPI с async SQLAlchemy и Pydantic v2",
        "Схемы ClickHouse и кэширование в Redis",
        "Docker Compose и пайплайны GitHub Actions",
      ],
    },
  },
  {
    slug: "nexora",
    title: {
      en: "Nexora",
      ru: "Nexora",
    },
    summary: {
      en: "SEO analytics platform that tracks rankings, backlinks, and visibility.",
      ru: "Платформа SEO-аналитики: рейтинги, обратные ссылки и видимость.",
    },
    overview: {
      en: "I supported a team shipping SEO analytics by keeping ingestion steady and dashboards snappy.",
      ru: "Помогал команде SEO-аналитики: держал сбор данных стабильным и ускорял дашборды.",
    },
    useCases: {
      en: [
        "Keyword ranking by domain, page, and cluster",
        "Backlink and visibility scoring with CTR curves",
        "Dashboards with device, country, and source filters",
        "Alerts and scheduled crawls",
        "Exports and integrations with BI tools",
      ],
      ru: [
        "Отслеживание позиций по доменам, страницам и кластерам",
        "Оценка ссылок и видимости с учётом CTR",
        "Дашборды с фильтрами по устройствам, странам и источникам",
        "Оповещения и плановые обходы",
        "Экспорты и интеграции с BI-инструментами",
      ],
    },
    achievements: {
      en: [
        "Designed CTR-based visibility calculations",
        "Built ingestion workers and parser registry",
        "Improved query performance with pre-aggregation",
        "Added metadata endpoints for configurable dashboards",
      ],
      ru: [
        "Собрал расчёт видимости на базе CTR",
        "Разработал воркеры и реестр парсеров",
        "Ускорил запросы за счёт предагрегации",
        "Добавил эндпоинты с метаданными для гибких дашбордов",
      ],
    },
    myRole: {
      en: [
        "Backend engineer working with FastAPI",
        "ClickHouse aggregations and Redis caching",
        "CI/CD pipelines and release automation",
      ],
      ru: [
        "Бэкенд-разработчик на FastAPI",
        "Агрегации в ClickHouse и кэширование в Redis",
        "CI/CD и автоматизация релизов",
      ],
    },
  },
  {
    slug: "shtab-tech",
    title: {
      en: "Shtab Tech",
      ru: "Штаб Тех",
    },
    summary: {
      en: "Construction monitoring platform that stitches drone imagery into shareable panoramas.",
      ru: "Платформа для стройконтроля: собирает снимки дронов в панорамы.",
    },
    overview: {
      en: "We built tooling for survey teams: upload drone shots, cut them into tiles, and keep measurements consistent.",
      ru: "Сделали инструменты для инженеров: загружать снимки с дронов, резать их на тайлы и сохранять точность измерений.",
    },
    useCases: {
      en: [
        "Tile storage for multi-zoom panoramas",
        "High-resolution tile generation with coordinate mapping",
        "Print service for large-area exports",
        "Secure S3 storage and delivery",
        "CLI utilities for orchestration and migrations",
      ],
      ru: [
        "Хранилище тайлов для панорам с несколькими зумами",
        "Генерация тайлов с привязкой координат",
        "Сервис печати для больших планов",
        "Безопасное хранение и выдача через S3",
        "CLI-утилиты для оркестрации и миграций",
      ],
    },
    achievements: {
      en: [
        "Developed FastAPI backend for panorama storage on S3",
        "Implemented tile generator with zoom levels",
        "Built print assembler for oversized exports",
        "Authored CLI tools for processing and migrations",
      ],
      ru: [
        "Написал бэкенд на FastAPI для хранения панорам на S3",
        "Реализовал генератор тайлов с разными уровнями зума",
        "Собрал сервис печати для больших планов",
        "Создал CLI-инструменты для обработки и миграций",
      ],
    },
    myRole: {
      en: [
        "Backend engineer (Python, FastAPI, AWS S3)",
        "REST API design and pipeline orchestration",
        "Developer tooling and automation",
      ],
      ru: [
        "Бэкенд-разработчик (Python, FastAPI, AWS S3)",
        "Проектирование REST API и оркестрация пайплайнов",
        "Инструменты для разработчиков и автоматизация",
      ],
    },
  },
  {
    slug: "edu-cyberyozh",
    title: {
      en: "Edu Cyberyozh",
      ru: "Edu Cyberyozh",
    },
    summary: {
      en: "Course platform for cybersecurity with practical labs and generated content.",
      ru: "Образовательная платформа по кибербезопасности с практикумами и генерацией контента.",
    },
    overview: {
      en: "I joined to steady the platform: tidy the backlog, wire up storage, and automate releases.",
      ru: "Пришёл, чтобы стабилизировать платформу: разобрать долги, подключить хранилище и настроить релизы.",
    },
    useCases: {
      en: [
        "Course descriptions and covers assisted by LLMs",
        "Management of hands-on labs and user files",
        "Instructor tools and publishing workflow",
        "CI/CD to keep releases predictable",
      ],
      ru: [
        "Описания курсов и обложки с помощью LLM",
        "Управление практическими лабами и файлами пользователей",
        "Инструменты преподавателя и редактор контента",
        "CI/CD для стабильных релизов",
      ],
    },
    achievements: {
      en: [
        "Integrated Amazon S3 for user file storage",
        "Set up GitHub Actions for builds and tests",
        "Hooked in OpenAI features for content generation",
        "Refactored roughly a third of legacy code",
      ],
      ru: [
        "Подключил Amazon S3 для хранения пользовательских файлов",
        "Настроил GitHub Actions для сборок и тестов",
        "Добавил функции OpenAI для генерации контента",
        "Рефакторил около трети легаси-кода",
      ],
    },
    myRole: {
      en: [
        "Software engineer on the Python backend",
        "S3 integration, CI/CD automation, LLM features",
        "Refactoring and maintainability improvements",
      ],
      ru: [
        "Инженер бэкенда на Python",
        "Интеграция с S3, автоматизация CI/CD, функции на LLM",
        "Рефакторинг и улучшение поддерживаемости",
      ],
    },
  },
  {
    slug: "rona-market",
    title: {
      en: "Rona Market",
      ru: "Rona Market",
    },
    summary: {
      en: "Wholesale and retail marketplace with vendor tooling and payments.",
      ru: "Маркетплейс для оптовых и розничных продаж с инструментами продавца и платежами.",
    },
    overview: {
      en: "Helped the team stabilise ordering and analytics while keeping the API predictable for partners.",
      ru: "Помог команде стабилизировать заказы и аналитику, сохранив понятный API для партнёров.",
    },
    useCases: {
      en: [
        "Multi-vendor catalog with pricing and inventory",
        "Order management and checkout",
        "Payment and shipping integrations",
        "Admin dashboards and reporting",
      ],
      ru: [
        "Каталог с несколькими продавцами, ценами и остатками",
        "Управление заказами и оформление покупок",
        "Интеграции с оплатой и доставкой",
        "Админские дашборды и отчёты",
      ],
    },
    achievements: {
      en: [
        "Optimised SQL queries and added indexing to cut latency",
        "Designed REST API and authentication flows",
        "Introduced automated API and end-to-end tests",
      ],
      ru: [
        "Оптимизировал SQL-запросы и добавил индексы",
        "Спроектировал REST API и сценарии авторизации",
        "Внедрил автоматические API- и e2e-тесты",
      ],
    },
    myRole: {
      en: [
        "Backend developer working with Django/DRF and FastAPI",
        "Database performance tuning and caching",
        "Test suite authoring and release automation",
      ],
      ru: [
        "Бэкенд-разработчик (Django/DRF, FastAPI)",
        "Оптимизация БД и кэширование",
        "Разработка тестов и автоматизация релизов",
      ],
    },
  },
  {
    slug: "zvuk",
    title: {
      en: "Zvuk",
      ru: "Звук",
    },
    summary: {
      en: "Marketplace for musical instruments with search, checkout, and moderation.",
      ru: "Маркетплейс музыкальных инструментов с поиском, заказами и модерацией.",
    },
    overview: {
      en: "Expanded the platform with better search and steady deployments while teams scaled content.",
      ru: "Расширил платформу: улучшил поиск и стабилизировал релизы, пока рос контент.",
    },
    useCases: {
      en: [
        "Product catalog with advanced filters",
        "Seller onboarding and store tools",
        "Cart, checkout, and order tracking",
        "Reviews, ratings, and moderation",
      ],
      ru: [
        "Каталог товаров с гибкими фильтрами",
        "Подключение продавцов и их витрины",
        "Корзина, оформление заказа и трекинг",
        "Отзывы, рейтинги и модерация",
      ],
    },
    achievements: {
      en: [
        "Built DRF backend with Elasticsearch search",
        "Implemented end-to-end tests with Selenium",
        "Improved API latency with caching",
      ],
      ru: [
        "Разработал бэкенд на DRF с поиском на Elasticsearch",
        "Добавил end-to-end тесты на Selenium",
        "Ускорил API за счёт кэширования",
      ],
    },
    myRole: {
      en: [
        "Backend engineer (Django/DRF, Elasticsearch)",
        "API design, auth, and integrations",
        "Testing and performance improvements",
      ],
      ru: [
        "Бэкенд-инженер (Django/DRF, Elasticsearch)",
        "Проектирование API, авторизация и интеграции",
        "Тестирование и ускорение",
      ],
    },
  },
]

const copy: Record<Language, Copy> = {
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
        "I build Python backends for products that lean on clean data pipelines and predictable services.",
      highlight:
        "Most of my work sits behind analytics dashboards, internal tooling, and marketplace platforms.",
      secondary:
        "This site collects a few notes on that work and the stack I rely on every day.",
    },
    about: {
      title: "About me",
      introHeading: "Background",
      lead: "A quick look at who I am and how I work.",
      introBody: [
        "I'm a senior backend engineer who moved from scripting admin tasks to shaping large Python services over the past five years.",
        "I care about shipping code that the team can keep alive: clear boundaries, measured rollouts, and tests that catch what reviews miss.",
      ],
      introDescription:
        "How I arrived here and the kind of backend work I enjoy.",
      stackTitle: "Tools that stick",
      stackDescription:
        "These are the languages, frameworks, and services that usually end up in my toolbox.",
      philosophyTitle: "How I approach code",
      philosophyDescription:
        "Principles I lean on when shaping services.",
      philosophyBody: [
        "I lean on SOLID, DDD, and Clean Architecture to keep systems modular and readable.",
        "A healthy test suite is non-negotiable—it lets us change things without holding our breath.",
      ],
      achievementsTitle: "Recent wins",
      achievementsDescription:
        "A handful of practical highlights from the last few projects.",
      educationTitle: "Education",
      educationDetails:
        "Rostov State University of Economics — Applied Mathematics and Informatics.",
      achievements: [
        "Integrated payment providers without downtime",
        "Shaved minutes off heavy SQL by reworking queries and indexes",
        "Put CI/CD pipelines in place for teams that had none",
        "Raised test coverage with pragmatic API, integration, and end-to-end checks",
        "Designed REST APIs and service boundaries for microservice rollouts",
        "Led refactors that paid down messy legacy code",
        "Set up queues and async workers for background jobs",
      ],
    },
    contact: {
      badge: "Let's work together",
      title: "Contact",
      description:
        "Planning a new build or straightening out an existing platform? I'm happy to talk through the backend side.",
      resumeTitle: "Resume",
      resumeDescription: "Download a short overview of my work history and skills.",
      resumeAction: "Download PDF",
      linksTitle: "Stay in touch",
      linksDescription:
        "Pick the channel that suits you. I'm responsive and keep the chat focused on what you need.",
      emailTitle: "Prefer email?",
      emailDescription: "Drop me a line at laritsiuriumov@gmail.com and I'll reply within a day.",
    },
    projects: {
      badge: "Selected case studies",
      title: "Projects",
      description:
        "A sample of platforms I've helped design, extend, and keep in good shape.",
      caseBadge: "Case study",
      viewDetails: "View project details",
      backToProjects: "← Back to projects",
      useCasesTitle: "Where it helped",
      useCasesDescription: "What the product supports day to day.",
      achievementsTitle: "My contributions",
      achievementsDescription: "A snapshot of the work I owned.",
      roleTitle: "Role",
      roleDescription: "Scope and responsibilities.",
    },
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
        "Занимаюсь бэкендом на Python: выстраиваю сервисы для аналитики, внутреннего софта и маркетплейсов.",
      highlight:
        "Чаще всего мои задачи — это аккуратные пайплайны данных, очереди и сервисы, которые должны работать без сюрпризов.",
      secondary:
        "Здесь я собрал несколько примеров таких проектов и инструменты, на которые опираюсь.",
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
      linksDescription: "Выберите удобный канал. Отвечаю быстро и по делу.",
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

export function getCopy(language: Language) {
  return copy[language]
}

export function getProjects(language: Language) {
  return projects.map((project) => ({
    slug: project.slug,
    title: project.title[language],
    summary: project.summary[language],
    overview: project.overview[language],
    useCases: project.useCases[language],
    achievements: project.achievements[language],
    myRole: project.myRole[language],
  }))
}

export const rawProjects = projects
