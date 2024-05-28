/*
  Warnings:

  - You are about to drop the `todolist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "todolist";

-- CreateTable
CREATE TABLE "Todolist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todolist_pkey" PRIMARY KEY ("id")
);
