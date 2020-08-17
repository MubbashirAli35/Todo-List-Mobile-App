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
    console.log('Error agaya na');

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

export const postTodo = (title, description, token) => (dispatch) => {
    console.log('Dispatch call hogaya');
    const bearerToken = 'Bearer ' + token;

    return fetch(baseUrl + 'todos/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => { throw error; })
    .then(response => response.json())
    .then((todo) => {
        console.log(JSON.stringify(todo));
        dispatch(fetchTodos(token));
    }, error => { throw error; })
    .catch(error => console.log(error.message));
};

export const deleteTodo = (todoId, token) => (dispatch) => {
    const bearerToken = 'Bearer ' + token;

    return fetch(baseUrl + 'todos/delete/', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        },
        body: JSON.stringify({
            todoId: todoId
        })
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => { throw error; })
    .then(response => response.json())
    .then((response) => {
        console.log(JSON.stringify(response));
        dispatch(fetchTodos(bearerToken));
    }, error => { throw error })
    .catch(error => console.log(error.message));
};

export const editTodo = (title, description, completed, todoId, token) => (dispatch) => {
    const bearerToken = 'Bearer ' + token;

    return fetch(baseUrl + 'todos/edit/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        },
        body: JSON.stringify({
            title: title, 
            description: description,
            isCompleted: completed,
            todoId: todoId
        })
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => { throw error })
    .then(response => response.json())
    .then((response) => {
        console.log(JSON.stringify(response));
        dispatch(fetchTodos(token));
    }, error => { throw error; })
    .catch(error => console.log(error.message));
};

export const signUp = (name, email, password) => (dispatch) => {
    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email, 
            password: password
        })
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => { throw error; })
    .then(response => response.json())
    .then(user => {
        console.log(JSON.stringify(user));
        dispatch(loginSuccess(user.token));
    }, error => { throw error; })
    .catch(error => {
        console.log(error.message);
        dispatch(loginFailed(error.message));
    });
};