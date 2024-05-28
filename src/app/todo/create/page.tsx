import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createTodo } from "@/entities/Todo";

export default function Create() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    // console.log("title", title);
    // console.log("description", description);

    if (!title || !description) {
      return;
    }

    // ここでAPIを叩く
    await createTodo(title, description);
  }

  return (
    <>
      <form action={handleSubmit} className="w-[800px] mx-auto">
        <div className="mb-4">
          <Label className="mb-2 inline-block" htmlFor="title">
            タイトル
          </Label>
          <Input name="title" id="title" type="text" placeholder="タイトル" />
        </div>
        <div className="mb-4">
          <Label className="mb-2 inline-block" htmlFor="description">
            説明文
          </Label>
          <Textarea name="description" id="description" placeholder="詳細" />
        </div>
        <Button className="mx-auto block" type="submit">
          作成
        </Button>
      </form>
    </>
  );
}
