import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { User, UserProfile } from "./user.types";
import { useAuth } from "react-oidc-context";

export function useGetUsers() {
  const queryFn = useFetchFunction<User[]>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  return useQuery({
    queryKey: ["users", search],
    queryFn: () => queryFn({ url: "/users?search=" + search }),
  });
}

export function useGetCurrentUser() {
  const queryFn = useFetchFunction<UserProfile>();
  const id = useAuth().user?.profile.sub;
  return useQuery({
    queryKey: ["me"],
    queryFn: () => queryFn({url : "/users/"+id+"/profile"}) , 
    refetchInterval: Infinity,
    refetchOnMount: false,
    enabled: !!id,
  });
}

export function useGetUser() {
  const { id } = useParams();
  const currentId = useAuth().user?.profile.sub;
  const queryFn = useFetchFunction<UserProfile>();
  if (id === currentId)
    return useGetCurrentUser() 
  return useQuery({
    queryKey: ["user", id],
         queryFn: () => queryFn({url : "/users/"+id+"/profile"}) 
  });
}
