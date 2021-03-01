import produtos from "../../produtos";
import form from "../../components/clientForm/clientForm";

const INITIAL_STATE = {
  quantidade: 0,
  form: form,
  produtos: [...produtos],
  totalCart: 0,
};

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        quantidade: state.quantidade + 1,
      };
    case "REMOVE_PRODUCT":
      if (state.itensCart > 0) {
        return {
          ...state,
          quantidade: state.quantidade - 1,
        };
      }
    case "ADD_CART":
      if(state.quantidade > 0){
        return {
          ...state,
          totalCart: state.totalCart + (state.quantidade * action.value),
        };
      }
    default:
      return state;
  }
}

export default productReducer;
