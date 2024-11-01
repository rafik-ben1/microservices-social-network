import { UserProfileHeader } from "@/features/users/UserProfileHeader"
import { UserProfileAttributes } from "@/features/users/UserProfileAttributes"
import { useGetUser } from "@/features/users/UserService"
import UserProfileSkeleton from "@/features/users/UserProfileSkeleton"
import ProfilePosts from "@/features/posts/ProfilePosts"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Profile() {
  const {data,isLoading}  = useGetUser()
  return (
    <ScrollArea className= "grow rounded-none sm:p-4  bg-card ">
     {isLoading ? <UserProfileSkeleton /> 
      : ( 
	 <>
          <UserProfileHeader  user={data!} />
          <UserProfileAttributes user={data!} />
          <ProfilePosts />
        </>
	)}
    </ScrollArea>
  )
}
