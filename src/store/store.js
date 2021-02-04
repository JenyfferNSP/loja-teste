import { createStore, combineReducers } from 'redux';
import productReducer from './products/product.reducer';
import clientFormReducer from './clientForm/clientForm.reducer';

const rootReducer = combineReducers({
    product: productReducer,
    form: clientFormReducer
})

const Store = createStore(rootReducer);

export default Store;