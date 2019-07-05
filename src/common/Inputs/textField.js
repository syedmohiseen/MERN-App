import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  endAdornment,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    InputProps={{
      endAdornment: <InputAdornment position="end">{endAdornment?endAdornment:''}</InputAdornment>,
    }}
  />
);

export default renderTextField;
