import React from 'react';
import {RootDrawerNavigator} from './RootDrawerNavigator';
import AuthStack from './AuthStack';
import {ThemeContext} from '../Contexts';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {customLight, customDark, navLight, navDark} from '../Utils/Theme/theme';
import {useSelector} from 'react-redux';

const CombinedDefaultTheme = {...customLight, ...navLight};
const CombinedDarkTheme = {...customDark, ...navDark};

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const {authenticated} = useSelector(state => state.user);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {authenticated ? <RootDrawerNavigator /> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default Routes;
