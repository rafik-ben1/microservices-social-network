import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { PropsWithChildren, useState } from "react"
import Comments from "./Comments"

 
export function CommentModal({children} : PropsWithChildren) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
 

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="w-[60%] h-2/3 flex flex-col divide-y gap-2  ">
          <DialogHeader className=" self-center text-center items-center" >
            <DialogTitle>Comments</DialogTitle>
            <DialogDescription>View and add comments to this post</DialogDescription>
          </DialogHeader>
        <Comments />
        </DialogContent>
      </Dialog>
    )
  }
 
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
           {children}
      </DrawerTrigger >
      <DrawerContent className="h-2/3 p-2">
        <DrawerHeader className="text-center ">
          <DrawerTitle>Comments</DrawerTitle>
        </DrawerHeader>
        <Comments />
      </DrawerContent>
    </Drawer>
  )
}