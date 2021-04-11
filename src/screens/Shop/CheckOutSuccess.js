import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, FONTS, width, height, SIZES} from '../../constants/theme';
const CheckOutSuccess = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/bg-checkout.png')}>
        <View
          style={{
            width,
            height: height * 0.6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/cat-checkout.png')}
            style={{
              resizeMode: 'cover',
              width: 350,
              height: 310,
            }}
          />
          <Text style={{...FONTS.body1, color: COLORS.text, marginTop: 20}}>
            Success!
          </Text>
          <Text
            style={{...FONTS.body4, color: COLORS.textSecond, marginTop: 20}}>
            {`Your order will be deliveried soon.\n Thank you for choosing our app!`}
          </Text>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{...FONTS.body4, color: COLORS.white}}>
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOutSuccess;
const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 300,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
