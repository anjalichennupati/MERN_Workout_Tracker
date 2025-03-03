import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import {useAuthContext} from '../hooks/useAuthContext';
import {useTAuthContext} from '../hooks/useTAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutTrainer = ({workout}) => {
    const {user} = useAuthContext();
    const {trainer} = useTAuthContext();
    const {dispatch} = useWorkoutsContext()
    
    const getEmail = async () =>{
        const response = await fetch('/api//'+user._id, {
            headers:{
                'Authorization': `Bearer ${trainer.token}`
            }

        })
        const data = await response.json();
        return data.email;
    }

    const handleClick = async()=>{

        if(!user){
            return
        }

        //get requests

        const response = await fetch('/api/workouts/' +workout._id, {
            method:'DELETE', 
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
              
           
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type:'DELETE_WORKOUT', payload:json})

        }

        
    }
    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
                    <p className="workout-info">
                    <span className="material-symbols-outlined">fitness_center</span>
                    <strong>Load(kg): </strong>{workout.load}
                    </p>
                    <p className="workout-info">
                    <span className="material-symbols-outlined">repeat</span>
                    <strong>Reps: </strong>{workout.reps}

                    </p>
                    <p> User Id: {workout._id}</p>
                    <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            

            
            
        </div> 

     );
}
 
export default WorkoutTrainer;