import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import TodoList from './Screens/TodoList';

function Main() {
    const StackNavigation = createStackNavigator();
    const TodoStackNavigator = createStackNavigator();

    const TodoListNavigator = () => {
        return(
            <TodoStackNavigator.Navigator initialRouteName='TodoList'
                screenOptions={{ headerTitle: 'Todos', 
                    headerRight: () => {return <FontAwesome5 name='pen-fancy' style={{ paddingRight: 20 }} size={18} />}}}>
                <TodoStackNavigator.Screen name='TodoList' component={TodoList} />
            </TodoStackNavigator.Navigator>
        );
    }

    return(
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName='Sign In' 
                screenOptions={{headerShown: false}}>
                <StackNavigation.Screen name='SignIn' component={SignIn} />
                <StackNavigation.Screen name='SignUp' component={SignUp} />
                <StackNavigation.Screen name='TodoList' component={TodoListNavigator} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Main;