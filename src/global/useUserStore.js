import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StorageManager } from '../managers/StorageManager';

const useUserStore = create(
  persist(
    (set, get) => ({
      userData: null,

      // Set the full user data object (e.g. after login or profile fetch)
      setUserData: (data: any) => set({ userData: data }),

      // ✅ Update specific fields like username or emoji
      updateUserFields: (fields: any) =>
        set(state => ({
          userData: {
            ...state.userData,
            user: {
              ...state.userData?.user,
              ...fields,
            },
          },
        })),
    }),
    {
      name: 'USER_DATA',
      storage: createJSONStorage(() => StorageManager),
    },
  ),
);

export default useUserStore;
