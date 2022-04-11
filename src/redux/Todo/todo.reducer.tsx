import { ADD, CHECKED, REMOVE } from "./todo.types";
import { ACTIONTYPE } from "./todo.actions";
import { Todo } from "../../models/all.models";

const INITIAL_STATE: Todo[] = [];

function reducer(state: typeof INITIAL_STATE, action: ACTIONTYPE) {
    switch (action.type) {
        case ADD:
            return [
                {
                  id: state.reduce((maxId, todo) => Math.max(todo.id ? todo.id : 0, maxId), -1) + 1,
                  done: false,
                  description: action.payload
                }, 
                ...state
              ];
        case CHECKED:
            return state.map(todo =>
                todo.id === action.payload ?
                    { ...todo, done: !todo.done } :
                    todo
            );
        case REMOVE:
            return state.filter(todo =>
                todo.id !== action.payload
            );
        default:
            return INITIAL_STATE;
    }
}

export default reducer;
