import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem, Overlay, Divider, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { fetchTodos } from '../redux/ActionCreators';

const TodoList = () => {
    const user = useSelector(state => state.users);
    const todos = useSelector(state => state.todos);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todoVisible, setTodoVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [completed, setCompleted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.token != null)
            dispatch(fetchTodos(user.token));
        
        console.log('Token: ' + user.token);
    }, [user.token]);

    const renderListItem = ({ item }) => {
        return(
            <ListItem title={item.title} 
                    containerStyle={{ backgroundColor: '#309fba', marginBottom: 10, borderRadius: 20 }}
                    titleStyle={{ color: '#ffffff' }}
                                    rightIcon={() => { return(item.isCompleted ? <FontAwesome5 
                                                        name='check-circle'
                                                        solid={true}
                                                        color='#ffffff'
                                                        size={16} /> : 
                                                        <FontAwesome5 name='times'
                                                        solid={true}
                                                        color='#f70000'
                                                        size={16} /> ) }}
                    onPress={() => {
                        setTitle(item.title);
                        setDescription(item.description);
                        setTodoVisible(!todoVisible);
                        item.isCompleted ? setCompleted(true) : setCompleted(false);
                    }}
                    onLongPress={() => setModalVisible(!modalVisible)} />);
    } 

    if(user.isLoading || todos.isLoading) {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator size='large' />
            </View>
        );
    }
    else {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
               <View style={styles.list}>
               {<FlatList data={todos.todos}
                        renderItem={renderListItem}
                        key={item => item._id} />  }
               </View>

               <Overlay isVisible={todoVisible} 
                    onBackdropPress={() => setTodoVisible(!todoVisible)}
                    overlayStyle={styles.overlayStyle}>
                    <Text style={{ fontSize: 22 }}>
                        Title: {title}
                    </Text>
                    <Divider style={{ height: 1, 
                            backgroundColor: '#e1e8ee', 
                            alignSelf: 'stretch', 
                            marginBottom: 10 }} />

                    <Text style={{ marginBottom: 10 }}>
                        Description: {description}
                    </Text>

                    {
                        completed ?
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name='check'
                                color='#00ff00'
                                solid={true}
                                size={16} />
                            <Text style={{ marginLeft: 4 }}>
                                Completed!
                            </Text>
                        </View> :
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name='times'
                                color='#ff0000'
                                solid={true}
                                size={16} />
                            <Text style={{ marginLeft: 6, color: '#ff0000' }}>
                                Not Completed!
                            </Text>
                        </View>
                    }
               </Overlay>

               <Overlay isVisible={modalVisible}
                        onBackdropPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }} >
                        Wanna edit or delete this todo?
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button title='Delete'
                            buttonStyle={{ borderRadius: 20, paddingHorizontal: 10 }} />
                        <Button title='Edit'
                            buttonStyle={{ paddingHorizontal: 18, borderRadius: 20 }} />
                        <Button title='Cancel'
                             buttonStyle={{ borderRadius: 20, paddingHorizontal: 10 }}
                             onPress={() => setModalVisible(!modalVisible)} />
                    </View>
               </Overlay>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    list: {
        height: '90%',
        width: '90%', 
    },
    overlayStyle: {
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default TodoList; 