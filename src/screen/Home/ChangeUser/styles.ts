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
                 marginTop: Platform.OS == 'android' ? getWidth(50) : 0,
                 textAlign: 'center'
              },
    lblTitle: {
        marginTop: getWidth(50),
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size28,
        marginRight: getWidth(20),
        marginLeft: getWidth(20)
    },
    lblUserName: {
        marginTop: getWidth(38),
        marginLeft: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size14
    },
    vwName: {
        borderWidth: getWidth(1),
        borderColor: 'rgba(216, 218, 220, 1)',
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        marginTop: getWidth(6),
        flexDirection: 'row'
    },
    txtName: {
        paddingHorizontal: getWidth(15),
        color: color.black,
        fontFamily: fontFamily.medium,
        fontSize: fontSize.size14
    },
    btnUpdate: {
        marginTop: getWidth(100),
        marginLeft: getWidth(20),
        marginRight: getWidth(20),
        height: getWidth(56),
        backgroundColor:color.black,
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    lblUpdate: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size16
    }
})