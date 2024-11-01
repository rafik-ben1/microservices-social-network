import PostRow from "./PostRow";
import { useGetPosts } from "./PostService";
import empty from "../../assets/2953962.jpg";
import { useAuth } from "react-oidc-context";
import { useParams } from "react-router-dom";
import PostSkeleton from "./PostSkeleton";
const PostsList = () => {
  const { data , isLoading } = useGetPosts();
  const currentUser = useAuth().user?.profile.sub
  const user  = useParams().id
  return (
    <div className="mt-1 w-full p-3 ">
      {isLoading && <PostSkeleton /> }
      {data?.empty ? (
        <>
          <h3 className=" mx-auto text-center text-wrap font-medium mt-4 max-w-xs " >
             {currentUser === user ? "You haven't posted anything yet. Start sharing your thoughts!"
             : "This user hasn't posted anything yet."} 
          </h3>
          <img className=" mx-auto max-w-[50%] md:max-w-[40%]" src={empty} />
        </>
      ) : (
        data?.content.map((post) => <PostRow key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostsList;
