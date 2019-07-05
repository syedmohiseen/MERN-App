export function successMsg(data) {
  return dispatch => {
    dispatch({
        type: "SUCCESSFUL",
        data: data
      });
  };
}