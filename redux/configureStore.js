import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Users } from './users';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        users: Users
    }), applyMiddleware(thunk));

    return store;
}