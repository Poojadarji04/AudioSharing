import { Alert } from 'react-native';
import { useCallback } from 'react';
import { StorageManager, StorageKeys } from '../../../managers/StorageManager';
import APIManager from '../../../api/APIManager';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import { showSnackbar } from '../../../global/snackbar';
import { useNavigation } from '@react-navigation/native';
import useUserStore from '../../../global/useUserStore';

export const useSetting = () => {
    const navigation = useNavigation()
    const {setUserData} = useUserStore();

  const apiLogOut = useCallback(async () => {
    const callback = (responseData: any) => {
      if (responseData) {
        if (
          responseData.code === StatusCode.INVALID_OR_FAIL ||
          responseData.code === StatusCode.NO_DATA_FOUND
        ) {
          showSnackbar(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          StorageManager.removeItem(StorageKeys.IS_USER_LOGGED_IN);
          setUserData(null);
          StorageManager.removeItem(StorageKeys.USER_TOKEN); 

          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      } else {
        showSnackbar('Something went wrong', true);
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.LOGOUT,
      callback: callback,
      params: {},
    });
  }, [navigation]);

  const confirmLogout = useCallback(() => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => apiLogOut(),
        },
      ],
      { cancelable: true },
    );
  }, [apiLogOut]);

  return {
    confirmLogout,
  };
};
