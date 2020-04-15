import createHistory from 'history/createBrowserHistory';
import { init } from './rematch';
import * as models from './models';

export const history = createHistory();
export const store = init({
  models,
});
