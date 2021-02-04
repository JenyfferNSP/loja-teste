const initialState = {
    value: 0
  };
  
  export default function (state = initialState.value, action) {
      switch (action.type) {
          case 'ADD_PRODUCT':
            console.log(action.value, 'add')
              return {
                  ...state,
                  state: action.value
              }
          case 'REMOVE_PRODUCT':
              if(action.value > 0){
                console.log(action.value, 'remove')
                return {
                    ...state,
                    state: action.value
              }
            }
          default:
            return state;
      }
  };
