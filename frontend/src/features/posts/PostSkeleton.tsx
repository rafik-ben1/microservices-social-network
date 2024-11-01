import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return Array.from({ length: 3 }).map((_, i) => (
    <div key={i} className="flex flex-col gap-2 mt-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col items-start gap-3">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-2 w-[80px]" />
        </div>
      </div>
      <Skeleton className=" w-full md:w-[80%]  h-56" />
    </div>
  ));
};

export default PostSkeleton;
