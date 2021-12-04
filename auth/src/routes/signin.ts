import express,{Request,Response,NextFunction} from "express";
import {body} from "express-validator"
import {validateRequest,BadRequestError} from "@teronpackages/common"
import {User} from "../models/user"
import {Password} from "../services/password"
import jwt from "jsonwebtoken"
const router=express.Router();

router.post('/api/users/signin',[
    body('email').isEmail()
    .withMessage('Email must be valid'),
    body('password').trim()
    .notEmpty()
    .withMessage('You must enter your password'),
],
validateRequest,
async (req:Request,res:Response,next:NextFunction)=>{
    const {email,password} =req.body
    const existingUser=await User.findOne({email})
    if(!existingUser){
        throw new BadRequestError('Invalid credentails')
    }
    const  passwordMatch=await Password.compare(existingUser.password,password)
    if(!passwordMatch){
        throw new BadRequestError('Invalid Credentails') 
    }
    const  userJwt=jwt.sign({
        id:existingUser._id,
        email:existingUser.email
    },process.env.JWT_KEY!)
    req.session={
        jwt:userJwt
    };
    
    res.status(200).send(existingUser)
});


export {router as signinRouter};