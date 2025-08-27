import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    return <div className="flex gap-2">
        <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="border-2 text-3xl p-2 rounded-[10px]"
            placeholder="Enter" />
        <button 
            className="size-15 bg-blue-500 rounded-[10px] active:invert"
            onClick={(e)=>{
                dispatch(addTodo(input))
                setInput('')
            }}
        >+</button>
    </div>
}

export default AddTodo;