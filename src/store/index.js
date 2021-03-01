import { createStore, combineReducers } from 'redux';
import productReducer from './products/productReducer';
// import clientFormReducer from './clientForm/clientFormReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    productReducer,
    form: formReducer
})

const Store = createStore(rootReducer);

export default Store;