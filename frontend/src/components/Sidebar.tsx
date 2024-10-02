import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import MyChats from '@/features/chat/MyChats'
import UserSearch from '@/features/users/UserSearch'
import { useState } from 'react'

export const Sidebar = () => {

  const isInMainPage = useLocation().pathname === "/"
  const [isSearching, setIsSearching] = useState(false)

  return (
 <div className={clsx(" bg-background border-r  " , isInMainPage ? " block w-full md:w-fit" : "hidden md:block " )}>
   {!isSearching && <Header setIsSearching={setIsSearching} />}
   <div className=" w-full divide-y md:w-80 h-[calc(100vh-80px)]">
    {
        isSearching ? <UserSearch setIsSearching={setIsSearching} /> :
        <MyChats />
    }
   </div>
 </div>
)
}
