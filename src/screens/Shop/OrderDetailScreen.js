import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from 'react-native';
import {width, height, FONTS, COLORS} from '../../constants/theme';
import IconF from 'react-native-vector-icons/FontAwesome';
import * as orderActions from '../../redux/actions/orderActions';
import {useDispatch, useSelector} from 'react-redux';
import Moment from 'moment';
import OrderItemDetail from './components/OrderItemDetail';
import Modal from 'react-native-modal';
import {Rating, AirbnbRating} from 'react-native-ratings';
import API from '../../config/configAPI';
const OrderDetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const orderItem = useSelector(state => state.orderReducers.OrderItem);
  const [product, setproduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [idProductReview, setidProductReview] = useState('');
  const [textReview, settextReview] = useState('');
  const [rating, setrating] = useState(0);

  useEffect(() => {
    if (route.params?.id) {
      const id = route.params?.id;
      if (orderItem && orderItem._id != id) {
        dispatch(orderActions.clearOrderItem());
      }
      dispatch(orderActions.getOrder(id));
    }
  }, []);
  useEffect(() => {
    if (orderItem) {
      setproduct(orderItem.listProduct);
    }
  }, [orderItem]);
  const showRating = id => {
    setModalVisible(true);
    setidProductReview(id);
  };
  const renderDate = date => {
    Moment.locale('en');
    return <Text>{Moment(date).format('dd MMM YY')}</Text>;
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <Modal
        isVisible={isModalVisible}
        style={{flex: 0.6, backgroundColor: 'white', top: 100}}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.7}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body3, color: COLORS.text}}>Review</Text>

          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            startingValue={0}
            ratingBackgroundColor={COLORS.background}
            onFinishRating={rating => {
              setrating(rating);
            }}
          />

          <TextInput
            value={textReview}
            onChangeText={text => {
              settextReview(text);
            }}
            multiline={true}
            style={{
              height: 100,
              width: 300,
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
          />

          <TouchableOpacity
            onPress={() => {
              API.post(`/products/comment/${idProductReview}`, {
                text: textReview,
                rating: rating,
              })
                .then(result => {
                  setModalVisible(false);
                })
                .catch(error => {
                  console.log(error);
                });
            }}
            style={{
              borderRadius: 10,
              backgroundColor: COLORS.primary,
              width: 200,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
        }}>
        <IconF
          name="arrow-left"
          size={25}
          color={COLORS.text}
          onPress={() => {
            navigation.goBack();
          }}
          style={{padding: 10, fontWeight: 'normal'}}
        />
        <Text style={{...FONTS.body1, color: COLORS.text, marginLeft: 20}}>
          Order Detail
        </Text>
      </View>
      {/* end header */}
      {orderItem ? (
        <View style={styles.info}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                ...FONTS.body3,
                color: orderItem.done ? COLORS.primary : '#249B30',
              }}>
              {orderItem.done ? 'Delivered' : 'Shipping'}
            </Text>
            <Text style={{...FONTS.body3, color: COLORS.text, marginLeft: 20}}>
              {renderDate(orderItem.date)}
            </Text>
          </View>
          <Text style={{...FONTS.body4, color: COLORS.textSecond}}>
            Total items : {orderItem.totalItem}
          </Text>
          <Text style={{...FONTS.body4, color: COLORS.textSecond}}>
            TotalAmout : ${orderItem.totalAmount}
          </Text>
        </View>
      ) : null}
      <ScrollView style={styles.list}>
        {product == null ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          product.map((item, index) => {
            return (
              <OrderItemDetail
                key={index}
                name={item.product.name}
                quantity={item.quantity}
                price={item.product.price}
                image={item.product.images[0]}
                done={orderItem.done}
                showRating={() => {
                  showRating(item.product._id);
                }}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
const styles = StyleSheet.create({
  info: {
    width: width - 20,
    alignSelf: 'center',
    height: 120,
    backgroundColor: COLORS.backgroundSecond,
    borderRadius: 10,
    paddingHorizontal: 30,

    justifyContent: 'space-evenly',
  },
  list: {
    width,
    height: height - 200,
  },
});
