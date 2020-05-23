import { combineReducers } from 'redux';
import { prospectReducer } from './prospectReducer';

export const rootReducer = combineReducers({
  prospect: prospectReducer,
});