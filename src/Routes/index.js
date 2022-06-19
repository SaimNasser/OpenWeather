import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import RNLocation from 'react-native-location';
import Home from '../screens/Home';
import Map from '../screens/Map';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();
RNLocation.configure({
  distanceFilter: 5.0
})
export default function Routes() {
  useEffect(() => {
      SplashScreen.hide({});
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

