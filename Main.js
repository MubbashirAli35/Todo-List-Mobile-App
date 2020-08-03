import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { loginUser } from './redux/ActionCreators';

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    };
};

function Main(props) {
    const StackNavigation = createStackNavigator();

    return(
        <NavigationContainer>
            <StackNavigation.Navigator initialRouteName='Sign In' 
                screenOptions={{headerShown: false}}>
                <StackNavigation.Screen name='SignIn'>
                    {() => <SignIn {...props} />}
                </StackNavigation.Screen>
                <StackNavigation.Screen name='SignUp'>
                    {() => <SignUp {...props} />}
                </StackNavigation.Screen>
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);