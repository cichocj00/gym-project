// import LoadingSpinner from '@/components/LoadingSpinner';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
// import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <Suspense
    //   fallback={
    //     <div className="flex h-screen items-center justify-center">
    //       <LoadingSpinner />
    //     </div>
    //   }
    // >
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>{children}</HelmetProvider>
    </QueryClientProvider>
    // </Suspense>
  );
};

export default AppProvider;
