import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <h1 className='text-3xl'>Todos</h1>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className='flex items-center'
                        key={todo.id}
                    >
                        <div className='bg-yellow-'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className='bg-blue-500 p-2 text-2xl'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos




// import { useSelector, useDispatch } from "react-redux"
// import { removeTodo } from "../features/todo/todoSlice"

// export default function Todos(){
//     const todos = useSelector(state => state.todo.todos)
//     const dispatch = useDispatch()
//     return <div>
//         <h1>Todos</h1>
//         {todos.map((todo)=>(
//             <li key={todo.id}>
//                 {todo.text}
//                 <button
//                     onClick={()=>dispatch(removeTodo(todo.id))}
//                 >Delete</button>
//             </li>
//         ))}
//     </div>
// }

