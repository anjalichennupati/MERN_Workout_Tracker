// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

import Login from './pages/Login'
import Trainer from './pages/Trainer'
import TPortal from './pages/TPortal'
import TrainerProgress from './pages/TrainerProgress'
import Signup from './pages/Signup'
import TSignup from './pages/TSignup'
import Search from './pages/Search'
import Calorie from './pages/Calorie'
import Contact from './pages/Contact'

import Details from './pages/Details'
import Know from './pages/Know'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';
import {useTAuthContext} from './hooks/useTAuthContext';




function App() {

  const {user} = useAuthContext()
  const {trainer} = useTAuthContext()

  console.log("showing trainer from app", trainer)
  return (
    <Router>
    <div className="App">
      <Navbar> </Navbar>
      <div className="content">
      <Routes>

            <Route 
              path="/" 
              element={<Details />} 
             />

            
              <Route 
              path="/details" 
              element={<Details />} 
             />
              <Route 
              path="/contact" 
              element={<Contact />} 
             />

           
               


             

             
           


            <Route 
              path="/know-us" 
              element={<Know />} 
             />
            
            <Route 
              path="/work_buddy" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/search" 
              element={user ? < Search /> : <Navigate to="/login" />} 
            
            />

            <Route 
              path="/calorie" 
              element={user ? < Calorie /> : <Navigate to="/login" />} 
            
            />


           
             <Route 
              path="/protrainer" 
              element={user ? < TrainerProgress /> : <Navigate to="/login" />} 
             />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/work_buddy" />} 
            />

             <Route 
              path="/trainer" 
              element={!trainer ? <Trainer /> : <Navigate to="/trainerportal" />} 
            />

              <Route 
              path="/trainerportal" 
              element={trainer ? <TPortal /> : <Navigate to="/trainer" />} 
            />
            
            <Route 
              path="/trainer_signup" 
              element={!trainer ? <TSignup /> : <Navigate to="/trainerportal" />} 
             />
           
            
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/work_buddy" />} 
            />
          </Routes>
      </div>
   <div className="content">
    {/* <h1>{title}</h1> */}
    
   </div>
    </div>
    </Router>
  
  );
}

export default App;
