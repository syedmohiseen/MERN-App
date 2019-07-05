export default function successReducer(
    state = { data: null },
    action
  ) {
    switch (action.type) {
      case "SUCCESSFUL": {
        return {
          ...state,
          data: action.data          
        };
      }
     
      default:
        return state;
    }
  }
  