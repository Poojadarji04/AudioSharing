import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';

/**
 * Hook to fetch and manage user notifications
 */
export const useNotifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState<any[]>([]);

  const fetchNotifications = async () => {
    const params: any = {};

    const callback = (responseData: any) => {
      if (!responseData) {
        showSnackbar('Unexpected error occurred.', true);
        setNotifications([]);
        return;
      }

      if (
        responseData.code === StatusCode.INVALID_OR_FAIL ||
        responseData.code === StatusCode.NO_DATA_FOUND
      ) {
        showSnackbar(responseData.message, true);
        setNotifications([]);
      } else if (responseData.code === StatusCode.SUCCESS) {
        setNotifications(responseData.data || []);
      }
    };

    await APIManager.makeRequest({
      navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.USER.USER_NOTIFICATION,
      callback,
      params,
    });
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
    fetchNotifications,
  };
};
