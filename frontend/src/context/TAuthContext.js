import { createContext, useReducer, useEffect } from 'react'

export const TAuthContext = createContext()


//log in and log out cases
export const TauthReducer = (state, action) =>{

switch(action.type){
    case 'LOGIN':
        return {trainer: action.payload}

    case 'LOGOUT':
        return {trainer:null}

    default:
        return {state} //original state is null
}



}
export const TAuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(TauthReducer, {
        trainer:null // generally the user is not logged in
    })

    // if there is a value in teh local storage it stays logged in
    useEffect (()=>{
        const trainer = JSON.parse(localStorage.getItem('trainer'))

        if (trainer){
            dispatch({type: 'LOGIN', payload: trainer})
        }
    }, []) //only fire this once when the component first renders

    console.log('AuthContext state: ',state)

    //children is the App component
    return(
        <TAuthContext.Provider value={{...state, dispatch}}>
            {children}
        </TAuthContext.Provider>
    )
}