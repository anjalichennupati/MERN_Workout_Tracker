const express = require('express');
const mongoose = require("mongoose");

const Workout = require('../models/workoutModel')

const {createWorkout,   getWorkout, getAllWorkouts,
    getWorkouts,  deleteWorkout,
    updateWorkout  }= require('../controllers/workoutController')


const requireAuth = require('../middleware/requireAuth')
// 1. create a router, export it and create all routes 
const router = express.Router();

router.use(requireAuth) //middleware function 
//the next in middle ware only executes the next functions if the user is aunthenticated 

//Get all workouts
router.get('/', getWorkouts)

router.get('/trainer', getAllWorkouts)


// Get a single workout
router.get('/:id', getWorkout)

// POST a new workout 

router.post('/', createWorkout)

// DELETE a new workout 

router.delete('/:id',deleteWorkout)

// PATCH a new workout 

router.patch('/:id', updateWorkout)
module.exports = router;