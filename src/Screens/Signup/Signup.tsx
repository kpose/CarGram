import React, {useState, useContext} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomStyles} from '../../Utils/Style';
import {COLORS} from '../../Utils';
import {Input, LargeButton, Spinner} from '../../Components';
import {Text} from 'react-native-paper';
import {AuthStackProps} from '../../Navigation/NavigationTypes';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../Redux/Actions/UserActions';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  handle: Yup.string().min(3, 'Too Short!').required('Handle is Required'),
  firstname: Yup.string().min(1, 'Invalid!').required('Provide first name'),
  lastname: Yup.string().min(1, 'Invalid!').required('Provide last name'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Password Required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const Signup = ({navigation}: AuthStackProps) => {
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
    validationSchema: SignupSchema,
    initialValues: {
      email: '',
      password: '',
      handle: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(signupUser(values));
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Spinner />}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="chevron-left" size={25} style={styles.icon} />
        </TouchableOpacity>

        <Text style={[CustomStyles.heading, styles.title]}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Firstname"
          onChangeText={handleChange('firstname')}
          onBlur={handleBlur('email')}
          error={errors.firstname}
          touched={touched.email}
        />

        <Input
          placeholder="Lastname"
          onChangeText={handleChange('lastname')}
          onBlur={handleBlur('email')}
          error={errors.lastname}
          touched={touched.email}
        />

        <Input
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          keyboardType="email-address"
          autoFocus={true}
        />
        {error ? (
          <Text style={[CustomStyles.smallButtonText, {color: COLORS.WARNING}]}>
            {error.email}
          </Text>
        ) : null}
        <Input
          placeholder="Handle"
          onChangeText={handleChange('handle')}
          onBlur={handleBlur('handle')}
          error={errors.handle}
          touched={touched.handle}
        />

        {error ? (
          <Text style={[CustomStyles.smallButtonText, {color: COLORS.WARNING}]}>
            {error.handle}
          </Text>
        ) : null}
        <Input
          placeholder="Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          secureTextEntry={true}
          error={errors.password}
          touched={touched.password}
        />
        <Input
          placeholder="Confirm Password"
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          secureTextEntry={true}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton title="Register" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
