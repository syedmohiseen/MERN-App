import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from "@material-ui/core/styles";
import RegistrationForm from './Components/Registartion/RegistrationForm'

import './App.css';

import theme from "./common/Styles/Theme";
import store from './Store/store'

import PrivateRoute from "./Components/Login/Auth/PrivateRoute";
import Login from './Components/Login';
import Layout from './Components/Layout';

class App extends React.Component {
  
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className='App'>
            <HashRouter>
              <div>
                <Switch>
                  <Route exact={true} path={"/login"} component={Login}/>
                  <Route path='/register' component={RegistrationForm} />
                  <PrivateRoute path={"/"} component={Layout}/>
                </Switch>
              </div>
            </HashRouter>

          </div>
        </Provider>

      </MuiThemeProvider>
    );
  }
}

export default App;
