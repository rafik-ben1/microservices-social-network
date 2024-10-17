import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import {useParams, useSearchParams } from "react-router-dom";
import { User, UserProfile } from "./user.types";
import { useAuth } from "react-oidc-context";

export function useGetUsers() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")
  return useQuery({
    queryKey: ["users",search],
    queryFn: useFetchFunction<User[]>({ url: "/users?search="+ search }),
  });
}

export function useGetCurrentUser(){
  const id = useAuth().user?.profile.sub
  return useQuery({
    queryKey : ["me"] ,
    queryFn: useFetchFunction<UserProfile>({url:"/users/"+id}),
    refetchInterval : Infinity,
    refetchOnMount: false,
    enabled:!!id
  })
}

export function useGetUser(){
  const {id} = useParams()
  return useQuery({
    queryKey : ["user",id] ,
    queryFn: useFetchFunction<UserProfile>({url:"/users/"+id})
  })
}