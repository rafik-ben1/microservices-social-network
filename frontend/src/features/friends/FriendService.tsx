import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery} from "@tanstack/react-query";
import { User } from "../users/user.types";
import { useParams } from "react-router-dom";
import { FriendshipStatus } from "./friend.types";
import { useAuth } from "react-oidc-context";
import { Page } from "@/common/types";

export function useGetMyFriends() {
  return useQuery({
    queryKey: ["friends"],
    queryFn: useFetchFunction<Page<User>>({ url: "/friends" }),
  });
}

export function useGetFriendshipStatus() {
  const { id } = useParams();
  console.log(id)
  const currentUser = useAuth().user?.profile.sub;
  const fetchUser = useFetchFunction<FriendshipStatus>({
    url: `/friends/${id}`,
  });
    return useQuery({
       queryKey: ["friend-status",id],
       queryFn: async () => {
         if(currentUser === id)
          return { status: "self" } as FriendshipStatus;
         return fetchUser()
       },
    });
}

