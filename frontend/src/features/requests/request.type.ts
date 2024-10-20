import { User } from "../users/user.types";

export interface FriendRequest {
    id : number;
    user : User;
    sentAt : string;
    type : FriendRequestType
}

export type FriendRequestType = "recieved" | "sent"
