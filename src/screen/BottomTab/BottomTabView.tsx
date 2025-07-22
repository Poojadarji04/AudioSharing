// BottomTabView.tsx

import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color, getHeight } from '../../global/GConstants';
import { images } from '../../assets/images';
import HomeScreen from '../Home/HomeScreen/HomeScreen';
import Setting from '../Home/Setting/Setting';

const dewidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const BottomTabView = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: color.green,
          tabBarInactiveBackgroundColor: color.green,
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
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false, // hide header for HomeScreen
            title: '',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginBottom: getHeight(20),
                  width: dewidth / 5 - 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{ marginTop: getHeight(10) }}
                  source={
                    focused ? images.home_selected : images.home_unselected
                  }
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: true, // ✅ show header for Settin
            title: '',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginBottom: getHeight(20),
                  width: dewidth / 5 - 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{ marginTop: getHeight(10) }}
                  source={
                    focused ? images.user_selected : images.user_unselected
                  }
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabView;
