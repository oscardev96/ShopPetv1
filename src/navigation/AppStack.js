import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './MainStack';
import AuthStack from './AuthStack';
import LoginScreen from '../screens/Auth/LoginScreen';
const Stack = createStackNavigator();
const AppStack = () => {
  const [isLogin, setisLogin] = useState(true);
  const [loading, setloading] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        {loading ? (
          <Stack.Screen name="Loading" component={LoginScreen} />
        ) : isLogin ? (
          <Stack.Screen name="AppStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
