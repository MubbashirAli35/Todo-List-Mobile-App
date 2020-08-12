import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Switch } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';

const EditTodo = ({ route }) => {
    const [title, setTitle] = useState(route.params.title);
    const [description, setDescription] = useState(route.params.description);
    const [completed, setCompleted] = useState(route.params.completed)
    const user = route.user;
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer} >
            
            <View style={styles.formContainer} >
                <Text h1 h1Style={{ fontWeight: 'normal' }} style={styles.formHeading}>
                    Edit Todo
                </Text>

                <Input style={styles.textInput} 
                    placeholder={title}
                    autoCapitalize='sentences'
                    onChangeText={title => setTitle(title)} />

                <Input style={styles.textInput}
                    placeholder={description}
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
                        titleStyle={{ fontSize: 20, marginHorizontal: 20 }}
                        title='Edit' 
                        type='solid'
                        onPress={() => {console.log('Title: ' + title + '\nDescription: ' + description);
                            //dispatch(postTodo(title, description, user.token)); 
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
        borderBottomColor: '#666666',
        borderBottomWidth: 1,
        fontSize: 15,
        width: '100%',
        color: '#ffffff'
    },
});

export default EditTodo;