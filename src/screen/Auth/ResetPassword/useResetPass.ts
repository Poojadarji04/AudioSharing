import { useState } from 'react';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';
import { useNavigation } from '@react-navigation/native';

/**
 * Custom hook for handling reset password form state and logic
 */
export const useResetPassword = (userId: number) => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateInputs = (): string | null => {
    if (!newPassword.trim()) return 'New password is required.';
    if (newPassword.length < 8) return 'Password must be at least 8 characters long.';
    if (!confirmPassword.trim()) return 'Please confirm your password.';
    if (newPassword !== confirmPassword) return 'Passwords do not match.';
    return null;
  };

  const onResetPress = async () => {
    const errorMsg = validateInputs();
    if (errorMsg) {
      showSnackbar(errorMsg, true);
      return;
    }

    await callResetPasswordApi(userId, newPassword, confirmPassword, navigation);
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    onResetPress,
  };
};

/**
 * API call for resetting password
 */
const callResetPasswordApi = async (
  userId: number,
  newPassword: string,
  confirmPassword: string,
  navigation: any
) => {
  const params: any = {
    user_id: userId,
    new_password: newPassword,
    confirm_password: confirmPassword,
  };

  await APIManager.makeRequest({
    navigation,
    method: MethodType.POST,
    apiEndPoint: ApiEndPoints.AUTH.RESET_PASSWORD,
    params,
    callback: (response: any) => {
      if (response.code === StatusCode.SUCCESS) {
        navigation.navigate('PasswordChange');
      } else {
        showSnackbar(response.message, true);
      }
    },
  });
};
