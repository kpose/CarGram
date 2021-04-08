import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {COLORS} from '../../Utils';
import {CustomStyles} from '../../Utils/Style';
import styles from './styles';

interface InputProps {
  secureTextEntry?: any;
  placeholder: string;
  defaultValue?: string;
  onChangeText?: any;
  keyboardType?: any;
  autoFocus?: any;
}

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput
        defaultValue={props.defaultValue}
        style={[styles.input, CustomStyles.textInput]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={COLORS.WHITE}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        autoFocus={props.autoFocus}
        numberOfLines={1}
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />
    </View>
  );
};

export default Input;
