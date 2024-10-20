import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { useUnfriend } from "./FriendService";
import { useState } from "react";

const UnfriendDialog = () => {
  const { mutate } = useUnfriend();
  const [isOpen, setIsOpen] = useState(false);

  function handelUnfriend() {
    mutate();
    setIsOpen(false);
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive"> unfriend </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure</DialogTitle>
          <DialogDescription>
            <strong>
              you will no longer see each other's posts or chat, do you still
              want to procceed?
            </strong>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 items-center">
          <span className="flex items-center gap-2">
            Dialog
            <DialogClose asChild>
              <Button variant="outline" className="flex items-center gap-1">
                {" "}
                <X /> cancel
              </Button>
            </DialogClose>
            <Button
              onClick={handelUnfriend}
              className="flex items-center gap-1 "
            >
              {" "}
              <Check /> confirm
            </Button>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnfriendDialog;
