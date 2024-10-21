import { Button } from "@/components/ui/button"
import { UserPlus, Edit, Clock } from "lucide-react"
import { useGetFriendshipStatus } from "../friends/FriendService"
import HandelFriendRequest from "../requests/HandelFriendRequest"
import UnfriendDialog from "../friends/UnfriendDialog"
import { Skeleton } from "@/components/ui/skeleton"
import { useSendFriendRequest } from "../requests/FriendRequestService"
import { useParams } from "react-router-dom"




export default function ProfileActionButton(){ 

 const  {data, isLoading} = useGetFriendshipStatus()
 const {mutate , isPending} = useSendFriendRequest()
 const {id} = useParams();

 if(isLoading)
   return <Skeleton className="h-8 w-20 rounded-sm " />;
 
 switch (data?.status) {
  case "self":
    return <Button className="flex items-center gap-2"> <Edit className="text-sm" /> Edit profile </Button>
  case "friends":
    return <UnfriendDialog />
  case "requestSent":
    return <Button className="flex items-center gap-2" > <Clock className="text-sm" /> request sent </Button>  
  case "requestRecieved":
	  return <HandelFriendRequest userId={id!} requestId={data.requestId as number } />
  case "none":
    return  <Button  onClick={()=> mutate() } disabled={isPending}  className="flex items-center gap-2" > <UserPlus  /> add friend  </Button>
          }
}
