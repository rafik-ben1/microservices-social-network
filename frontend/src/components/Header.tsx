import React from 'react'
import MainMenu from './MainMenu'
import {Search} from "lucide-react"
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
<div className="p-2 border-b  ">
          <div className="flex items-center justify-between ">
            <span className=' flex items-center gap-1' >
              <MainMenu /> 
              <h1 className=" text-xl text-primary font-semibold">Facemok</h1>
             </span>
             <Link to="search">
             <Search className='text-primary'  cursor="pointer" />                              
             </Link>
          </div>
        
        </div>
  )
}
