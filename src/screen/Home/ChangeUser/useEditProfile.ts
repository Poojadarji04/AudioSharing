import { useEffect, useState } from 'react';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';
import useUserStore from '../../../global/useUserStore';
import { useNavigation } from '@react-navigation/native';

export const useEditProfile = (userData: any) => {
  const [userName, setUserName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { updateUserFields } = useUserStore();

  useEffect(() => {
    if (userData?.user) {
      setUserName(userData.user.username ?? '');
      setEmoji(userData.user.profile_emoji ?? '');
    }
  }, [userData]);

  const validateAndSubmit = async () => {
    if (!userName.trim()) {
      showSnackbar('Username is required.', true);
      return;
    }

    if (!emoji.trim()) {
      showSnackbar('Profile emoji is required.', true);
      return;
    }

    await callEditProfileApi();
  };

  const callEditProfileApi = async () => {
    const params: any = {
      username: userName,
      profile_emoji: emoji,
    };

    const callback = (responseData: any) => {

      if (responseData.code === StatusCode.INVALID_OR_FAIL) {
        showSnackbar(responseData.message, true);
      } else if (responseData.code === StatusCode.SUCCESS) {
        showSnackbar('Profile updated successfully!', false);

        // ✅ Update persisted global user data
        updateUserFields({
          username: userName,
          profile_emoji: emoji,
        });

        navigation.pop();
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.EDIT_PROFILE,
      callback,
      params,
    });
  };

  return {
    userName,
    setUserName,
    emoji,
    setEmoji,
    loading,
    validateAndSubmit,
  };
};
