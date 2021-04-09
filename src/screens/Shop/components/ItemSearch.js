import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, width, height, FONTS} from '../../../constants/theme';
const ItemSearch = ({name, onSelect, image}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image
        style={{width: 30, height: 30, paddingHorizontal: 20}}
        source={{uri: image}}
        resizeMode="cover"
      />
      <Text style={{...FONTS.body4, color: COLORS.text, paddingLeft: 10}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemSearch;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
