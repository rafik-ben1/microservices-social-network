import { User } from "../users/user.types";

export interface Chat {
    id : string;
    isGroupChat : boolean;
    chatName : string;
    participants : User[];
    lastMessage : Message;
}

export interface Message {
    id : string;
    content : string;
    seenBy : string[];
    sentAt : Date;
    chatId : string;
    type : "SYSTEM" | "NORMAL" | "IMAGE"
}