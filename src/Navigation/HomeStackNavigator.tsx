import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Profile} from '../Screens';
import {useSelector} from 'react-redux';
import {customLight, customDark, navLight, navDark} from '../Utils/Theme/theme';
import {ThemeContext} from '../Contexts';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Hooko'}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Header = ({scene, previous, navigation}: any) => {
  const {credentials} = useSelector(state => state.user);

  const {isDarkTheme} = React.useContext(ThemeContext);

  const CombinedDefaultTheme = {...customLight, ...navLight};
  const CombinedDarkTheme = {...customDark, ...navDark};

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: isDarkTheme
            ? CombinedDarkTheme.colors.primary
            : CombinedDefaultTheme.colors.primary,
        },
      }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={
            isDarkTheme
              ? CombinedDarkTheme.colors.accent
              : CombinedDefaultTheme.colors.accent
          }
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Icon size={40} icon="apps" />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="home" size={10} />
        }
      />
    </Appbar.Header>
  );
};
