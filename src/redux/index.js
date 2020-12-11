import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import tablePageReducer from './reducer';



const mainReducer = combineReducers({tablePageReducer, modalReducer})

export default mainReducer;