import { combineReducers } from 'redux';
import { errorReducer } from './ErrorReducer';
import { statusReducer } from './statusReducer';

export const rootReducer = combineReducers({
    error: errorReducer,
    status: statusReducer,
});