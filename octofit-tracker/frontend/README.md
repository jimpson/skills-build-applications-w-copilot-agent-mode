# OctoFit Tracker presentation tier

The React 19 and Vite frontend uses React Router for navigation and Bootstrap
for responsive styling. It reads users, teams, activities, leaderboard entries,
and workout suggestions from the Express API.

## Run the frontend

Install dependencies and start the Vite development server:

```bash
npm install --prefix octofit-tracker/frontend
npm run dev --prefix octofit-tracker/frontend
```

In GitHub Codespaces, the frontend detects its forwarded `5173` hostname and
uses the corresponding forwarded `8000` API hostname automatically. To
explicitly configure it, create `octofit-tracker/frontend/.env.local` and set
`VITE_CODESPACE_NAME` to the Codespace name:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite loads `.env.local` when it starts, so restart the dev server after changing
this value. The API base URL will be
`https://your-codespace-name-8000.app.github.dev`. Outside Codespaces, the
frontend safely falls back to `http://localhost:8000`.

## Available views

- `/activities`
- `/leaderboard`
- `/teams`
- `/users`
- `/workouts`
