import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Learn Redux Toolkit",
        // completed: false
    }]
} // could be [] Array also. 


export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload // "<action.payload> is an Object."
            }
            state.todos = [todo, ...state.todos] // Or We can do: `state.todos.push(todo)`
        },
        removeTodo: (state, action)=>{
    state.todos = state.todos.filter(
        todo => (todo.id !== action.payload));
}

    },
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;