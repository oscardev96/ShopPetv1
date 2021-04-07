import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Item, Label, Input} from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from '../../constants/icon';
import {COLORS, SIZES, FONTS, width, height} from '../../constants/theme';
import {Formik} from 'formik';
import * as yup from 'yup';
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo1.png')}
            resizeMode="cover"
            style={styles.logo}
          />
          <Text style={styles.textTitle}>Log in with E-mail</Text>
        </View>
        {/* END HEADER */}

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            alert(values);
          }}
          validationSchema={loginValidationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <View style={{height: 100}}>
                <Label style={{...FONTS.body3, color: COLORS.text}}>
                  E-mail :
                </Label>
                <Item>
                  <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    keyboardType="email-address"
                  />
                  <IconF name="user" size={20} color="#999" />
                </Item>
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={{height: 100}}>
                <Label style={{...FONTS.body3, color: COLORS.text}}>
                  Password :
                </Label>
                <Item>
                  <Input
                    secureTextEntry={true}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                  <IconF
                    name="eye-slash"
                    // onPress={this.showpass}
                    size={20}
                    color="#999"
                  />
                </Item>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={{...FONTS.h4, color: 'white'}}>Login</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text style={{...FONTS.body5, color: COLORS.text}}>
                  Forgot your password ?
                </Text>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.primary,
                    marginLeft: 5,
                  }}>
                  Click me
                </Text>
              </View>
            </View>
          )}
        </Formik>
        {/* END FORM */}
        <View style={styles.social}>
          <Text style={{...FONTS.h2, color: COLORS.text, textAlign: 'center'}}>
            Log in with
          </Text>
          <View
            style={{
              marginTop: 20,
              width: width * 0.3,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
            }}>
            <IconF
              name="facebook"
              size={25}
              color={COLORS.text}
              style={{padding: 10}}
              onPress={() => {}}
            />
            <IconF
              name="google"
              size={25}
              color={COLORS.text}
              style={{padding: 10}}
              onPress={() => {}}
            />
            <IconF
              name="instagram"
              size={25}
              color={COLORS.text}
              style={{padding: 10}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              bottom: 5,
              position: 'absolute',
            }}>
            <Text style={{...FONTS.body5, color: COLORS.text}}>
              Don’t you have account ?
            </Text>
            <Text
              style={{...FONTS.body5, color: COLORS.primary, marginLeft: 5}}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Sign up
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    width: width,
    height: height * 0.3,

    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 94,
    height: 88,
  },
  textTitle: {
    ...FONTS.h2,
    marginTop: 20,
  },
  form: {
    paddingHorizontal: 35,
  },
  errorText: {
    color: COLORS.primary,
    marginTop: 5,
    ...FONTS.body5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  social: {
    paddingTop: 20,
    height: height * 0.25,
    width,
  },
});
