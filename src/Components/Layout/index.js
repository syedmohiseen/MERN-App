import React, { useState } from "react";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";

//material ui
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

//material ui styling
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  Typography,
  IconButton,
  List,
  Menu,
  MenuItem
} from "@material-ui/core";

//custom style
import styles from "./layout.styles";

//material components
import MenuIcon from "@material-ui/icons/Menu";
import PowerIcon from "@material-ui/icons/PowerSettingsNew";
import SettingIcon from "@material-ui/icons/Settings";

//components and presentators
import LeftMenu from "./LeftMenu";
import BreadCrum from "../../common/Presentators/BreadCrum";
import Snackbar from "../../common/Presentators/SnackBar";

// import Dashboard from "../Dashboard/Index";
// import Users from "../Users";
// import Organizations from "../Organizations";
// import Products from "../Products";
// import Brands from "../Brands";
// import Categories from "../Categories";
// import ProductTypes from "../ProductType";
// import Partners from "../Partners";
// import Merchants from "../Merchants";
// import Inventories from "../Inventories";
// import Orders from "../Orders";
// import Discounts from "../Discounts"
// import Dealers from '../Dealers'
// import PageNotFound from "../../Common/Presentators/PageNotFound";

//store
import store from "../../Store/store";
//actions
import * as AuthActions from "../Login/redux/login.action";
import * as SuccessActions from "./redux/success.actions";
//images
// import logo from "../../Common/Images/logo.svg";

