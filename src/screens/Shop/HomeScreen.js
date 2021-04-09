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
import {ActionSheet, Item, Input} from 'native-base';
import ItemSearch from './components/ItemSearch';
import API from '../../config/configAPI';
var BUTTONS = ['All', 'Foods', 'Toys', 'Medicine', 'Cancel'];
var CANCEL_INDEX = 4;
const HomeScreen = ({navigation}) => {
  const search = useRef(null);
  const [category, setcategory] = useState('All');
  const [searchLoading, setsearchLoading] = useState(false);
  const [searchData, setsearchData] = useState(null);
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
    }, 1500);
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Item rounded style={styles.search}>
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
                      navigation.navigate('ProfileScreen', {id: item._id});
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
        <View style={{marginTop: 20, zIndex: -1}}>
          <CarouselHome />
        </View>
      </SafeAreaView>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri:
            'http://localhost:3001/uploads/images/2021-03-22T20:02:48.801Zcan%20cau.jpeg',
        }}
      />
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
  },
  category: {flexDirection: 'row'},
  search: {
    width: width * 0.9,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    opacity: 0.95,
  },
});
