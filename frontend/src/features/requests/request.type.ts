import { User } from "../users/user.types";

export interface FriendRequest {
    id : number;
    user : User;
    sentAt : Date;
    type : FriendRequestType
}

export type FriendRequestType = "recieved" | "sent"