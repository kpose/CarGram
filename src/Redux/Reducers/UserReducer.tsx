import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER_TOKEN,
  REMOVE_USER_TOKEN,
  LIKE_POST,
  UNLIKE_POST,
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
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            postId: action.payload.postId,
          },
        ],
      };

    case UNLIKE_POST:
      return {
        ...state,
        likes: state.likes.filter(
          like => like.postId !== action.payload.postId,
        ),
      };

    default:
      return state;
  }
}
