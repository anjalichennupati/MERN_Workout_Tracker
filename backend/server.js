require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const trainerRoutes = require('./routes/trainer')
//express app 
const app = express()

//mongodb
const mongoose = require("mongoose");
// Connecting to database
mongoose.connect(
    "mongodb://localhost:27017/fullstack"
).then(()=>{
    //listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log("listening on port 4000!", process.env.PORT);
    }); 
  
}).catch((error)=>{
    console.log(error)
})

//middleware

app.use(express.json()) // looks if the request has a body coming in 
//if it does it will attach it to req
app.use((req, res,next)=>{
    console.log(req.path, req.method)
    next() // if you dont use next() it wont move to next request  

})

//routes
// app.get('/', (req,res)=>{
//     res.json("mess:Welcome to website!njmhj " + process.env.PORT)
// })

app.use('/api/workouts',workoutRoutes);
app.use('/api/user',userRoutes);
app.use('/api/trainer',trainerRoutes);

