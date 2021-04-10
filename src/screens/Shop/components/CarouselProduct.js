import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';

const CarouselProduct = ({images}) => {
  const [active, setactive] = useState(0);
  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != active) {
      setactive(slide);
    }
  };

  return (
    <View style={{width: width * 0.4, alignItems: 'center'}}>
      <ScrollView
        scrollEventThrottle
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={change}>
        {images.map((item, index) => {
          return (
            <Image
              source={{uri: item}}
              key={index}
              style={{
                width: width * 0.4,
                marginTop: 20,
                height: height * 0.2,
                resizeMode: 'cover',
              }}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          flexDirection: 'row',
          width: 100,
        }}>
        {images.map((i, index) => {
          return (
            <Text
              style={index === active ? styles.dotActive : styles.dot}
              key={index}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};
export default CarouselProduct;
const styles = StyleSheet.create({
  dot: {
    color: '#ECECEC',
    fontSize: 8,
    paddingHorizontal: 5,
  },
  dotActive: {
    color: COLORS.primary,
    fontSize: 12,
  },
});
