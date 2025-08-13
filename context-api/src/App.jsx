import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  console.log('Re-rendering')

  return (
  <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
    <UserContextProvider>
      <div>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>


  </div> 
  )
}

export default App
