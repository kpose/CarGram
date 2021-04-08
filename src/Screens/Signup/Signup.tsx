import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomStyles} from '../../Utils/Style';
import {COLORS} from '../../Utils';
import {Input, LargeButton} from '../../Components';
import {AuthStackProps} from '../../Navigation/NavigationTypes';

const Signin = ({navigation}: AuthStackProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <AntDesign
            name="arrowleft"
            color={COLORS.LIGHT_BLUE}
            size={CustomStyles.navigationIcon}
          />
        </TouchableOpacity>
        <Text style={[CustomStyles.heading, styles.headerTitle]}>
          Create new account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="First Name" autoFocus={true} />
        <Input placeholder="Last Name" />
        <Input placeholder="E-mail" keyboardType="email-address" />

        <Input secureTextEntry={true} placeholder="Password" />
      </View>
      <View style={styles.divide} />
      <LargeButton title="Sign Up" backgroundColor={COLORS.LIGHT_BLUE} />
    </KeyboardAvoidingView>
  );
};

export default Signin;
