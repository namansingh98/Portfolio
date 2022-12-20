
import './App.css'
import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import '../src/index.css'
import ShowCase from './Components/ShowCase'
import Info from './Components/Info'
import Footer from './Components/Footer'
import Me from './Components/Me'

function App() {
 

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Me/>
    <ShowCase/>
    <Info/>
    
    <Footer/>
    </div>
  )
}

export default App
