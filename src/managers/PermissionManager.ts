import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export enum PermissionStatus {
  GRANTED = 'GRANTED',
  DENIED = 'DENIED',
  BLOCKED = 'BLOCKED',
  UNAVAILABLE = 'UNAVAILABLE',
}

export enum PermissionType {
  CAMERA = 'CAMERA',
  LOCATION = 'LOCATION',
  MICROPHONE = 'MICROPHONE',
  GALLERY = 'GALLERY',
  STORAGE = 'STORAGE',
  CONTACTS = 'CONTACTS',
}

export type PermissionMap = {
  [key in PermissionType]: any;
};

export const PERMISSIONS_LIST: PermissionMap = {
  [PermissionType.CAMERA]: Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  }),
  [PermissionType.LOCATION]: Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  }),
  [PermissionType.MICROPHONE]: Platform.select({
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    ios: PERMISSIONS.IOS.MICROPHONE,
  }),
  [PermissionType.GALLERY]: Platform.select({
    android: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  }),
  [PermissionType.STORAGE]: Platform.select({
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
  }),
  [PermissionType.CONTACTS]: Platform.select({
    android: PERMISSIONS.ANDROID.READ_CONTACTS,
    ios: PERMISSIONS.IOS.CONTACTS,
  }),
};

export const requestPermission = async (
  type: PermissionType,
): Promise<boolean> => {
  try {
    const permission = PERMISSIONS_LIST[type];
    console.log('🚀 ~ permission:', permission);

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(permission);
      console.log('🚀 ~ granted:', granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const result = await request(permission);
      console.log('🚀 ~ result:', result);
      return result === RESULTS.GRANTED;
    }
  } catch (error) {
    console.error('Permission Error:', error);
    return false;
  }
};

export const handlePermissionDenied = (type: PermissionType) => {
  const permissionName =
    {
      [PermissionType.CAMERA]: 'Camera',
      [PermissionType.GALLERY]: 'Storage',
      [PermissionType.LOCATION]: 'Location',
      // Add other mappings as needed
    }[type] || 'this';

  Alert.alert(
    'Permission Denied',
    `This app needs ${permissionName} permission. Please enable it in settings.`,
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Go to Settings', onPress: openSettings},
    ],
  );
};

export async function checkPermission(type: PermissionType): Promise<boolean> {
  const granted = await requestPermission(type);
  if (!granted) handlePermissionDenied(type);
  return granted;
}
