import React from 'react';
import { Provider, connect } from 'react-redux';

import Main from './Main';
import { ConfigureStore } from './redux/configureStore';

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) =>  dispatch(loginUser(email, password))
  };
}

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;

