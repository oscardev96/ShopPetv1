import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';
import Moment from 'moment';
import {Rating, AirbnbRating} from 'react-native-ratings';

const CommentProductDetail = ({user, dateComment, starRating, comment}) => {
  const renderDate = date => {
    Moment.locale('en');
    return <Text>{Moment(date).format('dd MMM YY')}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text
          style={{
            ...FONTS.body4,
            paddingRight: 20,
            color: COLORS.text,
            borderRightColor: COLORS.backgroundSecond,
            borderRightWidth: 1,
          }}>
          {user}
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.textSecond}}>
          {renderDate(dateComment)}
        </Text>
      </View>
      {/* end user */}
      <View style={{width: 90, marginLeft: 20, marginTop: 10}}>
        <Rating
          type="custom"
          // ratingImage={require('../../assets/images/star.png')}
          ratingCount={5}
          imageSize={20}
          startingValue={starRating}
          showRating={false}
          readonly={true}
          ratingColor={COLORS.primary}
        />
      </View>
      {/* end rating star */}
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.text,
          marginLeft: 20,
          marginTop: 10,
        }}>
        {comment}
      </Text>
    </View>
  );
};

export default CommentProductDetail;
const styles = StyleSheet.create({
  container: {
    width,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.backgroundSecond,
    paddingVertical: 20,
  },
  user: {
    flexDirection: 'row',
    width,
    paddingLeft: 20,
  },
});
