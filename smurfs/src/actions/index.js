import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const GET_SMURFS = "GET_SMURF";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
