import { useState } from "react";
import { useTLogin } from "../hooks/useTLogin"

const TrainerLogin = () => {
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
        <h3>Login</h3>

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

        <button disabled= {isLoading}>Login</button>

         {error && <div className="error">{error}</div>} 
       </form>
     );
}
 
export default TrainerLogin;