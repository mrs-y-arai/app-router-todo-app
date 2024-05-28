/*
  Warnings:

  - You are about to drop the `Todolist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todolist";

-- CreateTable
CREATE TABLE "todolist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todolist_pkey" PRIMARY KEY ("id")
);
