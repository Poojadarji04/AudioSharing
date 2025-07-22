
// import { create } from 'zustand';
// import { StorageKeys, StorageManager } from '../managers/StorageManager';

// type User = {
//   id: number;
//   username: string;
//   profile_emoji: string;
//   email: string;
//   login_type: string;
//   otp: string | null;
//   otp_verified: boolean;
//   social_id: string | null;
//   redius: string;
//   location: string | null;
//   created_at: string;
//   updated_at: string;
//   is_active: number;
//   is_delete: number;
//   is_block: number;
//   otp_expire_at: string | null;
//   forget_password_token: string | null;
//   forget_at: string | null;
//   last_login: string | null;
//   email_verified: string | null;
//   login_status: string;
//   forget_expire_at: string | null;
//   post_filter: string | null;
//   zipcode: string | null;
//   latitude: string;
//   longitude: string;
// };

// type Device = {
//   id: number;
//   uuid: string;
//   device_id: string;
//   user_id: number;
//   token: string;
//   device_name: string;
//   device_type: string;
//   device_token: string;
//   os_version: string;
//   app_version: string;
//   ip: string;
//   created_at: string;
//   updated_at: string;
//   is_delete: number;
//   notification_status: string;
//   language: string;
//   model_name: string;
// };

// type UserData = {
//   user: User;
//   device: Device;
// };

// type AuthState = {
//   userData: UserData | null;
//   setUserData: (user: UserData) => void;
//   clearUserData: () => void;
//   hydrate: () => void;
// };

// export const useAuthStore = create<AuthState>((set) => ({
//   userData: null,

//   setUserData: (user) => {
//     StorageManager.setItem(StorageKeys.USER_TOKEN, user); // save to MMKV
//     set({ userData: user }); // save to Zustand store
//   },

//   clearUserData: () => {
//     StorageManager.removeItem(StorageKeys.USER_TOKEN);
//     set({ userData: null });
//   },

//   hydrate: () => {
//     const storedUser = StorageManager.getItem<UserData>(StorageKeys.USER_TOKEN);
//     if (storedUser) {
//       set({ userData: storedUser });
//     }
//   },
// }));
