import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialize = async () => {
  await prisma.$connect();
  await prisma.todolist.create({
    data: {
      title: "Learn Prisma",
      description: "Learn Prisma with Next.js",
    },
  });
  await prisma.$disconnect();
};

const main = async () => {
  await initialize();
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
