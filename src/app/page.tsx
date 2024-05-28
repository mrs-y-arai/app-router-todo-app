import TodoList from "@/components/ui/TodoList";
import { getTodoAll } from "@/entities/Todo";
import Link from "next/link";

// キャッシュさせない
export const dynamic = "force-dynamic";

export default async function Home() {
  const todoList = await getTodoAll();

  return (
    <main className="flex flex-col items-center justify-between">
      {todoList && todoList.length >= 1 && (
        <>
          <TodoList todoList={todoList} />
        </>
      )}
      <Link className="mt-4" href="/todo/create">
        Create Todo
      </Link>
    </main>
  );
}
