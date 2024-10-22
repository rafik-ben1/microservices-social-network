import { Card } from "@/components/ui/card"
import { UserProfileHeader } from "@/features/users/UserProfileHeader"
import { UserProfileAttributes } from "@/features/users/UserProfileAttributes"
import { useGetUser } from "@/features/users/UserService"
import UserProfileSkeleton from "@/features/users/UserProfileSkeleton"
export default function Profile() {
 
  
  const {data,isLoading}  = useGetUser()
  return (
    <Card className= "grow rounded-none sm:p-4 ">
     {isLoading ? <UserProfileSkeleton /> 
      : ( 
	 <>
          <UserProfileHeader  user={data!} />
          <UserProfileAttributes />
        </>
	)}
    </Card>
  )
}
