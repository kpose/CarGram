import 'react-native-gesture-handler';
import React from 'react';
import Routes from './Navigation/Routes';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
