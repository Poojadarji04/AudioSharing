import { StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
    vwMain: {
        flex:1,
        backgroundColor: color.green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lblTitle: {
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size30,
        marginTop: getWidth(36)
    },
    lblDesc: {
        marginTop: getWidth(13),
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size16,
        paddingHorizontal: getWidth(40),
        textAlign: 'center'
    },
    vwLogin: {
        marginTop: getWidth(38),
        height: getWidth(56),
        backgroundColor: color.black,
        borderRadius: getWidth(11),
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    lblLogin: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size16
    }
})