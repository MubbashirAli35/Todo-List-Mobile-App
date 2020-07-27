import React, { useState } from 'react';
import { View,
         Text,
         TextInput,
         StyleSheet,
         StatusBar,
         Dimensions
       } from 'react-native';

import { Button } from 'react-native-elements';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const window = Dimensions.get('window');

    return(
        <View style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <Text style={styles.formHeading}>
                Sign In
            </Text>
            
            <TextInput placeholder='Email Address' 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.textInputFields}
                onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Password'
                autoCapitalize='none'
                secureTextEntry={true}
                style={styles.textInputFields}
                onChangeText={(text) => setPassword(text)} />

            <Button title='Sign In'
                titleStyle={{ fontSize: 22, marginHorizontal: 15, color: '#000000' }}
                buttonStyle={{ backgroundColor: '#ffffff' }}
                containerStyle={{ marginTop: 20 }}
                raised
                onPress={() => console.log('Email: ' + email + '\nPassword: ' + password + '\n' + Dimensions.get('window').width + ' x ' + Dimensions.get('window').height)}
                 />

            <View style={{ flexDirection: 'row', marginTop: 130 }} >
                <Text style={{ color: '#ffffff', fontSize: 17, marginRight: 5 }} >
                    Haven't registered yet? 
                </Text>
                <Text style={{ color: '#000000', fontSize: 17 }} onPress={() => console.log('Takes user to the Sign Up Screen')} >
                    Sign Up!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#309fba',
        paddingTop: 180
    },
    formHeading: {
        fontSize: 35,
        marginBottom: 40,
        color: '#ffffff'
    }, 
    textInputFields: {
        fontSize: 15,
        width: '70%',
        color: '#ffffff',
        marginBottom: 40,
        borderBottomColor: '#636363',
        borderBottomWidth: 1,
    },
    signInButton: {
        fontSize: 25
    }
})