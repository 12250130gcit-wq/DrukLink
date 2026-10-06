# DrukLink

DrukLink is a job and professional networking platform connecting job seekers with employers.

## CA2 Technology Stack

- Frontend: React + Vite
- Backend: Go + Gorilla Mux
- Database: PostgreSQL
- Version control: GitHub / GitLab-ready
- Container setup: Docker Compose

## Project structure

- `frontend/` — React frontend
- `backend/` — Go REST API
- `database/` — PostgreSQL schema
- `docs/` — PBIs and CA2 documentation

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The React application will normally run on `http://localhost:5173`.

## Run the backend

```bash
cd backend
go mod tidy
go run .
```

The API runs on `http://localhost:8080`.

## Main frontend technologies

React components, React hooks, CSS and the Fetch API are used to communicate with the backend.
