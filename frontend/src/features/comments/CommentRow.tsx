import { BASE_URL } from "@/common/constants"
import { Avatar,AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardContent, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow, parseJSON } from "date-fns"
import { Comment } from "./comment.types"
import { Dot, Settings } from "lucide-react"

const CommentRow = ({comment} : {comment : Comment}) => {
  return (
    <div className="w-full border-b ">
    <CardTitle className="flex items-center p-2">
      <Avatar className="h-8 w-8">
        <AvatarImage
          className=" object-cover"
          src={BASE_URL + comment.author.avatar}
        />
        <AvatarFallback>
          {comment.author.username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex-1 flex-col items-center ">
        <span className="flex items-center gap-2">
          <h2 className="font-semibold text-sm  text-foreground ">
            {comment.author.firstname + " " + comment.author.lastname}
          </h2>
          <p className="text-xs text-gray-600 flex items-center gap-[1px] ">
            {comment.createdAt !== comment.updatedAt && <Settings size="16px" />}
            <Dot /> {formatDistanceToNow(parseJSON(comment.updatedAt))}
          </p>
        </span>
        <p className="text-xs text-gray-600   ">{"@" + comment.author?.username}</p>
      </div>
    </CardTitle>
    <CardContent className="text-sm">
        {comment.content}
    </CardContent>
    </div>
  )
}

export default CommentRow