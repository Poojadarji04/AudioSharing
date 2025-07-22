import {
  ApiBaseURL,
  ApiEndPoints,
  ApiHeaderKeyValue,
  ApiKeys,
  MethodType,
  StatusCode,
} from './APIConstant';
import { CommonActions, useNavigation } from '@react-navigation/native';
import CryptoJS from 'crypto-js';
import axios from 'axios';
// const axios = require('axios').default;
// const crypto = require('crypto-js');
const SECRET = CryptoJS.enc.Utf8.parse(ApiKeys.SECRET_KEY);
const ENC_IV = CryptoJS.enc.Utf8.parse(ApiKeys.IV);
import NetInfo from '@react-native-community/netinfo';
import { StorageKeys, StorageManager } from '../managers/StorageManager';

const APIManager = {
  getURL: ApiEndPoints => {
    return ApiBaseURL.DEVELOPMENT + ApiEndPoints;
  },
  getHeader: () => {
    return {
      'api-key': ApiHeaderKeyValue.API_KEY_VALUE,
      'Content-Type': 'text/plain',
      'accept-language':
        StorageManager.getItem(StorageKeys.USER_SEL_LANG_CODE) || 'en',
    };
  },
  // encryptText: strData => {
  //   return CryptoJS.AES.encrypt(JSON.stringify(strData), SECRET, {
  //     iv: ENC_IV,
  //   }).toString();
  // },
  decryptText: strData => {
    return JSON.parse(
      CryptoJS.AES.decrypt(strData, SECRET, { iv: ENC_IV }).toString(
        CryptoJS.enc.Utf8,
      ),
    );
  },
  encryptText: req => {
    try {
      if (typeof req === 'object') {
        req = JSON.stringify(req);
      }
      const encrypted = CryptoJS.AES.encrypt(req, SECRET, {
        iv: ENC_IV,
      }).toString();
      return encrypted;
    } catch (error) {
      console.log('Encryption error:- ', error.message);
      // return { req };
      throw new Error('Failed to encrypt the data');

      // callback({ req });
    }
  },

  makeRequest: async ({
    navigation,
    method,
    apiEndPoint,
    callback,
    showLoader = true,
    params = null,
    isDebug = true,
  }) => {
    const netInfo = await NetInfo.fetch();

    if (!netInfo.isConnected) {
      // showToast(i18n.t('connectInternetMsg'), true);
      callback({ code: 97, message: '' });
      return;
    }

    // if (showLoader) {
    //   toggleLoader(true);
    // }
    const header = APIManager.getHeader();

    let dataToSend = null;

    let userToken = StorageManager.getItem(StorageKeys.USER_TOKEN);
    console.log(userToken, 'without');
    if (userToken !== null) {
      header.token = APIManager.encryptText(userToken);
      console.log(header.token, 'withhh');
      if (params) {
        dataToSend = APIManager.encryptText(params);
      }
      performApiRequest();
    } else {
      if (params) {
        dataToSend = APIManager.encryptText(params);
      }

      // Make API request directly if no token is required
      performApiRequest();
    }

    function performApiRequest() {
      const axiosConfig = {
        headers: header,
      };

      let request;

      if (isDebug) {
        console.log(
          '🚀🚀🚀 <========= API Request Log Start =========> 🚀🚀🚀',
        );
        console.log('Method & URL : ', method, APIManager.getURL(apiEndPoint));
        console.log('Original Data : ', params);
        console.log('Encrypted Data : ', dataToSend);
        console.log('Header : ', axiosConfig);
      }

      if (method === MethodType.GET) {
        request = axios.get(APIManager.getURL(apiEndPoint), axiosConfig);
      } else if (method === MethodType.POST) {
        request = axios.post(
          APIManager.getURL(apiEndPoint),
          dataToSend,
          axiosConfig,
        );
      }

      request
        .then(response => {
          handleResponse(response);
        })
        .catch(error => {
          handleError(error);
        });
    }

    function handleResponse(response) {
      console.log('.... sucess');
      if (response.status === 200) {
        const responseData = APIManager.decryptText(response.data);

        if (isDebug) {
          console.log('Original Response : ', response.data);
          console.log('Decrypted Response : ', JSON.stringify(responseData));
          console.log(
            '🚀🚀🚀 <========= API Request Log End =========> 🚀🚀🚀',
          );
        }

        // if (showLoader) {
        //   toggleLoader(false);
        // }

        if (responseData.code === StatusCode.USER_SESSION_EXPIRE) {
          handleUnauthorizedError();
        } else {
          callback(responseData);
        }
      } else if (response.status === 401) {
        handleUnauthorizedError();

        // hide loader
        // if (showLoader) {
        //   toggleLoader(false);
        // }
      } else {
        callback(null, { message: 'Unknown error' });
        // hide loader
        // if (showLoader) {
        //   toggleLoader(false);
        // }
      }
    }

    function handleError(error) {
      console.log('.... eeerroor', error);
      if (error.response && error.response.status === 401) {
        handleUnauthorizedError(error);

        // hide loader
        // if (showLoader) {
        //   toggleLoader(false);
        // }
      }

      // hide loader
      // if (showLoader) {
      //   toggleLoader(false);
      // }
      console.log(`Error while calling ${apiEndPoint} API:`, error);
      callback(null, { message: error.message });
    }

    function handleUnauthorizedError() {
      // StorageManager.clearAll();
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: 'SignUp' }],
      //   }),
      // );
      callback(null, { message: 'Session expired' });
    }
  },
};

export default APIManager;
