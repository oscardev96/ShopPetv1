import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../redux/actions/cartActions';
import IconF from 'react-native-vector-icons/FontAwesome';
import {COLORS, SIZES, FONTS, width, height} from '../../constants/theme';
// import CartItem from './components/CartItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartItem from './components/CartItem';
const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducers.items);
  const numberCart = useSelector(state => state.cartReducers.numberCart);
  const totalAmount = useSelector(state => state.cartReducers.totalAmount);
  const increQty = id => {
    dispatch(cartActions.IncreaseQuantity(id));
  };
  const decreQty = id => {
    dispatch(cartActions.DecreaseQuantity(id));
  };
  const remove = id => {
    dispatch(cartActions.removeFromCart(id));
  };
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
          Cart
        </Text>
      </View>
      {/* end header */}
      <View style={styles.cartContainer}>
        {numberCart != 0 ? (
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <CartItem
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                increQty={() => {
                  increQty(item.id);
                }}
                decreQty={() => {
                  if (item.quantity > 1) {
                    decreQty(item.id);
                  } else {
                    alert('Remove from Cart');
                    remove(item.id);
                  }
                }}
              />
            )}
          />
        ) : (
          <View
            style={{
              width,
              height: height * 0.6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body2, color: COLORS.text}}>
              No item in Cart
            </Text>
          </View>
        )}
      </View>
      {/* end list Item */}
      <View style={styles.bottom}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.textBottom}>Items : {numberCart}</Text>
            <Text style={styles.textBottom}>Subtotal: ${totalAmount}</Text>
            <Text style={styles.textBottom}>Delivery : FREE</Text>
          </View>
          <View></View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={styles.textBottom}>Total</Text>
            <Text style={styles.textTotal}>${totalAmount}</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: width * 0.8,
              backgroundColor: COLORS.primary,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              if (numberCart == 0) {
                alert('No item in your cart');
                return;
              }
              navigation.navigate('CheckOutScreen');
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  cartContainer: {
    width: width,

    height: height * 0.55,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    justifyContent: 'space-evenly',
    width: width,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: height * 0.2,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  textBottom: {
    color: COLORS.colorText,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  textTotal: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});
