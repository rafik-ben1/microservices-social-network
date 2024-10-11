import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";

const UnfriendDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive"> unfriend </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure</DialogTitle>
          <DialogDescription>
            <strong>you will no longer see each other's posts or chat, do you still want to procceed?</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 items-center">
          <span className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              {" "}
              <X /> cancel
            </Button>
            <Button className="flex items-center gap-1 ">
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
