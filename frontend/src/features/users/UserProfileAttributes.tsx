import { CardContent } from "@/components/ui/card"
import { User, CalendarDays, Users, MapPin} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const UserProfileAttributes = () => {
  return (
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
        <Badge variant="secondary" >Travel</Badge>
        <Badge variant="secondary" >Photography</Badge>
        <Badge variant="secondary" >Coffee</Badge>
        <Badge variant="secondary" >Music</Badge>
      </div>
    </div>
  </CardContent>
)
}
