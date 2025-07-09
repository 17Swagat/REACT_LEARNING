import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


let element = document.getElementById('root')
element.style.height = '300px'
element.style.backgroundColor = 'rgb(122, 39, 39)'
element.style.paddingLeft = '10px'
element.style.paddingTop = '1px'


let element_Content_1 = React.createElement('h1', null, 'Luny Tunes')
let element_Content_2 = React.createElement('p', null, 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')


createRoot(element).render(
  <>
  {element_Content_1}
  {element_Content_2}
  </>
)