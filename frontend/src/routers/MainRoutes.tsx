import DefaultPage from "@/pages/DefaultPage"
import Profile from "@/pages/Profile"
import { SelectedChat } from "@/pages/SelectedChat"
import UpdateProfile from "@/pages/UpdateProfile"
import { Routes, Route } from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={ <DefaultPage/> } />
      <Route path="/chats/:chatId" element={ <SelectedChat/> } />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/update" element={<UpdateProfile />} />
      <Route path="*" element={ <DefaultPage /> } />
   </Routes>
  )
}

export default MainRoutes