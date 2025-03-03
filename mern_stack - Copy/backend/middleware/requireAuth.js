const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Trainer= require('../models/trainerModel')

const requireAuth =  async (req, res, next) =>{
    //verify authentication

    const {authorization} = req.headers 
    // equivalent to const authorization = req.headers.authorization;

 

    if(!authorization){
        return res.status(401).json({error:"Auth token required"})
    }

    const token = authorization.split(' ')[1]

    try{
       const {_id}= jwt.verify(token,process.env.SECRET) // if its valid it returns payload
       if(User.findOne({_id}).select('_id')){
        req.user = await User.findOne({_id}).select('_id')
       }
       if(Trainer.findOne({_id}).select('_id')){
        req.trainer = await Trainer.findOne({_id}).select('_id')

       }
      
    
    // The user object is assigned to the req.user property, making it accessible in subsequent middleware or route handlers
       next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error:"Request is not authorised"})
    }

}

module.exports = requireAuth