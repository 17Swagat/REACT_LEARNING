import { useState } from "react";
import Button from "./Components/Button";
import Button2 from "./Components/Button2";


// 📌 [NOTE:] "Button2 componenet is a better implementation of Button component."

function App() {
  
  function changeBGColor(color) {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-end pb-8 pr-8 pl-8">
        <div className="mt-8"></div>

        <div
          className={`bg-custom_bottom_bar text-shadow-indigo-100 flex justify-between items-center pl-10 pr-10 rounded-2xl text-white text-3xl font-semibold`}
        >
          <Button text="RED" onclick={()=>changeBGColor("RED")} />
          <Button2 text="GREEN" onclick={changeBGColor} />
          <Button2 text="PINK" onclick={changeBGColor} />
          <Button2 text="ORANGE" onclick={changeBGColor} />
          <Button2 text="YELLOW" onclick={changeBGColor} />
          <Button2 text="BLUE"  onclick={changeBGColor}/>
        </div>
      </div>
    </>
  );
}

export default App;
