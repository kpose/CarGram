import React from 'react';
import * as Yup from 'yup';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomStyles} from '../../Utils/Style';
import {COLORS} from '../../Utils';
import {Input, LargeButton, Spinner} from '../../Components';
import {Text} from 'react-native-paper';
import {AuthStackProps} from '../../Navigation/NavigationTypes';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../Redux/Actions/UserActions';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Password Required'),
});

const Signin = ({navigation}: AuthStackProps) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.UI);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: ''},
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Spinner />}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={25} style={styles.icon} />
        </TouchableOpacity>

        <Text style={[CustomStyles.heading, styles.title]}>Sign In</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          autoFocus={true}
          error={errors.email}
          touched={touched.email}
        />
        {error ? (
          <Text style={[CustomStyles.smallButtonText, {color: COLORS.WARNING}]}>
            {error.email}
          </Text>
        ) : null}
        <Input
          placeholder="Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          secureTextEntry={true}
          onSubmitEditing={() => handleSubmit()}
        />
        {error ? (
          <Text style={[CustomStyles.smallButtonText, {color: COLORS.WARNING}]}>
            {error.password}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity style={[styles.forgot]}>
        <Text style={[CustomStyles.smallButtonText, {color: COLORS.SECONDARY}]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <LargeButton title="Log in" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Signin;
