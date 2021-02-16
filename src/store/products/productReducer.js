import produtos from '../../produtos'

const INITIAL_STATE  = {
    produtos: [...produtos]
  };
  
 function productReducer (state = INITIAL_STATE, action) {
      switch (action.type) {
          case 'ADD_PRODUCT':
              console.log('clique no add')
              return {
                  ...state,
                  quantity: action.quantity + 1
              }
          case 'REMOVE_PRODUCT':
            console.log('clique no remove')
              if(action.value > 0){
                return {
                    ...state,
                    quantity: action.quantity - 1
              }
            }
          }
      return state;
  };

  export default productReducer;
