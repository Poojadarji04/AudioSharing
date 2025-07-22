import { StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
    vwMain: {
        flex: 1
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
})