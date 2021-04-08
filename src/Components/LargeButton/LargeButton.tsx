import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CustomStyles} from '../../Utils/Style';

import styles from './styles';

interface LargeButtonProps {
  title: string;
  onPress?: any;
  backgroundColor?: any;
}

const LargeButton = (props: LargeButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.backgroundColor}]}
        onPress={props.onPress}>
        <Text style={[CustomStyles.buttonText, styles.buttonText]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
