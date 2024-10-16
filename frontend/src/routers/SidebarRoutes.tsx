import { Sidebar } from "@/components/Sidebar"
import MyChats from "@/features/chat/MyChats"
import FriendsManagement from "@/features/friends/FriendsManagement"
import UserSearch from "@/features/users/UserSearch"
import { Routes, Route } from "react-router-dom"

const SidebarRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Sidebar/>} >
     <Route index element={<MyChats/>} />
     <Route path='search' element={<UserSearch/>} />
     <Route path='friends' element={<FriendsManagement/>} />
     <Route path='*' element={<MyChats/>} />
    </Route>
   </Routes>
)
}

export default SidebarRoutes