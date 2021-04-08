import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
//import {slides} from '../../Assets/slides';

const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    //image: require('./Assets/Lottie'),

    backgroundColor: '#F7BB64',
  },
];
type WalkThroughProps = {
  onSkip?: any;
  onFinish?: any;
};

const AppWalkThrough = (props: WalkThroughProps) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>{item.text}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return <AppIntroSlider data={slides} renderItem={renderItem} />;
};

export default AppWalkThrough;
