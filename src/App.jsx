
import './App.css'
import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import '../src/index.css'
import ShowCase from './Components/ShowCase'
import Experience from './Components/Experience'
function App() {
 

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <ShowCase/>
    <Experience/>
    </div>
  )
}

export default App
