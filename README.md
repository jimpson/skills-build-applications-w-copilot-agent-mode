# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey jimpson!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/jimpson/skills-build-applications-w-copilot-agent-mode/issues/1)

## OctoFit Tracker backend

The OctoFit Tracker API is an Express and TypeScript service backed by MongoDB.
It listens on port `8000` and connects to the `octofit_db` database.

### Run locally

Start MongoDB on port `27017`, then install backend dependencies and seed sample
data:

```bash
npm install --prefix octofit-tracker/backend
npm run seed --prefix octofit-tracker/backend
npm run dev --prefix octofit-tracker/backend
```

The default database URL is `mongodb://localhost:27017/octofit_db`. Set
`MONGODB_URI` to use a different MongoDB connection string.

In GitHub Codespaces, the API base URL is
`https://${CODESPACE_NAME}-8000.app.github.dev`. Outside Codespaces, use
`http://localhost:8000`.

### API endpoints

- `GET /api/health` — API health check
- `GET /api/users/` — users
- `GET /api/teams/` — teams
- `GET /api/activities/` — activities
- `GET /api/leaderboard/` — leaderboard, ordered by points
- `GET /api/workouts/` — workout suggestions

Build the TypeScript backend for production with:

```bash
npm run build --prefix octofit-tracker/backend
npm start --prefix octofit-tracker/backend
```
