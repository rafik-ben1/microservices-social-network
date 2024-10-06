import { Button } from "@/components/ui/button"
import { UserPlus, UserCheck, Edit, Clock } from "lucide-react"
import { useGetFriendshipStatus } from "../friends/FriendService"
import HandelFriendRequest from "../friends/HandelFriendRequest"




export default function ProfileActionButton(){ 

 const  {data} = useGetFriendshipStatus()
 
 switch (data?.status) {
  case "self":
    return <Button className="flex items-center gap-2"> <Edit className="text-sm" /> Edit profile </Button>
  case "friends":
    return <Button className="flex items-center gap-2" > <UserCheck className="text-sm" /> friends </Button>
  case "requestSent":
    return <Button className="flex items-center gap-2" > <Clock className="text-sm" /> request sent </Button>  
  case "requestReceived":
    return <HandelFriendRequest />
  case "none":
    return  <Button className="flex items-center gap-2" > <UserPlus  /> add friend  </Button>
          }
}