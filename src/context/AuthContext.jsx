import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, adminUser } from '../api/firebase';

const AuthContext = createContext();

export function AuthcontextProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  const user = authState.user;
  const loading = authState.loading;

  useEffect(() => {
    const stopListen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        adminUser(user).then((user) => setAuthState({ user, loading: false }));
      } else {
        setAuthState({ user: null, loading: false });
      }
    });

    return () => stopListen();
  }, [adminUser, getAuth]);

  return (
    <AuthContext.Provider
      value={{ loading, user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
