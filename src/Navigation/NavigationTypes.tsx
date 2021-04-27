import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AuthStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  Signup: undefined;
  Home: undefined;
  RootDrawerNavigator: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type AuthStackNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;
type HomeStackNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type AuthStackRouteProp = RouteProp<AuthStackParamList, 'Welcome'>;
type HomeStackRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export type AuthStackProps = {
  navigation: AuthStackNavigationProp;
  route: AuthStackRouteProp;
};

export type HomeStackProps = {
  navigation: HomeStackNavigationProp;
  route: HomeStackRouteProp;
};
