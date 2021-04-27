import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigator} from './BottomTabNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
