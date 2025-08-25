import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-5xl">Learning About Redux</h1>
      </div>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
