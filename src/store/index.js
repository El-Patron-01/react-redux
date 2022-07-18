import { configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customers: customerReducer
    }
})