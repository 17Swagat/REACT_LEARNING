import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const PSWD_MAX_LENGTH = 30;

  let [length, setLength] = useState(10);
  let [numAllowed, setNumAllowed] = useState(false);
  let [specialCharsAllowed, setSpecialCharAllowed] = useState(false);
  let [pswd, setPswd] = useState("Click The Button To Generate Password!!");

  let passwordGenerator = useCallback(() => {
    let chars_string_set =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_chars_string_set = "!@#$%^&*()_+[]{}|;:,.<>?";
    let numbers_string_set = "0123456789";
    let final_str_set = "";
    let returned_str = "";

    if (numAllowed && specialCharsAllowed) {
      final_str_set =
        chars_string_set + numbers_string_set + special_chars_string_set;
    } else if (numAllowed) {
      final_str_set = chars_string_set.concat(numbers_string_set);
    } else if (specialCharsAllowed) {
      final_str_set = chars_string_set.concat(special_chars_string_set);
    } else {
      final_str_set = chars_string_set;
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * final_str_set.length);
      // console.log(index)
      // console.log(final_str_set[index])
      let char_selected = final_str_set[index]; // or we could have used .charAt(<index>) function
      if (char_selected == undefined) {
        returned_str = "Error: Occured";
        break;
      }
      returned_str += char_selected;
    }

    setPswd(returned_str);
  }, [length, numAllowed, specialCharsAllowed, setPswd]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, specialCharsAllowed, passwordGenerator]);

  let passwordRef = useRef(null);

  let copyToClipboard = useCallback(() => {
    // Write to clipboard
    window.navigator.clipboard.writeText(pswd);

    // Highlight the text inside the <h2> element
    if (passwordRef.current) {
      const range = document.createRange();
      range.selectNodeContents(passwordRef.current);

      const selection = window.getSelection();
      selection.removeAllRanges(); // Clear previous selection
      selection.addRange(range); // Highlight current password
    }

  }, [pswd]);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <div className="w-200 h-100 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl underline bg-amber-500 block p-3 font-bold">
            PASSWORD GENERATOR
          </h1>

          {/* Display Password [h1] Field */}
          <div className="flex flex-row justify-between">
            <h2
              className="mt-10 mb-10 mr-5 text-3xl bg-green-300 p-4 text-black font-semibold font-serif rounded-2xl max-w-fit"
              ref={passwordRef}
            >
              {pswd}
            </h2>
            {/* <input type="text" className='mt-10 mb-10 mr-5 text-3xl bg-green-300  text-black font-semibold font-serif rounded-2xl max-w-fit' ref={passwordRef} value={pswd} readOnly /> */}
            <button
              className="text-2xl bg-blue-500 mt-10 mb-10 p-5 rounded-2xl"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>

          {/* Generate password [Button] */}
          <button
            onClick={passwordGenerator}
            className="bg-amber-700 text-3xl p-5 mr-15 rounded-2xl font-semibold"
          >
            Generate Password
          </button>

          {/* <button onClick={password} className='bg-amber-700 text-3xl p-5 rounded-2xl font-semibold'>Generate Password</button> */}
          <div className="flex flex-row items-center justify-center mt-3">
            <div className="flex flex-col justify-start">
              <input
                type="range"
                id="slider"
                name="slider1"
                min="5"
                max="30"
                step={1}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="mr-5 mt-5 pl-5 pr-5"
              />
              <div className="flex flex-row">
                <label className="text-3xl font-semibold underline">
                  Length:{" "}
                </label>
                <label className="text-3xl ml-3 font-bold text-red-200">
                  {length}
                </label>
              </div>
            </div>

            <div className="ml-5 p-1">
              <label className="flex items-center gap-3">
                {/* Use Numbers [Checkbox] */}
                <input
                  type="checkbox"
                  checked={numAllowed}
                  onChange={() => setNumAllowed(!numAllowed)}
                  className="w-5 h-5"
                />
                <p className="font-semibold text-2xl underline">Numbers</p>
              </label>
            </div>
            <div className="ml-5 p-1">
              <label className="flex items-center gap-3">
                {/* Special Characters [Checkbox] */}
                <input
                  type="checkbox"
                  checked={specialCharsAllowed}
                  onChange={() => setSpecialCharAllowed(!specialCharsAllowed)}
                  className="w-5 h-5"
                />
                <p className="font-semibold text-2xl underline">
                  Special Characters
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
