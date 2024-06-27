import { setUser, useAppDispatch } from '@food-delivery/store';
import { FC, useEffect } from 'react';
import { CategoryList } from '../../features/category/components/CategoryList/CategoryList';
import { Header } from '../../features/router/components/Header';
import { PageLayout } from '../../features/ui/components/PageLayout/PageLayout';
import { UserService } from '../../features/user/services/UserDaoService';
import { Banner } from './Banner';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  // TODO: do it after auth, avoid code duplication
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await UserService.getCurrentUser();
      dispatch(setUser(user));
    };
    fetchCurrentUser();
  }, [dispatch]);

  return (
    <PageLayout>
      <Header />
      <Banner />
      <CategoryList />
    </PageLayout>
  );
};

export default Home;
