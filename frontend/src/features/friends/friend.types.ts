
export interface FriendshipStatus {
    status : "friends" | "requestSent" | "requestReceived" | "none" | "self",
    requestId?: string
}

