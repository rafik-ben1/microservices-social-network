import { Page } from "@/common/types";
import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Post } from "./post.types";
import { useToast } from "@/hooks/use-toast";

export function useGetPosts(){
    const {id} = useParams()
    const queryFn = useFetchFunction<Page<Post>>()

    return useQuery({
        queryKey : ["posts",id],
        queryFn : () => queryFn({url : "/posts/user/"+id})
    })
}

export function useCreatePost(){
    const mutationFn = useFetchFunction()
    const {toast} = useToast()
    return useMutation({
        mutationFn : (body) => mutationFn({url:"/posts", method : "POST" , isFormData : true, body }),
        onSuccess : () => {
            toast({
                title: "Success!",
                description: "Post has been succussfuly created",
                className: "bg-green-400 text-white ",
              });
        }
    })
}