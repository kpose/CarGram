import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Routes from './Navigation/Routes';
import {Provider} from 'react-redux';
import store from './Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
