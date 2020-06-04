const ADD = 'carmanagement/prospect/ADD';
const ADD_FAILED = 'carmanagement/prospect/ADD_FAILED';
const ADD_SUCCEED = 'carmanagement/prospect/ADD_SUCCEED';

const FETCH = 'carmanagement/prospect/FETCH';
const FETCH_SUCCEED = 'carmanagement/prospect/FETCH_SUCCEED';
const FETCH_FAILED = 'carmanagement/prospect/FETCH_FAILED';

const initialState = {
  prospects: [],
  addProspectStatus: '',
};

export default function prospectReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        getProspectsStatus: 'pending',
      }
    case FETCH_SUCCEED:
      return {
        ...state,
        prospects: action.payload,
        getProspectsStatus: 'succeed',
      };
    case FETCH_FAILED:
      return {
        ...state,
        getProspectsStatus: 'failed',
      };
    case ADD:
      return {
        ...state,
        addProspectStatus: 'pending',
      };
    case ADD_SUCCEED:
      return {
        ...state,
        prospects: state.prospects.concat(action.payload),
        addProspectStatus: 'succeed',
      };
    case ADD_FAILED:
      return {
        ...state,
        addProspectStatus: 'failed',
      };
    default:
      return state;
  }
}

export const actionTypes = {
  ADD,
  ADD_SUCCEED,
  ADD_FAILED,
  FETCH,
  FETCH_SUCCEED,
  FETCH_FAILED,
};
