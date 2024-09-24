import { ChatHeader } from "@/features/chat/ChatHeader"
import { Message } from "@/features/chat/Message"
import { MessageInput } from "@/features/chat/MessageInput"


const messages = [
  { id: 1, sender: 'John Doe', content: 'Hey, how are you?', time: '10:30 AM' },
  { id: 2, sender: 'You', content: 'Im good, thanks! How about you?', time: '10:31 AM' },
  { id: 3, sender: 'John Doe', content: 'Doing great! Want to grab lunch later?', time: '10:32 AM' },
]



export const SelectedChat = () => {
  return (
    <div className="flex-1 flex flex-col">
    {/* Chat Header */}
    <ChatHeader />

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
         <Message message={message} />
      ))}
    </div>

    <MessageInput />
  </div>
  )
}
