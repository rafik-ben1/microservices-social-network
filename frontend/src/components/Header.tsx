import { Input } from './ui/input'
import { Menu, Search } from 'lucide-react'

export const Header = () => {
  return (
    
<div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <Menu className="h-6 w-6 text-gray-500" />
            <h1 className="text-xl font-semibold">Facemok</h1>
          </div>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search" />
          </div>
        </div>
  )
}
