import {combineReducers} from 'redux';
import dataSlice from './store/dataSlice';

const rootReducer = combineReducers({
  data: dataSlice,
});

export default rootReducer;
