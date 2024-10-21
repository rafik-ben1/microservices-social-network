import { useToast } from "@/hooks/use-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { AppError } from "@/common/types";

const queryClient = new QueryClient();

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();

  queryClient.defaultMutationOptions({
    onError(error) {
      if (error instanceof AppError)
        toast({
          title: error.Status,
          description: error.messages,
          variant: "destructive",
        });
      else
        toast({
          title: "Uh oh! Something went wrong.",
          description: "there was a problem with your request",
          variant: "destructive",
        });
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryProvider;
