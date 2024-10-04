import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import InputRow from "@/components/InputRow"
import { useState } from "react"

import DatePicker from "@/components/DatePicker"
import SelectInterests from "@/components/SelectInterests"

const UpdateProfileForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bio, setBio] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState<Date>()
    const [address, setAddress] = useState('')
    const [socialStatus, setSocialStatus] = useState('')
    const [selectedInterests , setSelectedInterests] = useState<string[]>([])

  return (
    <form className="space-y-4">
    <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 ">
       <InputRow label="First Name" >
       <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
       </InputRow>
     
      <InputRow label="Last Name" >
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
      </InputRow>
     
      <InputRow label="Bio" >
       <Textarea
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Tell us about yourself"
        rows={4}
       />
    </InputRow>

    <InputRow label="Date of Birth" >
     <DatePicker mode="single" date={dateOfBirth} selected={dateOfBirth} onSelect={setDateOfBirth} initialFocus />
      </InputRow>
     <InputRow label="Address" >
     <Input
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
     </InputRow>
      

    <InputRow label="Social Status" >
      <Select  value={socialStatus} onValueChange={setSocialStatus}>
        <SelectTrigger>
          <SelectValue placeholder="Select your social status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="single">Single</SelectItem>
          <SelectItem value="in-relationship">In a Relationship</SelectItem>
          <SelectItem value="married">Married</SelectItem>
          <SelectItem value="divorced">Divorced</SelectItem>
          <SelectItem value="widowed">Widowed</SelectItem>
        </SelectContent>
      </Select>
    </InputRow>

      <SelectInterests selected={selectedInterests} setSelected={setSelectedInterests} />
   
    </div>
  
    <Button type="submit" className="w-full">Save Profile</Button>
  </form>
)
}

export default UpdateProfileForm