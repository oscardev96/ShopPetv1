import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';

const ProductItem = ({onClick, name, description, price, image, addToCart}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.image}>
        <TouchableOpacity onPress={onClick}>
          <Image
            source={{uri: image}}
            style={{
              resizeMode: 'cover',
              width: 100,
              height: 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <TouchableOpacity onPress={onClick}>
          <View>
            <Text
              numberOfLines={1}
              style={{...FONTS.body3, color: COLORS.text}}>
              {name}
            </Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.action}>
          <Text style={{...FONTS.h3, color: COLORS.primary}}>{price}$</Text>
          <TouchableOpacity style={styles.btn} onPress={addToCart}>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
{
  /* <View
  style={{
    width: width * 0.9,
    height: 1,
    backgroundColor: COLORS.border,
    opacity: 0.5,
  }}></View>; */
}
const styles = StyleSheet.create({
  wrap: {
    width: width * 0.9,
    height: height * 0.2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: COLORS.backgroundSecond,

    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#fff',
    width: width * 0.3,
    height: height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.5,

    elevation: 8,
  },
  info: {
    width: width * 0.4,
    height: height * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  title: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
  },
  description: {
    marginTop: 5,
    color: '#A7A1A1',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 20,
  },
});
export default ProductItem;
