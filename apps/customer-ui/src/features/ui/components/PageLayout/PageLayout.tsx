import { FC, PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface PageLayoutProps {
  className?: string;
}

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  children,
  ...props
}) => {
  return (
    <View style={styles.container} {...props}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 12,
    paddingHorizontal: 16, // 4 * 4 for px-4 equivalent
  },
});
