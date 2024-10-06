import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UserPlus,UserCheck ,X } from "lucide-react"

const HandelFriendRequest = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1 text-sm " ><UserCheck /> respond</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Respond to friend request</DialogTitle>
          <DialogDescription>
             <strong>user has sent you a friend request</strong> 
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 items-center" >
              <span className="flex items-center gap-2" >
                <Button  variant="outline" className="flex items-center gap-1"   > <X /> Decline  </Button> 
                <Button  className="flex items-center gap-1 "   > <UserPlus /> Accept  </Button> 
              </span>
             </div>
      </DialogContent>
    </Dialog>
  )

}

export default HandelFriendRequest