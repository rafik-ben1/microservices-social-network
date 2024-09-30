import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { User } from "./user.types";

export function useGetUsers() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")
  return useQuery({
    queryKey: ["users",search],
    queryFn: useFetchFunction<User[]>({ url: "/users?search="+ search }),
  });
}

export function useGetUser(){
  const id = useParams()
  return useQuery({
    queryKey : ["user", id] ,
    queryFn: useFetchFunction<User>({url:"/users/"+id.id}),
  })
}