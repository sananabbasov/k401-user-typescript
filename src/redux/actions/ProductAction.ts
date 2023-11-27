import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../types/ProductTypes"

export const getProducts = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response:any[] = await fetch('https://jsonplaceholder.typicode.com/todos').then(x=>x.json())
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response})
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Error oldu'
            })
        }
    }
}