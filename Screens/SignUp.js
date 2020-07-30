import React, {useState} from 'react';
import { View, 
        StyleSheet, 
        Text, 
        StatusBar,
        TextInput } from 'react-native';

import { Button } from 'react-native-elements';

export default function SignUp(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <View style={styles.formContainer}>
                <Text style={styles.formHeading}>
                    Sign Up
                </Text>
                <TextInput style={styles.textInput} 
                    placeholder='Name'
                    autoCapitalize='words'
                    onChangeText={(name) => setName(name)} />
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
                    title='Sign Up' 
                    type='solid'
                    onPress={() => console.log('Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password)}
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
})