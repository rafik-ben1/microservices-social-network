import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const ChatHeader = () => {
  return (
    <div className="bg-white p-4 border-b flex items-center">
    <Avatar className="h-10 w-10">
      <AvatarImage src="https://i.pravatar.cc/100?u=1" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div className="ml-4">
      <h2 className="font-semibold">John Doe</h2>
      <p className="text-sm text-gray-500">last seen recently</p>
    </div>
  </div>
  )
}
