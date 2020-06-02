import {createStore, combineReducers} from 'redux';
import prospectReducer from './modules/prospect';

const rootReducer = combineReducers({
  prospect: prospectReducer,
});

const store = createStore(rootReducer);

export default store;