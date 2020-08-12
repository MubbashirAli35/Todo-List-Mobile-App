import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import TodoList from './Screens/TodoList';
import AddTodo from './Screens/AddTodo';
import EditTodo from './Screens/EditTodo';

function Main() {
    const StackNavigation = createStackNavigator();
    const TodoStackNavigator = createStackNavigator();

    const TodoListNavigator = ({ navigation }) => {


        return(
            <TodoStackNavigator.Navigator initialRouteName='TodoList'
                screenOptions={{ headerTitle: 'Todos', 
                    headerRight: () => {return <FontAwesome5 name='feather-alt' 
                                                style={{ paddingRight: 20 }} 
                                                size={18}
                                                solid={true} 
                                                onPress={() => navigation.navigate('AddTodo')} />}}}>
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
                <StackNavigation.Screen  name='AddTodo' component={AddTodo} />
                <StackNavigation.Screen name='EditTodo' component={EditTodo} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Main;