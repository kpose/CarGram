import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import UserReducer from './Reducers/UserReducer';
import uiReducer from './Reducers/uiReducer';
//import DataReducer from './Reducers/DataReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: UserReducer,
  //data: DataReducer,
  UI: uiReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
