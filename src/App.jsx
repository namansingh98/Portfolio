import Layout from './component/Layout/Layout'
import './App.scss'
import Home from './component/Home'
import { Routes,Route } from 'react-router-dom'
import About from './component/About'
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Router,
// } from 'react-router-dom'

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route exact path="/" element={<Layout/>} />
       
       
  //     </>
  //   )
  // )
  return (
    <>
      {/* <RouterProvider r outer={router} /> */}
     
     

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App



