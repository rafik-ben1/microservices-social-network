import { Card } from "@/components/ui/card"
import { useLocation } from "react-router-dom"
import { UserProfileHeader } from "@/features/users/UserProfileHeader"
import { UserProfileAttributes } from "@/features/users/UserProfileAttributes"
export default function Profile() {
 
  
  const {state : data}  = useLocation()

  return (
    <Card className= "grow rounded-none sm:p-4 ">
     <UserProfileHeader user={data} />
      <UserProfileAttributes />
    </Card>
  )
}