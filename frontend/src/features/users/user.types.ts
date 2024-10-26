import { z } from "zod";


export interface User {
  id: string;
  username: string;
  firstname: string;
  email: string
  lastname: string;
  avatar?: string;
}

export interface UserProfile extends User {
  bio?: string;
  gender?: "male" | "female";
  reltationshipStatus?: ReltationshipStatus ;
  bornAt?: Date;
  address? : string;
  hobbies? : string[];
}


export type ReltationshipStatus = "married" | "engaged" | "single" | "in a relationship" |  "divorced"



export const ProfileFormSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "Firstname is required" })
    .max(50, { message: "Firstname should be 50 characters or less" }),
  lastname: z
    .string()
    .min(1, { message: "Lastname is required" })
    .max(50, { message: "Lastname should be 50 characters or less" }),
    gender : z.enum(["male" , "female"]).optional(),
  bio: z
    .string()
    .max(300, { message: "Bio should be 300 characters or less" })
    .optional(),
  bornAt: z
    .date()
    .refine((date) => date < new Date() && date > new Date("1900-01-01"), {
      message: "Please enter a valid date of birth",
    }).optional(),
  address: z
    .string()
    .max(100, { message: "Address should be 100 characters or less" }).optional(),
  relationshipStatus: z.enum([
    "single",
    "in a relationship",
    "married",
    "divorced",
    "engaged"
  ]).optional(),
  hobbies: z.array(z.string()).optional(),

});


export type ProfileUpdateT = z.infer<typeof ProfileFormSchema>


