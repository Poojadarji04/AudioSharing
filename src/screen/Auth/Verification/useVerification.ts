import { ApiEndPoints, MethodType, StatusCode } from "../../../api/APIConstant";
import APIManager from "../../../api/APIManager";
import { showSnackbar } from "../../../global/snackbar";

/**
 * Validate OTP and send to verification API
 */
export const validateAndVerifyOtp = async (
  otp: string[],
  userId: number,
  navigation: any
) => {
  const otpCode = otp.join('');

  if (otpCode.length !== 4) {
    showSnackbar('Please enter a valid 4-digit OTP', true);
  } else {
    await callVerifyOtpApi(otpCode, userId, navigation);
  }
};

/**
 * Call verify OTP API
 */
const callVerifyOtpApi = async (
  otpCode: string,
  userId: number,
  navigation: any
) => {
  const params = {
    otp: otpCode,
    user_id: userId,
  };

  const callback = (responseData: any) => {
    if (responseData.code === StatusCode.INVALID_OR_FAIL) {
      showSnackbar(responseData.message, true);
    } else if (responseData.code === StatusCode.SUCCESS) {
      navigation.navigate('ResetPassword', { id: userId });
    }
  };

  await APIManager.makeRequest({
    navigation,
    method: MethodType.POST,
    apiEndPoint: ApiEndPoints.AUTH.VERIFY_OTP,
    callback,
    params,
  });
};

/**
 * Call resend OTP API
 */
export const resendOtpApi = async (userId: number, navigation: any) => {
  const params = {
    user_id: userId,
  };

  const callback = (responseData: any) => {
    if (responseData.code === StatusCode.INVALID_OR_FAIL) {
      showSnackbar(responseData.message, true);
    } else if (responseData.code === StatusCode.SUCCESS) {
      showSnackbar('OTP resent successfully', false);
    }
  };

  await APIManager.makeRequest({
    navigation,
    method: MethodType.POST,
    apiEndPoint: ApiEndPoints.AUTH.RESEND_OTP,
    callback,
    params,
  });
};
