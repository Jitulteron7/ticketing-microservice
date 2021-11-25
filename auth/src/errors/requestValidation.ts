import {ValidationError} from "express-validator"
import {CustomerError} from "./customError"

export class RequestValidationError extends CustomerError{
    statusCode=400

    constructor(public errors:ValidationError[]){

        super('Invalid request parameters')

        //doubt
        //only because we are extendning a built in class
        Object.setPrototypeOf(this,RequestValidationError.prototype)
    }
    serializeErrors(){
        return this.errors.map(err=>{
            return {message:err.msg,field:err.param}
        })
    }
}

//validation of error return method 1
/**
 * import {ValidationError} from "express-validator"
interface CustomError{
    statusCode:number;
    serializeErrors():{  
        message:string
        field?:string;
    }[];
}

export class RequestValidationError extends Error implements CustomError{
    statusCode=400

    constructor(public errors:ValidationError[]){
        //doubt
        super()

        //doubt
        //only because we are extendning a built in class
        Object.setPrototypeOf(this,RequestValidationError.prototype)
    }
    serializeErrors(){
        return this.errors.map(err=>{
            return {message:err.msg,field:err.param}
        })
    }
}

 */
