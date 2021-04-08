import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AuthStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  Signup: undefined;
  Home: undefined;
};

type AuthStackNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'Welcome'>;

export type AuthStackProps = {
  navigation: AuthStackNavigationProp;
  route: AuthStackRouteProp;
};
