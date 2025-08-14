import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./contexts"

export default function App() {
    const [todos, setTodo] = useState([])
    const addTodo = (todo)=>{
        setTodo(prev => ([{...todo}, ...prev])) 
    }
    const updateTodo = (id, todo)=>{
        setTodo((prev) => prev.map((prevTodo)=>{
            if (prevTodo.id === id) {
                return todo
            }
            return prevTodo
        }))
    }
    const deleteTodo = (id)=>{
        setTodo(prev => prev.filter(todo => (todo.id != id)))
    }
    const toggleComplete = (id)=>{
        setTodo(prev => prev.map(todo => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                return todo;
            }
            return todo;
        }))
    }

    // [Get local storage] :=>
    useEffect(()=>{
                const todos = JSON.parse(localStorage.getItem('todos'))
                if (todos && todos.length > 0){
                    setTodo(todos)
                }
    },[])


    // [Set local storage] :=>
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
    return (
        <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-blue-900 h-screen w-screen flex flex-col justify-center px-100 2xl:px-150">
                <div className="w-full flex justify-center text-4xl text-white mb-2">
                    <h2>Todo Application</h2>
                </div>
                <div className="">
                    {/* [Todo-Input] */}
                    <TodoForm/>
                </div>
                <div className="mt-5 w-full h-[40vh] px-5 bg-amber-700 rounded-2xl overflow-y-auto pt-2 ">
                    {/* Looping Through The [TODO] */}
                </div>
            </div>
        </TodoProvider>
    )
}