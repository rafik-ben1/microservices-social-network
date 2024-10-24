import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { CardContent } from "@/components/ui/card";

const UserProfileSkeleton = () => {
  const navigate = useNavigate();
  return (
    <>
      <CardHeader className="flex flex-row items-center gap-4">
        <Button
          onClick={() => navigate(-1)}
          className="md:hidden"
          variant="ghost"
          size="icon"
        >
          {" "}
          <ArrowLeft />{" "}
        </Button>
        <Skeleton className="w-20 h-20 rounded-full " />
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="w-28 p-4 mb-2 " />
              <Skeleton className="w-16 p-2 " />
            </div>
            <Skeleton className="w-20 h-8" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
           <Skeleton className=" w-full h-10 " />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-10"  />
            </div>
            <Skeleton className="p-3 "/>
            <Skeleton className="p-3"/>
            <Skeleton className="p-3" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Skeleton className="w-12 h-8 rounded-sm" />
            <Skeleton className="w-12 h-8 rounded-sm "/>
            <Skeleton className="w-12 h-8 rounded-sm "/>
            <Skeleton className="w-12 h-8 rounded-sm "/>
            <Skeleton className="w-12 h-8 rounded-sm "/>
          </div>
      </CardContent>
    </>
  );
};

export default UserProfileSkeleton;
