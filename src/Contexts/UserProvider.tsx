import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const UserContext = createContext<any>({
  user: [],
  setUser: () => {},
});

export const UserProvider = ({children}: any) => {
  const [user, setUser] = React.useState('ooooo');
  const [token, setToken] = React.useState();
  const [gtoken, setGToken] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  function signin(userData: {}) {
    setLoading(true);
    axios
      .post(
        'https://us-central1-cargram-72669.cloudfunctions.net/api/login',
        userData,
      )
      .then(res => {
        AsyncStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response.data);
        setLoading(false);
      });
  }

  function signup(userData: {}) {
    setLoading(true);
    axios
      .post(
        'https://us-central1-cargram-72669.cloudfunctions.net/api/signup',
        userData,
      )
      .then(res => {
        //AsyncStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        setToken(res.data.token);
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response.data);
        setLoading(false);
      });
  }

  const saveToken = async () => {
    try {
      const res = await AsyncStorage.setItem('FBIdToken', `Bearer ${token}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    try {
      const res = await AsyncStorage.getItem('FBIdToken');
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const removeToken = async () => {
    try {
      const res = await AsyncStorage.removeItem('FBIdToken');
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    AsyncStorage.getItem('FBIdToken')
      .then(hhh => {
        setGToken(hhh);

        console.log(gtoken);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); */

  return (
    <UserContext.Provider
      value={{
        user,
        signin,
        loading,
        error,
        signup,
        removeToken,
      }}>
      {children}
    </UserContext.Provider>
  );
};
