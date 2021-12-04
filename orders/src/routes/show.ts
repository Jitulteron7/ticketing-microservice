import express ,{ Request,Response,NextFunction} from "express"
import {Ticket} from "../models/tickets"
import {Order} from "../models/orders"
import {requiredAuth,NotFoundError,NotAuthorized} from "@teronpackages/common"

const router = express.Router()

router.get('/api/orders/:orderId',requiredAuth,async(req:Request,res:Response)=>{
    const order=await Order.findById(req.params.orderId)
    .populate('ticket')

    if(!order){
        throw new NotFoundError()
    }
    if(order.userId!==req.currentUser!.id){
        throw new NotAuthorized()
    }
    
    res.send(order)

})

export {router as showOrdersRouter};