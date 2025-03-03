
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");


const createToken =(_id)=>{
   return  jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'}) //the payload

}


const getUser = async (req, res)=>{

    const {id} = req.params; // params take variables from the route
    if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).json({err:"Not a valid ID"});
    }
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({mess:"Error: No such user"})
    }
     res.status(200).json(user)
}

//login user
const loginUser = async(req, res) =>{
    
    const {email, password} = req.body
    
    try{
       
        console.log("try block")

       //user.login from usermodel
        const user = await User.login(email,password)
       

        //create a token
        const token = createToken(user._id)
        //sending the response to the client
        res.status(200).json({email,token})

    }

    catch(error){
        res.status(400).json({error:error.message})

    }

}

//signup user

const signupUser  = async(req, res) =>{

    const {email, password} = req.body

    try{

        const user = await User.signup(email,password)
       

        //create a token
        const token = createToken(user._id)
        //sending the response to the client
        res.status(200).json({email,token})

    }

    catch(error){
        res.status(400).json({error:error.message})

    }
   
    
}

module.exports = {signupUser, loginUser, getUser}