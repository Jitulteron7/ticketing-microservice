import {CustomerError} from "./customError"

export class NotFoundError extends CustomerError{
    statusCode=404;
    constructor(){
        super('Route not found');
        Object.setPrototypeOf(this,NotFoundError.prototype)
    }
    serializeErrors(){
        return [{message:"Not found"}]
    }

}