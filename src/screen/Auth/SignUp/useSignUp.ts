// hooks/useSignUp.ts

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showSnackbar } from '../../../global/snackbar';
import { emailValidation } from '../../../global/Validation';
import APIManager from '../../../api/APIManager';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';

export const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigation = useNavigation();

  const onCreateAccount = async () => {
    if (!email.trim()) {
      showSnackbar('Email is required.', true);
    } else if (!emailValidation(email)) {
      showSnackbar('Please enter a valid email address.', true);
    } else if (!password.trim()) {
      showSnackbar('Password is required.', true);
    } else if (!confirmPass.trim()) {
      showSnackbar('Please confirm your password.', true);
    } else if (password !== confirmPass) {
      showSnackbar('Passwords do not match.', true);
    } else {
      await checkDuplicateEmail(email, password);
    }
  };

  const checkDuplicateEmail = async (email: string, password: string) => {
    const params: any = { email };

    const callback = (responseData: any) => {
      if (
        responseData.code === StatusCode.SUCCESS &&
        responseData.data === true
      ) {
        navigation.navigate('CreateAccount', { email, password });
      } else {
        showSnackbar(responseData.message || 'Something went wrong.', true);
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.USER.CHECK_DUPLICATE,
      callback,
      params,
    });
  };

  return {
    email,
    password,
    confirmPass,
    setEmail,
    setPassword,
    setConfirmPass,
    onCreateAccount,
  };
};
