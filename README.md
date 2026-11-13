# devops-kt3

Node.js-приложение с CI/CD-пайплайном на GitHub Actions.

[![CI/CD](https://github.com/kiryp-coder/devops-kt3/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kiryp-coder/devops-kt3/actions/workflows/ci-cd.yml)

## Маршруты

| Метод | Путь | Ответ |
|---|---|---|
| GET | `/` | `KT3 App` |
| GET | `/health` | `{ "status": "ok" }` |

## Запуск

```bash
npm ci
npm start            # http://localhost:3000
npm run lint         # ESLint
npm test             # Jest
```

Тест подключения к базе запускается, если заданы `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (в CI — сервисный контейнер PostgreSQL).

## Docker

```bash
docker build -t devops-kt3 .
docker run -p 3000:3000 devops-kt3
docker pull ghcr.io/kiryp-coder/devops-kt3:latest
```

## Pipeline (`.github/workflows/ci-cd.yml`)

```
lint ──► test (+ PostgreSQL) ──► build-and-push (только push в main) ──► ghcr.io: latest + <sha коммита>
```

## Ветки

- `main` — стабильная версия, защищена: слияние только через PR после успешных `lint` и `test`
- `develop` — разработка
- `feature/*` — задачи, сливаются в `develop` через PR
