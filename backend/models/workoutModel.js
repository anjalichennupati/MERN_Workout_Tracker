const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    reps:{
        type:Number,
        required: true,
    },
    load:{
        type:Number,
        required: true,
    }, 
    user_id:{
        type:String,
        required: true,
    }

}, {timestamps:true}); //timestamp is added every timr a neww doc is create


const Workout = mongoose.model("Workout",  workoutSchema);

module.exports = Workout; 





