import React from 'react';
import { init } from './rematch';
import { Provider } from 'react-redux';
import Demo from './pages/Demo';
import * as models from './models';

// generate Redux store
const store = init({
  models,
});
const Root = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
);

export default Root;
