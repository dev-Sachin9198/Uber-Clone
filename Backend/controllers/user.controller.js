const User = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');


module.exports.registerUser = async(req ,res , next)=>{
    const error = validationResult(req);
    if(!errors.isEmpty()){
        return res.this.status(400).json({errors:errors.array()});
    }

    const {firstname , lastname , email ,password} = req.body ;
    const hashedpassword = await UserModel.hashedpassword(password);

     const user =await userService.createUser({
            
            firstname,
            lastname,
            email,
            password : hashedpassword
    
        });
}

