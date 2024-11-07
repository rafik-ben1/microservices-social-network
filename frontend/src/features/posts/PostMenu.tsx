import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Trash2, Bookmark, Pencil } from "lucide-react";
import { Post } from "./post.types";
import { useAuth } from "react-oidc-context";
import { useDeletePost } from "./PostService";

const PostMenu = ({ post }: { post: Post }) => {
  const id = useAuth().user?.profile.sub;
  const {mutate} = useDeletePost()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex items-center gap-2">
          <Bookmark /> Save
        </DropdownMenuItem>
        {id === post.author && (
          <>
            <DropdownMenuItem className="flex items-center gap-2">
              <Pencil /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> mutate(post.id)} className="flex items-center gap-2">
              <Trash2 /> Delete
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostMenu;
