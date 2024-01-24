import './App.css'
import Navbar from './Components/Common/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


function App() {

  return (
    <div className='bg-[#414E5F]'>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
