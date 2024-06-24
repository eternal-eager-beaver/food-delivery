import { Feather } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { RootStackParamList } from '../../../router/types/route';

export type FeatherIconNames = keyof typeof Feather.glyphMap;

export interface MenuItem {
  icon: FeatherIconNames;
  path: keyof RootStackParamList;
}

interface BottomMenuItemProps {
  item: MenuItem;
  navigateTo: navigateToFn;
  currentPage?: keyof RootStackParamList;
}

export type navigateToFn = (page: keyof RootStackParamList) => void;

export const BottomMenuItem: FC<BottomMenuItemProps> = ({
  item,
  navigateTo,
  currentPage,
}) => {
  const isActive = currentPage === item.path;

  return (
    <Pressable onPress={() => navigateTo(item.path)} style={styles.item}>
      <Feather
        name={item.icon}
        size={26}
        color={isActive ? '#47AA52' : '#374151'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    width: '20%',
  },
});
