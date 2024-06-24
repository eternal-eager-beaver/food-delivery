import { store } from '@food-delivery/store';
import { User } from '@prisma/client/user';
import { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Nullable } from '../../common/types/nullable';
import { UserService } from '../../features/user/services/UserDaoService';

const Home: FC = () => {
  const [user, setUser] = useState<Nullable<User>>(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const data = await UserService.getCurrentUser();
      setUser(data);
    };
    fetchCurrentUser();
  }, []);
  return (
    <View>
      <Text>Home - {store()}</Text>
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
