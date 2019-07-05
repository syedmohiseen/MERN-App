// import {
//     loadUserState,
//     saveUserState,
//     clearUserState
//   } from "../Auth/loadUserState";
//   const loadUserState = loadUserState();
  export default function(state = {}, action) {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        let user = { ...action.data, isLoggedIn: true };
        // saveUserState(user);
        return user;
  
      case "LOGIN_ERROR":
        return {
          ...state,
          loginError: action.data
        };
      case "LOGOUT":
        // clearUserState();
        return {};
  
      default:
        return state;
    }
  }
  