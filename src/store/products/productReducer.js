import produtos from "../../produtos";

const INITIAL_STATE = {
  quantity: 0,
  produtos: [...produtos],
  totalCart: 0,
};

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "REMOVE_PRODUCT":
      if (state.quantity > 0) {
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      }
    default:
      return state;
  }
}

const mapStateToProps = (state) => ({
  produtos: state.productReducer.produtos,
  quantidade: state.productReducer.quantity
});

export default productReducer;
