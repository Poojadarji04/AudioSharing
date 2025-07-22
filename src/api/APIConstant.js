// Base url
export const ApiBaseURL = {
  DEVELOPMENT: 'https://dev.api.lol-bit.com/api/v2',
};

// API end points
const AUTH_PREFIX = '/user/auth/';
const USER_PREFIX = '/user/user/';

export const ApiEndPoints = {
  AUTH: {
    LOGIN: `${AUTH_PREFIX}login`,
    SIGNUP: `${AUTH_PREFIX}signup`,
    FORGOT_PASSWORD: `${AUTH_PREFIX}forgot_password`,
    VERIFY_OTP: `${AUTH_PREFIX}verify_otp`,
    RESEND_OTP: `${AUTH_PREFIX}resend_otp`,
    RESET_PASSWORD: `${AUTH_PREFIX}reset_password`,
    CHANGE_PASSWORD: `${AUTH_PREFIX}change_password`,
    EDIT_PROFILE: `${AUTH_PREFIX}edit_profile`,
    LOGOUT: `${AUTH_PREFIX}logout`,
    DELETE_ACCOUNT: `${AUTH_PREFIX}delete_account`,
  },
  USER: {
    CHECK_DUPLICATE: `${USER_PREFIX}check_duplicate`,
    USER_NOTIFICATION: `${USER_PREFIX}user_notification`,
  },
};

// API methods
export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

// API status code
export const StatusCode = {
  USER_SESSION_EXPIRE: -1,
  SUCCESS: 1,
  INVALID_OR_FAIL: 0,
  NO_DATA_FOUND: 2,
  DELETE_ACCOUNT: 3,
  OTP_VERIFICATION: 4,
  EMAIL_VERIFICATION: 5,
  FORCE_UPDATE: 6,
  SIMPLE_UPDATE: 7,
  ACCOUNT_NOT_EXIST: 11,
};

// API keys
export const ApiKeys = {
  SECRET_KEY: 'MZ3rdpZ7myX7ZoxgUA7qgYes9lA7ee6q',
  IV: 'MZ3rdpZ7myX7Zoxg',
};

// API Header key
export const ApiHeaderKeyValue = {
  API_KEY: 'api-key',
  API_KEY_VALUE:
    'rJjUCifcn5batl8ati3te0OdWNkWo3fBqS7u1K2N6xayzpWloy+8aeK602a9sM7U',
  ACCEPT_LANGUAGE: 'accept-language',
};

export const OTPSendType = {
  SIGNUP: 'signup',
  FORGOT_PASSWORD: 'forgotpassword',
};
