import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomStyles} from '../../Utils/Style';
import {COLORS} from '../../Utils';
import {Input, LargeButton} from '../../Components';
import {Text} from 'react-native-paper';
import {AuthStackProps} from '../../Navigation/NavigationTypes';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  username: Yup.string().min(3, 'Too Short!').required('Username is Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Password Required'),
});

const Signup = ({navigation}: AuthStackProps) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: '', username: ''},
    onSubmit: values => {
      console.log(`Email: ${values.email}, Password: ${values.password}`);
      navigation.navigate('RootDrawerNavigator');
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={25} style={styles.icon} />
        </TouchableOpacity>

        <Text style={[CustomStyles.heading, styles.title]}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          keyboardType="email-address"
          autoFocus={true}
        />

        <Input
          placeholder="Username"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          touched={touched.username}
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          secureTextEntry={true}
          error={errors.password}
          touched={touched.password}
          //onSubmitEditing={() => handleSubmit()}
        />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton title="Register" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
