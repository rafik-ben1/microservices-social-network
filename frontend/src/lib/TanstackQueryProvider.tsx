import { useToast } from "@/hooks/use-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";


const queryClient = new QueryClient()

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();

  queryClient.setDefaultOptions(
    {
        mutations: {
          onError: (error: Error) => {
              toast({
                description: error.message,
                title : "Uh oh! SOmething went wrong",
                variant: "destructive",
              });
            }
          },
        },
      
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;

