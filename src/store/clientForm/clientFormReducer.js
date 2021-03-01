import produtos from '../../produtos'

const INITIAL_STATE  = {
    quantity: 0,
    produtos: [...produtos],
    totalCart: 0
  };

  function clientFormReducer (state = INITIAL_STATE, action) {
      switch (action.type) {
          case 'teste':
              return {
                  ...state,
                  totalCart: state.produtos.valor * state.quantity
              }
         default:
             return state;
      }
  }

export default clientFormReducer;