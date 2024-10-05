import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { User } from "../users/user.types";
import { useParams } from "react-router-dom";
import { FriendshipStatus } from "./friend.types";
import { useAuth } from "react-oidc-context";

export function useGetMyFriends() {
  return useQuery({
    queryKey: ["friends"],
    queryFn: useFetchFunction<User[]>({ url: "/friends" }),
  });
}

export function useGetFriendshipStatus() {
  const { id } = useParams();
  const currentUser = useAuth().user?.profile.sub;
  const fetchUser = useFetchFunction<FriendshipStatus>({
    url: `/friends/${id}/status`,
  });

  return useQuery({
    queryKey: [id],
    queryFn: async () => {
       return { status: "requestReceived" } as FriendshipStatus;
    },
    refetchOnMount: false,
    refetchInterval: Infinity,
  });
}
