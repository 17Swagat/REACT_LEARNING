import { StrictMode } from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { createRoot} from 'react-dom/client'
// import App from './App.jsx'
import {Home, AboutUs, ContactUs, User, GithubPage} from './components/index.js'
import { githubInfoLoader } from './components/Github.jsx'
import Layout from './Layout.jsx'

// # Way 1
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>
//       },
//       // {
//       //   path: '/home',
//       //   element: <Home/>
//       // }, 
//       {
//         path: '/about',
//         element: <AboutUs/>
//       },
//       {
//         path: '/contact',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ]);


// # Way 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route 
        path='/github' 
        loader = {githubInfoLoader}
        element={<GithubPage/>}
      />
    </Route>
  )
);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <AboutUs/>
    <ContactUs/> */}
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
