import { Button } from "@/components/ui/button"
import { UserPlus, UserMinus, UserCheck, Edit, Clock, X } from "lucide-react"
import { useGetFriendshipStatus } from "../friends/FriendService"




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
    return (
             <div className="flex flex-col gap-2 items-center" >
              <p>sent you a friend request</p>
              <span className="flex items-center gap-2" >
                <Button size="sm" variant="outline" className="flex items-center gap-1"   > <X /> Decline  </Button> 
                <Button size="sm" className="flex items-center gap-1 text-sm "   > <UserPlus /> Accept  </Button> 
              </span>
             </div>
           )
  case "none":
    return  <Button className="flex items-center gap-2" > <UserPlus  /> add friend  </Button>
          }
}