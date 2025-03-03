import { useTAuthContext } from './useTAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useTLogout = () =>{

    const { dispatch } = useTAuthContext()
    const { dispatch: workoutDispatch } = useWorkoutsContext()

    const tlogout = () =>{
        localStorage.removeItem('trainer')

        //dispatch logout action 
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload:null})
    }

    return {tlogout}

}