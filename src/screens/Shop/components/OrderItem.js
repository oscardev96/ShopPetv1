import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';
import Moment from 'moment';
const OrderItem = ({
  title,
  name,
  quantity,
  price,
  image,
  totalAmount,
  totalItem,
  dateOrder,
  showDetail,
}) => {
  const renderDate = date => {
    Moment.locale('en');
    return <Text>{Moment(date).format('dd MMM YY')}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            ...FONTS.body4,
            fontWeight: '500',
            color: title === 'Delivered' ? COLORS.primary : '#249B30',
            marginLeft: 20,
          }}>
          {title}
        </Text>
        <Text
          style={{...FONTS.body4, color: COLORS.textSecond, marginLeft: 20}}>
          {renderDate(dateOrder)}
        </Text>
      </View>

      {/* END HEADER */}
      <View style={styles.product}>
        <View style={styles.boxImage}>
          <Image
            source={{uri: image}}
            style={{width: 70, height: 90}}
            resizeMode="cover"
          />
        </View>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.body3,
            color: COLORS.text,
            marginLeft: 20,
            width: 200,
            marginTop: 20,
          }}>
          {name}
        </Text>
        <View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.textSecond,
              marginTop: 20,
            }}>
            x {quantity}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.textSecond,
              marginTop: 20,
            }}>
            ${price}
          </Text>
        </View>
      </View>

      {/* end product */}
      <View style={styles.detail}>
        <TouchableOpacity style={styles.btn} onPress={showDetail}>
          <Text style={{...FONTS.body5, color: COLORS.white}}>View Detail</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', height: 30, alignItems: 'center'}}>
          <Text style={{...FONTS.body4, color: COLORS.text}}>Items : </Text>
          <Text style={{...FONTS.body4, color: COLORS.primary}}>
            {totalItem}{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', height: 30, alignItems: 'center'}}>
          <Text style={{...FONTS.body4, color: COLORS.text}}>Total : </Text>
          <Text style={{...FONTS.body4, color: COLORS.primary}}>
            ${totalAmount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: COLORS.white,
    width: width - 20,
    height: 250,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 0.5,

    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.backgroundSecond,
  },
  product: {
    height: 120,
    width: width - 20,
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  boxImage: {
    width: 90,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    width: width - 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  btn: {
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 15,
  },
});
