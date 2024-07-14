/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Platform, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Tabs/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, SettingsIcon, UserIcon, WalletIcon} from './assets/icons';
import colors from 'tailwindcss/colors';
import {Profile} from './src/screens/Tabs/Profile';
import {Wallet} from './src/screens/Tabs/Wallet';
import {Settings} from './src/screens/Tabs/Settings';

const Stack = createNativeStackNavigator();

const RouteConfigs = {
  Home: {
    name: 'Home',
    component: Home,
  },
  Profile: {
    name: 'Profile',
    component: Profile,
  },
  Wallet: {
    name: 'Wallet',
    component: Wallet,
  },
  Settings: {
    name: 'Settings',
    component: Settings,
  },
};

const StackNavigatorConfig = {
  headerMode: 'screen',
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
    swipeEnabled: false,
  },
  screenOptions: {
    tabBarActiveTintColor: '#000',
    style: {
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      {...TabNavigatorConfig}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#121212',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: Platform.OS === 'ios' ? 60 : 45,
          paddingBottom: Platform.OS === 'ios' ? 25 : 5,
          paddingRight: 10,
          borderWidth: 0,
          borderColor: 'transparent',
        },
      }}>
      <Tab.Screen
        {...RouteConfigs.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 19,
                flexDirection: 'row',
                height: 19,
              }}>
              <UserIcon
                width={19}
                height={19}
                color={focused ? colors.blue[500] : colors.white}
              />
            </View>
          ),
          title: 'Profile',
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        {...RouteConfigs.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 19,
                flexDirection: 'row',
                height: 19,
              }}>
              <HomeIcon
                width={19}
                height={19}
                color={focused ? colors.blue[500] : colors.white}
              />
            </View>
          ),
          title: 'Home',
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        {...RouteConfigs.Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 19,
                flexDirection: 'row',
                height: 19,
              }}>
              <WalletIcon
                width={19}
                height={19}
                color={focused ? colors.blue[500] : colors.white}
              />
            </View>
          ),
          title: 'Wallet',
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        {...RouteConfigs.Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 19,
                flexDirection: 'row',
                height: 19,
              }}>
              <SettingsIcon
                width={19}
                height={19}
                color={focused ? colors.blue[500] : colors.white}
              />
            </View>
          ),
          title: 'Settings',
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{...StackNavigatorConfig}}>
        <Stack.Screen name="Root" options={{headerShown: false}}>
          {() => <TabNav />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
