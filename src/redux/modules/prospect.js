const ADD = 'carmanagement/prospect/ADD';

const initialState = {
  prospects: [],
};

export default function prospectReducer(state = initialState, action) {
  switch(action.type) {
    case ADD:
      console.log('action', action.payload, action.type);
      return {
        ...state,
        prospects: state.prospects.concat(action.payload),
      }
    default:
      return state;
  }
}

export const actionTypes = {
  ADD,
}