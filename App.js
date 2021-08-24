
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraftScreen"
import StarMapScreen from "./screens/StarMapScreen";
import DailyPicScreen from './screens/DailyPicScreen';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="spaceCraft" component={SpaceCraftScreen}/>
      <Stack.Screen name="starMap" component={StarMapScreen}/>
      <Stack.Screen name="dailyPic" component={DailyPicScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
