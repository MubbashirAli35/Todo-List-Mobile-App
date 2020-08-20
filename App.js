import React from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;

