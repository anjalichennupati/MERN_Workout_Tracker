import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import {useAuthContext} from '../hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({workout}) => {
    const {user} = useAuthContext();
    const {dispatch} = useWorkoutsContext()
    const handleClick = async()=>{

        if(!user){
            return
        }

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
                    <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                    <span className="material-symbols-outlined cl2" onClick={handleClick}>delete</span>

            
            
        </div> 

     );
}
 
export default WorkoutDetails;