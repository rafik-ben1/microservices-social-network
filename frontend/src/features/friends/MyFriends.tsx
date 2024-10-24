import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMyFriends } from "./FriendService";import UserRowSkeleton from "../users/UserRowSkeleton";
import { Button } from "@/components/ui/button";

const MyFriends = () => {
  const { data, isLoading } = useGetMyFriends();

  if (isLoading) {
    return <UserRowSkeleton />
  }
  return (
    <>
      {data?.content.map((friend) => (
        <div key={friend.id} className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={friend.avatar} alt={friend.username} />
              <AvatarFallback>{friend.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-sm">
              {friend.firstname + " " + friend.lastname}
            </span>
          </div>
          <Button variant="destructive" >
            unfriend
          </Button>
        </div>
      ))}
    </>
  );
};

export default MyFriends;
