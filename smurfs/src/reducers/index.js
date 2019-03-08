import {
  GET_SMURFS,
  GETTING_SMURFS,
  ADDING_SMURF,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  getSmurfs: false,
  addingSmurf: false,
  addSmurf: false,
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return {
        ...state,
        gettingSmurfs: true
      };
    case GET_SMURFS:
      return {
        ...state,
        getSmurfs: true,
        error: null,
        smurfs: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF:
      return {
        ...state,
        addSmurf: true,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
