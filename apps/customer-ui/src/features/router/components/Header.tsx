import { Ionicons } from '@expo/vector-icons';
import { selectUser, useAppSelector } from '@food-delivery/store';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTypedNavigation } from '../hooks/useTypedNavigation';

export const Header: FC = () => {
  const { navigate } = useTypedNavigation();
  const user = useAppSelector(selectUser);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {user?.name}!</Text>

      <Pressable onPress={() => navigate('Cart')}>
        <Ionicons name="cart" size={26} color="#374151" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontWeight: '500',
    fontSize: 24,
  },
});
