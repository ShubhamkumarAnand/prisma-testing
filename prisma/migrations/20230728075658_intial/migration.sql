-- CreateEnum
CREATE TYPE "PRIORITY" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('todo', 'inprogress', 'completed');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "priority" "PRIORITY" NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'todo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
