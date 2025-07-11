// import { useState } from 'react'

import Card from './components/Card.jsx'
import IntroTextHi from './components/IntroText.jsx'

function App() {

  let image_link_1 = 'https://www.pngmart.com/files/13/Aesthetic-Anime-Boy-PNG-Photo.png';
  
  let image_link_2 = 'https://www.pngmart.com/files/23/Narancia-PNG-Isolated-Photo.png';

  let image_link_3 = 'https://www.pngmart.com/files/23/Baki-PNG-Isolated-Pic.png'

  return (
    <>

    <div className='bg-amber-600  m-1.5 p-2.5 rounded-2xl'>
    
      <p className='text-custom_text_blue_1 text-5xl font-semibold'>Hello World</p>

      <IntroTextHi text="This is a simple React app with Tailwind CSS!" />

      <p className='text-custom_text_green_1 font-semibold text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo facilis a dolor dolorem consequuntur aliquid.</p>

    </div>

    <div className="flex flex-wrap justify-center items-center gap-4">
      <Card image_link={image_link_1} title="Fighter Lee" price="$10" id="1"/>
      <Card image_link={image_link_2} title="Sprink Kick " price="$10" id="2"/>
      <Card image_link={image_link_3} title="Killer Z" price="$20" id="3"/>
      <Card image_link={image_link_3} title="Killer Z" price="$20" id="3"/>
      <Card image_link={image_link_3} title="Killer Z" price="$20" id="3"/>
      <Card image_link={image_link_3} title="Killer Z" price="$20" id="3"/>
      <Card image_link={image_link_3} title="Killer Z" price="$20" id="3"/>
      <Card/>
    </div>

    </>
  )
}

export default App
