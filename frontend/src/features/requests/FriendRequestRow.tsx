import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FriendRequest, FriendRequestType } from "./request.type";
import HandelFriendRequest from "./HandelFriendRequest";

interface FriendRequestRowProps {
  request: FriendRequest;
  type: FriendRequestType;
}

const FriendRequestRow = ({ request, type }: FriendRequestRowProps) => {
  console.log(request);
  console.log(type);
  return (
    <div key={request.id} className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src={request.user.avatar} alt={request.user.username} />
          <AvatarFallback>{request.user.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="ml-2 text-sm">{request.user.username}</span>
      </div>
      <div>
        {type === "recieved" ? (
          <HandelFriendRequest
            userId={request.user.id}
            requestId={request.id}
          />
        ) : (
          <Button variant="destructive">unsend</Button>
        )}
      </div>
    </div>
  );
};

export default FriendRequestRow;
