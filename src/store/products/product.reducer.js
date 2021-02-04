  const initialValue = 2;
  
  export default function productReducer (state = initialValue, action) {
      console.log(state);
      switch (action.state) {
          case "ADD_PRODUCT":
              return {
                  ...state, 
                  value: state + 1
              };
          case "REMOVE_PRODUCT":
              if(action.value > 0){
                return {
                    ...state,
                    value: state - 1
                };
              }
          default:
            return state;
      }
  };
