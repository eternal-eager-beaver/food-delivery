import * as SplashScreen from 'expo-splash-screen';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { AuthContextProps, AuthUser } from '../types/auth-context';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<AuthUser>(null);

  useEffect(() => {
    let mounted = true;
    const checkAccessToken = async () => {
      try {
      } catch {
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkAccessToken();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
