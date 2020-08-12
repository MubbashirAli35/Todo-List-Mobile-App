import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View,
        StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';

import { postTodo } from '../redux/ActionCreators';

const AddTodo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const user = useSelector(state => state.users);
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer} >
            
            <View style={styles.formContainer} >
                <Text h1 h1Style={{ fontWeight: 'normal' }} style={styles.formHeading}>
                    Add new Todo
                </Text>

                <View style={{ width: '100%', height: '45%', justifyContent: 'space-between' }}>
                    <Input inputStyle={styles.textInput}
                        inputContainerStyle={{ borderBottomColor: '#000000' }} 
                        placeholder=''
                        placeholderTextColor='#ffffff'
                        label='Title'
                        labelStyle={{ color: '#ffffff' }}
                        autoCapitalize='sentences'
                        onChangeText={title => setTitle(title)} />

                    <Input inputStyle={styles.textInput}
                        inputContainerStyle={{ borderBottomColor: '#000000' }} 
                        placeholder=''
                        placeholderTextColor='#ffffff'
                        label='Description'
                        labelStyle={{ color: '#ffffff' }}
                        autoCapitalize='sentences'
                        onChangeText={description => setDescription(description)}
                        multiline={true} />
                </View>

                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20, color: '#000000' }}
                    buttonStyle={{ borderRadius: 25, backgroundColor: '#fff' }}
                    title='Add' 
                    type='solid'
                    onPress={() => {//console.log('Title: ' + title + '\nDescription: ' + description);
                        dispatch(postTodo(title, description, user.token)); 
                        }}
                     />
            </View>

        </View>
    );
};

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
        justifyContent: 'space-between',
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
});

export default AddTodo;