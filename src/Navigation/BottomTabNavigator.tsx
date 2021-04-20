import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {Notification, Messages} from '../Screens';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  //const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const isFocused = useIsFocused();

  let icon = 'feather';

  /* switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  } */

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused} // show FAB only when this screen is focused
          icon="feather"
          style={{
            position: 'absolute',
            //bottom: safeArea.bottom + 65,
            bottom: 100,
            right: 16,
          }}
          color="white"
        />
      </Portal>
    </React.Fragment>
  );
};
