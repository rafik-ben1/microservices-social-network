import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HelpCircle, Bookmark } from "lucide-react"

export default function DefaultPage() {
  return (
     <div className=" grow flex-1 hidden md:block " >  
      <main className="flex-1 overflow-auto p-4 mt-24  ">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome to Your Messages</CardTitle>
            <CardDescription>Select a chat or explore your options</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button className="justify-start" variant="ghost">
              <Bookmark className="mr-2 h-4 w-4" />
              Saved Messages
            </Button>
            <Button className="justify-start" variant="ghost">
              <Users className="mr-2 h-4 w-4" />
              Create a group
            </Button>
            <Button className="justify-start" variant="ghost">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & FAQ
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Your Messaging App. All rights reserved.
      </footer>
    </div>
  )
}