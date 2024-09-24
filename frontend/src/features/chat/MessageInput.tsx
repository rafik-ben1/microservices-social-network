import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paperclip, Send, Smile } from "lucide-react"

export const MessageInput = () => {
  return (
    <div className="bg-white p-4 border-t flex items-center">
    <Button variant="ghost" size="icon">
      <Paperclip className="h-6 w-6 text-gray-500" />
    </Button>
    <Input className="flex-1 mx-4" placeholder="Write a message..." />
    <Button variant="ghost" size="icon">
      <Smile className="h-6 w-6 text-gray-500" />
    </Button>
    <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
      <Send className="h-4 w-4 text-white" />
    </Button>
  </div>
  )
}
