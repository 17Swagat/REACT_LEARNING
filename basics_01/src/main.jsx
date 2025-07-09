import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tea from './Chai.jsx'


// function Div_withText(){
//   return (
//     <>
//     <p>Abolestiae. Libero provident dignissimos sunt pariatur fuga rem aut reprehenderit quas! Fuga dolor asperiores nihil magnam corrupti quae? Vel sequi, iusto officiis nisi eius deserunt blanditiis! Quae eos cupiditate accusamus a repudiandae. Alias!</p>
//     </>
//   );
// }


// let div_root1 = document.getElementById('root1')
// div_root1.style.backgroundColor = 'yellow';
// div_root1.style.height = '200px'
// div_root1.style.marginBottom = '30px'
// div_root1.style.padding = '10px'
// div_root1.style.fontSize = '35px'
// div_root1.style.borderRadius = '20px'

// createRoot(div_root1).render(
//   <>
//   <Div_withText/>
//   </>
// )


let a_link_Content = (
  <>
  <a href="https://google.com" target='_blank' style={{backgroundColor:'blue', fontSize:'38px', color:'black', padding:'10px', borderRadius:'20px', textDecoration: 'underline'}}>
    LET'S GO TO GOOGLE
  </a>
  </>
);


let a_link = document.getElementById('a_link')
createRoot(a_link).render(
  a_link_Content
);
