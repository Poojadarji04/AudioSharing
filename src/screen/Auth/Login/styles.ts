import { Platform, StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
    vwMain: {
        flex:1,
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
    lblLogin: {
        marginTop: getWidth(50),
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
      imgHidePass: {
        marginRight: getWidth(16)
    },
    lblForgotPass: {
        marginTop: getWidth(15),
        textAlign: 'right',
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        paddingHorizontal: getWidth(20)
    },
    vwLogin: {
        marginTop: getWidth(38),
        marginRight: getWidth(20),
        marginLeft: getWidth(20),
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.black
    },
    lblLogIn: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
      },
})