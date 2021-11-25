import {CustomerError} from './customError'
export class DataBaseConnetionError extends CustomerError{
    statusCode=500
    reason = 'Error connecting to database';
    constructor(){
        super('Error connecting to database')
        Object.setPrototypeOf(this,DataBaseConnetionError.prototype)
    }
    serializeErrors(){
        return [
            {message:this.reason}
        ]
    }
}