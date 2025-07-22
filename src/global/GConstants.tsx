import {
  Alert,
  BackHandler,
  Dimensions,
  Linking,
  LogBox,
  Platform,
} from 'react-native';

export const appName = translation('appName');

// export const getTitle = (title: any) => {
//   var start = moment(title);
//   var end = moment().format('D MMM YYYY');
//   let days = moment.duration(start.diff(end)).asDays();
//   if (days < -1) {
//     return moment(title).format('D MMM YYYY');
//   } else if (days == -1) {
//     return 'Yesterday';
//   } else {
//     return 'Today';
//   }
// };

export const NotificationTag = {
  admin: 'admin',
};

export const NotificationChannel = {
  chanelID: 'General',
  channelName: 'All notification',
};

export const fontFamily = {
  black: 'Metropolis-Black',
  blackitalic: 'Metropolis-BlackItalic',
  bold: 'Metropolis-Bold',
  bolditalic: 'Metropolis-BoldItalic',
  extrabold: 'Metropolis-ExtraBold',
  extrabolditalic: 'Metropolis-ExtraBoldItalic',
  extralight: 'Metropolis-ExtraLight',
  extralightitalic: 'Metropolis-ExtraLightItalic',
  italic: 'Metropolis-Italic',
  light: 'Metropolis-Light',
  lightitalic: 'Metropolis-LightItalic',
  medium: 'Metropolis-Medium',
  mediumitalic: 'Metropolis-MediumItalic',
  regular: 'Metropolis-Regular',
  semibold: 'Metropolis-SemiBold',
  semiobolditalic: 'Metropolis-SemiBoldItalic',
};
// import {
//   checkMultiple,
//   openSettings,
//   PERMISSIONS,
//   requestMultiple,
//   RESULTS,
// } from "react-native-permissions";
import translation from '../localization/translation';
import { useState } from 'react';
// import {
//   checkMultiple,
//   openSettings,
//   PERMISSIONS,
//   requestMultiple,
//   RESULTS,
// } from 'react-native-permissions';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import moment from "moment";
import { CommonActions } from '@react-navigation/native';
// import moment from 'moment';
// import {showMessage} from 'react-native-flash-message';
// import {
//   PERMISSIONS,
//   RESULTS,
//   checkMultiple,
//   openSettings,
//   requestMultiple,
// } from 'react-native-permissions';
// import AsyncStorage from "@react-native-async-storage/async-storage";
LogBox.ignoreAllLogs();
// import moment from "moment";

export const color = {
  white: '#FFFFFF',
  black: '#000000',
  blueTheme: '#141420',
  greenTheme: '#1DCC98',
  red: '#EE4949',
  purple: '#7A7DF3',
  yellow: '#EE9849',
  orange: '#EE9849',
  green: 'rgba(76, 230, 101, 1)',
};

export function getWidth(size: any) {
  return (size / 375) * screenSize.width;
}
export function getHeight(size: any) {
  return (size / 812) * screenSize.height;
}

// Global size

export const screenSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const fontSize = {
  size8: getWidth(8),
  size9: getWidth(9),
  size10: getWidth(10),
  size11: getWidth(11),
  size12: getWidth(12),
  size13: getWidth(13),
  size14: getWidth(14),
  size15: getWidth(15),
  size16: getWidth(16),
  size17: getWidth(17),
  size18: getWidth(18),
  size19: getWidth(19),
  size20: getWidth(20),
  size21: getWidth(21),
  size22: getWidth(22),
  size23: getWidth(23),
  size24: getWidth(24),
  size25: getWidth(25),
  size26: getWidth(26),
  size27: getWidth(27),
  size28: getWidth(28),
  size36: getWidth(36),
  size42: getWidth(42),
  size34: getWidth(34),
  size50: getWidth(50),
  size30: getWidth(30),
  size38: getWidth(38),
};
export const Opacity = 0.6;

// }

// export const showFlashSuccess = (message: string) => {
//   showMessage({
//     message: message,
//     backgroundColor: color.green,
//     color: color.white,
//     icon: 'success',
//     style: {
//       // height: getHeight(100),
//       paddingTop: getHeight(40),
//     },
//     titleStyle: {
//       fontFamily: fontFamily.bold,
//       fontSize: fontSize.size16,
//     },
//   });
// };

export const showError = (message: string) => {
  return Alert.alert('', message, [{ text: 'Ok' }]);
};

