
import {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
   // const [workouts, setWorkouts]  = useState(null)
   const {workouts, dispatch} = useWorkoutsContext();
   const {user} = useAuthContext()
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('/api/workouts', {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }

            }) //get requests
            const json = await response.json() // array of objects

            if (response.ok){
             //   setWorkouts(json) // the workout state is updated
             dispatch ({type:'SET_WORKOUTS', payload:json})

            }

            
        }
        if (user){
            fetchWorkouts()
        }
      
       
    }, [dispatch, user]) //dependency
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout = {workout}/>

                ))}
                
            </div>

            <WorkoutForm/>
        </div>
      
     );
}
 
export default Home;