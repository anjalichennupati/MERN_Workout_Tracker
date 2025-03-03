
import {useEffect} from 'react'
import { useTAuthContext } from '../hooks/useTAuthContext'
import WorkoutTrainer from '../components/WorkoutTrainer'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const TPortal = () => {
    const {trainer} = useTAuthContext()
    const {workouts, dispatch} = useWorkoutsContext();
    
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('/api/workouts/trainer', {
                headers:{
                    'Authorization': `Bearer ${trainer.token}`
                }

            }) //get requests
            const json = await response.json() // array of objects

            if (response.ok){
             //   setWorkouts(json) // the workout state is updated
             dispatch ({type:'SET_WORKOUTS', payload:json})

            }

            
        }
        if (trainer){
            fetchWorkouts()
        }

        {console.log(workouts)}
      
       
    }, [dispatch, trainer]) //dependency

    return ( 
        <div>
            <h1 style={{textAlign:'center'}} > Welcome to trainer portal, {trainer.name}!</h1>

            <h3 style={{textAlign:'center'}} > Your client Trainer</h3>

            <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                
                    <WorkoutTrainer key={''} workout = {workout}/>

                ))}
                
            </div>

           
        </div>

        </div>
     );
}
 
export default TPortal;