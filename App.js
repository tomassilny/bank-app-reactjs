import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Zaulo',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#101014',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Main" component={MainScreen} options={{
          title: 'Zaulo',
          headerShown: false,
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#101014',
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}