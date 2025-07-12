import { useState } from 'react'
import Button_1 from './components/Button_1'

function App() {
  let [bgColor, setBgColor] = useState('bg-black')
  return (
    <>
    <div className={`w-screen h-screen ${bgColor} text-white justify-end flex flex-col`}>
      <div className='bg-custom-bg-color1 items-center flex justify-between pl-15 pr-15 pt-4 pb-4 ml-8 mr-8 mb-5 rounded-3xl'>
        {/* <button className='bg-white text-black text-3xl p-3 rounded-2xl' onClick={()=>setBgColor(bgColor)}>CLICK</button> */}
        <Button_1 text={'RED'} onclick={()=>{setBgColor('bg-red-400')}}/>
        <Button_1 text={'YELLOW'} onclick={()=>{setBgColor('bg-yellow-400')}}/>
        <Button_1 text={'GREEN'} onclick={()=>{setBgColor('bg-green-400')}}/>
        <Button_1 text={'AMBER'} onclick={()=>{setBgColor('bg-amber-400')}}/>
      </div>
    </div>
    </>
  )
}

export default App
