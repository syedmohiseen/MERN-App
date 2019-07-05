import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import FormControl from "@material-ui/core/FormControl";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field,reduxForm } from "redux-form";
// import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link, BrowserRouter as Router,Route , Switch} from 'react-router-dom';

//material package
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
// import AttributeIcon from "@material-ui/icons/Assessment";

//material core styles
import {
    CssBaseline,
    Paper,
    Typography
    // Button
} from "@material-ui/core";

//input components
import TextField from "../../../common/Inputs/textField";

//flashmessage components
// import Snackbar from "../../../common/Presentators/SnackBar";

// styles
import styles from "../login.styles";

// actions
import * as LoginActions from "../redux/login.action";
import * as ErrorsActions from "../../Layout/redux/errors.actions";
import * as SuccessActions from "../../Layout/redux/success.actions";

const useStyles = makeStyles(theme => ({
    makeCenter: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '30em',
        height: '11em',
        'margin-top': '-9em',
        'margin-left': '-15em',
        border: '1px solid #ccc'
        // 'background-color': '#f5e6e6',
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1)
    }
}));
var menuArray = [
    { link: "/signUp", name: "SignUp" },
    
  ];
function Login(props) {
    console.log(props,"props")
    // const [name1, setName] = React.useState("");
    // const [password, setPassword] = React.useState("");
    const classes = useStyles();
    function onSubmitLogin(values) {
        alert(values.userName)

    }
    const { handleSubmit } = props;
    
    return (
        
        <div className={classes.makeCenter}>
            <div>
      {/* {menuArray.map((menu, index) => (
        <Link to={menu.link} key={menu.name}>
          <ListItem button>
            <ListItemText primary={menu.name} />
          </ListItem>
        </Link>
      ))} */}


    </div>
    
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
              ReactLogin
            </Typography>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
              <Field
                className={classes.textBase}
                name="username"
                autoComplete="username"
                component={TextField}
                label="UserName/Email"
                required
              />
              <br/>
              <Field
                className={classes.textBase}
                name="password"
                type="password"
                autoComplete="current-password"
                component={TextField}
                label="password"
                required
              />
              <br/>
              <Button
                className={classNames(classes.btn, classes.btnPrimary)}
                type="submit"
              >
                Login
              </Button>
              <Link to="/register" className="btn btn-link">Register</Link>
             
            </form>
            </Paper>
            </main>
            
            </div>
            
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func
};

let LoginForm = reduxForm({
    form: "loginForm" // a unique identifier for this form
})(Login);

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchToProps = props => {
    console.log("here");
    return {
        loginUser: LoginActions.loginUser,
        forgotPasswords: LoginActions.forgotPassword,
        errorMsg: ErrorsActions.errorMsg,
        successMsg: SuccessActions.successMsg
    }
};

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default withStyles(styles)(LoginForm);

