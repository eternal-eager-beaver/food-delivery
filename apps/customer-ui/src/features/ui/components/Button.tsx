import React, { FC, PropsWithChildren } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type IButton = PressableProps;

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  ...props
}) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 14,
    backgroundColor: '#47AA52',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
});
