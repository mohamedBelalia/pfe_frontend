import './App.css'
import Dashboard from './Components/Pages/WorkerDashboard/Dashboard'
import Footer from './Components/Common/Footer/Footer'
 import Home from './Components/Pages/Home/Home'
 import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
 import ProcessStepOne from './Components/Pages/Search/Process/ProcessStepOne'
 import Filter from './Components/Pages/Search/Filter/Filter'
 import SearchPage from './Components/Pages/Search/SearchPage/SearchPage'
 import Login from './Components/Pages/Auth/login/Login'
 import ProcessSignup from './Components/Pages/Auth/Signup/ProcessSignup'


function App() {

  return (

      <Router>
          <Routes>
             <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/search/step_one' element={<ProcessStepOne/>}/>
            <Route path='/search/filter' element={<Filter/>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/ProcessSignup" element={<ProcessSignup />} /> 
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App
