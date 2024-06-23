import { AuthFields } from '@/features/auth/components/AuthFields/AuthFields';
import { AuthFormData } from '@/features/auth/types/auth-form-data';
import { useTypedNavigation } from '@/features/router/hooks/useTypedNavigation';
import { Button } from '@/features/ui/components/Button';
import { Loader } from '@/features/ui/components/Loader';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

type State = 'registration' | 'login';

const Auth: FC = () => {
  const { navigate } = useTypedNavigation();
  const isLoader = false;

  const [state, setState] = useState<State>('registration');

  const toggleState = () => {
    const newState = state === 'registration' ? 'login' : 'registration';
    setState(newState);
  };

  const { control, handleSubmit, reset } = useForm<AuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          {state === 'registration' ? 'Sign up' : 'Login'}
        </Text>
        {isLoader ? (
          <Loader />
        ) : (
          <>
            <AuthFields control={control} />

            <Button onPress={handleSubmit(onSubmit)}>
              {state === 'registration' ? 'Sign up' : 'Login'}
            </Button>

            <Text style={styles.subtitle}>
              {state === 'registration'
                ? 'Already have an account?'
                : "Don't have an account?"}
              <Text> </Text>
              <Text style={styles.linkText} onPress={toggleState}>
                {state === 'registration' ? 'Login' : 'Sign up'}
              </Text>
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  innerContainer: {
    width: '75%',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 32,
  },
  subtitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    marginTop: 24,
  },
  linkText: {
    color: '#47AA52',
  },
});

export default Auth;
