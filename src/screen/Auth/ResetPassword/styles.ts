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
    lblResetPass: {
        marginTop: getWidth(50),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size30
    },
    lblDesc: {
        marginTop: getWidth(13),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size16
    },
    lblNewPass: {
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
    },
    vwPass: {
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
    txtNewPass: {
        paddingHorizontal: getWidth(15),
        flex: 1,
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14
    },
    imgPass: {
        marginRight: getWidth(16)
    },
    vwResetPass: {
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        height: getWidth(56),
        backgroundColor: color.black,
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lblResetPassword: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size15
    },
    lblAccount: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        textAlign: 'center',
        marginBottom: getWidth(30)
    },
    lblLogin: {
        fontFamily: fontFamily.bold,
        textDecorationLine: 'underline',
        color: color.black
    }
})