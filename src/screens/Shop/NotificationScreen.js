import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, width, height} from '../../constants/theme';
import IconF from 'react-native-vector-icons/FontAwesome';

import Moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
const NotificationScreen = ({navigation}) => {
  const notifications = useSelector(state => state.notifyReducers.notify);
  const renderDate = date => {
    Moment.locale('en');
    return <Text>{Moment(date).format('dd MMM YYYY')}</Text>;
  };
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderItem}>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <IconF
            name="shopping-bag"
            size={20}
            style={{width: 50, height: 40}}
            color={COLORS.text}
          />
          <View>
            <Text
              style={{...FONTS.body4, color: COLORS.primary, flexWrap: 'wrap'}}>
              {item.title}
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.text,
                flexWrap: 'wrap',
                marginTop: 5,
              }}>
              {item.body}
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.textSecond,
            marginLeft: 70,
            marginTop: 10,
          }}>
          {renderDate(item.date)}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,

        paddingTop: 20,
      }}>
      <Text style={{...FONTS.body2, color: COLORS.text, marginLeft: 20}}>
        Notification
      </Text>

      <View style={styles.list}>
        {notifications && notifications.length > 0 ? (
          <FlatList
            data={notifications}
            renderItem={_renderItem}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  list: {
    width: width,
    height: height * 0.7,
  },
  renderItem: {
    width: width - 30,
    paddingVertical: 20,
    borderBottomColor: COLORS.backgroundSecond,
    borderBottomWidth: 1,
  },
});
