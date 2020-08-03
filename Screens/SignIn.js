import React, {useState} from 'react';
import { View, 
        StyleSheet, 
        Text, 
        StatusBar,
        TextInput } from 'react-native';

import { Button } from 'react-native-elements';
/*import { connect } from 'react-redux';
import { loginUser } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    };
} */

function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <View style={styles.formContainer}>
                <Text style={styles.formHeading}>
                    Sign In
                </Text>
                <TextInput style={styles.textInput} 
                    placeholder='Email Address'
                    autoCapitalize='none'
                    onChangeText={(email) => setEmail(email)} />
                <TextInput style={styles.textInput}
                    placeholder='Password'
                    autoCapitalize='none'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true} />
                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20 }}
                    title='Sign In' 
                    type='solid'
                    onPress={() => {console.log('Email: ' + email + '\nPassword: ' + password); props.loginUser(email, password)}}
                     />
            </View>

            <View style={styles.bottomText}>
                <Text style={{ fontSize: 20, color: '#fff', marginRight: 5 }}>
                    Haven't registered yet? 
                </Text>
                <Text style={{ fontSize: 20, color: '#000' }}
                    onPress={() => {console.log('Move to Sign Up'); props.navigation.navigate('SignUp')}}>
                    Sign Up 
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#309fba',
        justifyContent: 'space-around'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        height: '65%',
    },
    formHeading: {
        color: '#ffffff',
        fontSize: 35
    },
    textInput: {
        borderBottomColor: '#666666',
        borderBottomWidth: 1,
        fontSize: 15,
        width: '100%',
        color: '#ffffff'
    }, 
    bottomText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default SignIn;