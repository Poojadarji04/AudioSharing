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
    vwDeatils: {
        marginTop: getWidth(15),
        marginHorizontal: getWidth(32),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lblTitle: {
        fontFamily: fontFamily.semibold,
        fontSize: fontSize.size14,
        color: color.black
    },
    emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 20,
},

emptyText: {
  fontSize: fontSize.size16,
  color: color.black,
  fontFamily: fontFamily.bold
},

loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

})