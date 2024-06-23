import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/route';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();
