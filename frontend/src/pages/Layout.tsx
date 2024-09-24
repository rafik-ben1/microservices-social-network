
import { Header } from '@/components/Header'
import { ChatRow } from '@/features/chat/ChatRow'
import { Outlet } from 'react-router-dom'


export default function Layout() {

  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 2 PM', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Tech Group', lastMessage: 'Alice: Check out this new framework!', time: 'Tuesday', unread: 5 },
  ]

 
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r">
        <Header />
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {chats.map((chat) => <ChatRow key={chat.id} chat={chat} /> )}
        </div>
      </div>

      <Outlet />

    </div>
  )
}