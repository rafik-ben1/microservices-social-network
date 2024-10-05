import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import {useSearchParams } from "react-router-dom";
import { User } from "./user.types";
import { useAuth } from "react-oidc-context";

export function useGetUsers() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")
  return useQuery({
    queryKey: ["users",search],
    queryFn: useFetchFunction<User[]>({ url: "/users?search="+ search }),
  });
}

export function useGetUser(){
  const id = useAuth().user?.profile.sub
  return useQuery({
    queryKey : ["user"] ,
    queryFn: useFetchFunction<User>({url:"/users/"+id}),
    refetchInterval : Infinity,
    refetchOnMount: false,
    enabled:!!id
  })
}