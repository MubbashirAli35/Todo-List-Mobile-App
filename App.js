import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  const StackNavigation = createStackNavigator();

  return (
    <Provider store={store} >
      <NavigationContainer>
        <StackNavigation.Navigator initialRouteName='Sign In' 
            screenOptions={{headerShown: false}}>
          <StackNavigation.Screen name='SignIn' component={SignIn} />
          <StackNavigation.Screen name='SignUp' component={SignUp} />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

