import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//material ui
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

//icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

//actions
import * as SuccessActions from "../../Components/Layout/redux/success.actions";
import * as ErrorActions from "../../Components/Layout/redux/errors.actions";

function SnackBar(props) {
  //hooks
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  useEffect(() => {   
    setTimeout(
      () => {
        props.successMsg(null);
        props.errorMsg(null);
      },
      1000
    );
  }, [props.msg, props.msgType]);

  useEffect(() => {
    setOpenSnackbar(true);
  }, [props.msg, props.msgType]);

  const FlashMessage = (msgType, msg) => {
    switch (msgType) {
      case "error":
        return (
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="error"
            message={msg}
          />
        );
      case "success":
        return (
          <MySnackbarContentWrapper
            variant="success"
            onClose={handleClose}
            message={msg}
          />
        );
      default:
        return "none";
    }
  };

  const { msgType, msg } = props;

  let snackbarContent = (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={openSnackbar}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      {FlashMessage(msgType, msg)}
    </Snackbar>
  );
  return snackbarContent;
}

const mapStateToProps = state => ({
  success: state.success.data,
  errors: state.errors.list
});

const mapDispatchToProps = {
  successMsg: SuccessActions.successMsg,
  errorMsg: ErrorActions.errorMsg
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar);

//----------------------------------------------------------------------------------------------------
// --------------------------------------------MySnackbarContentWrapper-------------------------------
//----------------------------------------------------------------------------------------------------

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

//----------------------------------------------------------------------------------------------------
// --------------------------------------------MySnackbarContentWrapper-------------------------------
//----------------------------------------------------------------------------------------------------
