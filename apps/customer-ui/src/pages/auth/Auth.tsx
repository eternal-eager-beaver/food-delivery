import { AuthFields } from '@/features/auth/components/AuthFields/AuthFields';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { AuthFormData } from '@/features/auth/types/auth-form-data';
import { useTypedNavigation } from '@/features/router/hooks/useTypedNavigation';
import { Button } from '@/features/ui/components/Button';
import { Loader } from '@/features/ui/components/Loader';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

const Auth: FC = () => {
  const { navigate } = useTypedNavigation();
  const { onLogin, onRegister } = useAuth();
  const isLoading = false;

  const [isRegistration, setIsRegistration] = useState(true);

  const currentStateName = isRegistration ? 'Sign up' : 'Login';

  const toggleState = () => {
    setIsRegistration(!isRegistration);
  };

  const { control, handleSubmit, reset } = useForm<AuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    try {
      if (isRegistration) {
        const response = onRegister && (await onRegister(data));
        console.log('VB-DEBUG: registration response:', response);
        onLogin && (await onLogin(data));
      } else {
        onLogin && (await onLogin(data));
      }
      navigate('Home');
    } catch (error) {
      console.log(
        'VB-DEBUG:  constonSubmit:SubmitHandler<AuthFormData>=  error:',
        error
      );
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{currentStateName}</Text>
          <AuthFields control={control} />
          <Button onPress={handleSubmit(onSubmit)}>{currentStateName}</Button>

          <Text style={styles.subtitle}>
            {isRegistration
              ? 'Already have an account?'
              : "Don't have an account?"}
            <Text> </Text>
            <Text style={styles.linkText} onPress={toggleState}>
              {isRegistration ? 'Login' : 'Sign up'}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
