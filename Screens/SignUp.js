import React, {useState} from 'react';
import { View, 
        StyleSheet, 
        StatusBar,
         } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Text, Input } from 'react-native-elements';

import { signUp } from '../redux/ActionCreators';

export default function SignUp(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <View style={styles.formContainer}>
                <Text h2 h2Style={{ fontWeight: 'normal' }} style={styles.formHeading}>
                    Sign Up
                </Text>
                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000' }} 
                    placeholder='Name'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='words'
                    onChangeText={(name) => setName(name)} />
                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000' }} 
                    placeholder='Email Address'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(email) => setEmail(email)} />
                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000' }}
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true} />
                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20, color: '#000000' }}
                    buttonStyle={{ borderRadius: 25, backgroundColor: '#fff' }}
                    title='Sign Up' 
                    type='solid'
                    onPress={() => {console.log('Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password);
                        dispatch(signUp(name, email, password));
                        props.navigation.navigate('TodoList');}}
                     />
            </View>

            <View style={styles.bottomText}>
                <Text style={{ fontSize: 20, color: '#fff', marginRight: 5 }}>
                    Already have an account? 
                </Text>
                <Text style={{ fontSize: 20, color: '#000' }}
                    onPress={() => props.navigation.navigate('SignIn')}>
                    Sign In 
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
})