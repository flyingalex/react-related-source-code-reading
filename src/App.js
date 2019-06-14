import React from 'react';
import store from './store';
import { incrementAsync } from './actions';

const handleClick = () => {
  store.dispatch(incrementAsync());
};

store.subscribe(() => console.log(store.getState()));

const Example = () => {
  console.log('store.state', store.getState());
  return (
    <div onClick={handleClick}>
      store demo
    </div>
  );
};

export default Example;
