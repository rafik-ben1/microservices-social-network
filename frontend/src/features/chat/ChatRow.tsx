import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react"


interface Chat {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    unread: number;
}
export const ChatRow = ({chat} : {chat : Chat}) => {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
  return (
    <div
    key={chat.id}
    className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
      selectedChat === chat.id ? 'bg-blue-50 text-white ' : ''
    }`}
    onClick={() => setSelectedChat(chat.id)}
  >
    <Avatar className="h-12 w-12">
      <AvatarImage src={`https://i.pravatar.cc/100?u=${chat.id}`} />
      <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="ml-4 flex-1">
      <div className="flex justify-between">
        <h2 className="font-semibold">{chat.name}</h2>
        <span className="text-sm text-gray-500">{chat.time}</span>
      </div>
      <p className="text-sm text-gray-600   ">{chat.lastMessage}</p>
    </div>
    {chat.unread > 0 && (
      <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {chat.unread}
      </div>)}
    </div>
  )
}
