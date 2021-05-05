import React, {useRef} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {Notification, Messages} from '../Screens';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {Modalize} from 'react-native-modalize';
import {ThemeContext} from '../Contexts';
import {NewPostModal} from '../Modals';

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  customDark,
  customLight,
} from '../Utils/Theme/theme';

import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  //const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const isFocused = useIsFocused();
  const editProfileRef = useRef<Modalize>(null);
  const {isDarkTheme} = React.useContext(ThemeContext);

  let icon = 'feather';

  /* switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  } */

  const closeModal = () => {
    editProfileRef.current?.close();
  };

  return (
    <React.Fragment>
      <Modalize
        ref={editProfileRef}
        withHandle={false}
        //modalHeight={heightPercentageToDP(65)}
        modalStyle={{
          backgroundColor: isDarkTheme
            ? CombinedDarkTheme.colors.background
            : CombinedDefaultTheme.colors.background,
        }}
        /*  HeaderComponent={modalHeader} */
      >
        <NewPostModal
          close={closeModal}
          background={
            isDarkTheme
              ? CombinedDarkTheme.colors.background
              : CombinedDefaultTheme.colors.background
          }
        />
      </Modalize>

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
          visible={isFocused}
          onPress={() => editProfileRef.current?.open()}
          icon="circle-edit-outline"
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
