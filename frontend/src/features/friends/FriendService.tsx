import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../users/user.types";
import { useParams } from "react-router-dom";
import { FriendshipStatus } from "./friend.types";
import { useAuth } from "react-oidc-context";
import { Page } from "@/common/types";

export function useGetMyFriends() {
  const queryFn = useFetchFunction<Page<User>>();
  return useQuery({
    queryKey: ["friends"],
    queryFn: () => queryFn({ url: "/friends" }),
  });
}

export function useGetFriendshipStatus() {
  const { id } = useParams();
  const queryFn = useFetchFunction<FriendshipStatus>();

  console.log("user id in useFriendshipStatus",id);
  const currentUser = useAuth().user?.profile.sub;
  const fetchUser = () =>
    queryFn({
      url: `/friends/${id}`,
    });
  return useQuery({
    queryKey: ["friend-status", id],
    queryFn: async () => {
      if (currentUser === id) return { status: "self" } as FriendshipStatus;
      return fetchUser();
    },
  });
}

export function useUnfriend() {
  const queryClient = useQueryClient();
  const mutationFn = useFetchFunction<void>();
  const { id } = useParams();
  console.log(id)
  return useMutation({
    mutationFn: () => mutationFn({ url: "/friends/" + id, method: "DELETE" }),
    onSuccess: () => {
	    console.log("user id in use unfriend", id)
      queryClient.invalidateQueries({ queryKey: ["friend-status", id] });
    },
  });
}
