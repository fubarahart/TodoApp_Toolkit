import { createSlice } from "@reduxjs/toolkit"




const initialState ={
    todos: [{
        id: 1,
        task: "Learn Redux Toolkit",
        time: "8:00 am",
        isCompleted: false
    }]
}

    const todoSlice = createSlice({
        name: "todo",
        initialState,
        reducers: {

        }

    })

export const todoReducer = todoSlice.reducer