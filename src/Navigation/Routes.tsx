import React, {useState} from 'react';
import {RootDrawerNavigator} from './RootDrawerNavigator';
import {ThemeContext, UserContext} from '../Contexts';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {customLight, customDark, navLight, navDark} from '../Utils/Theme/theme';
import axios from 'axios';

import AuthStack from './AuthStack';

const CombinedDefaultTheme = {...customLight, ...navLight};
const CombinedDarkTheme = {...customDark, ...navDark};

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }
  function signin(userData: {}) {
    setLoading(true);
    axios
      .post(
        'https://us-central1-cargram-72669.cloudfunctions.net/api/login',
        userData,
      )
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response.data);
        setLoading(false);
      });
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <UserContext.Provider
          value={{
            user,
            signin,
            loading,
            error,
          }}>
          <NavigationContainer theme={theme}>
            {user ? <RootDrawerNavigator /> : <AuthStack />}
          </NavigationContainer>
        </UserContext.Provider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default Routes;
