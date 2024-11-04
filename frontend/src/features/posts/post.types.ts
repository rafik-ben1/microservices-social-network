export interface Post {
    id : number;
    content : string;
    image? : string;
    likedBy : number;
    author : string;
    isLiked : boolean;
    createdAt : string;
    updatedAt: string;
}