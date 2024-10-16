import { Skeleton } from "@/components/ui/skeleton"

export default function UserRowSkeleton({count = 3} : {count?: number}) {
  return ( 
    Array.from({length: count}).map((_,i)=> (
        <div key={i} className="flex items-center space-x-4 p-4 border-b border-gray-200">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
    ))
  )
}