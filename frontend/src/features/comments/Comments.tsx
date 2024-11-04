import AddComment from "./AddComment"
import CommentList from "./CommentList"

const Comments = () => {
  return (
    <div className="flex flex-col h-full relative">
      <CommentList />
      <AddComment />
    </div>
  )
}

export default Comments