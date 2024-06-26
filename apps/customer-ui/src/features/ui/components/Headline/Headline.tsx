import { FC, PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

interface HeadlineProps {
  isCenter?: boolean;
  className?: string;
}

export const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  children,
  isCenter = false,
  ...props
}) => {
  return (
    <Text style={[styles.base, isCenter && styles.center]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  center: {
    textAlign: 'center',
  },
});
