import * as ActionTypes from './ActionTypes';

export const Users = (state = {
    isLoading: true, 
    errMess: null,
    token: null,
}, action) => {
    switch(action.type) {
        case ActionTypes.REQUEST_LOGIN:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                token: null,
            };

        case ActionTypes.LOGIN_SUCCESS: {
            //console.log('Hello World!');
            return {
                ...state,
                isLoading: false,
                errMess: null,
                token: action.payload,
            };
        }

        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false, 
                errMess: action.payload,
                token: null,
            };

        default:
            return state;
    }
}