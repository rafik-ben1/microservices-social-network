import { Popover } from "@radix-ui/react-popover"
import { PopoverContent, PopoverTrigger } from "./ui/popover"
import { CalendarIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Calendar, CalendarProps } from "./ui/calendar"

  type DatePickerProps = CalendarProps & {
    date? : Date
 }

const DatePicker = ({date,...props} :  DatePickerProps) => {
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date?.toDateString() ?? <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar {...props}  />
    </PopoverContent>
  </Popover>
)
}

export default DatePicker