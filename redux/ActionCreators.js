import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const requestLogin = () => {
    return {
        type: ActionTypes.REQUEST_LOGIN,
    };
}

export const loginSuccess = (token) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: token
    };
}

export const loginFailed = (errMess) => {
    return {
        type:ActionTypes.LOGIN_FAILED,
        payload: errMess
    };
}

export const loginUser = (email, password) => (dispatch) => {
    dispatch(requestLogin());
    console.log(email + '\n' + password);
    return fetch(baseUrl + 'users/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then((response) => {
        //console.log('fetch chala tou hai');
        if(response.ok) {
            //console.log('Bambu response xD');

            return response;
        }
            
        
        else {
            console.log('error agaya');
            const error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, (error) => { throw error; })
    .then((response) => response.json())
    .then((user) => {
        console.log(JSON.stringify(user));
        dispatch(loginSuccess(user.token));
    })
    .catch((error) => {
        console.log(error);
        dispatch(loginFailed(error.message));
    });
}

export const todosLoading = () => {
    return {
        type: ActionTypes.TODOS_LOADING
    };
};

export const addTodos = (todos) => {
    console.log('Todos in Action: ' + JSON.stringify(todos));

    return {
        type: ActionTypes.ADD_TODOS,
        payload: todos
    };
};

export const todosFailed = (errMess) => {
    return {
        type: ActionTypes.TODOS_FAILED,
        payload: errMess
    };
};

export const fetchTodos = (token) => (dispatch) => {
    console.log('Call tou hogaya!');
    const bearerToken = 'Bearer ' + token;
    console.log(bearerToken)
    dispatch(todosLoading());

    return fetch(baseUrl + 'todos/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        },
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => { throw error; })
    .then(response => response.json())
    .then(todos => {
        dispatch(addTodos(todos));
        console.log('Then mein todos: ' + JSON.stringify(todos));
    }, error => { throw error })
    .catch(error => {
        dispatch(todosFailed(error.message));
        console.log(error.message);
    });
}