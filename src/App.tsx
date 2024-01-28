import './App.css'
import Footer from './Components/Common/Footer/Footer'
import Navbar from './Components/Common/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


function App() {

  return (
    <div >
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
