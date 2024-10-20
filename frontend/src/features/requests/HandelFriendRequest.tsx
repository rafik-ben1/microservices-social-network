import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus, UserCheck, X } from "lucide-react";
import { useHandelFriendRequest } from "./FriendRequestService.tsx";
import { useState } from "react";

const HandelFriendRequest = ({ requestId }: { requestId: number }) => {
  const { mutate } = useHandelFriendRequest();
  const [open, setOpen] = useState(false);
  function handelSendRequet() {
    mutate({ requestId, isAccepting: true });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1 text-sm ">
          <UserCheck /> respond
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Respond to friend request</DialogTitle>
          <DialogDescription>
            <strong>user has sent you a friend request</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 items-center">
          <span className="flex items-center gap-2">
            <Button
              onClick={() => setOpen(false)}
              variant="outline"
              className="flex items-center gap-1"
            >
              {" "}
              <X /> Decline{" "}
            </Button>
            <Button
              onClick={handelSendRequet}
              className="flex items-center gap-1 "
            >
              {" "}
              <UserPlus /> Accept{" "}
            </Button>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HandelFriendRequest;
