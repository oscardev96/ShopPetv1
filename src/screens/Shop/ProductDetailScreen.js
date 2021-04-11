import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import {
  COLORS,
  SIZES,
  width,
  height,
  FONTS,
  viewBox,
} from '../../constants/theme';
import Icon from '../../constants/icon';

import Modal from 'react-native-modal';
import {Rating, AirbnbRating} from 'react-native-ratings';
import IconF from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {ActionSheet, Item, Input} from 'native-base';

import API from '../../config/configAPI';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import CarouselProduct from './components/CarouselProduct';
import Loading from './components/Loading';
import CommentProductDetail from './components/CommentProductDetail';
const ProductDetailScreen = ({navigation, route}) => {
  useEffect(() => {
    if (productSelect && productSelect._id != route.params?.id) {
      dispatch(productActions.setProductDetail());
      dispatch(productActions.getProductById(route.params?.id));
    } else {
      dispatch(productActions.getProductById(route.params?.id));
    }
  }, []);
  useEffect(() => {
    caculatorRating();
  }, [productSelect]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectQty, setselectQty] = useState(1);
  const [rate, setrate] = useState(0);
  const dispatch = useDispatch();
  const productSelect = useSelector(
    state => state.productReducers.productDetail,
  );

  const isLoading = useSelector(state => state.productReducers.isLoading);
  const caculatorRating = () => {
    if (isLoading && productSelect.comments.length > 0) {
      let totolStar = productSelect.comments.reduce((total, item) => {
        return total + item.rating;
      }, 0);
      let totalComments = productSelect.comments.length;
      let rating = totolStar / totalComments;
      setrate(rating);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <View style={styles.header}>
          <IconF
            name="arrow-left"
            size={25}
            color={COLORS.black}
            style={{
              padding: 10,
              position: 'absolute',
              top: Platform.OS === 'android' ? 20 : 30,
              left: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
          {isLoading ? (
            <CarouselProduct images={productSelect.images} />
          ) : (
            <Loading />
          )}
        </View>
        {/* END HEADER */}
        {/* INFOMATION PRODUCT */}
        {isLoading ? (
          <View style={styles.infomation}>
            <Text style={{...FONTS.body2, color: COLORS.text}}>
              {productSelect.name}
            </Text>
            <Text style={{...FONTS.h2, color: COLORS.primary}}>
              {productSelect.price}$
            </Text>
            <View style={{width: 150}}>
              <Rating
                type="custom"
                // ratingImage={require('../../assets/images/star.png')}
                ratingCount={5}
                imageSize={30}
                startingValue={rate}
                showRating={false}
                readonly={true}
                ratingColor={COLORS.primary}
                //onFinishRating={this.ratingCompleted}
                // style={{
                //   width: width * 0.6,
                // }}
              />
            </View>
            <Text style={{...FONTS.body5, color: COLORS.text}}>
              {productSelect.overView}
            </Text>
          </View>
        ) : (
          <Loading />
        )}
        {/* END INFOMATION PRODUCT */}
        {/* PRODUCT DESCRIPTION */}
        <View
          style={{
            width,
            backgroundColor: COLORS.background,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Text style={{...FONTS.body2, color: COLORS.primary}}>
            Product Descriptions
          </Text>
          {isLoading ? (
            <Text style={{...FONTS.body5, color: COLORS.text}}>
              {productSelect.description}
            </Text>
          ) : (
            <Loading size="small" />
          )}
        </View>
        {/* END PRODUCT DESCRIPTION */}
        {/* CUSTOMMER REVIEW */}
        <View
          style={{
            width,
            backgroundColor: COLORS.background,
            marginTop: 10,
          }}>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              borderBottomColor: COLORS.backgroundSecond,
              borderBottomWidth: 1,
              paddingLeft: 20,
            }}>
            <Text style={{...FONTS.body2, color: COLORS.text}}>
              Customer reviews
            </Text>
          </View>
          {/* end title */}

          {isLoading ? (
            productSelect.comments.map((item, index) => {
              return (
                <CommentProductDetail
                  key={index}
                  user={item.user.name}
                  dateComment={item.date}
                  starRating={item.rating}
                  comment={item.text}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </View>

        {/* END CUSTOMER REVIEW */}
      </ScrollView>
      <View style={styles.action}>
        <View
          style={{
            width: width - 30,
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={[
              styles.chatButton,
              {borderTopStartRadius: 10, borderBottomStartRadius: 10},
            ]}>
            <Icon
              name="chat"
              width="20"
              height="20"
              fill={COLORS.white}
              viewBox={viewBox['chat']}
            />
            <Text style={{...FONTS.body4, color: COLORS.white}}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Icon
              name="cart"
              width="20"
              height="20"
              fill={COLORS.white}
              viewBox={viewBox['cart']}
            />
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Add to cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.chatButton,
              {borderTopEndRadius: 10, borderBottomEndRadius: 10},
            ]}>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={styles.wrapModal}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        backdropOpacity={0}>
        <View style={styles.modal}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.9,
              height: 200,
              paddingHorizontal: 20,
            }}>
            <View style={styles.productCart}>
              <View
                style={{
                  width: 70,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.primary,
                  borderRadius: 10,
                }}>
                <Image
                  resizeMode="cover"
                  source={{uri: isLoading ? productSelect.images[0] : null}}
                  style={{width: 50, height: 70}}
                />
              </View>
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#333',
                    fontWeight: '500',
                  }}>
                  {isLoading ? productSelect.name : null}
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginTop: 15,
                  }}>
                  {isLoading ? productSelect.price : null}$
                </Text>
              </View>
            </View>
            <View style={styles.qty}>
              <IconF
                name="plus"
                color={COLORS.primary}
                size={20}
                onPress={() => {
                  setselectQty(selectQty + 1);
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  paddingVertical: 10,
                }}>
                {selectQty}
              </Text>
              <IconF
                name="minus"
                color={COLORS.primary}
                size={20}
                onPress={() => {
                  if (selectQty > 1) {
                    setselectQty(selectQty - 1);
                  }
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => {
              dispatch(
                cartActions.addToCart(
                  productSelect._id,
                  productSelect.name,
                  productSelect.price,
                  productSelect.images[0],
                  selectQty,
                ),
              );
              setModalVisible(false);
            }}>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetailScreen;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  infomation: {
    paddingLeft: 20,
    height: height * 0.2,
    justifyContent: 'space-evenly',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: 70,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
  },
  chatButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.primary,
    width: (width - 30) / 3 - 20,
    alignItems: 'center',
  },
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#4A3F81',
    width: (width - 30) / 3 + 20,
    alignItems: 'center',
  },

  modal: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    position: 'absolute',
    bottom: -5,
    elevation: 9,
    backgroundColor: '#fff',
    width: width,
    marginLeft: -(width * 0.05),
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  add: {
    width: width * 0.8,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
  },
  productCart: {flexDirection: 'row', marginTop: 30},
  qty: {
    marginTop: 30,
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
