import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import IconF from 'react-native-vector-icons/FontAwesome';
import {COLORS, width, height} from '../../../constants/theme';

const CartItem = ({image, name, price, quantity, increQty, decreQty}) => (
  <View style={styles.container}>
    <View
      style={{
        width: 80,
        height: 100,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 60, height: 60}}
        resizeMode="cover"
        source={{uri: image}}
      />
    </View>
    <View style={{width: 200}}>
      <Text
        style={{
          fontSize: 14,
          color: COLORS.text,
          fontWeight: '500',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 24,
          color: COLORS.primary,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        ${price}
      </Text>
    </View>
    <View style={styles.qty}>
      <IconF name="plus" color={COLORS.primary} size={15} onPress={increQty} />
      <Text
        style={{
          fontSize: 15,
          color: COLORS.text,
          fontWeight: 'bold',
          paddingVertical: 10,
        }}>
        {quantity}
      </Text>
      <IconF name="minus" color={COLORS.primary} size={15} onPress={decreQty} />
    </View>
  </View>
);

export default CartItem;
const styles = StyleSheet.create({
  container: {
    width,
    height: 120,
    flexDirection: 'row',
    marginTop: 10,
    //backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    borderBottomColor: COLORS.background,
    borderBottomWidth: 1,
  },
  qty: {
    height: 100,
    width: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
