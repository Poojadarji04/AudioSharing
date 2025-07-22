import { StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const styles = StyleSheet.create({
    vwMain: {
        flex:1,
        backgroundColor: color.green
    },
    imgSound: {
        marginTop: getWidth(15),
        alignSelf: 'center'
    },
    lblSignUp: {
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size30,
        marginTop: getWidth(18),
        textAlign: 'center'
    },
    vwEmail: {
        marginTop: getWidth(30),
        marginLeft: getWidth(22),
        marginRight: getWidth(22),
        height: getWidth(56),
        backgroundColor: color.white,
        borderRadius: getWidth(10),
        alignItems: 'center',
        flexDirection: 'row',
       
    },
    txtEmail: {
        paddingHorizontal: getWidth(15),
        color: color.black,
        fontFamily: fontFamily.medium,
        fontSize: fontSize.size16,
         flex:1
    },
    imgHidePass: {
        marginRight: getWidth(16)
    },
    vwCreateAcc: {
        marginTop: getWidth(15),
        marginLeft: getWidth(22),
        marginRight: getWidth(22),
        height: getWidth(56),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: color.black,
        borderRadius: getWidth(10)
    },
    lblCreateAcc: {
        color:color.white,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size16,
        
    },
    lblOther: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        textAlign: 'center',
        marginTop: getWidth(38)
    },
    vwOther: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: getWidth(15),
        gap: getWidth(10)
    },
    lblLogin: {
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.7)',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        marginTop: getWidth(20)
    },
    lblLoginIn: {
        color: color.black,
        textDecorationLine: 'underline',
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size14
    },
    lblTerms: {
        color: 'rgba(0, 0, 0, 0.7)',
        textDecorationLine: 'underline',
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size12,
         marginTop: getWidth(15),
        textAlign: 'center',
        marginBottom: getWidth(18),
        textDecorationColor: color.black
    }
})