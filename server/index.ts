import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();
serve(app);

app.get("/api/tasks", (c) => {
  return c.json([
    { description: "Create client", completed: true },
    { description: "Fetch from server", completed: true },
    { description: "Deploy to Heroku", completed: false },
  ]);
});
