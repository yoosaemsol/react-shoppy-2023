import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthcontextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthcontextProvider>
      <Navbar />
      <Outlet />
    </AuthcontextProvider>
  );
}

export default App;
