import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { ProfileUpdateT, User, UserProfile } from "./user.types";
import { useAuth } from "react-oidc-context";
import { useToast } from "@/hooks/use-toast";

export function useGetUsers() {
  const queryFn = useFetchFunction<User[]>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  return useQuery({
    queryKey: ["users", search],
    queryFn: () => queryFn({ url: "/users?search=" + search }),
    enabled : !!search
  });
}

export function useGetCurrentUser() {
  const queryFn = useFetchFunction<UserProfile>();
  const id = useAuth().user?.profile.sub;
  return useQuery({
    queryKey: ["me"],
    queryFn: () => queryFn({url : "/users/"+id+"/profile"}) , 
    refetchInterval: Infinity,
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

export function useUpdateProfile(){
  const queryClient = useQueryClient()
  const mutationFn = useFetchFunction<UserProfile>()
  const {toast} = useToast()
  return useMutation({
    mutationFn : (body : ProfileUpdateT) => mutationFn({url: "/users/profile" , method : "PATCH", body}),
    onSuccess : (data) => {
      console.log(data)
      queryClient.invalidateQueries({queryKey : ["me"]})
      toast({
        title : "Success!",
        description : "Profile has been succussfuly updated",
        className : "bg-green-400"
      })
    }
  })
}