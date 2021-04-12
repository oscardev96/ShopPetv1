import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS, FONTS, width, height} from '../../constants/theme';
import IconF from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
const NotificationScreen = ({navigation}) => {
  const _renderItem = () => {
    return (
      <TouchableOpacity style={styles.renderItem}>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <IconF
            name="shopping-bag"
            size={20}
            style={{width: 50, height: 40}}
            color={COLORS.text}
          />
          <Text style={{...FONTS.body4, color: COLORS.text, flexWrap: 'wrap'}}>
            Your order 2 Royal Canin has been shipped!dsadsd
          </Text>
        </View>
        <Text
          style={{...FONTS.body5, color: COLORS.textSecond, marginLeft: 70}}>
          5 min
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
      <View style={styles.list}>{_renderItem()}</View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  list: {
    width: width,
    height: height * 0.9,
    alignItems: 'center',
  },
  renderItem: {
    width: width - 30,
    paddingVertical: 20,
    borderBottomColor: COLORS.backgroundSecond,
    borderBottomWidth: 1,
  },
});
