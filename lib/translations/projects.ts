import type { ProjectData } from "./types"

export const projects: ProjectData[] = [
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
        "Faceted catalog search with filters",
        "Product pages with specs, reviews, and recommendations",
        "Order placement and vendor payouts",
        "Moderation tools for listings and content",
      ],
      ru: [
        "Фасетный поиск по каталогу с фильтрами",
        "Карточки товаров с характеристиками, отзывами и рекомендациями",
        "Оформление заказов и выплаты продавцам",
        "Инструменты модерации для объявлений и контента",
      ],
    },
    achievements: {
      en: [
        "Rolled out new Elasticsearch pipelines for search",
        "Improved checkout performance with queue-based updates",
        "Introduced a/b experiments with feature flags",
      ],
      ru: [
        "Запустил обновлённые пайплайны Elasticsearch для поиска",
        "Ускорил оформление заказов за счёт очередей",
        "Добавил A/B-эксперименты через feature flags",
      ],
    },
    myRole: {
      en: [
        "Backend engineer (Python, Django/DRF)",
        "Search infrastructure and checkout flows",
        "Feature rollout and monitoring",
      ],
      ru: [
        "Бэкенд-инженер (Python, Django/DRF)",
        "Поисковая инфраструктура и оформление заказов",
        "Релизы фич и мониторинг",
      ],
    },
  },
]
