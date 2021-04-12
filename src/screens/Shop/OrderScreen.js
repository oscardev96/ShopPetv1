import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  SrollView,
} from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome';
import {COLORS, SIZES, FONTS, width, height} from '../../constants/theme';
import * as orderActions from '../../redux/actions/orderActions';
import {useDispatch, useSelector} from 'react-redux';
import OrderItem from './components/OrderItem';
import Loading from './components/Loading';
const OrderScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderActions.getAll());
  }, []);
  const isLoad = useSelector(state => state.orderReducers.isLoad);
  const listOrder = useSelector(state => state.orderReducers.listOrder);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
        }}>
        <IconF
          name="arrow-left"
          size={30}
          color={COLORS.text}
          onPress={() => {
            navigation.goBack();
          }}
          style={{padding: 10}}
        />
        <Text style={{...FONTS.body1, color: COLORS.text, marginLeft: 20}}>
          My Order
        </Text>
      </View>
      {/* end header */}
      <View>
        {isLoad ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : listOrder.length == 0 ? (
          <Text>No order</Text>
        ) : (
          listOrder.map((item, index) => {
            let itemFirst = item.listProduct.shift();
            return (
              <OrderItem
                key={index}
                dateOrder={item.date}
                title={item.done ? 'Delivered' : 'Shipping'}
                totalItem={item.totalItem}
                totalAmount={item.totalAmount}
                name={itemFirst.product.name}
                image={itemFirst.product.images[0]}
                price={itemFirst.product.price}
                quantity={itemFirst.quantity}
                showDetail={() => {
                  navigation.navigate('OrderDetailScreen', {id: item._id});
                }}
              />
            );
          })
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
