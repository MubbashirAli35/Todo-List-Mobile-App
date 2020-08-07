import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import TodoList from './Screens/TodoList';
import { loginUser, fetchTodos } from './redux/ActionCreators';

/*const mapStateToProps = state => {
    return {
        users: state.users,
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        fetchTodos: (token) => dispatch(fetchTodos(token))
    };
}; */

function Main() {
    const StackNavigation = createStackNavigator();

        // const { users, 
        //         loginUser,
        //         fetchTodos,
        //         todos } = props;

    return(
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName='Sign In' 
                screenOptions={{headerShown: false}}>
                <StackNavigation.Screen name='SignIn' component={SignIn} />
                <StackNavigation.Screen name='SignUp' component={SignUp} />
                <StackNavigation.Screen name='TodoList' component={TodoList} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Main;