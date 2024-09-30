export interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  avatar?: string;
  attributs?: UserAttributes;
}

interface UserAttributes {
  bio: string;
  gender: "MALE" | "FEMALE";
  isSingle: boolean;
  bornAt: Date;
}
