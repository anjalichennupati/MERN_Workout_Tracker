
const Trainer = require('../models/trainerModel')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");


const createToken =(_id)=>{
   return  jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'}) //the payload

}

const getnames = async(req, res) =>{
          
    const trainer_names = await Trainer.find({}, { name: 1, _id: 0 }).sort({ createdAt: -1 });

    res.status(200).json(trainer_names) // this will be used in react js


}

//login user
const loginTrainer = async(req, res) =>{
    
    const {email, password} = req.body
    
    try{
       
        console.log("try block")

       //user.login from usermodel
        const trainer = await Trainer.login(email,password)
        const trainerDetails = await Trainer.findById(trainer._id).select('name'); // Fetch only the name field

// Extract the name
        const name = trainerDetails ? trainerDetails.name : 'Trainer not found';
        
        //create a token
        const token = createToken(trainer._id)
        //sending the response to the client
        res.status(200).json({email,token, name})

    }

    catch(error){
        res.status(400).json({error:error.message})

    }

}

//signup user

const signupTrainer  = async(req, res) =>{

    const {email, password, name} = req.body

    try{

        const trainer = await Trainer.signup(email,password, name)
       

        //create a token
        const token = createToken(trainer._id)
        //sending the response to the client
        res.status(200).json({email,name,token})

    }

    catch(error){
        res.status(400).json({error:error.message})

    }
   
    
}

module.exports = {signupTrainer, loginTrainer , getnames}