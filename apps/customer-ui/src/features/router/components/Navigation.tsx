import { useAuth } from '@/features/auth/hooks/useAuth';
import { BottomMenu } from '@/features/ui/components/BottomMenu/BottomMenu';
import Auth from '@/pages/auth/Auth';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import { routes } from '../constants/routes';
import { RootStackParamList } from '../types/route';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  const { authState } = useAuth();
  const [currentPage, setCurrentPage] = useState(
    undefined as keyof RootStackParamList | undefined
  );

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentPage(
      navRef.getCurrentRoute()?.name as keyof RootStackParamList | undefined
    );

    const listener = navRef.addListener('state', () =>
      setCurrentPage(
        navRef.getCurrentRoute()?.name as keyof RootStackParamList | undefined
      )
    );

    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#fff',
            },
          }}
        >
          {authState?.authenticated ? (
            routes.map((route) => <Stack.Screen key={route.name} {...route} />)
          ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {authState?.authenticated && currentPage && (
        <BottomMenu currentPage={currentPage} navigateTo={navRef.navigate} />
      )}
    </>
  );
};
