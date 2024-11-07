import { Skeleton } from "@/components/ui/skeleton";

const CommentSkeleton = () => {
    return (
      <div className="flex flex-col h-full " >
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex flex-col w-full gap-2 mt-1">
          <div className="flex items-center gap-1">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex flex-col items-start gap-1">
            <Skeleton className="h-2 w-[80px]" />
            <Skeleton className="h-1 w-[60px]" />
            </div>
          </div>
          <Skeleton className=" w-full md:w-[80%]  h-11 rounded-sm" />
        </div>
      ))}
      </div>
    );
}

export default CommentSkeleton
