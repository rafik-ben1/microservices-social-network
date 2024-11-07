import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PropsWithChildren } from "react"
import { Post } from "./post.types"
import PostLikes from "./PostLikes"

interface PostLikesModalProps extends PropsWithChildren {
    post : Post
}

const PostLikesModal = ({children, post} : PostLikesModalProps) => {
  return (
   <Dialog>
    <DialogTrigger asChild >{children}</DialogTrigger>
    <DialogContent className="h-2/3 w-[90%] md:w-3/5 flex flex-col gap-1 " >
        <DialogHeader >
          <DialogTitle>Likes</DialogTitle>
          <DialogDescription>See who liked this post</DialogDescription>
        </DialogHeader>
       <PostLikes post={post} /> 
    </DialogContent>
   </Dialog>
)
}

export default PostLikesModal
