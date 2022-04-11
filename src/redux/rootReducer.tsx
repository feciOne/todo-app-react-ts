import { combineReducers } from 'redux';
import todoReducer from './Todo/todo.reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;