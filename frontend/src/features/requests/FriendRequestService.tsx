import { HttpMethods, useFetchFunction } from "@/hooks/useFetch"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { FriendRequest, FriendRequestType } from "./request.type"

export function useHandelFriendRequest(){
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn : (requestId : string , isAccepting : boolean = true ) => {
        let method : HttpMethods  = isAccepting ? "POST" : "DELETE"
        let additionalPath = isAccepting ? "recieved/" : "" 
        let fun = useFetchFunction<void>({url : `/friends/request/${additionalPath + requestId}`, method })
        return fun()
      },
      onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ["request"]})
      }
    })
  }

  export function useGetFriendsRequests(type : FriendRequestType){
    return useQuery({
        queryKey: ["requests-"+type ],
        queryFn: useFetchFunction<FriendRequest[]>({ url: "/friends/requests/"+type }),
      });
  }