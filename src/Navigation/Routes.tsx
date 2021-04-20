import React from 'react';
import {RootDrawerNavigator} from './RootDrawerNavigator';
import {ThemeContext} from '../Contexts/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {customLight, customDark, navLight, navDark} from '../Utils/Theme/theme';
import AuthStack from './AuthStack';

const CombinedDefaultTheme = {...customLight, ...navLight};
const CombinedDarkTheme = {...customDark, ...navDark};

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <RootDrawerNavigator />
          {/*  <AuthStack /> */}
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default Routes;
