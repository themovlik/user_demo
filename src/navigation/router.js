import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// screens
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

// navigators
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default Router;
