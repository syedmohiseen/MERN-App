import React from 'react';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from "@material-ui/core/styles";
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {store} from './Store/store'
import PrivateRoute from './Components/Login/Auth';
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
                  <Route exact={true} path={"/login"} component = {Login}></Route>
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
