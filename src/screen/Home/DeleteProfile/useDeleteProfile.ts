import { useNavigation } from '@react-navigation/native';
import { showSnackbar } from '../../../global/snackbar';
import { StorageKeys, StorageManager } from '../../../managers/StorageManager';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';

/**
 * Custom hook to handle profile deletion logic
 */
export const useDeleteProfile = () => {
  const navigation = useNavigation();

  const deleteProfile = async () => {
    const callback = (responseData: any) => {
      if (!responseData) {
        showSnackbar('Something went wrong', true);
        return;
      }

      if (
        responseData.code === StatusCode.INVALID_OR_FAIL ||
        responseData.code === StatusCode.NO_DATA_FOUND
      ) {
        showSnackbar(responseData.message, true);
      } else if (responseData.code === StatusCode.SUCCESS) {
        StorageManager.removeItem(StorageKeys.IS_USER_LOGGED_IN);
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignUp' }],
        });
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.DELETE_ACCOUNT,
      params: {},
      callback,
    });
  };

  return {
    deleteProfile,
  };
};
