import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetMyFriends } from "./FriendService"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

const MyFriends = () => {
  const {data, isLoading} = useGetMyFriends()

  if(isLoading){
    return Array.from({length : 10}).map((_,index) =>(
         <div key={index} className="flex items-center space-x-4" >
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8" />
         </div>
    ))
  }
  return (
    <>
     {data?.map(friend => (
        <div key={friend.id} className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={friend.avatar} alt={friend.username} />
              <AvatarFallback>{friend.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-sm">{friend.firstname + " " + friend.lastname}</span>
          </div>
          <Button variant="destructive" size="icon">
            unfriend
          </Button>
        </div>
      ))}
    </>
  )
}

export default MyFriends