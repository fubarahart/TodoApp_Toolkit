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
            addTask: (state,action) => {
                console.log(action)
            state.todos = [...state.todos, action.payload]
            return state
            },
            deleteTask: (state, action) => {
                state.todos=state.todos.filter (todo => todo.id !== action.payload)
                return state
            }

        }

    })

    export const {addTask, deleteTask} = todoSlice.actions
export const todoReducer = todoSlice.reducer