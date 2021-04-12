import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {width, height, FONTS, COLORS} from '../../../constants/theme';
import IconF from 'react-native-vector-icons/FontAwesome';
const OrderItemDetail = ({
  navigation,
  image,
  name,
  price,
  quantity,
  showRating,
  done,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          source={{uri: image}}
          style={{width: 70, height: 90}}
          resizeMode="cover"
        />
      </View>

      <View>
        <Text style={{...FONTS.body3, color: COLORS.text, marginLeft: 20}}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: width - 100,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          <Text style={{...FONTS.body4, color: COLORS.text}}>${price}</Text>
          <Text style={{...FONTS.body4, color: COLORS.text, paddingRight: 10}}>
            x {quantity}
          </Text>
        </View>
        {done ? (
          <TouchableOpacity style={styles.btn} onPress={showRating}>
            <Text style={{...FONTS.body4, color: COLORS.text}}>Rating</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default OrderItemDetail;
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: COLORS.white,
    width: width - 20,
    height: 135,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 0.5,
    elevation: 4,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  boxImage: {
    width: 90,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 120,
    height: 25,
    backgroundColor: COLORS.backgroundSecond,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
});
