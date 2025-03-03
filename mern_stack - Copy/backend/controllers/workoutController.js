
const Workout = require('../models/workoutModel')
const mongoose = require("mongoose");

//get all work outs
const getWorkouts = async (req, res)=>{

    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt:-1})
    res.status(200).json(workouts) // this will be used in react js
}

const getAllWorkouts = async (req, res)=>{

   
    const workouts = await Workout.find().sort({createdAt:-1})
    res.status(200).json(workouts) // this will be used in react js
}

//get single workout

const getWorkout = async (req, res)=>{
    const {id} = req.params; // params take variables from the route
    if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).json({err:"Not a valid ID"});
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({mess:"Error: No such workout"})
    }
     res.status(200).json(workout)
}

// create workout

const createWorkout = async(req, res) =>{
    const {title, load, reps} = req.body

    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }

    if(!load){
        emptyFields.push('load')

    }

    if(!reps){
        emptyFields.push('reps')

    }

    if(emptyFields.length>0){
        return res.status(400).json({error:'please fill all the fields', emptyFields})
    }


    try{
        const user_id= req.user._id
        const workout = await Workout.create({title, load, reps, user_id})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}





// delete

const deleteWorkout = async (req, res) =>{
    const {id} = req.params; // params take variables from the route
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err:"Not a valid ID"});
   }

   const workout = await Workout.findOneAndDelete({_id:id})
   if(!workout){
    return res.status(404).json({mess:"Error: No such workout"})
    }

    return res.status(200).json(workout)


}

// update 

const updateWorkout = async (req, res) =>{
    const {id} = req.params; // params take variables from the route
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err:"Not a valid ID"});
   }
   const workout = await Workout.findOneAndUpdate({_id:id}, {
      ...req.body
   })

   if(!workout){
    return res.status(404).json({mess:"Error: No such workout"})
    }

    return res.status(200).json(workout)



}


module.exports = {
    getWorkout,
    getAllWorkouts,
    getWorkouts, 
    createWorkout, 
    deleteWorkout,
    updateWorkout
}