import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "./user.types"

const UserSearchRow = ({user}: {user : User}) => {
  return (
    <div
    className={`flex items-center p-4 cursor-pointer w-full hover:bg-gray-100`}  >
    <Avatar className="h-12 w-12">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{"Jane".charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="ml-4 flex-1 flex-col items-center gap-1 ">
        <h2 className="font-semibold text-foreground ">{user.firstname + " " + user.lastname}</h2>
      <p className="text-sm text-gray-600   ">{"@" + user.username}</p>
    </div>
    </div>
  )
}

export default UserSearchRow