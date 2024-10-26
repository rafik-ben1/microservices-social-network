import { INTERESTS } from "@/common/constants"
import React, { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"

import { Button } from "./ui/button"
import { CaretSortIcon  } from "@radix-ui/react-icons"
import { Badge } from "./ui/badge"
import { Label } from "./ui/label"
import {X} from "lucide-react"

interface SelectInterestsProps {
    selected : string[],
    setSelected : React.Dispatch<string[]>
}

const SelectInterests = ({selected, setSelected} : SelectInterestsProps) => {
    const [interest ,] = useState(INTERESTS)
    const [open, setOpen] = useState(false)
    const intrestToSelect = interest.filter((interest) => !selected.includes(interest) )
  
  return (
    <div className="flex flex-col justify-center col-span-2  gap-4">
      <div className="flex w-full items-center justify-between">
        <Label>Interests</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] ml-4"
            >
              Add an interest
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput
                placeholder="Search intrests..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No interest found.</CommandEmpty>
                <CommandGroup>
                  {intrestToSelect.map((item, i) => (
                    <CommandItem
                      key={i}
                      value={item}
                      onSelect={(val) => {
                        setSelected([...selected, val]);
                      }}
                    >
                      {item}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

     
      </div>
      <div className="flex flex-row flex-wrap gap-2">
          {selected.map((interest) => (
             <Badge key={interest} variant="secondary" className="text-sm">
              {interest}
               <Button onClick={()=>setSelected(selected.filter(val => val !== interest ))} type="button" variant="ghost" size="sm" className="h-auto p-0 ml-2" >
                 <X className="h-4 w-4" />
               </Button>
              
             </Badge>
          ))}
        </div>
    </div>
  );
}

export default SelectInterests