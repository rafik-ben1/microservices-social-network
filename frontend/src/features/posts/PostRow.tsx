import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useGetUser } from "../users/UserService";
import { Button } from "@/components/ui/button";
import { Dot, Heart, MessageCircleMore, Settings } from "lucide-react";
import { BASE_URL } from "@/common/constants";
import { CommentModal } from "../comments/CommentModal";
import { Post } from "./post.types";
import { formatDistanceToNow, parseJSON } from "date-fns";
import PostMenu from "./PostMenu";
import { useSearchParams } from "react-router-dom";
import { useLikePost } from "./PostService";
import { cn } from "@/lib/utils";
import PostLikesModal from "./PostLikesModal";

const PostRow = ({ post }: { post: Post }) => {
  const { data } = useGetUser();
  const [_, setSeachParams] = useSearchParams();
  const { mutate } = useLikePost();
  return (
    <div className="w-full border-none   ">
      <CardTitle className="flex items-center p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            className=" object-cover"
            src={BASE_URL + data?.avatar}
          />
          <AvatarFallback>
            {data?.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 flex-1 flex-col items-center gap-1 ">
          <span className="flex items-center gap-2">
            <h2 className="font-semibold text-foreground ">
              {data?.firstname + " " + data?.lastname}
            </h2>
            <p className="text-xs text-gray-600 flex items-center gap-[1px] ">
              {post.createdAt !== post.updatedAt && <Settings size="16px" />}
              <Dot /> {formatDistanceToNow(parseJSON(post.updatedAt))}
            </p>
          </span>
          <p className="text-sm text-gray-600   ">{"@" + data?.username}</p>
        </div>
        <PostMenu post={post} />
      </CardTitle>
      <CardContent className="flex flex-col items-start gap-3 py-2 ">
        {" "}
        <p className=" self-start"> {post.content}</p>
        {post.image && (
          <img
            className=" max-h-80"
            src={BASE_URL + post.image}
            alt="post image"
          />
        )}
      </CardContent>
      <CardFooter className="flex items-center gap-2 border-b border-stone-200  ">
        <span className="flex items-center gap-1">
          <Button onClick={() => mutate(post.id)} size="icon" variant="ghost">
            <Heart
              className={cn(
                "hover:text-red-500 hover:fill-red-500 ",
                post.isLiked && "fill-red-500 text-red-500"
              )}
            />
          </Button>
          <PostLikesModal post={post}>
            <p className=" cursor-pointer font-medium text-sm">
              {post.likedBy + " "} likes
            </p>
          </PostLikesModal>
        </span>
        <CommentModal>
          <Button
            onClick={() => setSeachParams({ post: String(post.id) })}
            size="icon"
            variant="ghost"
          >
            <MessageCircleMore />
          </Button>
        </CommentModal>
      </CardFooter>
    </div>
  );
};

export default PostRow;
