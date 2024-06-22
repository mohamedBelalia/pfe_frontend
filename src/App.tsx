import './App.css'
import Dashboard from './Components/Pages/WorkerDashboard/Dashboard'
import Footer from './Components/Common/Footer/Footer'
import Home from './Components/Pages/Home/Home'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import ProcessStepOne from './Components/Pages/Search/Process/ProcessStepOne'
import Filter from './Components/Pages/Search/Filter/Filter'
import SearchPage from './Components/Pages/Search/SearchPage/SearchPage'
import WorkerProfile from './Components/Pages/WorkerProfile/WorkerProfile'
import AddProject from './Components/Pages/AddProject/AddProject'
import UpdateProject from './Components/Pages/WorkerDashboard/updateProject/UpdateProject'
import SignupForm from './Components/Pages/Auth/Signup/SignupForm'
import Forms from './Components/Pages/Auth/Signup/Forms'
import LoginForm from './Components/Pages/Auth/login/LoginForm'

function App() {

  return (
    
      <Router>
          <Routes>
             <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/search/step_one' element={<ProcessStepOne/>}/>
            <Route path='/search/filter' element={<Filter/>}/>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Signup" element={<SignupForm />} /> 
            <Route path="/SignupForms" element={<Forms/>} /> 
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ajouter-projet" element={<AddProject />} />
            <Route path="/ouvres/:idWorker" element={<WorkerProfile />} />
            <Route path="*" element={<UpdateProject idProject='1'/>} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App
