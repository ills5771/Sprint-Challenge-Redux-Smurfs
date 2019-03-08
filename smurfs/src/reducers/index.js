/*
  Be sure to import in all of the action types from `../actions`
*/
import React from "react";

import { GET_SMURFS, GETTING_SMURFS } from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
 
*/
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  getSmurfs: false,
  error: null
};
const reducer = (initialState, action) => {
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
