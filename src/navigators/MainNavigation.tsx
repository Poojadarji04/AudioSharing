// MainNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/Auth/Login/Login';
import SignUp from '../screen/Auth/SignUp/SignUp';
import CreateAccount from '../screen/Auth/CreateAccount/CreateAccount';
import ForgotPassword from '../screen/Auth/ForgotPassword/ForgotPassword';
import Verification from '../screen/Auth/Verification/Verification';
import ResetPassword from '../screen/Auth/ResetPassword/ResetPassword';
import PasswordChange from '../screen/Auth/PasswordChange/PasswordChange';
import BottomTabView from '../screen/BottomTab/BottomTabView';
import HomeScreen from '../screen/Home/HomeScreen/HomeScreen';
import Setting from '../screen/Home/Setting/Setting';
import ChangeUser from '../screen/Home/ChangeUser/ChangeUser';
import DeleteProfile from '../screen/Home/DeleteProfile/DeleteProfile';
import Notification from '../screen/Home/Notification/Notification';

import { color } from '../global/GConstants';
import ChangePass from '../screen/Home/ChangePassword/ChangePass';
import ContactUs from '../screen/Home/ContactUs/ContactUs';

const Stack = createNativeStackNavigator();

interface MainNavigationProps {
  initialRoute: string;
}

const MainNavigation = ({ initialRoute }: MainNavigationProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerStyle: {
            backgroundColor: color.green,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
          },
        }}
      >
        {/* Auth Screens */}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PasswordChange"
          component={PasswordChange}
          options={{ headerShown: false }}
        />

        {/* Main App Screens */}
        <Stack.Screen
          name="BottomTabView"
          component={BottomTabView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: true, title: 'Settings' }}
        />
        <Stack.Screen
          name="ChangeUser"
          component={ChangeUser}
          options={{ headerShown: true, title: 'Edit Profile' }}
        />
        <Stack.Screen
          name="DeleteProfile"
          component={DeleteProfile}
          options={{ headerShown: true, title: 'Delete Profile' }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
