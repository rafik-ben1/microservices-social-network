import { Page } from "@/common/types";
import { useFetchFunction } from "@/hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Comment } from "./comment.types";

export function useGetPostComments() {
  const queryFn = useFetchFunction<Page<Comment>>();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("post");
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => queryFn({ url: "/posts/" + postId + "/comments" }),
  });
}

export function useAddComment() {
  const mutationFn = useFetchFunction();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("post");
  return useMutation({
    mutationFn: (content: string) =>
      mutationFn({
        url: "/posts/" + postId + "/comments",
        method: "POST",
        body: { content },
      }),
      onSettled() {
          queryClient.invalidateQueries({queryKey : ["comments",postId]})
      },
  });
}
