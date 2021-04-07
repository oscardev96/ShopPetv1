import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
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
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '708297372294-nom6ps938d1ilh6tnohuut184aqbi4ed.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId:
        '708297372294-f4dv34k1jpbhi8npgtbf18tijs5ei0di.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }, []);
  const loginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(`userInfo`, userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
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
              onPress={() => {
                loginGoogle();
              }}
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
