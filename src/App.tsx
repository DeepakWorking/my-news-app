import ErrorBoundary from '@components/errorBoundary';
import { QueryClientProvider, queryClient } from '@hooks/Query';
import Root from '@pages/Root';

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
