import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import { editTodo } from '../redux/ActionCreators';

const EditTodo = ({ route }) => {
    const [title, setTitle] = useState(route.params.title);
    const [description, setDescription] = useState(route.params.description);
    const [completed, setCompleted] = useState(route.params.completed)
    const user = route.params.user;
    const todoId = route.params.todoId;
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer} >
            
            <View style={styles.formContainer} >
                <Text h1 h1Style={{ fontWeight: 'normal' }} style={styles.formHeading}>
                    Edit Todo
                </Text>

                <Input inputStyle={styles.textInput} 
                    defaultValue={title}
                    inputContainerStyle={{ borderBottomColor: '#000000' }}
                    containerStyle={{ width: '100%' }}
                    autoCapitalize='sentences'
                    onChangeText={title => setTitle(title)} />

                <Input inputStyle={styles.textInput}
                    inputContainerStyle={{ borderBottomColor: '#000000', width: '100%' }}
                    defaultValue={description}
                    autoCapitalize='sentences'
                    onChangeText={description => setDescription(description)}
                    multiline={true} />

                <View style={{ flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    width: '100%' }} >
                    <Text style={{ marginRight: 0, fontSize: 20, color: '#ffffff' }}>
                        Completed
                    </Text>

                    <Switch onValueChange={() => setCompleted(!completed)}
                        value={completed}
                        trackColor={{ false: '#ff0000', true: '#00ff00' }} />
                </View>

                <View>
                    <Button 
                        titleStyle={{ fontSize: 20, marginHorizontal: 20, color: '#000000' }}
                        buttonStyle={{ borderRadius: 25, backgroundColor: '#ffffff' }}
                        title='Edit' 
                        type='solid'
                        onPress={() => {console.log('Title: ' + title + '\nDescription: ' + description + '\nComp' + completed);
                            dispatch(editTodo(title, description, completed, todoId, user.token)); 
                            }}
                        />
                </View>
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
});

export default EditTodo;