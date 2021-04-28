import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER_TOKEN,
  REMOVE_USER_TOKEN,
} from '../Constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = (userData: {}) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-cargram-72669.cloudfunctions.net/api/login',
      userData,
    )
    .then(res => {
      setAuthorizationHeader(res.data.token);
      //console.log(res.data.token);
      dispatch({type: SET_USER_TOKEN, payload: res.data.token});
      dispatch({type: SET_AUTHENTICATED});
      //dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signupUser = (newUserData: {}) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-cargram-72669.cloudfunctions.net/api/signup',
      newUserData,
    )
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch({type: SET_USER_TOKEN, payload: res.data.token});
      dispatch({type: SET_AUTHENTICATED});
      //dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getToken = () => async (dispatch: any) => {
  const token = await AsyncStorage.getItem('FBIdToken');
  dispatch({
    type: SET_USER_TOKEN,
    payload: token,
  });
};

export const logoutUser = (dispatch: any) => {
  AsyncStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({
    type: REMOVE_USER_TOKEN,
  });
};

export const getUserData = () => async (dispatch: any) => {
  const FBIdToken = await AsyncStorage.getItem('FBIdToken');

  axios.defaults.headers.common['Authorization'] = FBIdToken;
  axios
    .get('https://us-central1-cargram-72669.cloudfunctions.net/api/user')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const uploadProfileImage = (formData: any) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-cargram-72669.cloudfunctions.net/api/user/image',
      formData,
    )
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => {
      console.log(err);
    });
};

export const editUserDetails = (userDetails: any) => (dispatch: any) => {
  dispatch({type: LOADING_UI});
  axios
    .post(
      'https://us-central1-cargram-72669.cloudfunctions.net/api/user',
      userDetails,
    )
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => {
      console.log(err);
    });
};
const setAuthorizationHeader = (token: string) => {
  const FBIdToken = `Bearer ${token}`;
  AsyncStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

const getAuthorizationHeader = () => {
  const FBIdToken = AsyncStorage.getItem('FBIdToken');
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
