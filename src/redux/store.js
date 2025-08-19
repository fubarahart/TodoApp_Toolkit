import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice";

export const store = configureStore({
    devTools: true,
    reducer: todoReducer
});