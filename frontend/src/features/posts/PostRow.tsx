import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useGetUser } from "../users/UserService";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircleMore } from "lucide-react";
import { BASE_URL } from "@/common/constants";
import { Comments } from "../comments/Comments";

const PostRow = ({ post }) => {
  const { data } = useGetUser();

  return (
    <div className="w-full border-none  ">
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
          <h2 className="font-semibold text-foreground ">
            {data?.firstname + " " + data?.lastname}
          </h2>
          <p className="text-sm text-gray-600   ">{"@" + data?.username}</p>
        </div>
      </CardTitle>
      <CardContent> {post.content} </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Heart className="hover:text-red-500 hover:fill-red-500 " />
        </Button>
        <Comments>
          <Button size="icon" variant="ghost">
            <MessageCircleMore />
          </Button>
        </Comments>
      </CardFooter>
    </div>
  );
};

export default PostRow;
