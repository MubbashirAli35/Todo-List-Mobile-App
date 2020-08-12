import React, {useState} from 'react';
import { View, 
        StyleSheet,  
        StatusBar,
         } from 'react-native';

import { Button, Text, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux'

import { loginUser } from '../redux/ActionCreators';

function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const { navigation } = props;

    return(
        <View style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <View style={styles.formContainer}>
                <Text h1 h1Style={{ fontWeight: 'normal' }} style={styles.formHeading}>
                    Sign In
                </Text>
                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000' }}
                    placeholder='Email Address'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(email) => setEmail(email)}
                     />
                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000' }}
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                     />
                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20, color: '#000' }}
                    buttonStyle={{ borderRadius: 25, backgroundColor: '#fff' }}
                    title='Sign In' 
                    type='solid'
                    onPress={() => {console.log('Email: ' + email + '\nPassword: ' + password); 
                        dispatch(loginUser(email, password));
                        props.navigation.navigate('TodoList')}}
                     />
            </View>

            <View style={styles.bottomText}>
                <Text style={{ fontSize: 20, color: '#fff', marginRight: 5 }}>
                    Haven't registered yet? 
                </Text>
                <Text style={{ fontSize: 20, color: '#000' }}
                    onPress={() => {console.log('Move to Sign Up'); navigation.navigate('SignUp')}}>
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
        justifyContent: 'space-evenly'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '85%',
        height: '75%',
    },
    formHeading: {
        color: '#ffffff',
        fontSize: 35
    },
    textInput: {
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