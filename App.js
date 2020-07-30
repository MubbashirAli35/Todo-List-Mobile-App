import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

export default function App() {
  const StackNavigation = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName='Sign In' 
          screenOptions={{headerShown: false}}>
        <StackNavigation.Screen name='SignIn' component={SignIn} />
        <StackNavigation.Screen name='SignUp' component={SignUp} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

