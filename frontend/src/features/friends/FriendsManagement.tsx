
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MyFriends from "./MyFriends"
import FriendsRequests from "../requests/FriendsRequests"
import { FriendRequestType } from "../requests/request.type"



export default function FriendsManagement() {


  const [selectedView, setSelectedView] = useState("friends")


  return (
    <div className=" h-full">
      <CardHeader>
        <CardTitle>Friends & Requests</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <Select onValueChange={setSelectedView} defaultValue={selectedView}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="friends">Friends</SelectItem>
            <SelectItem value="recieved">Received Requests </SelectItem>
            <SelectItem value="sent">Sent Requests </SelectItem>
          </SelectContent>
        </Select>

        <ScrollArea className="mt-2">
          {selectedView === "friends" ? <MyFriends />
            : <FriendsRequests type={selectedView as FriendRequestType}  />
            }

        </ScrollArea>
      </CardContent>
    </div>
  )
}
