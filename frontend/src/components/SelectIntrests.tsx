import { INTERESTS } from "@/common/constants"
import React, { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"

import { Button } from "./ui/button"
import { CaretSortIcon } from "@radix-ui/react-icons"

interface SelectIntrestsProps {
    selected : string[],
    setSelected : React.Dispatch<string[]>
}

const SelectIntrests = ({selected, setSelected} : SelectIntrestsProps) => {
    const [intrest ,] = useState(INTERESTS)
    const [open, setOpen] = useState(false)
    const intrestToSelect = intrest.filter((intrest) => !selected.includes(intrest) )
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] ml-4"
      >
       Add an intrest
        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search intrests..."  className="h-9" />
        <CommandList>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {intrestToSelect.map((item,i) => (
              <CommandItem
                key={i}
                value={item}
                onSelect={(val) =>{
                    setSelected([...selected,val])
                } }
              >
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>

)
}

export default SelectIntrests