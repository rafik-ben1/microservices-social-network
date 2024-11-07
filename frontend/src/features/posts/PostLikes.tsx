import { ScrollArea } from "@/components/ui/scroll-area";
import { Post } from "./post.types";
import { useGetPostLikers } from "./PostService";
import UserSearchRow from "../users/UserSearchRow";
import Spinner from "@/components/Spinner";

const PostLikes = ({ post }: { post: Post }) => {
  const { data, isLoading } = useGetPostLikers(post.id);

  if(isLoading){
    return <div className="h-full w-full flex items-center justify-center" ><Spinner /></div>
  }
  
  return (
      <ScrollArea className="flex flex-col items-start h-full mt-1" >
        {
        data?.content.map((like) => (
          <UserSearchRow key={like.id} user={like.author} />
        ))}
      </ScrollArea>
  );
};

export default PostLikes;
