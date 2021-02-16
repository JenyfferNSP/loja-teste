import { createStore, combineReducers } from 'redux';
import productReducer from './products/productReducer';
import clientFormReducer from './clientForm/clientForm.reducer';

const rootReducer = combineReducers({
    productReducer,
    form: clientFormReducer
})

const Store = createStore(rootReducer);

export default Store;