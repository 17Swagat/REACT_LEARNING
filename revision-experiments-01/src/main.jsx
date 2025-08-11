import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let app = <h1> Hello World</h1>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {app} */}
  </StrictMode>,
)
