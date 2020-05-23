import { ADD_PROSPECT } from '../constants/prospect';

const initialState = {
  prospects: [],
};

export const prospectReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROSPECT:
      return {
        ...state,
        prospects: state.prospects.concat(action.payload),
      };
    default:
      return state;
  }
}
