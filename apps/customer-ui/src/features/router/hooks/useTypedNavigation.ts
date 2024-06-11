import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TypeRootStackParamList } from '../types/route';

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamList>>();
