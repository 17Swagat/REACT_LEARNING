import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


let element = document.getElementById('root')
element.style.height = '300px'
element.style.backgroundColor = 'rgb(122, 39, 39)'
element.style.paddingLeft = '10px'
element.style.paddingTop = '1px'


let element_Content_1 = React.createElement('h1', 
  {'style':{'textDecoration': 'underline', color: 'pink'}}, 
  'Luny Tunes')

let element_Content_2 = React.createElement(
  'p',
  {style: {color: 'white', fontSize: '26px'}}, 
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat molestias architecto minima non porro impedit modi maxime assumenda atque, eos error? Sapiente animi dolore illo. Sapiente delectus nam eos vitae.')

  
let element_Content_3 = React.createElement('a', {href:'https://google.com', target:'_blank', style:{fontWeight: 'bolder', color: 'rgb(141, 23, 23)', marginTop: '25px', display: 'inline-block', fontSize: '30px', backgroundColor: 'yellow'}}, 'CLICK TO GET FLICK')

createRoot(element).render(
  <>
  {element_Content_1}
  {element_Content_2}
  {element_Content_3}
  {}
  </>
)