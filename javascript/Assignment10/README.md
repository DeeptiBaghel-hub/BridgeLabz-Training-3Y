# Assignment 10 — jQuery AJAX and REST APIs

Each question is isolated in its own folder. Run the JSON Server command from that question's folder so every exercise uses only its own `db.json`.

## Start each JSON Server (six separate terminals)

| Question | Folder | Port | Command |
|---|---|---:|---|
| Q1 Live Search | `Q1-Live-Search` | 3001 | `npx json-server --watch db.json --port 3001` |
| Q2 Employee Status | `Q2-Employee-Status` | 3002 | `npx json-server --watch db.json --port 3002` |
| Q3 Task Manager | `Q3-Task-Manager` | 3003 | `npx json-server --watch db.json --port 3003` |
| Q4 Multi-API | `Q4-Multi-API` | 3004 | `npx json-server --watch db.json --port 3004` |
| Q5 Timetable | `Q5-Timetable` | 3005 | `npx json-server --watch db.json --port 3005` |
| Q6 Registration | `Q6-Registration` | 3006 | `npx json-server --watch db.json --port 3006` |

Install/run JSON Server with Node.js and npm available. For example, from this folder:

```bash
cd Q1-Live-Search
npx json-server --watch db.json --port 3001
```

Repeat in a separate terminal for each folder/port. Then open that question's HTML file in a browser (or serve the folder with a local static HTTP server). The HTML loads jQuery/Axios from their public CDNs where required.

## API usage

- Q1: GET `/products?q=value`
- Q2: GET `/employees`, PATCH `/employees/:id`
- Q3: GET `/tasks` with priority/completed query parameters, PATCH `/tasks/:id`
- Q4: GET `/users`, `/orders`, and `/products` from the Q4 server
- Q5: GET `/timetable?day=Monday`
- Q6: GET `/users?email=...`, then POST `/users`

All sample records are stored in that question's own `db.json`. Q6 sample passwords are not stored; registration demo posts the password as a simple exercise only. Do not use this demo as production authentication.
