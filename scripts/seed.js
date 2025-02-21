const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const postToCreate = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the content of post 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the content of post 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the content of post 3",
  },
];

const seed = async (postToCreate) => {
  for (const post of postToCreate) {
    console.log(`Creating post ${post.id}`);
    await client.post.upsert({
      where: { id: post.id },
      update: post,
      create: post,
    });
  }
};

seed(postToCreate)
  .then(() => {
    console.log("Seed completed");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await client.$disconnect();
    console.log("Disconnected Prisma Client");
  });
