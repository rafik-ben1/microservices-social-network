import { Page } from "@/common/types";
import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Post } from "./post.types";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "react-oidc-context";

export function useGetPosts() {
  const { id } = useParams();
  const queryFn = useFetchFunction<Page<Post>>();

  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => queryFn({ url: "/posts/" + id + "?sort=createdAt,desc" }),
  });
}

export function useCreatePost() {
  const mutationFn = useFetchFunction();
  const queryClient = useQueryClient();
  const id = useAuth().user?.profile.sub;
  const { toast } = useToast();
  return useMutation({
    mutationFn: (body: FormData) =>
      mutationFn({ url: "/posts", method: "POST", isFormData: true, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", id] });
      toast({
        title: "Success!",
        description: "Post has been succussfuly created",
        className: "bg-green-500 text-white ",
      });
    },
  });
}
export function useLikePost() {
  const queryClient = useQueryClient();
  const mutationFn = useFetchFunction();
  const { id } = useParams();

  return useMutation({
    mutationFn: (postId: number) =>
      mutationFn({ url: `/posts/${postId}/likes`, method: "POST" }),
    onMutate: (postId) => {
      const previousPosts = queryClient.getQueryData<Page<Post>>(["posts", id]);

      if (previousPosts) {
        const updatedPosts = {
          ...previousPosts,
          content: previousPosts.content.map((post) => {
            if (post.id === postId) {
              const updatedLikedBy = post.isLiked ? post.likedBy - 1 : post.likedBy + 1;
              return {
                ...post,
                isLiked: !post.isLiked,
                likedBy: updatedLikedBy,
              };
            }
            return post;
          }),
        };

        queryClient.setQueryData(["posts", id], updatedPosts);
      }

      return { previousPosts };
    },
    onError: (error, postId, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts", id], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", id] });
    },
  });
}

