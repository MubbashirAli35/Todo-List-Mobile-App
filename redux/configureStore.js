import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Users } from './users';
import { Todos } from './todos';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        users: Users,
        todos: Todos
    }), applyMiddleware(thunk));

    return store;
}