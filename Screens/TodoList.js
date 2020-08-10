import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
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
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.token != null)
            dispatch(fetchTodos(user.token));
        
        console.log('Token: ' + user.token);
    }, [user.token]);

    const renderListItem = ({ item }) => {
        return(
            <ListItem title={item.title} 
                    containerStyle={{ backgroundColor: '#309fba', marginBottom: 10 }}
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
                    }} />);
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

               <Overlay isVisible={visible} 
                    onBackdropPress={() => setVisible(!visible)}
                    overlayStyle={styles.overlayStyle}>
                    <Text style={{ fontSize: 22 }}>
                        {title}
                    </Text>
                    <Text>
                        {description}
                    </Text>
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
        justifyContent: 'space-between'
    }
});

export default TodoList; 