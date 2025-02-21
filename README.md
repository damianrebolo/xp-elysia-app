# Elysia with Bun runtime

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

// docker run --name dev-postgres -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres

## Prisma and Docker setup

```shell
$ bun add prisma
$ bunx prisma init
$ docker run --name dev-postgres -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres
```

### Change .env

```
DATABASE_URL="postgresql://postgres:12345678@localhost:5432/mydb?schema=public"
```

### Add Prisma model

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Execute migrations

```shell
bunx prisma migrate dev --name create-post-model
```

### Seed DB

check "seed" within package.json

```shell
$ bunx prisma db seed
```

## Name: REST Client

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=humao.rest-client

```shell
### GET ALL
GET http://localhost:3049/api/posts
Accept: application/json

### GET ONE
GET http://localhost:3049/api/posts/1
Accept: application/json

### UPDATE
PUT http://localhost:3049/api/posts/4
Content-Type: application/json

{
  "title": "Post 4 Updated",
  "content": "Content 4 Updated"
}

### CREATE
POST http://localhost:3049/api/posts
Content-Type: application/json

{
  "title": "Post 6",l
  "content": "Content 6"
}

### DELETE
DELETE http://localhost:3049/api/posts
Content-Type: application/json

{
  "id": 2
}
```
