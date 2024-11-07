
import { useGetPostComments } from "./CommentService"
import CommentRow from "./CommentRow"
import CommentSkeleton from "./CommentSkeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import {MessagesSquare} from "lucide-react"

const CommentList = () => {
    const {data,isLoading} = useGetPostComments()
    if(isLoading){
        return <CommentSkeleton />
    }

    if(data?.empty){
      return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2" >
        <MessagesSquare size={100} className="fill-slate-700 text-slate-700" />
      <p> Be the first one to comment </p>
      </div>
      )
    }
  return (
    <ScrollArea className="flex flex-col h-full " >
       {data?.content.map(comment => <CommentRow key={comment.id} comment={comment} /> )}
    </ScrollArea>
  )
}

export default CommentList