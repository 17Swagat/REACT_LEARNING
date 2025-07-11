import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    if (count == 0) {return;}
    setCount(count - 1)
  }

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>COUNTER VALUE: {count}</h1>
      <button style={{fontSize: '30px',display:'block', margin: '0 auto', marginBottom: '15px'}} onClick={increment}>INCREASE</button>
      <button style={{fontSize: '30px', display:'block', margin: '0 auto'}} onClick={decrement}>DECREASE</button>
    </div>
    </>
  )
}

export default App
