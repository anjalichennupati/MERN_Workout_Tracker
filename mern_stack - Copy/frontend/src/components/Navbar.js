
import { Link } from "react-router-dom"
import {useLogout} from '../hooks/useLogout'
import {useTLogout} from '../hooks/useTLogout'
import { useAuthContext } from "../hooks/useAuthContext"
import { useTAuthContext } from "../hooks/useTAuthContext"
import { useState } from "react";

const Navbar = () => {
    const {logout} = useLogout()
    const {tlogout} = useTLogout()

    const {user} = useAuthContext()
    const {trainer} = useTAuthContext()
    const [showDropdown, setShowDropdown] = useState(false);
     
    const handleClick = () =>{
        if(user){
            logout();
        }
       if(trainer){
        tlogout();

       }
         
    }

    return (  
        <header>
            <div className="container">
            <Link to="/work_buddy"> <h1>Workout buddy</h1> </Link>
           
          <nav>
            {!trainer && user && ( <div className="user-info">
    <span><b>{user.email}</b></span>

    <div class="dropdown">
      <span className="material-symbols-outlined search-icon">search</span> Search
      
      <a href="#" class="dropbtn"></a>
      <div class="dropdown-content">
      <Link className="link" to="/search">Exercise</Link>
      <Link  className="link" to="/calorie">Calorie Burn</Link>
       
        
      </div>

      </div>
    

    
    <Link to="/protrainer" style={{color:"#1a39ac"}}> Send progress to Trainer </Link>
    <button onClick={handleClick}>Log out</button>


  </div> )}

  {!user && !trainer &&  (<div>
                <Link to="/details"> Home </Link>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> Signup </Link>
                <Link to="/trainer"> Trainer Login</Link>
                <Link to="/contact"> Contact-Us </Link>
            </div>
        )}

  {!user && trainer && ( <div className="user-info">
    <span><b>{trainer.email}</b></span>

    <Link to="/login1"> Get Client's details </Link>

    <div class="dropdown">
      <span className="material-symbols-outlined search-icon">search</span> Search
      
      <a href="#" class="dropbtn"></a>
      <div class="dropdown-content">
      <Link className="link" to="/search">Exercise</Link>
      <Link  className="link" to="/calorie">Calorie Burn</Link>
       
        
      </div>

      </div>
      <button onClick={handleClick}>Log out</button>
    

   
  </div> )}

  

   
            
           
               
           </nav>
            
            </div>
        </header>
    );
}
 
export default Navbar;