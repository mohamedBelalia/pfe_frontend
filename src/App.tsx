import './App.css'
import Footer from './Components/Common/Footer/Footer'
import Home from './Components/Pages/Home/Home'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import ProcessStepOne from './Components/Pages/Search/Process/ProcessStepOne'
import Filter from './Components/Pages/Search/Filter/Filter'


function App() {

  return (
    <div >
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search/step_one' element={<ProcessStepOne/>}/>
            <Route path='/search/filter' element={<Filter/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
