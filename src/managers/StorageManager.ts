import {MMKV} from 'react-native-mmkv';

// Instantiate MMKV storage
const storage = new MMKV();

// Define our type-safe StorageManager
const StorageManager = {
  getItem: <T = unknown>(key: string): T | null => {
    try {
      const retrievedItem = storage.getString(key);
      return retrievedItem ? (JSON.parse(retrievedItem) as T) : null;
    } catch (error: any) {
      console.log(error.message, 'Error in getting data from MMKV');
      return null;
    }
  },

  setItem: (key: string, value: unknown): void => {
    try {
      storage.set(key, JSON.stringify(value));
    } catch (error: any) {
      console.log(error.message, 'Error in setting data to MMKV');
    }
  },

  removeItem: (key: string): void => {
    try {
      storage.delete(key);
    } catch (error: any) {
      console.log(error.message, 'Error in removing data from MMKV');
    }
  },

  clearAll: (): void => {
    try {
      const allKeys = storage.getAllKeys();
      allKeys.forEach(key => storage.delete(key));
    } catch (error: any) {
      console.log(error.message, 'Error in clearing all data from MMKV');
    }
  },

  clearAllExcept: (preserveKey: string): void => {
    try {
      const allKeys = storage.getAllKeys();

      allKeys.forEach(key => {
        if (key !== preserveKey) {
          storage.delete(key);
        }
      });

      console.log(`✅ Cleared all keys except "${preserveKey}"`);
    } catch (error: any) {
      console.log(
        error.message,
        '❌ Error while clearing data except key from MMKV',
      );
    }
  },
};

// Storage keys - keepin’ it DRY and clean
const StorageKeys = {
  IS_USER_LOGGED_IN: 'IS_USER_LOGGED_IN',
  IS_WELCOME_WATCHED: 'IS_WELCOME_WATCHED',
  USER_THEME_PREFERENCE: 'USER_THEME_PREFERENCE',
  USER_SEL_LANG_CODE: 'USER_SEL_LANG_CODE',
  USER_TOKEN: 'USER_TOKEN'
};

export default storage;
export {StorageManager, StorageKeys};
