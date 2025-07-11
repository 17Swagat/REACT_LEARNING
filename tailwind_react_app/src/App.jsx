// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  let image_link = 'https://images.pexels.com/photos/15587985/pexels-photo-15587985.jpeg'


  return (
    <>

    <div className='bg-amber-600  m-1.5 p-2.5 rounded-2xl'>
    
      <p className='text-custom_text_blue_1 text-5xl font-semibold'>Hello World</p>

      <p className='text-custom_text_green_1 font-semibold text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo facilis a dolor dolorem consequuntur aliquid.</p>

    </div>

     <div className="m-16 w-60 flex flex-col rounded-xl bg-amber-300 min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Bored ape nft accidental</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        


    </>
  )
}

export default App
