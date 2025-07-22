import { useState } from 'react';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';
import { useNavigation } from '@react-navigation/native';
import useUserStore from '../../../global/useUserStore';

export const useChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const { userData } = useUserStore();

  const validateInput = (): boolean => {
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      showSnackbar('Password must be at least 8 characters.', true);
      return false;
    }
    if (newPassword !== confirmPassword) {
      showSnackbar('Passwords do not match.', true);
      return false;
    }
    return true;
  };

  const onChangePassword = async () => {
    if (!validateInput()) return;

    const params: any = {
      new_password: newPassword,
      confirm_password: confirmPassword,
      login_user_id: userData?.user?.id,
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.CHANGE_PASSWORD,
      params,
      callback: (responseData: any) => {
        if (!responseData) return;

        if (
          responseData.code === StatusCode.INVALID_OR_FAIL ||
          responseData.code === StatusCode.NO_DATA_FOUND
        ) {
          showSnackbar(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          showSnackbar('Password changed successfully!');
          navigation.goBack();
        }
      },
    });
  };

  return {
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    onChangePassword,
  };
};
