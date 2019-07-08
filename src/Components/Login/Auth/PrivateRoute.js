import React from "react";
import { Route, Redirect } from "react-router-dom";
import store from "../../../Store/store";
console.log('store')
// const PrivateRoute = ({ component: Component, ...rest }) => (

//   <Route
//     {...rest}

//     render={props =>

//       store.getState().auth.isLoggedIn ? (<Component {...props} />) : (
//         <Redirect
//           to={{ pathname: "/login",state: {from: props.location} }}
//         />
//       )
//     }
//   />
// );

const PrivateRoute = function({ component: Component, ...rest }){
console.log(store.getState,"store.getState().auth.isLoggedIn")
return (<Route
    {...rest}

    render={props =>

      store.getState().auth.isLoggedIn ? (<Component {...props} gretings = {store.getState().auth}/>) : (
        <Redirect
          to={{ pathname: "/login",state: {from: props.location} }}
        />
      )
    }
  />
);
  }

export default PrivateRoute;