export const showErrorQR = (message: string, onPress: any) => {
  return Alert.alert(
    appName,
    message,
    [
      {
        text: 'Ok',
        onPress: onPress,
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

export const exitapp = (message: string, onPress: any, props: any) => {
  return Alert.alert(
    appName,
    message,
    [
      {
        text: 'Exit',

        onPress: () => {
          BackHandler.exitApp();
        },
        style: 'cancel',
      },
      {
        text: 'No',

        onPress: onPress,
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

// export const showError = (message: string) => {
//   showMessage({
//     message: message,
//     backgroundColor: color.blue,
//     color: color.white,
//     icon: 'warning',
//     duration: 10000,
//     style: {
//       // height: getHeight(100),
//       paddingTop: getHeight(40),
//     },
//     titleStyle: {
//       fontFamily: fontFamily.bold,
//       fontSize: fontSize.size16,
//     },
//   });
// };

// export function checkPermission(permission: any, message: string) {
//   return new Promise(callback => {
//     checkMultiple([permission]).then((status: any) => {
//       console.log('check multiple===>', status);

//       if (
//         status[permission] == RESULTS.DENIED ||
//         status[permission] == RESULTS.UNAVAILABLE
//       ) {
//         requestMultiple([permission]).then(status => {
//           console.log('req multiple ===>', status);

//           let data = Object.values(status);
//           if (data.length > 0) {
//             callback(data[0] == 'granted');
//           } else {
//             callback(false);
//           }

//           if (data == 'blocked' && Platform.OS === 'android') {
//             Alert.alert(
//               appName,
//               message,
//               [
//                 {
//                   text: 'dont Allow',
//                   onPress: () => console.log('Cancel Pressed'),
//                   style: 'cancel',
//                 },
//                 {
//                   text: 'allow',
//                   onPress: () => {
//                     openSettings();
//                     console.log('CAMERA SETTING +++++========> > . > > ');
//                   },
//                 },
//               ],
//               {cancelable: false},
//             );
//           }
//         });
//       } else if (status[permission] == RESULTS.BLOCKED) {
//         Alert.alert(
//           appName,
//           message,
//           [
//             {
//               text: 'dont Allow',
//               onPress: () => console.log('Cancel Pressed'),
//               style: 'cancel',
//             },
//             {text: 'allow', onPress: () => openSettings()},
//           ],
//           {cancelable: false},
//         );
//         callback(false);
//       } else {
//         callback(true);
//       }
//     });
//   });
// }

// export async function setData(key: any, value: any) {
//   try {
//     await AsyncStorage.setItem(key, value);
//   } catch (error) {
//     console.log('[Async Storage] Error in set data : ', error);
//   }
// }

export const messages = {
  cameraPermission: translation('cameraPermission'),
  galleryPermission: translation('galleryPermission'),
  locationPermission: translation('locationPermission'),
  docpermission: 'Allow “App” to use your Document?',
};

// export const cameraPermission = Platform.select({
//   ios: PERMISSIONS.IOS.CAMERA,
//   android: PERMISSIONS.ANDROID.CAMERA,
// });

// export const docpermission = Platform.select({
//   ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
//   android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
// });

// export const locationPermission = Platform.select({
//   ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//   android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
// });

// export const galleryPermission = Platform.select({
//   ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
//   android:
//     Platform.Version > 32
//       ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
//       : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
// });

export const asyncStorageKey = {
  isWalkthroughVisisted: 'isWalkthroughVisisted',
  isUserLoggedIn: 'isUserLoggedIn',
  userData: 'userData',
  currentletlong: 'currentletlong',
  iskyc: 'iskyc',
  addlocation: 'addlocation',
  locationon: 'locationon',
};

// export async function getData(key: any, callback: any) {
//   try {
//     var value = await AsyncStorage.getItem(key);
//     callback(value);
//   } catch (error) {
//     console.log('[Async Storage] Error in get data : ', error);
//   }
// }

export const openCaller = (phone: any) => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};
export const loginType = {
  google: 'G',
  apple: 'A',
  simple: 'S',
};

let loaderRef: any;

// Back function
export const back = (navigation: any) => {
  navigation.goBack();
};

export const GlobalVar = {
  accessKey: 'AKIASKVOOMATHNZ3OG6O',
  secreatAccessKey: '6QanCDH1NqORVLwLyNNEdwATQ3+rr7gTFjIX4Gmd',
  region: 'ap-south-1',
  bucketName: 'fixcera',
  url: 'https://fixcera.s3.ap-south-1.amazonaws.com/',
  permissionAccess: 'public-read-write',
};

export const datasec = [
  { label: '00', value: '00' },
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
  { label: '31', value: '31' },
  { label: '32', value: '32' },
  { label: '33', value: '33' },
  { label: '34', value: '34' },
  { label: '35', value: '35' },
  { label: '36', value: '36' },
  { label: '37', value: '37' },

  { label: '38', value: '38' },
  { label: '39', value: '39' },
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
  { label: '46', value: '46' },
  { label: '47', value: '47' },
  { label: '48', value: '48' },
  { label: '49', value: '49' },
  { label: '50', value: '50' },
  { label: '51', value: '51' },
  { label: '52', value: '52' },
  { label: '53', value: '53' },
  { label: '54', value: '54' },
  { label: '55', value: '55' },
  { label: '56', value: '56' },
  { label: '57', value: '57' },
  { label: '58', value: '58' },
  { label: '59', value: '59' },
];

// S3_BUCKET_NAME = sakhi
// S3_BUCKET_REGION = ap-south-1
// S3_BUCKET_ROOT = https://sakhi.s3.ap-south-1.amazonaws.com/
// S3_BUCKET_KEY = AKIAYOT2XJHA7WR75FMN
// S3_BUCKET_SECRET = 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
