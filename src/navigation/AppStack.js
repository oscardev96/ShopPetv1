import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './MainStack';
import AuthStack from './AuthStack';
import LoginScreen from '../screens/Auth/LoginScreen';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../redux/actions/authActions';
import {ActivityIndicator, View} from 'react-native';
import {COLORS} from '../constants/theme';
const Stack = createStackNavigator();
const AppStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
      console.log(token);
      setloading(false);
      dispatch(authActions.setLogin(token));
    }
  };

  const [loading, setloading] = useState(true);
  const isLogin = useSelector(state => state.authReducers.isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        {isLogin ? (
          <Stack.Screen name="AppStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
