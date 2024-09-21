import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "lib/query-client";
import { PropsWithChildren } from "react";

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
}
