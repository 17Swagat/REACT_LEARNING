import { createSlice, nanoid } from "@reduxjs/toolkit";

const initState = {
    todos: [
        { id: nanoid(), title: "Learn Redux", completed: false },
        { id: nanoid(), title: "Revise Your Learnings", completed: false },
    ]
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState: initState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.trim() === ''){
                return;
            }
            state.todos.unshift({
                id: nanoid(),
                title: action.payload,
                completed: false
            })
        },
        
        updateTodo: (state, action)=> {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id){
                    todo.title = action.payload.title
                    return todo;
                }
                return todo;
            })
        },
        
        deleteTodo: (state, action)=> {
            let id = action.payload
            state.todos = state.todos.filter(
                (item)=>(item.id !== id)
            )
        }
    }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions
export const todoReducer =  todoSlice.reducer
