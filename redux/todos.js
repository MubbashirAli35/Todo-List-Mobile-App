import * as ActionTypes from './ActionTypes';

export const Todos = (state = {
    isLoading: true,
    errMess: null,
    todos: []
}, action) => {
    switch(action.type) {
        case ActionTypes.TODOS_LOADING: {
            console.log('Hello l');

            return {
                ...state,
                isLoading: true,
                errMess: null,
                todos: []
            };
        }

        case ActionTypes.ADD_TODOS: {
            console.log('Hello');

            return {
                ...state,
                isLoading: false,
                errMess: null,
                todos: action.payload
            };
        }

        case ActionTypes.TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                todos: null
            };

        default:
            return state;
    }
};