import { store } from '@food-delivery/store';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { AuthProvider } from '../features/auth/providers/AuthProvider';
import { Navigation } from '../features/router/components/Navigation';

export const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Provider store={store}>
          <AuthProvider>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </AuthProvider>
        </Provider>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Toast />
    </>
  );
};

export default App;
