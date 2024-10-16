import MainRoutes from '@/routers/MainRoutes'
import SidebarRoutes from '@/routers/SidebarRoutes'


export default function Layout() {

  return (
    <div className="flex h-screen w-full bg-primary-foreground ">
        <SidebarRoutes />
        <MainRoutes />
    </div>
  )
}
