import { useState } from "react"

function App() {
  // let counter_value = 0

  let [counter, setCounter] = useState(0)

  let btn_style = {fontSize: '30px', fontWeight: 'bold', padding: '15px', marginTop: '15px'}

  function incrementCounter(){
    counter = counter + 1;
    console.log('Counter Value:', counter)
    setCounter(counter) // Updating UI
  }

  function decrementCounter(){
    if (counter == 0) {
      return;
    }
    counter = counter - 1;
    setCounter(counter) 
    console.log('Counter Value:', counter)
  }

  return (
    <>
    <h1 style={{textDecoration: 'underline'}}>React Hooks Learning</h1>
    <strong style={{fontSize: '30px', display: 'block'}}>COUNTER = {counter}</strong>
    
    <button onClick={incrementCounter}  style={btn_style}>INCREASE</button>
    <div style={{height: '10px'}}></div>
    <button onClick={decrementCounter} style={btn_style}>DECREASE</button>
    <div style={{height: '10px'}}></div>
    <button onClick={()=>{setCounter(0)}} style={btn_style}>RESET</button>
    </>
  )
}

export default App
