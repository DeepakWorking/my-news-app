import {
  useQuery,
  useQueries,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export { useQuery, useQueries, useQueryClient, QueryClientProvider };
