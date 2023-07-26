import Layout from './component/Layout/Layout'
import './App.scss'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom'
import About from './component/About'
import Contact from './component/contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
