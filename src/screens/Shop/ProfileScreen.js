import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import * as authActions from '../../redux/actions/authActions';
import * as userActions from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import ListItemProfile from './components/ListItemProfile';
import {Item, List} from 'native-base';
import {COLORS, FONTS, height} from '../../constants/theme';
import {color} from 'react-native-reanimated';

const ProfileScreen = ({navigation}) => {
  const [isloading, setisloading] = useState(false);
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.userReducers.user);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.background}}>
      {/* HEADER  */}
      <View style={styles.header}>
        {isloading ? (
          <ActivityIndicator color="red" />
        ) : (
          <Text style={{...FONTS.h1, color: COLORS.text}}>{dataUser.name}</Text>
        )}

        {isloading ? (
          <ActivityIndicator />
        ) : (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: dataUser.avatar}}
          />
        )}
      </View>
      {/* END HEADER */}
      {/*List */}
      <View style={styles.list}>
        <List>
          <Text style={{...FONTS.h3, marginLeft: 20}}>Account</Text>
          <ListItemProfile
            iconLeft="user"
            title="Profile"
            action={() => {
              navigation.navigate('UserScreen', dataUser);
            }}
          />
          <ListItemProfile
            iconLeft="shopping-cart"
            title="My Orders"
            action={() => {
              navigation.navigate('OrderScreen');
            }}
          />
          <ListItemProfile iconLeft="credit-card" title="Payment" />
          <ListItemProfile iconLeft="map-marker" title="Shipping Address" />
        </List>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.text,
            marginLeft: 20,
            marginTop: 10,
          }}>
          Help
        </Text>
        <ListItemProfile iconLeft="info-circle" title="Help" />
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.text,
            marginLeft: 20,
            marginTop: 10,
          }}>
          Terms Conditions
        </Text>
        <ListItemProfile iconLeft="list-alt" title="Terms Conditions" />
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    height: height * 0.15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: 'green',
    borderRadius: 50,
  },
});
