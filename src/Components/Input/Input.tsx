import React, {forwardRef} from 'react';
import {View, TextInput} from 'react-native';
import {Text} from 'react-native-paper';
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
  onBlur?: any;
  error?: string;
  touched?: any;
  ref?: any;
  onSubmitEditing?: any;
}

const Input = (props: InputProps) => {
  const validationColor = !props.touched
    ? COLORS.PRIMARY
    : props.error
    ? '#FF5A5F'
    : '#223e4b';

  return (
    <View>
      <TextInput
        defaultValue={props.defaultValue}
        style={[
          styles.input,
          CustomStyles.caption,
          {borderColor: validationColor},
        ]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={COLORS.WHITE}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        onSubmitEditing={props.onSubmitEditing}
        autoFocus={props.autoFocus}
        numberOfLines={1}
        autoCapitalize="none"
        autoCompleteType="off"
        onBlur={props.onBlur}
        //returnKeyType="next"
        //returnKeyLabel="next"
      />
      {props.error ? (
        <Text style={[styles.error, CustomStyles.smallButtonText]}>
          {props.error}{' '}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
