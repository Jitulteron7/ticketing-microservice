import express,{Response,Request,NextFunction} from "express";
import {body} from "express-validator"
import {User} from "../models/user";
import {BadRequestError,validateRequest,NotFoundError} from '@teronpackages/common'
import jwt from "jsonwebtoken";

const router=express.Router();

router.post('/api/users/signup',[
    body('email').isEmail()
    .withMessage('Email must be valid'),
    body('password').trim()
    .isLength({min:5,max:20})
    .withMessage('Password must be between 4 and 20 characters '),

],
validateRequest
,async(req:Request,res:Response,next:NextFunction)=>{
   
    const {password,email}=req.body;
    
    const existingUser=await User.findOne({email})

    if(existingUser){
        throw new BadRequestError('Email in use');
    }
    const user =  User.build({email,password})

    await user.save()

    const  userJwt=jwt.sign({
        id:user.id,
        email:user.email
    },process.env.JWT_KEY!)


    req.session={
        jwt:userJwt
    };
    
    
    res.status(201).send(user)
});

router.post('/api/users/bad'
,async(req:Request,res:Response,next:NextFunction)=>{
    throw new NotFoundError();
});
export {router as signupRouter};