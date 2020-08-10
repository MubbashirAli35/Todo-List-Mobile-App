import React, { useState } from 'react';
import { View,
        Text,
        StyleSheet,
        TextInput } from 'react-native';
import { Button } from 'react-native-elements'

const AddTodo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return(
        <View style={styles.mainContainer} >
            
            <View style={styles.formContainer} >
                <Text style={styles.formHeading}>
                    Add new Todo
                </Text>

                <TextInput style={styles.textInput} 
                    placeholder='Title'
                    autoCapitalize='sentences'
                    onChangeText={title => setTitle(title)} />

                <TextInput style={styles.textInput}
                    placeholder='Description'
                    autoCapitalize='sentences'
                    onChangeText={description => setDescription(description)}
                    multiline={true} />

                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20 }}
                    title='Add' 
                    type='solid'
                    onPress={() => {console.log('Title: ' + title + '\nDescription: ' + description); 
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
});

export default AddTodo;