import { Request,Response,NextFunction } from "express";
import {CustomerError} from "../errors/customError"

export const errorHandler=(err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof CustomerError){
       return res.status(err.statusCode).send({errors:err.serializeErrors()})
    }
    
    res.status(400).send({
        errors:[{message:err.message}]
    })   
}