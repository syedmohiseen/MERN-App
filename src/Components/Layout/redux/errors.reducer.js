export default function ErrorReducer(
    state = { data:null },
    action
  ) {
    switch (action.type) {
      case "FAILED": {
        return {
          ...state,
          data: action.data          
        };
      }
     
      default:
        return state;
    }
  }
  