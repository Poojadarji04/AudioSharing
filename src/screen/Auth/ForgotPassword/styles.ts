import { Platform, StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
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
    lblForgotPass: {
        marginTop: getWidth(50),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size30
    },
    lblDesc: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size16,
        lineHeight: 23,
        marginTop: getWidth(13),
        marginLeft: getWidth(20),
        marginRight: getWidth(20)
    },
    lblForgot: {
        marginTop: getWidth(145),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size30,
        color: color.black
      },
    lblEmail: {
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14
      },
      vwEmail: {
        borderColor: 'rgba(216, 218, 220, 1)',
        borderWidth: getWidth(1),
        height: getWidth(56),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        borderRadius: getWidth(10),
        marginTop: getWidth(6),
        alignItems: 'center',
        flexDirection: 'row',
       
      },
      txtEmail: {
        paddingHorizontal: getWidth(16),
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
         flex: 1
      },
      vwSendCode: {
        backgroundColor: color.black,
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
      },
      lblSendCode: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
      },
      lblPass: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        textAlign: 'center',
        marginBottom: getWidth(30)
      },
      lblLogin: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size14,
        textDecorationLine: 'underline'
      }
})