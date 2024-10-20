import { Card } from "@/components/ui/card"
import { UserProfileHeader } from "@/features/users/UserProfileHeader"
import { UserProfileAttributes } from "@/features/users/UserProfileAttributes"
import { useGetUser } from "@/features/users/UserService"
export default function Profile() {
 
  
  const {data,isLoading}  = useGetUser()

  if(isLoading){
    return <div>loading...</div>
  }
  return (
    <Card className= "grow rounded-none sm:p-4 ">
     <UserProfileHeader  user={data!} />
      <UserProfileAttributes />
    </Card>
  )
}
