import Todos from "./components/Todos"

function App() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl">Todo App With Redux</h1>
      <Todos/>
    </div>
  )
}

export default App
