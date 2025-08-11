// function App() {
//   return (
//     <>
//     <div className="bg-red-500 mx-15 mt-3 rounded-[10px] p-2">
//       <h1 className="text-7xl">Hello World</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum, possimus voluptatibus pariatur cupiditate quia in repellat nostrum, sapiente adipisci veniam praesentium, deleniti labore sit natus et sint impedit illo?</p>
//     </div>
//     </>
//   );
// }

function App() {
  let counter_value = 0

  function incrementCounter() {
    counter_value += 1
    console.log('Counter Value:', counter_value)
  }

  return (
    <div className="w-full h-[100vh] bg-amber-700 flex justify-center items-center">
      <div className="bg-blue-400 inline-block p-5 rounded-2xl">
        <h1 style={{ textDecoration: 'underline' }}>React Hooks Learning</h1>
        <strong style={{ fontSize: '30px', display: 'block' }}>COUNTER = {counter_value}</strong>
        <button onClick={incrementCounter} className="text-3xl block mx-auto bg-red-300">CLICK !!</button>
      </div>
    </div>
  )
}


export default App;
