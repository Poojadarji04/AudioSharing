import { useState } from 'react';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';
import { useNavigation } from '@react-navigation/native';

export const useCreateAccount = (email: string, password: string) => {
  const [userName, setUserName] = useState('');
  const [emoji, setEmoji] = useState('');
  const navigation = useNavigation();

  const onChangeUsername = (val: string) => setUserName(val);
  const onChangeEmoji = (val: string) => setEmoji(val);

  const validateInputs = (): string | null => {
    if (!userName.trim()) {
      return 'Username is required.';
    } else if (!emoji.trim()) {
      return 'Profile emoji is required.';
    }
    return null;
  };

  const callCreateAccountApi = async () => {
    const params: any = {
      username: userName,
      email,
      profile_emoji: emoji,
      login_type: 'S',
      password,
    };

    const callback = (responseData: any) => {
      if (responseData.code === StatusCode.INVALID_OR_FAIL) {
        showSnackbar(responseData.message, true);
      } else if (responseData.code === StatusCode.SUCCESS) {
        navigation.navigate('Login');
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.SIGNUP,
      callback,
      params,
    });
  };

  const handleSubmit = async () => {
    const error = validateInputs();
    if (error) {
      showSnackbar(error, true);
    } else {
      await callCreateAccountApi();
    }
  };

  const onLoginPress = () => navigation.navigate('Login');

  return {
    userName,
    emoji,
    onChangeUsername,
    onChangeEmoji,
    handleSubmit,
    onLoginPress,
  };
};
