import {Search} from "lucide-react"
import { Input } from './ui/input'
import { useSearchParams } from "react-router-dom"

const SearchInput = () => {
  const [,setSearchParams] = useSearchParams()
  
  return (
    <div className="mt-4 relative">
     <Search className="absolute left-3 top-1/2 transform bg-white border-none -translate-y-1/2 text-gray-400" />
     <Input onChange={(e) => setSearchParams({search : e.target.value})  } 
      onBlur={()=> setSearchParams({}) }
      className="pl-10" placeholder="Search" />
  </div>
  )
}

export default SearchInput