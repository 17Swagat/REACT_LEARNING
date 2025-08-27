import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { useEffect, useState } from "react";


export default function Todos() {

    const todolists = useSelector(state => state.todos)

    return (
        <div
            className="bg-amber-700 w-full h-full flex flex-col justify-center items-center py-10 gap-3">

            <AddTodo />

            {todolists.map((todo) => {
                return <TodoTile key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

function TodoTile({todo}) {
    const dispatch = useDispatch()
    const [isEditable, setEditable] = useState(false)

    const [text, setText] = useState(todo.title)

    return <div key={todo.id} className="flex items-center">
        <input type="text"
            value={text}
            readOnly = {!isEditable}
            onChange={(e) => {
                setText(e.target.value)
            }}
            className="border-2 text-3xl p-2 rounded-[10px]" />
        <div className="flex gap-2">
            
            <button
                className="text-2xl bg-red-500 p-1 rounded-[5px] ml-2 active:invert"
                onClick={() => {
                    dispatch(deleteTodo(todo.id))
                }}>🗑️</button>
            
            <button
                className="text-2xl bg-blue-500 p-1 rounded-[5px] active:invert"
                onClick={() => {
                    setEditable(prev => !prev)
                    if (isEditable) {
                        let title = text;
                        dispatch(updateTodo({
                            id:todo.id, 
                            title
                        }))
                    }
                }}>️{isEditable ? "💾": "✏️"}</button>
        </div>
    </div>
}