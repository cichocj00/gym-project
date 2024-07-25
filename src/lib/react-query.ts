import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60,
    },
  },
};

export const queryClient = new QueryClient(queryConfig);
