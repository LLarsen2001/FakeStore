import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
  allProdects: productReducer
})
export default reducers;