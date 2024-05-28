export type TodoItemType = {
  id: number;
  title: string;
  description: string | null;
  isFinished: boolean;
};

export type TodoListType = TodoItemType[];
