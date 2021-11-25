import express,{Response,Request,NextFunction} from "express";
import {body,validationResult} from "express-validator"
import {RequestValidationError} from "../errors/requestValidation"
import {User} from "../models/user";
import {BadRequestError} from '../errors/badRequestError'

const router=express.Router();

router.post('/api/users/signup',[
    body('email').isEmail()
    .withMessage('Email must be valid'),
    body('password').trim()
    .isLength({min:5,max:20})
    .withMessage('Password must be between 4 and 20 characters '),

],async(req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        
        throw new RequestValidationError(errors.array())
    }
    const {password,email,name}=req.body;
    const existingUser=await User.findOne({email})
    if(existingUser){
        console.log('Email in use');
        throw new BadRequestError('Email is use')
    }
    const user =  User.build({email,password})
    await user.save()
    res.status(201).send(user)
});


export {router as signupRouter};