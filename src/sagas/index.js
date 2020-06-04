import {all} from 'redux-saga/effects';
import prospectSaga from './prospect';

export default function* rootSaga() {
  yield all([prospectSaga()]);
}
