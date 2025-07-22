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
      lblSignUp: {
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
        flexDirection: 'row'
      },
      txtUserName: {
        paddingHorizontal: getWidth(16),
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14
      },
      vwGet: {
        backgroundColor: color.black,
        marginTop: getWidth(80),
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: getWidth(20),
        marginRight: getWidth(20)
      },
      lblGet: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
      },
      lblLogin: {
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        marginTop: getWidth(20),
        marginBottom: getWidth(40)
    },
    lblLoginIn: {
        color: color.black,
        textDecorationLine: 'underline',
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size14,
        textAlign: 'center',
    },
})