type Project = {
  title: string
  href: string
  description: string
  useCases: string[]
  achievements: string[]
  myRole: string[]
}

const projects: Project[] = [
  {
    title: "Microplatforma",
    href: "/projects/microplatforma",
    description:
      "Internal developer platform for microservice analytics: repos, APIs, scoring, dashboards.",
    useCases: [
      "Organization-wide repo & API schema catalog",
      "Health/uptime & service metadata registry",
      "Scoring formulas for projects/pages/queries/clusters",
      "Scheduled integrations (GitHub/GitLab) & ingestion pipeline",
      "ClickHouse-powered dashboards & aggregations",
      "Redis caching for scoring/metadata",
    ],
    achievements: [
      "Defined Clean Architecture + DDD across core/protocols/infrastructure",
      "Built GitHub App ingestion to index org repos & APIs",
      "Implemented /api/dashboard/rows & /api/scoring endpoints",
      "CTR/visibility formula modeling with filters & aggregations",
      "Async workers orchestration for periodic jobs",
      "CI/CD with containerized multi-service stack",
    ],
    myRole: [
      "Tech Lead & Backend Architect",
      "FastAPI services, SQLAlchemy (async), Pydantic v2",
      "ClickHouse schema & queries, Redis caching",
      "Docker Compose/K8s-ready setup, GitHub Actions",
    ],
  },
  {
    title: "Nexora",
    href: "/projects/nexora",
    description:
      "Seo analysis platform for tracking keywords, backlinks, and site performance.",
    useCases: [
      "Keyword rank tracking (domain/page/cluster)",
      "Backlink & visibility scoring with CTR curves (Google/Yandex)",
      "Dashboards with filters (device, country, source)",
      "Alerts & scheduled re-crawls",
      "Export/Integrations to BI tools",
    ],
    achievements: [
      "Designed CTR-based visibility formula & aggregation layers",
      "Built ingestion workers and parser registry",
      "Accelerated query performance via pre-aggregation",
      "Added metadata endpoints for dashboard configurability",
    ],
    myRole: [
      "Backend Engineer (FastAPI)",
      "ClickHouse aggregations & Redis cache strategy",
      "CI/CD pipelines and release automation",
    ],
  },
  {
    title: "Shtab tech",
    href: "/projects/shtab-tech",
    description:
      "Construction surface monitoring platform with drone measurement integration.",
    useCases: [
      "Panoramic tiles storage & serving (multi-zoom levels)",
      "High-res tile generation & coordinates mapping",
      "Print service assembling large images by bounds & scale",
      "Blob storage on S3 with secure delivery",
      "CLI tools for orchestration and data migration",
    ],
    achievements: [
      "Developed FastAPI backend for panoramic tiles on AWS S3",
      "Implemented high-res tile generator with zoom levels",
      "Built print assembler for large-area exports",
      "Shipped argparse-based CLI for processing/migrations",
    ],
    myRole: [
      "Backend Engineer (Python, FastAPI, AWS S3)",
      "REST API design & data pipeline orchestration",
      "Dev tooling & automation (CLI utilities)",
    ],
  },
  {
    title: "Edu cyberyozh",
    href: "/projects/edu-cyberyozh",
    description:
      "Course platform for IT and cybersecurity training with hands-on labs with AI.",
    useCases: [
      "Content generation for course descriptions & covers (LLM-assisted)",
      "Hands-on labs management & user file storage",
      "Instructor tooling and publishing workflow",
      "CI/CD for rapid iteration and testing",
    ],
    achievements: [
      "Integrated Amazon S3 for user file storage",
      "Set up GitHub Actions CI/CD for tests/builds",
      "Integrated OpenAI for text & image generation",
      "Reduced technical debt by refactoring ~30% legacy code",
    ],
    myRole: [
      "Software Engineer (Python backend)",
      "S3 integration, CI/CD authoring, LLM feature hooks",
      "Codebase refactoring & maintainability improvements",
    ],
  },
  {
    title: "Rona market",
    href: "/projects/rona-market",
    description:
      "Marketplace for wholesale and retail sellings.",
    useCases: [
      "Multi-vendor catalog, pricing & inventory",
      "Order management & checkout",
      "Payment & shipping integrations",
      "Admin dashboards and analytics",
    ],
    achievements: [
      "Optimized SQL queries and added indexing to cut latency",
      "Designed REST API and auth flows",
      "Introduced automated tests (API/E2E) and basic CI",
    ],
    myRole: [
      "Backend Developer (Django/DRF or FastAPI)",
      "DB performance tuning (PostgreSQL) & caching",
      "Test suite authoring and release automation",
    ],
  },
  {
    title: "Zvuk",
    href: "/projects/zvuk",
    description:
      "Marketplace for musical instruments and audio equipment.",
    useCases: [
      "Product catalog with advanced search & filters",
      "Seller onboarding & store management",
      "Cart/checkout & order tracking",
      "Reviews, ratings, and content moderation",
    ],
    achievements: [
      "Built DRF backend and search with Elasticsearch",
      "Implemented end-to-end tests with Selenium",
      "Improved page load & API latency with caching",
    ],
    myRole: [
      "Backend Engineer (Django/DRF, Elasticsearch)",
      "API design, auth, and integrations",
      "E2E testing & performance improvements",
    ],
  },
]

export default projects
