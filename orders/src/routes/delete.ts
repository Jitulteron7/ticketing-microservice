import express ,{ Request,Response,NextFunction} from "express"
import {Order,OrderStatus} from "../models/orders"
import {requiredAuth,NotFoundError,NotAuthorized} from "@teronpackages/common"
import { OrderCancelledPublisher} from "../events/publishers/orderCancelledPublisher"
import {natsWrapper} from "../natsWrapper"
const router = express.Router()

router.delete('/api/orders/:orderId',requiredAuth,async(req:Request,res:Response)=>{
    const {orderId}=req.params;
    const order =await Order.findById(orderId).populate('ticket')
    if(!order){
        throw new NotFoundError()
    }
    if(order.userId!==req.currentUser!.id){
        throw new NotAuthorized()
    }
    order.status=OrderStatus.Cancelled;
    await order.save()

    new OrderCancelledPublisher(natsWrapper.client).publish({
        id: order.id,
        version:order.version,
        ticket: {
            id: order.ticket.id
        }
    })
    res.status(204).send(order);
})

export {router as deleteTicketRouter};