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
}


export type ReltationshipStatus = "married" | "single" | "in a relationship" | "married" | "divorced"


