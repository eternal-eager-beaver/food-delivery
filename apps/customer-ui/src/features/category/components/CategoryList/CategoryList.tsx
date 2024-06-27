import { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTypedNavigation } from '../../../router/hooks/useTypedNavigation';
import { Headline } from '../../../ui/components/Headline/Headline';
import { Loader } from '../../../ui/components/Loader';

export const getMediaSource = (path: string) => ({
  // uri: SERVER_URL + path
  uri: 'http://localhost:3020' + path,
});

export const CategoryList: FC = () => {
  const isLoading = true;
  const categories: any[] = [];
  const { navigate } = useTypedNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Headline>Categories</Headline>

      <View style={styles.categoriesContainer}>
        {categories?.map((category) => (
          <Pressable
            onPress={() => navigate('Category', { id: category.id })}
            key={category.id}
            style={styles.category}
          >
            <Image
              source={getMediaSource(category.image)}
              style={[styles.image, { resizeMode: 'cover' }]}
            />
            <Text style={styles.categoryText}>{category.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  category: {
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    padding: 20,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 32,
    marginBottom: 8,
    padding: 12,
  },
  categoryText: {
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
});
