import {showMessage} from 'react-native-flash-message';
import {StatusBar} from 'react-native';
import { color, fontFamily, fontSize } from './GConstants';

export const showSnackbar = (
  message: string,
  isError: boolean = false,
): void => {
  showMessage({
    message,
    type: isError ? 'danger' : 'success',
    floating: true,
    icon: 'auto',
    iconProps: {
      tintColor: color.white,
    },
    backgroundColor: isError ? color.black : color.orange,
    duration: 2000,
    titleStyle: {
      color: color.white,
      fontFamily: fontFamily.bold,
      fontSize: fontSize.size16,
    },
    statusBarHeight: StatusBar.currentHeight,
  });
};
