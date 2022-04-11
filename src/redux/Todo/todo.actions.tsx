import * as types from './todo.types';

export type ACTIONTYPE =
  | { type: typeof types.ADD; payload: string }
  | { type: typeof types.CHECKED; payload: number }
  | { type: typeof types.REMOVE; payload: number };

export function addTodo(description: string): ACTIONTYPE {
    return { type: types.ADD, payload: description };
}

export function checkedTodo(id: number): ACTIONTYPE {
    return { type: types.CHECKED, payload: id };
}

export function removeTodo(id: number): ACTIONTYPE {
    return { type: types.REMOVE, payload: id };
}
