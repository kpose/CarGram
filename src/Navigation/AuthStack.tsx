import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signup, Signin, Home, Welcome} from '../Screens';
import {AuthStackParamList} from './NavigationTypes';
import {RootDrawerNavigator} from './RootDrawerNavigator';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="RootDrawerNavigator"
        component={RootDrawerNavigator}
      />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default AuthStack;
