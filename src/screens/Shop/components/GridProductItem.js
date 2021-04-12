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
const GridProductItem = ({
  image,
  name,
  overview,
  price,
  addToCart,
  onClick,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.boxImage}>
          <Image source={{uri: image}} style={{width: 100, height: 100}} />
        </View>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body3,
            color: COLORS.text,
            marginLeft: 15,
            paddingRight: 10,
          }}>
          {name}
        </Text>
        <Text
          style={{...FONTS.body5, color: COLORS.textSecond, marginLeft: 15}}>
          {overview}
        </Text>
        <View style={styles.action}>
          <Text style={{...FONTS.body2, color: COLORS.primary}}>{price}$</Text>
          <TouchableOpacity style={styles.btn} onPress={addToCart}>
            <Text style={{...FONTS.body5, fontSize: 10, color: COLORS.white}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GridProductItem;
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: 270,
    marginHorizontal: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginTop: 10,
  },
  boxImage: {
    width: width / 2 - 20,
    height: 150,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.5,

    elevation: 4,
  },
  info: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 120,
  },
  action: {
    width: width / 2 - 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
