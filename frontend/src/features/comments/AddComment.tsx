import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useAddComment } from "./CommentService";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const AddComment = () => {
  const [content, setContent] = useState("");
  const { mutate, isPending } = useAddComment();
  function handelSubmit(e: FormEvent) {
    e.preventDefault();
    if (!content) return;
    mutate(content);
    setContent("");
  }
  return (
    <form onSubmit={handelSubmit} className="sticky bottom-0 w-full flex items-center gap-2  ">
      <Input
        disabled={isPending}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2"
        placeholder="Write your comment here..."
      />
      <Button disabled={isPending} size="icon" > <Send className="h-4 w-4" /> </Button>
    </form>
  );
};

export default AddComment;
