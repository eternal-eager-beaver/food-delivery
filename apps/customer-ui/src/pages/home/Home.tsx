import { Nullable } from '@/common/types/nullable';
import { UserService } from '@/features/user/services/UserDaoService';
import { User } from '@prisma/client/user';
import { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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
      <Text>Home</Text>
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
