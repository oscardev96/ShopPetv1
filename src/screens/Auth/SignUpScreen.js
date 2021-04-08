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
const signupValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is Required'),
  lastName: yup.string().required('Last name is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <IconF
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-left"
            size={20}
            style={{
              position: 'absolute',
              top: 0,
              left: 10,
            }}
          />
          <Image
            source={require('../../assets/images/logo1.png')}
            resizeMode="cover"
            style={{width: 94, height: 88, alignSelf: 'center'}}
          />
          <Text style={{...FONTS.h2, textAlign: 'center', color: COLORS.text}}>
            Creat Account
          </Text>
          <Text
            style={{...FONTS.body5, color: COLORS.gray, textAlign: 'center'}}>
            It’s easier to sign up now!
          </Text>
        </View>
        {/* END HEADER */}
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            let {
              firstName,
              lastName,
              email,
              password,
              confirmPassword,
            } = values;
            this.signUp(firstName, lastName, email, password, confirmPassword);
          }}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              {/* START FORM */}
              <View style={styles.form}>
                {/* // start input */}
                <View style={styles.itemIput}>
                  <Label style={styles.lable}>First name :</Label>
                  <Item style={{height: 30}}>
                    <Input
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                    />
                  </Item>
                  {errors.firstName && touched.firstName && (
                    <Text style={styles.errorText}>{errors.firstName}</Text>
                  )}
                </View>
                {/* end input */}
                {/* // start input */}
                <View style={styles.itemIput}>
                  <Label style={styles.lable}>Last name :</Label>
                  <Item style={{height: 30}}>
                    <Input
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                    />
                  </Item>
                  {errors.lastName && touched.lastName && (
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                  )}
                </View>
                {/* end input */}

                {/* // start input */}
                <View style={styles.itemIput}>
                  <Label style={styles.lable}>E-mail :</Label>
                  <Item style={{height: 30}}>
                    <Input
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      keyboardType="email-address"
                    />
                    <Icon name="envelope" size={20} color="#999" />
                  </Item>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>
                {/* end input */}
                {/* // start input */}
                <View style={styles.itemIput}>
                  <Label style={styles.lable}>Password :</Label>
                  <Item style={{height: 30}}>
                    <Input
                      // secureTextEntry={this.state.show}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      secureTextEntry={true}
                    />
                    <Icon
                      name="eye-slash"
                      // onPress={this.showPass}
                      size={20}
                      color="#999"
                    />
                  </Item>
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                {/* end input */}
                {/* // start input */}

                <View style={styles.itemIput}>
                  <Label style={styles.lable}>Confirm Password :</Label>
                  <Item style={{height: 30}}>
                    <Input
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      // secureTextEntry={this.state.show}
                      secureTextEntry={true}
                    />
                    <Icon
                      name="eye-slash"
                      // onPress={this.showPass}
                      size={20}
                      color="#999"
                    />
                  </Item>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.errorText}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
                {/* end input */}
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={{...FONTS.h4, color: COLORS.white}}>Sign Up</Text>
              </TouchableOpacity>
              {/* END FORM */}
            </>
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
              Already have account?
            </Text>
            <Text
              style={{...FONTS.body5, color: COLORS.primary, marginLeft: 5}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  header: {},
  lable: {...FONTS.body5, color: COLORS.text},
  form: {
    paddingHorizontal: 30,
  },
  itemIput: {
    height: 70,
    marginTop: 5,
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

  errorText: {
    ...FONTS.body5,
    color: COLORS.primary,
    marginTop: 5,
  },
  social: {
    paddingTop: 20,
    height: height * 0.2,
    width,
  },
});
