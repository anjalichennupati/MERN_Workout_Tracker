import { TAuthContext } from "../context/TAuthContext"
import { useContext } from "react"

export const useTAuthContext = () => {
  const context = useContext(TAuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}

// it checks if we are in scope of the context

// if we want to use this context, we invoke this custom hook