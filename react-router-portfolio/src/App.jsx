import { Outlet } from 'react-router'
import { Footer, Navbar } from './components'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
