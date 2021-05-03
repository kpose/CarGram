import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {RootDrawerNavigator} from './RootDrawerNavigator';
import AuthStack from './AuthStack';
import {ThemeContext} from '../Contexts';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedDefaultTheme} from '../Utils/Theme/theme';
import {useSelector, useDispatch} from 'react-redux';
import {getToken, getUserData, logoutUser} from '../Redux/Actions/UserActions';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {SET_UNAUTHENTICATED, SET_AUTHENTICATED} from '../Redux/Constants';
import axios from 'axios';

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const {token, authenticated} = useSelector(state => state.user);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  const dispatch = useDispatch();

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    const ju = async () => {
      const toke = await AsyncStorage.getItem('FBIdToken');
      if (toke) {
        const decodeToke = jwtDecode(toke);
        if (decodeToke.exp * 1000 < Date.now()) {
          dispatch(logoutUser());
        } else {
          dispatch(getToken());
          dispatch({type: SET_AUTHENTICATED});
          axios.defaults.headers.common['Authorization'] = toke;
          dispatch(getUserData());
        }
      }
    };
    ju();
  }, []);

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
