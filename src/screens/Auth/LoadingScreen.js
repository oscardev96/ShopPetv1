import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants/theme';
const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default LoadingScreen;
