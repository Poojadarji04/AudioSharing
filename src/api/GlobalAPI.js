import {CommonActions} from '@react-navigation/native';
import useCountryCodeStore from '../store/useCountryCodeStore';
import useUserStore from '../store/useUserStore';
import {showToast} from '../utils/Alert';
import {
  AsyncStorageKeys,
  AsyncStorageManager,
} from '../utils/AsyncStorageManager';
import {ApiEndPoints, MethodType, StatusCode} from './APIConstant';
import APIManager from './APIManager';
import {ScreenNames} from '../utils/AppConstant';
import AWSUploadManager from '../utils/AwsUploadManager';
import {AwsFolder} from '../utils/AwsFolder';
import {resetAndNavigate} from '../utils/NavigationUtils';

const GlobalAPI = {
  /*
     ================ API CALL ================
      This api is used to get app content[s3 keys, cms pages].
       
       ### End point
       customer/auth/sendotp
       
       ### Method
       GET
       
       ### Required parameters
       nil
       
       ### Optional parameters
       nil
       =======================================
    */
  apiToGetAppContents: async (navigation, responseCallback) => {
    const callback = (responseData, error) => {
      if (error) {
        console.log('Error in API:', error.message);
        // Handle error
        return;
      }

      if (responseData) {
        if (responseData.code === StatusCode.INVALID_OR_FAIL) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          responseCallback(responseData);
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.APP_CONTENTS,
      callback: callback,
      showLoader: false,
      isDebug: true,
    });
  },

  /*
   ================ API CALL ================
    This api is used to get country list.
     
     ### End point
     admin/auth/country_list
     
     ### Method
     POST
     
     ### Required parameters
     nil
     
     ### Optional parameters
     nil
     =======================================
  */
  apiToGetAllCountries: async (navigation, responseCallback) => {
    const callback = (responseData, error) => {
      if (error) {
        console.log('Error in API:', error.message);
        // Handle error
        return;
      }

      if (responseData) {
        if (responseData.code === StatusCode.INVALID_OR_FAIL) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          responseCallback(responseData);
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.COUNTRY_LIST,
      callback: callback,
      showLoader: false,
      isDebug: false,
    });
  },

  /*
   ================ API CALL ================
    This api is used to send OTP.
     
     ### End point
     /application/auth/send_otp
     
     ### Method
     GET
     
     ### Required parameters
     nil
     
     ### Optional parameters
     nil
     =======================================
  */
  apiToSendOTP: async ({navigation, params, responseCallback}) => {
    const apiParams = {
      ...params,
      country_code: useCountryCodeStore.getState().countryCode.country_code,
      country_id: useCountryCodeStore.getState().countryCode.id,
    };

    const callback = (responseData, error) => {
      if (error) {
        console.log('Error in API:', error.message);
        // Handle error
        return;
      }

      if (responseData) {
        if (
          responseData.code === StatusCode.INVALID_OR_FAIL ||
          responseData.code === StatusCode.NO_DATA_FOUND
        ) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          responseCallback(responseData);
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.SEND_OTP,
      callback: callback,
      showLoader: true,
      params: apiParams,
    });
  },

  /*
   ================ API CALL ================
    This api is used to logout user.
     
     ### End point
     application/auth/logout
     
     ### Method
     POST
     
     ### Required parameters
     nil
     
     ### Optional parameters
     nil
     =======================================
  */
  apiToLogout: async ({navigation}) => {
    const callback = (responseData, error) => {
      if (responseData) {
        if (responseData.code === StatusCode.INVALID_OR_FAIL) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          AsyncStorageManager.removeItem(AsyncStorageKeys.IS_USER_LOGGED_IN);
          AsyncStorageManager.removeItem(AsyncStorageKeys.USER_TOKEN);
          AsyncStorageManager.removeItem(
            AsyncStorageKeys.USER_THEME_PREFERENCE,
          );
          AsyncStorageManager.removeItem(AsyncStorageKeys.USER_DATA);

          // navigation.dispatch(
          //   CommonActions.reset({
          //     index: 0,
          //     routes: [{name: ScreenNames.WELCOME_SCREEN}],
          //   }),
          // );

          resetAndNavigate(ScreenNames.WELCOME_SCREEN);
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.LOGOUT,
      callback: callback,
    });
  },

  /*
   ================ API CALL ================
    This api is used to delete user account.
     
     ### End point
     application/auth/delete_profile
     
     ### Method
     POST
     
     ### Required parameters
     nil
     
     ### Optional parameters
     reson
     =======================================
  */
  apiToDeleteAccount: async ({navigation, reason = ''}) => {
    var params = {};

    if (reason !== '') {
      params['reson'] = reason;
    }

    const deleteAccCallBack = responseData => {
      if (responseData) {
        if (responseData.code === StatusCode.INVALID_OR_FAIL) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          AsyncStorageManager.removeItem(AsyncStorageKeys.IS_USER_LOGGED_IN);
          AsyncStorageManager.removeItem(AsyncStorageKeys.USER_TOKEN);
          AsyncStorageManager.removeItem(
            AsyncStorageKeys.USER_THEME_PREFERENCE,
          );
          AsyncStorageManager.removeItem(AsyncStorageKeys.USER_DATA);

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: ScreenNames.WELCOME_SCREEN}],
            }),
          );
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.DELETE_ACCOUNT,
      callback: deleteAccCallBack,
      params: params,
    });
  },

  /*
   ================ API CALL ================
    This api is used to complete user profile.
     
     ### End point
     application/auth/complate_profile
     
     ### Method
     POST
     
     ### Required parameters
     first_name, last_name, user_name, profile_type, introduction, profile_image
     
     ### Optional parameters
     nil
     =======================================
  */
  apiForCompleteProfile: async ({
    navigation,
    first_name = '',
    last_name = '',
    user_name = '',
    profile_type = '',
    introduction = '',
    profile_image = '',
    is_complate_profile = '',
    screenNames = ScreenNames.EDIT_PROFILE_SCREEN,
    responseCallback,
  }) => {
    var params = {};

    if (first_name !== '') {
      params['first_name'] = first_name;
      params['last_name'] = last_name;
      params['user_name'] = user_name;
    }

    if (introduction !== '') {
      params['introduction'] = introduction;
    }

    if (profile_type !== '') {
      params['profile_type'] = profile_type;
    }

    if (is_complate_profile !== '') {
      params['is_complate_profile'] = 1;
    }

    if (
      screenNames === ScreenNames.ADD_PROFILE_PIC_SCREEN &&
      profile_image === ''
    ) {
      params['is_skip'] = true;
    }

    if (profile_image !== '') {
      console.log('🚀 ~ profile_image:', profile_image);
      await AWSUploadManager.uploadImage(profile_image, AwsFolder.PROFILE_IMAGE)
        .then(imageUrl => {
          console.info('Image uploaded successfully. URL:', imageUrl);
          params['profile_image'] = imageUrl.split('/').pop();

          if (screenNames === ScreenNames.ADD_PROFILE_PIC_SCREEN) {
            params['is_skip'] = false;
          }
        })
        .catch(error => {
          console.log('Error uploading image:', error);
          return;
        });
    }

    const callback = (responseData, error) => {
      if (responseData) {
        if (responseData.code === StatusCode.INVALID_OR_FAIL) {
          showToast(responseData.message, true);
        } else if (responseData.code === StatusCode.SUCCESS) {
          responseCallback(responseData);
        }
      }
    };

    await APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.AUTH.COMPLETE_PROFILE,
      callback: callback,
      params: params,
    });
  },

  /*
   ================ API CALL ================
    This api is used to get user details.
     
     ### End point
     application/home/get_user_details
     
     ### Method
     POST
     
     ### Required parameters
     user_id
     
     ### Optional parameters
     nil
     =======================================
  */

  apiToGetUserDetails: ({
    navigation,
    userId,
    successCallback,
    isUserExistCallback,
    showLoader = true,
  }) => {
    var params = {
      user_id: userId,
    };

    const callback = response => {
      if (response.code === StatusCode.SUCCESS) {
        successCallback(response.data);
      } else if (
        response.code === StatusCode.INVALID_OR_FAIL ||
        response.code === StatusCode.NO_DATA_FOUND
      ) {
        showToast(response.message, true);
      }
    };

    APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.HOME.GET_USER_DETAILS,
      callback: callback,
      params: params,
      isDebug: true,
      showLoader: showLoader,
    });
  },

  /*
   ================ API CALL ================
    This api is used to get follow/un-follow user.
     
     ### End point
     application/home/follow_unfollow
     
     ### Method
     POST
     
     ### Required parameters
     follow_id
     
     ### Optional parameters
     nil
     =======================================
  */
  apiToFollowUnfollow: ({
    navigation,
    followId,
    accountType,
    successCallback,
  }) => {
    var params = {
      follow_id: followId,
      accountType: accountType,
    };

    const callback = response => {
      if (response.code === StatusCode.SUCCESS) {
        successCallback(response);
      } else if (response.code === StatusCode.INVALID_OR_FAIL) {
        showToast(response.message, true);
      }
    };

    APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.HOME.FOLLOW_UNFOLLOW,
      callback: callback,
      params: params,
      showLoader: false,
    });
  },

  /*
   ================ API CALL ================
    This api is used to block-unblock user.
     
     ### End point
     application/home/block_user
     
     ### Method
     POST
     
     ### Required parameters
     userId
     
     ### Optional parameters
     nil
     =======================================
  */
  apiToBlockUnblockUser: ({navigation, userId, successCallback}) => {
    var params = {
      block_to_id: userId,
    };

    var callback = response => {
      if (response.code === StatusCode.INVALID_OR_FAIL) {
        showToast(response.message, true);
      } else if (response.code === StatusCode.SUCCESS) {
        successCallback();
      }
    };

    APIManager.makeRequest({
      navigation: navigation,
      method: MethodType.POST,
      apiEndPoint: ApiEndPoints.HOME.BLOCK_USER,
      params: params,
      callback: callback,
    });
  },
};

export default GlobalAPI;
