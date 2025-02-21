import { Elysia, t } from "elysia";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "./handlers";

const postRoutes = new Elysia({ prefix: "/posts" })
  .get("/", () => getPosts())
  .get("/:id", (req) => getPost(req.params.id), {
    params: t.Object({ id: t.Number() }),
  })
  .post("/", ({ body }) => createPost(body), {
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  })
  .put("/:id", ({ params, body }) => updatePost({ id: params.id, ...body }), {
    params: t.Object({ id: t.Number() }),
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  })
  .delete("/", ({ body }) => deletePost(body), {
    body: t.Object({ id: t.Number() }),
  });

export default postRoutes;
