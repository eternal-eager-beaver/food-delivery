import { useTypedNavigation } from '@/features/router/hooks/useTypedNavigation';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

const Auth: FC = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View>
      <Text>Auth</Text>
      <Pressable
        onPress={() => {
          navigate('Home');
        }}
      >
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default Auth;
