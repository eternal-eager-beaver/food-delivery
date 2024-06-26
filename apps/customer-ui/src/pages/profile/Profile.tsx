import {
  selectUser,
  setUser,
  useAppDispatch,
  useAppSelector,
} from '@food-delivery/store';
import React, { FC, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { Button } from '../../features/ui/components/Button';
import { Headline } from '../../features/ui/components/Headline/Headline';
import { PageLayout } from '../../features/ui/components/PageLayout/PageLayout';
import { UserService } from '../../features/user/services/UserDaoService';

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const { onLogout } = useAuth();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await UserService.getCurrentUser();
      dispatch(setUser(user));
    };
    fetchCurrentUser();
  }, [dispatch]);

  const logout = async () => {
    await onLogout?.();
    dispatch(setUser(null));
  };

  return (
    <PageLayout>
      <Headline isCenter>Profile</Headline>

      <View style={styles.container}>
        <Image source={{ uri: user?.avatarPath }} style={styles.avatar} />
        <Button onPress={() => logout()}>Logout</Button>
      </View>
    </PageLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  button: {
    marginTop: 20,
  },
});
