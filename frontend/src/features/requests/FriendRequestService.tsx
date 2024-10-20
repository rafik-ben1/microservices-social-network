import { HttpMethods, useFetchFunction } from "@/hooks/useFetch"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { FriendRequest, FriendRequestType } from "./request.type"
import { useParams } from "react-router-dom"
import { Page } from "@/common/types"

export function useHandelFriendRequest(){
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn : ({requestId , isAccepting = true}: {requestId : number , isAccepting : boolean} ) => {
        let method : HttpMethods  = isAccepting ? "POST" : "DELETE"
        let additionalPath = isAccepting ? "recieved/" : "" 
        let fun = useFetchFunction<void>({url : `/friends/request/${additionalPath + requestId}`, method })
        return fun()
      },
      onSuccess : (_,{requestId},) => {
        queryClient.invalidateQueries({queryKey : ["friend-status",requestId]})
      }
    })
  }

  export function useGetFriendsRequests(type : FriendRequestType){
    return useQuery({
        queryKey: ["requests-"+type ],
        queryFn: useFetchFunction<Page<FriendRequest>>({ url: "/friends/requests/"+type }),
      });
  }

  export function useSendFriendRequest(){
    const queryClient = useQueryClient()
    const {id} = useParams()
    return useMutation({
      mutationFn : useFetchFunction<void>({method : "POST" , url: "/friends/requests/"+id}),
      onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ["friends-status",id]})
      }
    }) 
  }