function Index(props) {
  //state
  const [openDrawer, setOpenDrawer] = useState(true);
  const [setting, setSetting] = useState(null);
  const SuperAdmin =
    props.auth &&
    props.auth.user &&
    props.auth.user.roles &&
    props.auth.user.roles.indexOf("SuperAdmin") > -1;

  const handleSettingOpen = event => {
    setSetting(event.currentTarget);
  };
  const handleSettingClose = () => {
    setSetting(null);
  };

  if (props.location.pathname && props.auth && props.auth.tokenValue) {
    let obj = {
      token: props.auth.tokenValue
    };
    props.validateToken(obj, (err, result) => {
      if (result && result.userId) {
      } else {
        props.history.push("/login");
        store.dispatch(AuthActions.logout());
        window.location.reload();
      }
    });
  }

  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: openDrawer
        })}
      >
        <Toolbar disableGutters={!openDrawer}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
            className={classNames(classes.IconButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.grow}
          >
            Sample
          </Typography>
          {/* {props.auth && props.auth.user && props.auth.user.username} */}
          {(props.auth.user.status === "Active" || SuperAdmin) && (
            <IconButton
              aria-owns={setting ? "settings-menu" : undefined}
              aria-haspopup="true"
              color="inherit"
              className={classNames(classes.IconButton)}
              onClick={handleSettingOpen}
            >
              <SettingIcon />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            className={classNames(classes.IconButton)}
            onClick={() => {
              store.dispatch(AuthActions.logout());
              props.history.push("/login");
            }}
          >
            <PowerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer
          })
        }}
        open={openDrawer}
      >
        <div className={classes.toolbar}>
          {/* <img className={classes.logoToolbar} src={logo} alt={"logo"} /> */}
        </div>
        <Divider />
        <List>
          <LeftMenu
            roles={props.auth.user.roles}
            status={props.auth.user.status}
          />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BreadCrum
          breadCrum={props.location.pathname}
          baseUrl={props.match.url}
        />
        {/* {!(props.auth.user.status === "Active") && !SuperAdmin ? (
          // <Route path="/" exact={true} component={Partners} />
        ) : ( */}
          {/* // <Route path="/" exact={true} component={Dashboard} /> */}
        {/* // )} */}
        {/*users routing */}
        {/* <Route path="/users/:mode/:id" exact={true} component={Users} />
        <Route path="/users/:mode" exact={true} component={Users} />
        <Route path="/users" exact={true} component={Users} /> */}

        {/*organizations routing */}
        {/* {SuperAdmin ? (
          <Route
            path="/organizations/:mode/:id"
            exact={true}
            component={Organizations}
          />
        ) : (
          <Route
            path="/organizations/:mode/:id"
            exact={true}
            component={PageNotFound}
          />
        )} */}
        {/* {SuperAdmin ? (
          <Route
            path="/organizations/:mode"
            exact={true}
            component={Organizations}
          />
        ) : (
          <Route
            path="/organizations/:mode"
            exact={true}
            component={PageNotFound}
          />
        )} */}
        {/* {SuperAdmin ? (
          <Route path="/organizations" exact={true} component={Organizations} />
        ) : (
          <Route path="/organizations" exact={true} component={PageNotFound} />
        )} */}

        {/*products routing */}
        {/* <Route path="/products/:mode/:id" exact={true} component={Products} />
        <Route path="/products/:mode" exact={true} component={Products} />
        <Route path="/products" exact={true} component={Products} /> */}

        {/*brands routing */}
        {/* <Route path="/brands/:mode/:id" exact={true} component={Brands} />
        <Route path="/brands/:mode" exact={true} component={Brands} />
        <Route path="/brands" exact={true} component={Brands} /> */}
        {/* producttypes routing */}
        {/* <Route
          path="/producttypes/:mode/:id"
          exact={true}
          component={ProductTypes}
        /> */}
        {/* <Route
          path="/producttypes/:mode"
          exact={true}
          component={ProductTypes}
        /> */}
        {/* <Route path="/producttypes" exact={true} component={ProductTypes} /> */}
        {/*Categories routing */}
        {/* <Route
          path="/categories/:mode/:id"
          exact={true}
          component={Categories}
        /> */}
        {/* <Route path="/categories/:mode" exact={true} component={Categories} />
        <Route path="/categories" exact={true} component={Categories} /> */}

        {/*merchants routing */}
        {/* <Route path="/merchants/:mode/:id" exact={true} component={Merchants} />
        <Route path="/merchants/:mode" exact={true} component={Merchants} />
        <Route path="/merchants" exact={true} component={Merchants} />

        {/*parnters routing */}
        {/* <Route path="/partners" exact={true} component={Partners} /> */}

        {/* inventories */}
        {/* <Route
          path="/inventories/:mode/:id"
          exact={true}
          component={Inventories}
        /> */} */}
        {/* <Route path="/inventories/:mode" exact={true} component={Inventories} />
        <Route path="/inventories" exact={true} component={Inventories} /> */}

        {/*orders routing */}
        {/* <Route path="/orders/:mode/:id" exact={true} component={Orders} />
        <Route path="/orders/:mode" exact={true} component={Orders} />
        <Route path="/orders" exact={true} component={Orders} />

        <Route path="/discounts/:mode/:id" exact={true} component={Discounts} />
        <Route path="/discounts/:mode" exact={true} component={Discounts} />
        <Route path="/discounts" exact={true} component={Discounts} />
        {/* dealers */}
        {/* <Route path="/dealers/:mode/:id" exact={true} component={Dealers} />
        <Route path="/dealers/:mode" exact={true} component={Dealers} />
        <Route path="/dealers" exact={true} component={Dealers} /> */}
 */}

        {/* settings menu drop down */}
        <div>
          <Menu
            id="settings-menu"
            anchorEl={setting}
            open={Boolean(setting)}
            onClose={handleSettingClose}
          >
            <Link to="/users/changePassword">
              <MenuItem>Change Password</MenuItem>
            </Link>
            <Link to={`/merchants/edit_self/${props.auth.user.organization}`}>
              <MenuItem>Company</MenuItem>
            </Link>
          </Menu>
        </div>
        <div>
          {props.success && (
            <Snackbar open={true} msgType={"success"} msg={props.success} />
          )}
        </div>
        <div>
          {props.errors && (
            <Snackbar open={true} msgType={"error"} msg={props.errors} />
          )}
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  success: state.success.data,
  errors: state.errors.data
});

const mapDispatchToProps = {
  successMsg: SuccessActions.successMsg,
  validateToken: AuthActions.validateToken
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Index));
