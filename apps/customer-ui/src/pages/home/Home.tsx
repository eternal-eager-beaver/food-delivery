import {
  selectUser,
  setUser,
  useAppDispatch,
  useAppSelector,
} from '@food-delivery/store';
import { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserService } from '../../features/user/services/UserDaoService';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const data = await UserService.getCurrentUser();
      dispatch(setUser(data));
    };
    fetchCurrentUser();
  }, [dispatch]);

  return (
    <View>
      {user && (
        <>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </>
      )}
    </View>
  );
};

export default Home;
