import { StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
    vwMain: {
        flex:1,
        backgroundColor: color.green
    },
     headerButton: {
             marginHorizontal: getWidth(10),
         },
        headerTitle: {
            fontSize: fontSize.size16,
            fontFamily: fontFamily.bold,
            color: color.black,
            textAlign: 'center'
        },
    lblTittle: {
        marginTop: getWidth(50),
        paddingHorizontal: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size28
    },
    lblDesc: {
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        marginTop: getWidth(6),
        paddingHorizontal: getWidth(20)
    },
    lblNewPass: {
        color: color.black,
        fontFamily: fontFamily.medium,
        fontSize: fontSize.size14,
        marginTop: getWidth(38),
        paddingHorizontal: getWidth(20)
    },
    vwResetPass: {
        marginTop: getWidth(5),
        marginLeft: getWidth(20),
        borderColor: 'rgba(216, 218, 220, 1)',
        borderWidth: getWidth(1),
        height: getWidth(56),
        borderRadius: getWidth(10),
        marginRight: getWidth(20),
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtResetPass: {
    paddingHorizontal: getWidth(15),
    color: color.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.size14
    },
    btnChangePass: {
        backgroundColor: color.black,
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    lblChangePass: {
        color: color.green,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size14
    }

    })