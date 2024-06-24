import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../../router/types/route';
import {
  BottomMenuItem,
  MenuItem,
  navigateToFn,
} from '../BottomMenuItem/BottomMenuItem';

export const menuItems: MenuItem[] = [
  {
    icon: 'home',
    path: 'Home',
  },
  {
    icon: 'heart',
    path: 'Favorites',
  },
  {
    icon: 'search',
    path: 'Search',
  },
  {
    icon: 'shopping-bag',
    path: 'Explorer',
  },
  {
    icon: 'user',
    path: 'Profile',
  },
];

interface BottomMenuProps {
  navigateTo: navigateToFn;
  currentPage?: keyof RootStackParamList;
}

export const BottomMenu: FC<BottomMenuProps> = (props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom + 20 }]}>
      {menuItems.map((item) => (
        <BottomMenuItem key={item.path} item={item} {...props} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#bbbbbb',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
});
