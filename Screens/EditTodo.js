import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const EditTodo = ({title, description, isCompleted}) => {
    const [tempTitle, setTitle] = useState(title);
    const [tempDescription, setDescription] = useState(description);
    const user = useSelector(state => state.users);
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer} >
            
            <View style={styles.formContainer} >
                <Text style={styles.formHeading}>
                    Edit Todo
                </Text>

                <TextInput style={styles.textInput} 
                    placeholder={title}
                    autoCapitalize='sentences'
                    onChangeText={title => setTitle(title)} />

                <TextInput style={styles.textInput}
                    placeholder={description}
                    autoCapitalize='sentences'
                    onChangeText={description => setDescription(description)}
                    multiline={true} />

                <Button 
                    titleStyle={{ fontSize: 20, marginHorizontal: 20 }}
                    title='Edit' 
                    type='solid'
                    onPress={() => {//console.log('Title: ' + title + '\nDescription: ' + description);
                        //dispatch(postTodo(title, description, user.token)); 
                        }}
                     />
            </View>

        </View>
    )
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

export default EditTodo;