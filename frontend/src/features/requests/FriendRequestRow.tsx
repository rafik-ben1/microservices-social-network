import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FriendRequest, FriendRequestType } from "./request.type";
import HandelFriendRequest from "./HandelFriendRequest";
import { useNavigate } from "react-router-dom";

interface FriendRequestRowProps {
  request: FriendRequest;
  type: FriendRequestType;
}

const FriendRequestRow = ({ request, type }: FriendRequestRowProps) => {
 const navigate = useNavigate()
  return (
    <div onClick={()=> navigate("/profile/"+request.user.id)} key={request.id} className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src={request.user.avatar} alt={request.user.username} />
          <AvatarFallback>{request.user.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="ml-2 text-sm">{request.user.username}</span>
      </div>
      <div>
        {type === "recieved" && (
          <HandelFriendRequest
            userId={request.user.id}
            requestId={request.id}
          />
        )}
      </div>
    </div>
  );
};

export default FriendRequestRow;
