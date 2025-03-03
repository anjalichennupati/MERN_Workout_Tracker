const mongoose = require("mongoose");
const bcrypt = require("bcrypt") 
const validator = require("validator")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
      
    }
   
   

}, {timestamps:true}); //timestamp is added every timr a neww doc is create


//static signup method
 
//function name is signup that is used in usercontroller.js
userSchema.statics.signup = async function(email, password) {

    //validation

    if(!email || !password){
        throw Error('All fields must be filled')

    }

    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough:Use caps, small letter, numbers and a character')
    }


    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email is in use already')
    }

    const salt = await bcrypt.genSalt(10) // add a text after password for extra security
    const hash = await bcrypt.hash(password, salt) // to hash tge password
    const user = await this.create({email, password:hash})

    return user


}

//static login method - if this keyword is used arrow function cannot be used

userSchema.statics.login = async function(email, password){

    
    if(!email || !password){
        throw Error('All fields must be filled')

    } 

    const user = await this.findOne({email})

    console.log("email found")

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user // if it is match user is returned

}



const User = mongoose.model("User",  userSchema);

module.exports = User; 





