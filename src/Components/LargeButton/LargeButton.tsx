import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {CustomStyles} from '../../Utils/Style';

import styles from './styles';

interface LargeButtonProps {
  title: string;
  onPress?: any;
}

const LargeButton = (props: LargeButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={props.onPress}>
        <Text style={[CustomStyles.buttonText, styles.buttonText]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
