import { Page } from "@/common/types";
import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Post } from "./post.types";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "react-oidc-context";

export function useGetPosts(){
    const {id} = useParams()
    const queryFn = useFetchFunction<Page<Post>>()

    return useQuery({
        queryKey : ["posts",id],
        queryFn : () => queryFn({url : "/posts/"+id+"?sort=createdAt,desc"})
    })
}

export function useCreatePost(){
    const mutationFn = useFetchFunction()
    const queryClient = useQueryClient()
    const id = useAuth().user?.profile.sub
    const {toast} = useToast()
    return useMutation({
        mutationFn : (body : FormData) => mutationFn({url:"/posts", method : "POST" , isFormData : true, body }),
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ["posts",id]})
            toast({
                title: "Success!",
                description: "Post has been succussfuly created",
                className: "bg-green-500 text-white ",
              });
        }
    })
}