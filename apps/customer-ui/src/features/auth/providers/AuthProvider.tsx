import type { Nullable } from '@food-delivery/utils';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { HttpService } from '../../../common/services/HttpService';
import type { User } from '../../user/types/user';
import { AuthResponse, AuthService } from '../services/AuthDaoService';
import { AuthDto } from '../types/auth-dto';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const initialState = {
    token: '',
    authenticated: false,
  } as const;
  const [authState, setAuthState] = useState<AuthState>(initialState);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('AUTH_TOKEN');

        if (token) {
          HttpService.setAuthToken(token);
          setAuthState({
            token,
            authenticated: true,
          });
        }
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkAccessToken();
  }, []);

  const register = async (dto: AuthDto) => {
    try {
      return await AuthService.register(dto);
    } catch (error) {
      console.log('VB-DEBUG:  register  error:', error);
      throw error;
    }
  };

  const login = async (dto: AuthDto) => {
    try {
      const data = await AuthService.login(dto);
      console.log('VB-DEBUG:  login  data:', data);

      setAuthState({
        token: data.accessToken,
        authenticated: true,
      });

      HttpService.setAuthToken(data.accessToken);
      await SecureStore.setItemAsync('AUTH_TOKEN', data.accessToken);

      return data;
    } catch (error) {
      console.log('VB-DEBUG:  login  error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('AUTH_TOKEN');
    HttpService.removeAuthToken();
    setAuthState(initialState);
  };

  const value: AuthContextProps = {
    authState,
    onRegister: register,
    onLogin: login,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const AuthContext = createContext<AuthContextProps>({});

export type AuthUser = Nullable<User>;

interface AuthContextProps {
  authState?: AuthState;
  onRegister?: (dto: AuthDto) => Promise<AuthResponse>;
  onLogin?: (dto: AuthDto) => Promise<AuthResponse>;
  onLogout?: () => Promise<void>;
}

interface AuthState {
  token: string;
  authenticated: boolean;
}
