import { InternalServerError, NotFoundError } from "elysia";
import db from "./../../db";

export const getPosts = async () => {
  try {
    return await db.post.findMany({ orderBy: { createdAt: "desc" } });
  } catch (err: unknown) {
    console.log(`Error getting posts: ${err}`);
    throw new InternalServerError("Error getting posts");
  }
};

export const getPost = async (id: number) => {
  try {
    const post = await db.post.findUnique({
      where: { id },
    });
    if (!post) {
      throw new NotFoundError("Post not found");
    }
    return post;
  } catch (err: unknown) {
    console.log(`Error getting post: ${err}`);
    throw new InternalServerError("Error getting post");
  }
};

export const updatePost = async (data: {
  id: number;
  title: string;
  content: string;
}) => {
  try {
    const { id, title, content } = data;
    return await db.post.update({ where: { id }, data: { title, content } });
  } catch (err: unknown) {
    console.log(`Error updating post: ${err}`);
    throw new InternalServerError("Error updating post");
  }
};

export const createPost = async (data: { title: string; content: string }) => {
  try {
    const { title, content } = data;
    return await db.post.create({ data: { title, content } });
  } catch (err: unknown) {
    console.log(`Error creating post: ${err}`);
    throw new InternalServerError("Error creating post");
  }
};

export const deletePost = async (data: { id: number }) => {
  try {
    const { id } = data;
    return await db.post.delete({ where: { id } });
  } catch (err: unknown) {
    console.log(`Error deleting post: ${err}`);
    throw new InternalServerError("Error deleting post");
  }
};
