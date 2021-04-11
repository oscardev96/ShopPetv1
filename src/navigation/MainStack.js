import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Shop/HomeScreen';
import CartScreen from '../screens/Shop/CartScreen';
import NotificationScreen from '../screens/Shop/NotificationScreen';
import ChatScreen from '../screens/Shop/ChatScreen';
import ProfileScreen from '../screens/Shop/ProfileScreen';
import CheckOutScreen from '../screens/Shop/CheckOutScreen';
import CheckOutSuccess from '../screens/Shop/CheckOutSuccess';
import OrderScreen from '../screens/Shop/OrderScreen';
import OrderDetailScreen from '../screens/Shop/OrderDetailScreen';
import ProductDetailScreen from '../screens/Shop/ProductDetailScreen';
import UserScreen from '../screens/Shop/UserScreen';
import {SIZES, COLORS, width, height, viewBox} from '../constants/theme';
import Icon from '../constants/icon';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const numberCart = useSelector(state => state.cartReducers.numberCart);
  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: '#FFF',
      height: height * 0.1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,

      elevation: 22,
    },
  };
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName;
      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Cart':
          iconName = 'cart';
          break;
        case 'Notification':
          iconName = 'bell';
          break;
        case 'Chat':
          iconName = 'chat';
          break;
        case 'Profile':
          iconName = 'user';
          break;
        default:
          iconName = 'home';
          break;
      }
      return (
        <Icon
          name={iconName}
          width="30"
          height="30"
          viewBox={viewBox[iconName]}
          fill={focused ? COLORS.primary : '#4E4E50'}
        />
      );
    },
  });
  const cartOptions = {
    tabBarBadge: numberCart != 0 ? numberCart : null,
    tabBarBadgeStyle: {
      position: 'absolute',
      top: Platform.OS === 'android' ? 15 : 0,
    },
  };
  return (
    <Tab.Navigator
      headerMode={false}
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} options={cartOptions} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="HomeScreen" component={HomeTab} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="NoticationScreen" component={NotificationScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="CheckOutSuccess" component={CheckOutSuccess} />
      <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
