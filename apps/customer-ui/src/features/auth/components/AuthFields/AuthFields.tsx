import { FC } from 'react';
import { Control } from 'react-hook-form';
import { emailRegExp } from '../../../../common/constants/email-regexp';
import { Field } from '../../../ui/components/Field';
import { AuthFormData } from '../../types/auth-form-data';

interface AuthFieldsProps {
  control: Control<AuthFormData>;
}

export const AuthFields: FC<AuthFieldsProps> = ({ control }) => {
  return (
    <>
      <Field<AuthFormData>
        placeholder="Enter email"
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: emailRegExp,
            message: 'Invalid email',
          },
        }}
        keyboardType="email-address"
      />

      <Field<AuthFormData>
        secureTextEntry
        placeholder="Enter password"
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
      />
    </>
  );
};
