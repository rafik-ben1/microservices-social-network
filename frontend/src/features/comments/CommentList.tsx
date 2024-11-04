
import { useGetPostComments } from "./CommentService"
import CommentRow from "./CommentRow"
import CommentSkeleton from "./CommentSkeleton"
import { ScrollArea } from "@/components/ui/scroll-area"

const CommentList = () => {
    const {data,isLoading} = useGetPostComments()
    if(isLoading){
        return <CommentSkeleton />
    }

    if(data?.empty){
      return <p className=" text-center my-auto text-lg" > Be the first one to comment </p>
    }
  return (
    <ScrollArea className="h-[80%]" >
       {data?.content.map(comment => <CommentRow key={comment.id} comment={comment} /> )}
    </ScrollArea>
  )
}

export default CommentList