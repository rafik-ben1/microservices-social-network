import React from "react"
import UserSearchRow from "./UserSearchRow"
import { useGetUsers } from "./UserService"
import {ArrowLeft, Search} from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const UserSearch = ({setIsSearching}: {setIsSearching : React.Dispatch<boolean>}) => {
  const {data, error, isLoading} = useGetUsers()
  const [, setSearchParams] = useSearchParams()

  const onGoBack = ()=> {
    setIsSearching(false)
    setSearchParams({})
  } 
  return (
    <div className="flex flex-col  " >
      <div className="flex items-center "> 
        <Button size="icon" variant="ghost"  onClick={onGoBack} ><ArrowLeft className=" text-primary" /> </Button>
        <div className="relative w-full ">
         <Search className="absolute left-3 top-1/2 transform bg-white border-none -translate-y-1/2 text-gray-400" />
          <Input autoFocus onChange={(e) => setSearchParams({search : e.target.value})  } 
           className="pl-10 rounded-none border-none focus-visible:ring-0 " placeholder="Search" />
  </div>
        </div>
    {data?.map(user => <UserSearchRow key={user.id} user={user} /> )}
    </div>
  )
}

export default UserSearch