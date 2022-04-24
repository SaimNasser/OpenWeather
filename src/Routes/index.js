import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Map from '../screens/Map';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader'
const Stack = createStackNavigator();
import RNLocation from 'react-native-location';
RNLocation.configure({
  distanceFilter: 5.0
})
export default function Routes() {
  useEffect(() => {
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    })
  }, [])

  return (
    <NavigationContainer>
      <Loader />
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

