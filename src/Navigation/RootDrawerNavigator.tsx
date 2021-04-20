import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigator} from './BottomTabNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="HomeStackNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
