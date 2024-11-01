import { CardContent } from "@/components/ui/card"
import { User, CalendarDays, Users, MapPin} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { UserProfile } from "./user.types"
import { format } from "date-fns"
import { getAge } from "@/common/helpers"

export const UserProfileAttributes = ({user} :{user : UserProfile}) => {
  return (
    <CardContent className="grid gap-4">
    {user.bio &&<div className="grid gap-2">
      <h3 className="font-semibold">Bio</h3>
      <p className="text-sm text-muted-foreground">
        {user.bio}
      </p>
    </div>}
    <div className="grid gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {user.gender && <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
         <span>{user.gender}</span>
        </div>}
        {user.bornAt && <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-muted-foreground" />
          <span>Born {format(new Date(user.bornAt),"PPP")} ({getAge(user.bornAt)} years old)</span>
        </div>}
        {user.reltationshipStatus && <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span>{user.reltationshipStatus}</span>
        </div>}
        {user.address && <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span>{user.address}</span>
        </div>}
      </div>
    </div>
   {user.hobbies?.length && <div className="grid gap-2">
      <h3 className="font-semibold">Hobbies</h3>
      <div className="flex flex-wrap gap-2">
        {user.hobbies.map(hobbie => <Badge key={hobbie} variant="secondary">{hobbie}</Badge>)}
      </div>
    </div>}
  </CardContent>
)
}
