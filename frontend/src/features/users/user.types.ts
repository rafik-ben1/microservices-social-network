export interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  avatar?: string;
  bio?: string;
  gender?: "male" | "female";
  reltationshipStatus?: ReltationshipStatus ;
  bornAt?: Date;
  address? : string;
}


export type ReltationshipStatus = "married" | "single" | "in a relationship" | "married" | "divorced"


