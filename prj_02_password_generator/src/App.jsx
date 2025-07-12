import { useState } from 'react'
import generatePswd_ContainingNumber from './utils/generate_funcs.jsx'

function App() {

  const PSWD_MAX_LENGTH = 30;

  let [length, setLength] = useState(10)
  let [numAllowed, setNumAllowed] = useState(false)
  let [specialCharsAllowed, setSpecialCharAllowed] = useState(false)
  let [pswd, setPswd] = useState('Click The Button To Generate Password!!')

  let pswd_nums_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let pswd_chars_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let pswd_specialchars_arr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', '?', '/', '|']

  function generatePassword() {
    let pswd_arr = [];
    let temp_pswd_string = '';

    /* [Array Shuffler] :=> "Randomize array in-place using Durstenfeld shuffle algorithm." */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    // Flags
    if (numAllowed && specialCharsAllowed) {
      pswd_arr  = pswd_chars_arr.concat(pswd_nums_arr).concat(pswd_specialchars_arr)
      shuffleArray(pswd_arr)
    } else if (numAllowed){
      pswd_arr = pswd_chars_arr.concat(pswd_nums_arr)
      // gene
      temp_pswd_string = generatePswd_ContainingNumber(length, 3, 5, pswd_nums_arr, pswd_chars_arr)
      setPswd(temp_pswd_string)
      return;
      // shuffleArray(pswd_arr)
    } else if (specialCharsAllowed){
      pswd_arr = pswd_chars_arr.concat(pswd_specialchars_arr)
      shuffleArray(pswd_arr)
    } else {
      pswd_arr = structuredClone(pswd_chars_arr);
      shuffleArray(pswd_arr)
    }

    // Pswd Generation
    for (let i = 0; i < length; i++){
      let index = Math.floor(Math.random() * length)
      let char_selected = pswd_arr[index]
      temp_pswd_string = `${temp_pswd_string}${char_selected}`
    }

    setPswd(temp_pswd_string)
  }


  return (
    <>
     <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
      <div className='w-200 h-100 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center'>
        <h1 className='text-3xl underline bg-amber-500 block p-3 font-bold'>PASSWORD GENERATOR</h1>
        <h2 className='m-10 text-3xl bg-green-300 p-4 text-black font-semibold font-serif rounded-2xl'>{pswd}</h2>
        <button onClick={generatePassword} className='bg-amber-700 text-3xl p-5 rounded-2xl font-semibold'>Generate Password</button>
        <div className='flex flex-row items-center justify-center mt-3'>
          <input type="range" id="slider" name="slider1" min="5" max="20" step={2}  value={length} onChange={(e)=>{setLength(e.target.value)}} className='m-5'/>
          <div className='ml-5 p-1'>
            <label className='flex items-center gap-3'>
              <input 
                type="checkbox" 
                checked={numAllowed}
                onChange={() => setNumAllowed(!numAllowed)}
                className='w-5 h-5' 
              />
              <p className='font-semibold text-2xl underline'>
                Numbers
              </p>
            </label>
          </div>
          <div className='ml-5 p-1'>
            <label className='flex items-center gap-3'>
              <input 
                type="checkbox" 
                checked={specialCharsAllowed}
                onChange={() => setSpecialCharAllowed(!specialCharsAllowed)}
                className='w-5 h-5' 
              />
              <p className='font-semibold text-2xl underline'>
              Special Characters
              </p>
            </label>
          </div>
        </div>
      </div>
     </div> 
    </>
  )
}

export default App
