import React from 'react';
import {View, Text, Button} from 'react-native';

const CartScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CART</Text>
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
