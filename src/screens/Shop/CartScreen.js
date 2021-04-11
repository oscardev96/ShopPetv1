import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cartReducers.items);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{JSON.stringify(cart)}</Text>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('CheckOutScreen');
        }}
      />
    </View>
  );
};

export default CartScreen;
