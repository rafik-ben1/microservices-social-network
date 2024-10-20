
export interface FriendshipStatus {
    status : "friends" | "requestSent" | "requestRecieved" | "none" | "self",
    requestId?: number
}

