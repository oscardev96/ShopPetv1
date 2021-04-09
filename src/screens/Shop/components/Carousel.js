import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window');
export default class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'item 1',
          image: '../../../assets/images/slide_1.png',
        },
        {
          title: 'Item 2',
          image: '../../../assets/images/slide_2.png',
        },
        {
          title: 'Item 3',
          image: '../../../assets/images/slide_1.png',
        },
      ],
    };
  }
  _renderItem = ({item, index}) => {
    return (
      <Image
        source={require('../../../assets/images/slide_2.png')}
        resizeMode="cover"
      />
    );
  };
  render() {
    return (
      <View
        style={{
          width: width * 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          firstItem={1}
          sliderWidth={width * 0.9}
          itemWidth={width * 0.75}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}
