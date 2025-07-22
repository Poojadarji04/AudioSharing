import { Platform, StyleSheet } from "react-native";
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
    vwProfile: {
        height: getWidth(53),
        backgroundColor: color.white,
        marginLeft: getWidth(16),
        marginRight: getWidth(16),
        borderRadius: getWidth(8),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getWidth(20)
    },
    imgEdit: {
        marginLeft: getWidth(10),
        marginRight: getWidth(15)
    },
    lblEditProfile: {
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14,
        flex: 1
    },
    imgRightArrow: {
        marginRight: getWidth(16)
    },
    btnLogOut: {
        marginTop: getWidth(12),
        marginLeft: getWidth(16),
        marginRight: getWidth(16),
        height: getWidth(49),
        backgroundColor: color.black,
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lblLogOut: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size16
    }
})