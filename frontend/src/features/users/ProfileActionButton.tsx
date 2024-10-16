import { Button } from "@/components/ui/button"
import { UserPlus, Edit, Clock } from "lucide-react"
import { useGetFriendshipStatus } from "../friends/FriendService"
import HandelFriendRequest from "../friends/HandelFriendRequest"
import UnfriendDialog from "../friends/UnfriendDialog"
import { Skeleton } from "@/components/ui/skeleton"




export default function ProfileActionButton(){ 

 const  {data, isLoading} = useGetFriendshipStatus()
 if(isLoading)
   return <Skeleton className="h-8 w-20" />;
 
 switch (data?.status) {
  case "self":
    return <Button className="flex items-center gap-2"> <Edit className="text-sm" /> Edit profile </Button>
  case "friends":
    return <UnfriendDialog />
  case "requestSent":
    return <Button className="flex items-center gap-2" > <Clock className="text-sm" /> request sent </Button>  
  case "requestReceived":
    return <HandelFriendRequest />
  case "none":
    return  <Button className="flex items-center gap-2" > <UserPlus  /> add friend  </Button>
          }
}