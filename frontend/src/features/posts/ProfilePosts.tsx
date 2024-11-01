import { useParams } from "react-router-dom"
import CreatePostForm from "./CreatePostForm"
import { useAuth } from "react-oidc-context"
import PostsList from "./PostsList"


const ProfilePosts = () => {
    const {id} = useParams()
    const currentUser = useAuth().user?.profile.sub
  return (
    <div className='mt-3 p-2 flex flex-col items-center ' >
        <h2 className=" self-start p-2 font-semibold text-lg"> Posts</h2>

        {id === currentUser && <CreatePostForm />}
      <PostsList />     
    </div>
  )
}

export default ProfilePosts