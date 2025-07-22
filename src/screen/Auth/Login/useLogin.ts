// useLogin.ts
import { useState } from 'react';
import { Platform } from 'react-native';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import { StorageKeys, StorageManager } from '../../../managers/StorageManager';
import APIManager from '../../../api/APIManager';
import useUserStore from '../../../global/useUserStore';
import { useNavigation } from '@react-navigation/native';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useLogin = () => {
  const [email, setEmail] = useState('test2@gmail.com');
  const [password, setPassword] = useState('1234');
  const {setUserData} = useUserStore();
  const navigation = useNavigation()

 const validateAndLogin = async () => {
  if (!email.trim()) {
    showSnackbar('Email is required.', true);
    return;
  } else if (!validateEmail(email)) {
    showSnackbar('Please enter a valid email address.', true);
    return;
  } else if (!password.trim()) {
    showSnackbar('Password is required.', true);
    return;
  }

  await callLoginApi();
};

  const callLoginApi = async () => {
    const params: any = {
      device_token: 0,
      device_type: Platform.OS === 'ios' ? 'I' : 'A',
      email,
      password,
    };

    const callback = async (responseData: any) => {

      if (
        responseData.code === StatusCode.INVALID_OR_FAIL ||
        responseData.code === StatusCode.EMAIL_VERIFICATION
      ) {
        showSnackbar(responseData.message, true);
      } else if (responseData.code === StatusCode.SUCCESS) {
        setUserData(responseData.data);
        StorageManager.setItem(StorageKeys.USER_TOKEN, responseData.data.device.token.toString())

         StorageManager.setItem(StorageKeys.IS_USER_LOGGED_IN, true);
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabView' }],
        });
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.LOGIN,
      callback,
      params,
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    validateAndLogin,
  };
};
