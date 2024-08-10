import { combineReducers } from 'redux';
import exampleSlice from '../features/exampleFeature/exampleSlice';
import productReducer from '../features/exampleFeature/products'
import usersReducer from '../features/exampleFeature/userrs'
import configReducer from '../features/exampleFeature/config'

const rootReducer = combineReducers({
  example: exampleSlice,
  products: productReducer,
  users: usersReducer,
  config: configReducer
});

export default rootReducer;
