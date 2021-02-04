import { createStore, combineReducers } from 'redux';
import productReducer from './products/product.reducer';

const rootReducer = combineReducers({
    product: productReducer
})

const Store = createStore(rootReducer);

export default Store;