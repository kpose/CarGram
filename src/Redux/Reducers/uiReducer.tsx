import {SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../Constants';

const initialState = {
  loading: false,
  error: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
