import React, {useState, useEffect, useRef} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../constants/theme';
import Icon from '../../constants/icon';
import CarouselHome from './components/Carousel';
import IconF from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {ActionSheet, Item, Input, Toast} from 'native-base';
import ItemSearch from './components/ItemSearch';
import API from '../../config/configAPI';
import * as productActions from '../../redux/actions/productActions';
import * as userActions from '../../redux/actions/userActions';
import * as cartActions from '../../redux/actions/cartActions';
import ProductItem from './components/ProductItem';
import GridProductItem from './components/GridProductItem';
var BUTTONS = ['All', 'Foods', 'Toys', 'Medicine', 'Cancel'];
var CANCEL_INDEX = 4;
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    dispatch(productActions.getProduct(0));
    dispatch(userActions.getUser());
  }, []);

  const dispatch = useDispatch();
  const search = useRef(null);
  const [category, setcategory] = useState('All');
  const [searchLoading, setsearchLoading] = useState(false);
  const [searchData, setsearchData] = useState(null);
  const [typeList, settypeList] = useState('grid');

  const products = useSelector(state => state.productReducers.products);
  const fetchData = values => {
    if (values === '') {
      setsearchData(null);
    }
    if (values != '') {
      setsearchLoading(true);
      API.get(`/products/search/${values}`)
        .then(result => {
          setsearchData(result.data);
          setsearchLoading(false);
        })
        .catch(error => {
          console.log(error);
          setsearchData(null);
          setsearchLoading(false);
        });
    }
  };
  const handleInputSearch = text => {
    const values = text;
    if (search.current) {
      clearTimeout(search.current);
    }
    search.current = setTimeout(() => {
      fetchData(values);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={{...FONTS.h2, color: COLORS.text}}>Cat Pet</Text>

          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  title: 'Choose Category',
                },
                buttonIndex => {
                  if (buttonIndex == 4) {
                    setcategory('All');
                  } else {
                    setcategory(BUTTONS[buttonIndex]);
                  }
                },
              )
            }>
            <Text
              style={{...FONTS.body4, color: COLORS.primary, paddingRight: 10}}>
              {category}
            </Text>
            <IconF name="caret-down" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* END HEADER */}
        {/* INPUT SEARCH */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 0.05,
          }}>
          <Item rounded style={styles.search} noBorder>
            <IconF
              name="search"
              size={25}
              color={COLORS.primary}
              style={{marginLeft: 20}}
            />
            <Input
              onChangeText={text => {
                handleInputSearch(text);
              }}
              style={{padding: 10, marginLeft: 10}}
              placeholder="Search"
            />
            {searchLoading ? (
              <ActivityIndicator
                size="small"
                color={COLORS.primary}
                style={{paddingRight: 10}}
              />
            ) : null}
          </Item>
          {searchData && searchData.length > 0 ? (
            <View style={styles.itemSearch}>
              <FlatList
                data={searchData}
                renderItem={({item}) => (
                  <ItemSearch
                    name={item.name}
                    image={item.images[0]}
                    onSelect={() => {
                      navigation.navigate('ProductDetailScreen', {
                        id: item._id,
                      });
                    }}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : searchData && searchData.length == 0 ? (
            <View style={styles.itemSearch}>
              <ItemSearch name="No result" />
            </View>
          ) : null}
        </View>
        {/* END SEARCH */}
        <View style={{marginTop: 20, zIndex: -1, height: height * 0.15}}>
          <CarouselHome />
        </View>
        {/* TITLE LIST PRODUCT */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            height: height * 0.05,
            backgroundColor: 'white',
            alignItems: 'center',
            zIndex: -1,
          }}>
          <Text style={{...FONTS.h4, color: COLORS.text}}>
            Goods special for pet
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.iconGrid}
              onPress={() => {
                settypeList('col');
              }}>
              <IconF name="bars" size={15} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconGrid}
              onPress={() => {
                settypeList('grid');
              }}>
              <IconF name="th-large" size={15} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* END TITLE LIST PRODUCT */}
        {/* LIST PRODUCT */}
        <View
          style={{
            width,
            height: height * 0.5,
            width,
            alignItems: 'center',
          }}>
          {products && products.length > 0 ? (
            <FlatList
              data={products}
              removeClippedSubviews={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              numColumns={typeList === 'col' ? 1 : 2}
              key={typeList === 'col' ? 'ONE COLUMN' : 'TWO COLUMN'}
              renderItem={({item}) => {
                if (typeList === 'col') {
                  return (
                    <ProductItem
                      name={item.name}
                      price={item.price}
                      description={item.overView}
                      image={item.images[0]}
                      onClick={() => {
                        navigation.navigate('ProductDetailScreen', {
                          id: item._id,
                        });
                      }}
                      addToCart={() => {
                        dispatch(
                          cartActions.addToCart(
                            item._id,
                            item.name,
                            item.price,
                            item.images[0],
                            1,
                          ),
                        );
                      }}
                    />
                  );
                } else {
                  return (
                    <GridProductItem
                      name={item.name}
                      price={item.price}
                      overview={item.overView}
                      image={item.images[0]}
                      onClick={() => {
                        navigation.navigate('ProductDetailScreen', {
                          id: item._id,
                        });
                      }}
                      addToCart={() => {
                        dispatch(
                          cartActions.addToCart(
                            item._id,
                            item.name,
                            item.price,
                            item.images[0],
                            1,
                          ),
                        );

                        Toast.show({
                          text: 'Add to cart sucees',
                          duration: 500,
                          type: 'success',
                          position: 'top',
                        });
                      }}
                    />
                  );
                }
              }}
              keyExtractor={(item, index) =>
                typeList === 'col' ? index.toString() : item._id
              }
            />
          ) : (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    width,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.05,
  },
  category: {flexDirection: 'row'},
  search: {
    borderColor: 'transparent',
    width: width * 0.9,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 3,
  },
  textHeader: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 36,
    lineHeight: 54,
  },
  itemSearch: {
    width,
    position: 'absolute',
    zIndex: 999,
    top: 55,
    width: width * 0.9 - 15,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.68,

    elevation: 8,
    opacity: 0.95,
  },
  iconGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 5,
    height: 25,
  },
});
