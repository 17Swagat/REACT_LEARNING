import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tea from './Chai.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


createRoot(document.querySelector('#root2')).render(
  <StrictMode>
    <Tea/>
  </StrictMode>
)