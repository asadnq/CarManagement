import {call, put, all, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {actionTypes} from '../redux/modules/prospect';

const url = 'https://car-management-api.herokuapp.com';

function addProspect(body) {
  return axios.post(`${url}/prospects`, body);
}

function* workerAddProspect(action) {
  try {
    const response = yield call(addProspect, action.payload);
    yield put({type: actionTypes.ADD_SUCCEED, payload: response.data});
  } catch (error) {
    yield put({type: actionTypes.ADD_FAILED, error: error});
  }
}

export default function* root() {
  yield all([takeEvery(actionTypes.ADD, workerAddProspect)]);
}
