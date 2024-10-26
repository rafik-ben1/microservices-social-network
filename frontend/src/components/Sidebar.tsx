import clsx from 'clsx'
import { Outlet, useLocation} from 'react-router-dom'
import { Header } from './Header'

const fullSidebarRoutes = ["/search" , "/settings", "/", "/friends" ]


export const Sidebar = () => {
 
  const {pathname} = useLocation()
 const isSearching = pathname.startsWith("/search")
 
 const isInSidebar = isSearching || fullSidebarRoutes.includes(pathname)

  return (
 <div className={clsx(" bg-background border-r", isInSidebar ? "block w-full md:w-fit" : "hidden md:block"  )}>
   {!isSearching && <Header />}
   <div className=" w-full divide-y md:w-80 h-[calc(100vh-80px)]">
     <Outlet />
   </div>
 </div>
)
}
