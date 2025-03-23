import { QueryClientProvider, queryClient } from '@hooks/Query';
import Root from '@pages/Root';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

export default App;
