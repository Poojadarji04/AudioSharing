import { Platform, StyleSheet } from 'react-native';
import { color, fontFamily, fontSize, getWidth } from '../../../global/GConstants';

export const styles = StyleSheet.create({
    vwMain: {
        flex:1,
        backgroundColor: color.green
    },
     headerButton: {
             marginHorizontal: getWidth(10),
              marginTop: Platform.OS == 'android' ? getWidth(40) : 0,
         },
        headerTitle: {
            fontSize: fontSize.size16,
            fontFamily: fontFamily.bold,
            color: color.black,
            textAlign: 'center',
             marginTop: Platform.OS == 'android' ? getWidth(40) : 0,
        },
    lblTitle: {
        marginTop: getWidth(50),
        color: color.black,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.size28,
        marginLeft: getWidth(20),
        marginRight: getWidth(20)
    },
    lblDesc: {
        marginTop: getWidth(10),
        marginLeft:getWidth(20),
        marginRight: getWidth(20),
        color: color.black,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.size12
    },
    btnNo: {
        marginTop: getWidth(43),
        backgroundColor: color.black,
        height: getWidth(56),
        borderRadius: getWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: getWidth(20),
        marginRight: getWidth(20)
    },
    lblNo: {
        color: color.green,
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14
    }
})