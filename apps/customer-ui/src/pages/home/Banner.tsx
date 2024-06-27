import { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTypedNavigation } from '../../features/router/hooks/useTypedNavigation';

export const Banner: FC = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Fast delivery - delicious choice every time!
        </Text>

        <Pressable onPress={() => navigate('Explorer')} style={styles.button}>
          <Text style={styles.buttonText}>Order now</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/banner.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#47AA52',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    width: 198,
    color: 'white',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 8,
    borderRadius: 9999,
    width: 112,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    width: 112,
    height: 112,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
