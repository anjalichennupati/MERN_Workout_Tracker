import { useState } from "react";
import { useTLogin } from "../hooks/useTLogin"

const Trainer= () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { tlogin, isLoading, error } = useTLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()  // to not refresh pagw

      //  console.log(email, password)

      await tlogin(email,password)


    }

    return ( 
       <form className="login" onSubmit={handleSubmit}>
        <h3 style={{marginLeft:'80px', color:'#1aac83'}}> Trainer Login</h3>

        <label>Email:</label>
        <input type="email" 
        onChange={(e)=> setEmail(e.target.value)}
        value= {email}
        />

       <label>Password:</label>
        <input type="password" 
        onChange={(e)=> setPassword(e.target.value)}
        value= {password}
        />
        <p style={{marginLeft:'100px',}}>New Trainer? <a href="/trainer_signup">Signup!</a></p>

        <button disabled= {isLoading}>Login</button>

         {error && <div className="error">{error}</div>} 
       </form>
     );
}
 
export default Trainer;