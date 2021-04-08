import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{width: 200, height: 200, backgroundColor: 'green'}}
        onPress={async () => {
          await AsyncStorage.removeItem('@token');
        }}>
        <Text style={{color: '#EF882F', fontSize: 20, fontWeight: '600'}}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
