import { HttpMethods, useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FriendRequest, FriendRequestType } from "./request.type";
import { useParams } from "react-router-dom";
import { Page } from "@/common/types";
import { FriendshipStatus } from "../friends/friend.types";

export function useHandelFriendRequest(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      requestId,
      isAccepting = true,
    }: {
      requestId: number;
      isAccepting: boolean;
    }) => {
      let method: HttpMethods = isAccepting ? "POST" : "DELETE";
      let additionalPath = isAccepting ? "recieved/" : "";
      let fun = useFetchFunction<void>({
        url: `/friends/request/${additionalPath + requestId}`,
        method,
      });
      return fun();
    },
    onSuccess: (_, { requestId, isAccepting }) => {
      queryClient.setQueryData(["friend-status", userId], () => ({
        requestId : null,
        status: isAccepting ? "friends" : "none",
      }));
      ["recieved", "sent"].forEach((type) => {
        queryClient.setQueryData<Page<FriendRequest>>(
          ["requests-" + type],
          (requests) => {
            return {
              ...requests,
              content: requests?.content.filter(
                (request) => request.id !== requestId
              ),
            } as Page<FriendRequest>;
          }
        );
      });
    },
  });
}

export function useGetFriendsRequests(type: FriendRequestType) {
  return useQuery({
    queryKey: ["requests-" + type],
    queryFn: useFetchFunction<Page<FriendRequest>>({
      url: "/friends/requests/" + type,
    }),
  });
}

export function useSendFriendRequest() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: useFetchFunction<FriendRequest>({
      method: "POST",
      url: "/friends/requests/" + id,
    }),
    onSuccess: (data) => {
      queryClient.setQueryData<FriendshipStatus>(["friends-status",id], ()=>(
        {status : "requestSent" , requestId: data.id} as FriendshipStatus ));
    },
  });
}
