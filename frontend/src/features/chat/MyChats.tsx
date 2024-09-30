import { ChatRow } from "./ChatRow"

const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 2 PM', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Tech Group', lastMessage: 'Alice: Check out this new framework!', time: 'Tuesday', unread: 5 },
  ]

  

const MyChats = () => {
  return (
    <>
    {chats.map(chat => <ChatRow key={chat.id} chat={chat} /> )}
    </>
  )
}

export default MyChats