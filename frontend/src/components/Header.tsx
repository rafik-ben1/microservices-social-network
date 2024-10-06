import React from 'react'
import MainMenu from './MainMenu'
import {Search} from "lucide-react"

export const Header = ({setIsSearching}: {setIsSearching : React.Dispatch<boolean>}) => {

  return (
<div className="p-2 border-b  ">
          <div className="flex items-center justify-between ">
            <span className=' flex items-center gap-1' >
              <MainMenu /> 
              <h1 className=" text-xl text-primary font-semibold">Facemok</h1>
             </span>
             <Search className='text-primary' onClick={()=> setIsSearching(true) } cursor="pointer" />                 
          </div>
        
        </div>
  )
}
