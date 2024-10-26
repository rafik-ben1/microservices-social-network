import clsx from 'clsx'
import { Outlet, useLocation} from 'react-router-dom'
import { Header } from './Header'

export const Sidebar = () => {
 
  const {pathname} = useLocation()
 const isSearching = pathname.startsWith("/search")

  return (
 <div className={clsx(" bg-background border-r  " )}>
   {!isSearching && <Header />}
   <div className=" w-full divide-y md:w-80 h-[calc(100vh-80px)]">
     <Outlet />
   </div>
 </div>
)
}
