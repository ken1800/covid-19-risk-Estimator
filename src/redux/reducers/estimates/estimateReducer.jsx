import * as actionTypes from "../../actions/types";
const initialState = {
  inputs: null,
};

const estimateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTED_DATA:
      return {
        ...state,
        inputs: action.payload,
      };
    default:
      return state;
  }
};

export default estimateReducer;
