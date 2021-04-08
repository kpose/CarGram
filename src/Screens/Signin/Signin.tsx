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
        <Text style={[CustomStyles.title, styles.headerTitle]}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoFocus={true}
        />
        <Input secureTextEntry={true} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={[CustomStyles.caption, styles.forgot]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <LargeButton title="Log In" backgroundColor={COLORS.LIGHT_BLUE} />
    </KeyboardAvoidingView>
  );
};

export default Signin;
