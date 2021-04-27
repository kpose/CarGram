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

const initialState = {
  token: '',
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;

    case SET_USER:
      return {
        token: state.token,
        authenticated: true,
        ...action.payload,
      };

    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case REMOVE_USER_TOKEN:
      return {
        initialState,
      };

    default:
      return state;
  }
}
