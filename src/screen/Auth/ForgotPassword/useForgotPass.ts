import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showSnackbar } from '../../../global/snackbar';
import { emailValidation } from '../../../global/Validation';
import APIManager from '../../../api/APIManager';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';

export const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const checkValidation = (): string | null => {
  if (!email.trim()) {
    return 'Email is required.';
  } else if (!emailValidation(email)) {
    return 'Please enter a valid email address.';
  } else {
    return null;
  }
};

  const onSendCodePress = async () => {
    const errorMsg = checkValidation();
    if (errorMsg) {
      showSnackbar(errorMsg, true);
      return;
    }

    const params = { email };

    const callback = (responseData: any) => {
      if (responseData.code === StatusCode.INVALID_OR_FAIL) {
        showSnackbar(responseData.message, true);
      } else if (responseData.code === StatusCode.SUCCESS) {
        const userId = responseData.data?.data?.id;
        const email = responseData.data?.data?.email;
        navigation.navigate('Verification', { id: userId, email });
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.FORGOT_PASSWORD,
      callback,
      params,
    });
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  return {
    email,
    onChangeEmail,
    onSendCodePress,
  };
};
