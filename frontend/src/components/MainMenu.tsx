import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, } from './ui/dropdown-menu'
import { Menu, User, LoaderCircle, Settings , Bookmark, MoonStar, LogOut, Users} from 'lucide-react'
import { Switch } from './ui/switch'
import { useAuth } from 'react-oidc-context'
import { Link } from 'react-router-dom'

const MainMenu = () => {
  const {signoutRedirect} = useAuth()
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild >
      <Button variant="ghost" size="icon" >
        <Menu className="h-6 w-6 text-primary" />
       </Button>
     </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem> <div className='flex items-center gap-6 font-medium' ><User /> <span>Profile</span> </div> </DropdownMenuItem>
      <DropdownMenuItem><Link to="/friends"> <div className='flex items-center gap-6 font-medium' ><Users /> <span>Friends</span> </div> </Link> </DropdownMenuItem>
      <DropdownMenuItem><div className='flex items-center gap-6 font-medium' > <Bookmark /> <span>Saved messages</span> </div> </DropdownMenuItem>
      <DropdownMenuItem><div className='flex items-center gap-6 font-medium' > <LoaderCircle /> <span>Stories</span> </div> </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem> <div className='flex items-center gap-6 font-medium' >  <MoonStar /> <span>Dark mode</span>  <Switch />  </div> </DropdownMenuItem>
      <DropdownMenuItem> <div className='flex items-center gap-6 font-medium' ><Settings /> <span>Settings</span> </div>  </DropdownMenuItem>
      <DropdownMenuItem onClick={()=>signoutRedirect()}> <div className='flex items-center gap-6 font-medium' ><LogOut /> <span>Log out</span> </div>  </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>  
  )
}

export default MainMenu