import { useParams } from "react-router-dom"
import CreatePostForm from "./CreatePostForm"
import { useAuth } from "react-oidc-context"
import PostRow from "./PostRow";
import { ScrollArea } from "@/components/ui/scroll-area";

const posts = [
    {
      id: 1,
      content: "Hello friends this is a test. how have yall been lately",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam sapiente omnis vitae in aliquam soluta! Mollitia necessitatibus est neque ipsum, et earum eveniet eos facere amet consequatur reprehenderit atque commodi laborum? Sit provident eius debitis beatae suscipit optio est!",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est similique dolore, ex accusamus at magni quam architecto aperiam, repellendus amet beatae repellat maiores incidunt ea minus! Culpa excepturi saepe quas aut. Atque dicta enim quasi nemo incidunt saepe aliquam, quos quibusdam id quam delectus est maxime eos modi illo quis aperiam non, vero itaque corrupti voluptas nesciunt. Doloribus placeat cupiditate at dolorem nesciunt eveniet expedita commodi, vero omnis ab!",
    },
  ];

const ProfilePosts = () => {
    const {id} = useParams()
    const currentUser = useAuth().user?.profile.sub
  return (
    <div className='mt-3 p-2 flex flex-col items-center ' >
        <h2 className=" self-start p-2 font-semibold text-lg"> Posts</h2>

        {id === currentUser && <CreatePostForm />}
       <div className="mt-1 divide-y divide-slate-400 " > 
        {posts.map(post => <PostRow key={post.id} post={post} /> )}
       </div>
    </div>
  )
}

export default ProfilePosts