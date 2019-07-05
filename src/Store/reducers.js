import { combineReducers } from "redux";

//other reducers
import authReducer from "../Components/Login/redux/login.reducer";


import ErrorReducer from '../Components/Layout/redux/errors.reducer'
import successReducer from '../Components/Layout/redux/success.reducer'


//form reducer
let { reducer: formReducer } = require("redux-form");


// Here we are bringing in the combineReducers function from redux. 
// This function takes an object of reducers. A reducer is a simple function. 
// combineReducers will combine these into a single function that operates as our top level reducer function. 
// We will be adding more to this reducer in the future.


export default combineReducers({
  //reducers
  auth: authReducer,
  errors:ErrorReducer,
  success:successReducer,
  form: formReducer
});
