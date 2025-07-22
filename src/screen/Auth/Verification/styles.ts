import { Platform, StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create( {
    vwMain: {
        flex: 1,
        backgroundColor: color.green
    },
     headerButton: {
                marginHorizontal: getWidth(10),
                marginTop: Platform.OS == 'android' ? getWidth(50) : 0,
              },
              headerTitle: {
                fontSize: fontSize.size16,
                fontFamily: fontFamily.bold,
                color: color.black,
                 marginTop: Platform.OS == 'android' ? getWidth(30) : 0,
                 textAlign: 'center'
              },
    lblTitle: {
        marginTop: getWidth(50),
        color:color.black,
        fontFamily: fontFamily.bold,
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        fontSize: fontSize.size30
    },
    lblDesc: {
        marginTop: getWidth(13),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size15
    },
    lblEmail: {
        fontFamily: fontFamily.semibold,
    },
     otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getWidth(40),
  },
  otpInput: {
    width: getWidth(72),
    height: getWidth(72),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: getWidth(15),
    textAlign: 'center',
    fontSize: fontSize.size18,
    fontFamily: fontFamily.bold,
    color: color.black,
    marginHorizontal: getWidth(8),
  },
  activeOtpInput: {
    borderColor: color.black,
    borderWidth: 2,
  },
  filledOtpInput: {
    color: color.black,
    borderColor: 'rgba(216, 218, 220, 1)',
  },
  vwVeify: {
    marginTop: getWidth(38),
    marginLeft: getWidth(20),
    marginRight: getWidth(20),
    height: getWidth(56),
    backgroundColor: color.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getWidth(11)
  },
  lblVerify: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
      },
      lblCode: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size16,
        marginTop: getWidth(38),
        textAlign: 'center'
      }   
})