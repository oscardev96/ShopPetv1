import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {ListItem, Text, Left, Right, Icon} from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../../../constants/theme';
const ListItemProfile = ({iconLeft, action, title}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <ListItem>
        <IconF name={iconLeft} style={styles.icon} />
        <Left>
          <Text style={{...FONTS.body3, marginLeft: 30, color: COLORS.text}}>
            {title}
          </Text>
        </Left>
        <Right>
          <IconF name="chevron-right" style={styles.icon} />
        </Right>
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

export default ListItemProfile;
const styles = StyleSheet.create({
  icon: {
    color: '#333',
    fontSize: 20,
  },
});
