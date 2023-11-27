import {combineReducers} from "redux";
import { ProductReducer} from "./ProductReducer";


export const rootReducer = combineReducers({
    products: ProductReducer,
})

export type RootState = ReturnType<typeof rootReducer>