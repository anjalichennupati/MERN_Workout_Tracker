import { useState } from 'react'
import { useTAuthContext } from './useTAuthContext'

export const useTLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useTAuthContext()

  const tlogin = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/trainer/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      console.log(json.error)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('trainer', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { tlogin, isLoading, error }
}