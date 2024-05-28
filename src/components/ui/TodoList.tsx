import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoListType } from "@/types/TodoList";

type Props = {
  todoList: TodoListType;
};

export default function TodoList({ todoList }: Props) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] uppercase">id</TableHead>
            <TableHead className="uppercase">name</TableHead>
            <TableHead className="uppercase">description</TableHead>
            <TableHead className="uppercase">status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description ?? ""}</TableCell>
              <TableCell>{item.isFinished ? "完了" : "未完了"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
