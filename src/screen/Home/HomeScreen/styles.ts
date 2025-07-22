import { Platform, StyleSheet } from "react-native";
import { color, fontFamily, fontSize, getWidth } from "../../../global/GConstants";

export const styles = StyleSheet.create({
  vwMain: {
    flex: 1,
    backgroundColor: color.green,
  },
  vwTab: {
    marginTop: Platform.OS === 'android' ? getWidth(60) : getWidth(80),
    backgroundColor: color.white,
    marginHorizontal: getWidth(23),
    flexDirection: 'row',
    borderRadius: getWidth(9),
    overflow: 'hidden',
    height: getWidth(40),
     padding:4
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getWidth(9),
   
  },
  selectedTab: {
    backgroundColor: color.green,
  },
  tabText: {
    color: color.black,
    fontSize: fontSize.size12,
    fontFamily: fontFamily.semibold
  },
  selectedText: {
    color: color.black,
    fontSize: fontSize.size12,
    fontFamily: fontFamily.bold
  },
  imgProfile: {
    marginTop: getWidth(50),
    alignSelf: 'center'
  },
  lblName: {
    textAlign: 'center',
    color: color.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.size24
  },
  lblMin: {
    color: color.black,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    fontSize: fontSize.size12
  },
  imgPlay: {
    marginTop: getWidth(80),
    alignSelf: 'center'
  },
  lblPlay: {
    textAlign: 'center',
    marginTop: getWidth(30),
    color: color.black,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.size20
  },
  vwCount: {
    marginTop: getWidth(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(60)
  },
  lblCountUp: {
    color: color.black,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.size30
  },
  vwThumbs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(60)
  }
});
