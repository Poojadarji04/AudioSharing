import * as RNLocalize from "react-native-localize";
import en from "./en";
import { I18n } from "i18n-js";

const localizedString = new I18n();
const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  localizedString.locale = locales[0].languageTag;
  localizedString.enableFallback = true;
}
localizedString.translations = {
  en,
};

export const langauge = {
  english: "en",
};
export default (text: string) => {
  return localizedString.t(text);
};
