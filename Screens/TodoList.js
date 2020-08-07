import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodos } from '../redux/ActionCreators';

const TodoList = () => {
    const user = useSelector(state => state.users);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user.token != null)
            dispatch(fetchTodos(user.token));
        
        console.log('Token: ' + user.token);
    }, [user.token])

    const renderListItem = ({ item }) => {
        return(
            <ListItem title={item.title} 
                    containerStyle={{ backgroundColor: '#000000' }}
                    titleStyle={{ color: '#ffffff' }} />
        );
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
               {<FlatList style={styles.list} data={todos.todos}
                        renderItem={renderListItem}
                        key={item => item._id} />  }

               { /*<Text>
                    {JSON.stringify(todos.todos)}
               </Text>*/ }
            </View>
        )
    }
};

const styles = StyleSheet.create({
    list: {
        height: '80%',
        width: '80%'
    }
});

export default TodoList; 