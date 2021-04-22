import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
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
      const FBIdToken = `Bearer ${res.data.token}`;
      console.log(FBIdToken);
      AsyncStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = FBIdToken;
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
      dispatch({type: SET_AUTHENTICATED});
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getUserData = () => (dispatch: any) => {
  axios
    .get('https://us-central1-cargram-72669.cloudfunctions.net/api/user')
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
