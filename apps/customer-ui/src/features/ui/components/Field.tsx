import React from 'react';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

export interface IField<T extends FieldValues>
  extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  ...props
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              error ? styles.borderRed : styles.borderGrey,
            ]}
          >
            <TextInput
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value ?? ''}
              style={styles.input}
              placeholderTextColor="#6A6A6A"
              {...props}
            />
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    ></Controller>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
    paddingBottom: 16,
    paddingTop: 10,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  borderRed: {
    borderColor: 'red',
    borderWidth: 1,
  },
  borderGrey: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  input: {
    color: 'black',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
