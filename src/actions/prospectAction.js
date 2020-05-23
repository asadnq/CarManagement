import { ADD_PROSPECT } from '../constants/prospect';

export function addProspect(payload) {
  return {
    type: ADD_PROSPECT,
    payload
  };
}