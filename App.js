import React from 'react';
import {View, Text} from 'react-native';
import {FONTS, COLORS} from './src/constants/theme';
const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{...FONTS.h2, color: COLORS.primary}}>Shop Pet</Text>
    </View>
  );
};

export default App;
