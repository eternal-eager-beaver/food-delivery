import { Navigation } from '@/features/router/components/Navigation';
import { SafeAreaView, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;
