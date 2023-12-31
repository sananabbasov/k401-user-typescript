// import {TodoAction, TodoActionTypes, TodoState} from "..,";

import {TodoAction, TodoActionTypes, TodoState} from "../types/ProductTypes"

const initialState: TodoState = {
    todos: [],
    error: null,
    loading: false
}

export const ProductReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}