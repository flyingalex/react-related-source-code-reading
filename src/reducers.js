import { combineReducers } from './redux'
import {
  ADD_COUNT,
} from './actions'


export function count(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count,
})

export default rootReducer