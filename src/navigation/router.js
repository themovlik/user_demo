import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// screens
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';

// navigators
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Router;
