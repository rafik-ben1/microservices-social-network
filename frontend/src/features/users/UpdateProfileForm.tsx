import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import SelectInterests from "@/components/SelectInterests";
import { useGetCurrentUser, useUpdateProfile } from "./UserService";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {ProfileFormSchema, ProfileUpdateT} from "./user.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const UpdateProfileForm = () => {
  const { data } = useGetCurrentUser();
  const {mutate , isPending} = useUpdateProfile()
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(
    data?.hobbies ?? []
  );
  const form = useForm<ProfileUpdateT>({
    resolver: zodResolver(ProfileFormSchema),
  })
  useEffect(() => {
    if (data) {
      form.reset({
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        bio: data.bio || "",
        bornAt: data.bornAt ? new Date(data.bornAt) : undefined,
        address: data.address || "",
        gender: data.gender || undefined,
        relationshipStatus: data.reltationshipStatus || undefined,
      });
      setSelectedHobbies(data.hobbies || []);
    }
  }, [data, form]);

 
  function handelSubmit (data : ProfileUpdateT ){
    mutate({...data, hobbies: selectedHobbies})
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handelSubmit)} className="py-4 space-y-2">
        <ScrollArea className=" grid grid-cols-1 gap-4 md:gap-8  " >
        <FormField
          control={form.control} defaultValue={data?.firstname ?? ""}
          name="firstname"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="Enter your firstname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control} 
          name="lastname" 
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control} 
          name="bio"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your self" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control} 
          name="bornAt"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 ">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control} 
          name="address"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="where do you currently live" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          { !data?.gender &&    <FormField
          control={form.control} 
          name="gender"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Gender</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Warning : You cannot change gender once you set it
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />}
        <FormField
          control={form.control} 
          name="relationshipStatus"
          render={({ field }) => (
            <FormItem className=" col-span-2 mb-3 md:col-span-1 " >
              <FormLabel>Social status</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your social status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="in a relationship">
                    In a Relationship
                  </SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="engaged">engaged</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <SelectInterests
          selected={selectedHobbies}
          setSelected={setSelectedHobbies}
        />
        </ScrollArea>
        <Button disabled ={isPending} type="submit" className="w-full mt-4 ">
        Save Profile
      </Button>
      </form>

     
    </Form>
  );
};

export default UpdateProfileForm;
