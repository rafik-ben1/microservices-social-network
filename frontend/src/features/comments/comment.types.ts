import { User } from "../users/user.types";

export interface Comment {
    id : number;
    content : string;
    author : User;
    createdAt : string;
    updatedAt : string;
}