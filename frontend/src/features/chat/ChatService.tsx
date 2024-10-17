import { Page } from "@/common/types";
import { useFetchFunction } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { Chat } from "./chat.types";

export function useGetChats(){
    return useQuery({
        queryKey : ["chats"],
        queryFn : useFetchFunction<Page<Chat>>({url : "/chats"})
    })
} 