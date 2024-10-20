import { useGetFriendsRequests } from "./FriendRequestService"
import FriendRequestRow from "./FriendRequestRow"
import { FriendRequestType } from "./request.type"



const FriendsRequests = ({type}: {type : FriendRequestType}) => {
  const {data} = useGetFriendsRequests(type)
  console.log(data)
  return (
    data?.content.map(request => <FriendRequestRow type={type}
                           request={request} key={request.id} />)
    
  )
}

export default FriendsRequests
