
export function errorMsg(data) {
  return dispatch => {
    dispatch({
        type: "FAILED",
        data: data
      });
  };
}


