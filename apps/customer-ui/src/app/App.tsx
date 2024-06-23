import { AuthProvider } from '@/features/auth/providers/AuthProvider';
import { Navigation } from '@/features/router/components/Navigation';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AuthProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </AuthProvider>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Toast />
    </>
  );
};

export default App;
