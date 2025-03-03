import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()


//log in and log out cases
export const authReducer = (state, action) =>{

switch(action.type){
    case 'LOGIN':
        return {user: action.payload}

    case 'LOGOUT':
        return {user:null}

    default:
        return {state} //original state is null
}



}
export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer, {
        user:null // generally the user is not logged in
    })

    // if there is a value in teh local storage it stays logged in
    useEffect (()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if (user){
            dispatch({type: 'LOGIN', payload: user})
        }
    }, []) //only fire this once when the component first renders

    console.log('AuthContext state: ',state)

    //children is the App component
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}