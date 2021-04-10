import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../constants/theme';

const Loading = () => {
  return <ActivityIndicator size="large" color={COLORS.primary} />;
};

export default Loading;
