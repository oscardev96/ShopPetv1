import {Dimensions} from 'react-native';
export const COLORS = {
  primary: '#EF882F',
  background: '#FAFAFA',
  text: '#333333',
  textSecond: '#A7A1A1',
  white: '#FFFFFF',
  black: '#1E1F20',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
  backgroundSecond: '#E5E5E5',
  puple: '#4A3F81',
  gray: '#999999',
};
export const {width, height} = Dimensions.get('screen');
export const SIZES = {
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 36,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 54},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 36},
  h3: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.h1, lineHeight: 40},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
};
export const viewBox = {
  home: ' 0 0 26 25',
  bell: ' 0 0 25 27',
  cart: ' 0 0 27 28',
  user: ' 0 0 25 25 ',
  chat: ' 0 0 20 20',
};
