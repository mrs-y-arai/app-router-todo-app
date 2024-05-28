import { PrismaClient } from "@prisma/client";
import { TodoListType } from "@/types/TodoList";

const prisma = new PrismaClient();

export const getTodoAll = async (): Promise<TodoListType | null> => {
  const result = await prisma.todolist.findMany();

  if (result.length < 1 || !result) {
    return null;
  }

  return result;
};

export const createTodo = async (title: string, description: string) => {
  try {
    await prisma.todolist.create({
      data: {
        title,
        description,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
