import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthcontextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthcontextProvider>
        <Navbar />
        <Outlet />
      </AuthcontextProvider>
    </QueryClientProvider>
  );
}

export default App;
