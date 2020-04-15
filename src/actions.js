export const ADD_COUNT = 'ADD_COUNT'

export function addCount() {
  return {
    type: ADD_COUNT,
  }
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addCount());
    }, 1000);
  };
}