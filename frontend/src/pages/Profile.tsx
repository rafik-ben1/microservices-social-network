import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, User, Users, UserPlus, Check } from "lucide-react"

export default function Profile() {
  const [isFriend, setIsFriend] = useState(false)

  const handleAddFriend = () => {
    setIsFriend(true)
    // Here you would typically make an API call to update the friend status
  }

  return (
    <Card className= "grow rounded-none sm:p-4 ">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-20 h-20  ">
          <AvatarImage alt="User's avatar" src="/placeholder.svg?height=80&width=80" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <p className="text-muted-foreground">@johndoe</p>
            </div>
            <Button 
              onClick={handleAddFriend} 
              disabled={isFriend}
              className="ml-4"
            >
              {isFriend ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Friends
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Friend
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <h3 className="font-semibold">Bio</h3>
          <p className="text-sm text-muted-foreground">
            Passionate developer, coffee enthusiast, and avid traveler. Always learning and exploring new technologies.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span>Male</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
              <span>Born April 15, 1990 (33 years old)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>In a relationship</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Programming</Badge>
            <Badge variant="secondary">Travel</Badge>
            <Badge variant="secondary">Photography</Badge>
            <Badge variant="secondary">Coffee</Badge>
            <Badge variant="secondary">Music</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}