import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FriendRequest, FriendRequestType } from "./request.type";
import { useParams } from "react-router-dom";
import { Page } from "@/common/types";
import { FriendshipStatus } from "../friends/friend.types";
import { useToast } from "@/hooks/use-toast";


export function useAcceptFriendRequest(userId: string) {
  const queryClient = useQueryClient();
  const fetchFriendRequest = useFetchFunction<void>();
  const {toast} = useToast()
  return useMutation({
    mutationFn: ({ requestId }: { requestId: number }) => {
      return fetchFriendRequest({
        url: "/friends/requests/recieved/" + requestId,
        method: "POST",
      });
    },

    onSuccess: (_, { requestId }) => {
      toast({title : "success" , description : "friend request successfuly sent" })
      console.log("user id in accept friend",userId)
      queryClient.setQueryData(["friend-status", userId], () => ({
        requestId: null,
        status: "friends",
      }));
      queryClient.setQueryData<Page<FriendRequest>>(
        ["requests-recieved"],
        (requests) => {
          return {
            ...requests,
            content: requests?.content.filter(
              (request) => request.id !== requestId
            ),
          } as Page<FriendRequest>;
        }
      );
    },
  });
}

export function useGetFriendsRequests(type: FriendRequestType) {
  const queryFn = useFetchFunction<Page<FriendRequest>>();
  return useQuery({
    queryKey: ["requests-" + type],
    queryFn: () =>
      queryFn({
        url: "/friends/requests/" + type,
      }),
  });
}

export function useSendFriendRequest() {
  const queryClient = useQueryClient();
  const mutationFn = useFetchFunction<FriendRequest>();
  const { id } = useParams();
  return useMutation({
    mutationFn: () =>
      mutationFn({
        method: "POST",
        url: "/friends/requests/" + id,
      }),
    onMutate: () => {
	    console.log("user id in send request",id)
      queryClient.setQueryData<FriendshipStatus>(
        ["friend-status", id],
        () =>
          ({ status: "requestSent", requestId: undefined } as FriendshipStatus)
      );
    },
    onSettled : () =>{
      queryClient.invalidateQueries({queryKey : ["friend-status", id]})
    }
  });
}
