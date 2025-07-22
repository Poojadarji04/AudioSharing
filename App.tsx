// App.tsx
import React, { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import MainNavigation from './src/navigators/MainNavigation';
import { StorageKeys, StorageManager } from './src/managers/StorageManager';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string>(''); // <- changed from null to ''

  useEffect(() => {
    const checkLoginStatus = () => {
      try {
        const isLoggedIn = StorageManager.getItem<boolean>(
          StorageKeys.IS_USER_LOGGED_IN,
        );
        setInitialRoute(isLoggedIn ? 'BottomTabView' : 'SignUp');
      } catch (err) {
        console.error('Error checking login:', err);
        setInitialRoute('SignUp');
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (initialRoute !== '') {
      BootSplash.hide();
    }
  }, [initialRoute]);

  if (initialRoute === '') return null;
  return (
    <>
      <MainNavigation initialRoute={initialRoute} />
      <FlashMessage position={'top'} />
    </>
  );
};

export default App;
