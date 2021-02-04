  export default function productReducer (state = 0, action) {
      switch (action.type) {
          case "ADD_PRODUCT":
              return {
                  ...state, 
                  value: action.value + 1
              };
          case "REMOVE_PRODUCT":
              if(action.value > 0){
                return {
                    ...state,
                    value: action.value - 1
                };
              }
          default:
            return state;
      }
  };
