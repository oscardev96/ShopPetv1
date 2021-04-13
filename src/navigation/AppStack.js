import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './MainStack';
import AuthStack from './AuthStack';
import LoginScreen from '../screens/Auth/LoginScreen';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../redux/actions/authActions';
import {fcmService} from '../config/FCMService';
import {localNotificationService} from '../config/LocalNotificationService';
import messaging from '@react-native-firebase/messaging';
import * as notifyActions from '../redux/actions/notifyActions';

const Stack = createStackNavigator();
const AppStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
      setloading(false);
      dispatch(authActions.setLogin(token));
    }
  };
  useEffect(() => {
    fcmService.requestUserPermission();
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.config(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister : ', token);
      messaging()
        .subscribeToTopic('HDSKY_ALL_CUSTOMERS')
        .then(() => console.log('Subscribed to HDSKY_ALL_CUSTOMERS!'));
    }
    function onNotification(notify) {
      if (notify) {
        let data = {
          body: notify.body,
          title: notify.title,
          seen: false,
          date: new Date(),
        };
        dispatch(notifyActions.saveNotify(data));
      }
      const options = {
        soundName: 'default',
        playSound: true,
      };
      localNotificationService.buatChannel('2');
      localNotificationService.showlocalNotification(
        '2',
        notify.title,
        notify.body,
      );
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotification: ', notify);
      // navigation.navigate('NoticationScreen');
    }
    localNotificationService.cancelAllLocalNotifications();
    // return () => {
    //   console.log('[App] unRegister');
    //   fcmService.unRegister();
    //   localNotificationService.unregister();
    // };
  }, []);
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
