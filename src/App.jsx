import Layout from './component/Layout/Layout'
import './App.scss'
import Home from './component/Home'
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
      {/* <RouterProvider router={router} /> */}
      <Layout/>
      <Home/>
    </>
  )
}

export default App



