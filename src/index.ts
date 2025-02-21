import { Elysia } from "elysia";
import postRoutes from "./routes/posts";

const app = new Elysia();

app.group("/api", (app) => app.use(postRoutes)).listen(3049);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
