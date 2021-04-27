import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {RootDrawerNavigator} from './RootDrawerNavigator';
import AuthStack from './AuthStack';
import {ThemeContext} from '../Contexts';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {customLight, customDark, navLight, navDark} from '../Utils/Theme/theme';
import {useSelector, useDispatch} from 'react-redux';
import {getToken, getUserData} from '../Redux/Actions/UserActions';

const CombinedDefaultTheme = {...customLight, ...navLight};
const CombinedDarkTheme = {...customDark, ...navDark};

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const {token, authenticated} = useSelector(state => state.user);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  const dispatch = useDispatch();

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    dispatch(getToken());
    dispatch(getUserData());
  }, [token]);

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {token ? <RootDrawerNavigator /> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default Routes;
