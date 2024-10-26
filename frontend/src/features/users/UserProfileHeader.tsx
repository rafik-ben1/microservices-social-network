import { Button } from '@/components/ui/button'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProfileActionButton from './ProfileActionButton'
import { UserProfile } from './user.types'
import ProfileAvatar from './ProfileAvatar'

export const UserProfileHeader = ({user} :{user : UserProfile} ) => {
  const navigate = useNavigate()
  return (
    <CardHeader className="flex flex-row items-center gap-4">
    <Button onClick={()=> navigate(-1)} className="md:hidden" variant="ghost" size="icon"  > <ArrowLeft /> </Button>
    <ProfileAvatar  user={user} /> 
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-xl md:text-2xl ">{user?.firstname + " " + user?.lastname}</CardTitle>
          <p className="text-muted-foreground">{"@" + user?.username}</p>
        </div>
       <ProfileActionButton />
      </div>
    </div>
  </CardHeader>
)
}
