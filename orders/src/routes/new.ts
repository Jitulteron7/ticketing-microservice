import express ,{ Request,Response,NextFunction} from "express"
import {requiredAuth,validateRequest,NotFoundError, BadRequestError} from "@teronpackages/common"
import {body} from "express-validator"
import mongoose from "mongoose"
import {Order,OrderStatus} from "../models/orders"
import {Ticket} from "../models/tickets"
import {natsWrapper} from "../natsWrapper"
import {OrderCreatedPublisher} from '../events/publishers/orderCreatedPublisher'

const router = express.Router()
const EXPIRATION_WINDOW_SECONDS=15*60

router.post('/api/orders',requiredAuth,[
    body('ticketId')    
    .not()
    .isEmpty()
    .custom((input:string)=>mongoose.Types.ObjectId.isValid(input))
    .withMessage('Ticket must be provided ')
],validateRequest,async(req:Request,res:Response)=>{
    const {ticketId} =req.body
    const ticket =await Ticket.findById(ticketId);
    if(!ticket){
        throw new NotFoundError()
    }
    
    const isReserved =await ticket.isReserved();
    if(isReserved){
        throw new BadRequestError('Ticket is already reserved')
    }
    const expiration =new Date()
    expiration.setSeconds(expiration.getSeconds()+EXPIRATION_WINDOW_SECONDS)
    const order= Order.build({
        userId:req.currentUser!.id,
        status:OrderStatus.Created,
        exipresAt:expiration,
        ticket
    })
    await order.save()

    new OrderCreatedPublisher(natsWrapper.client).publish({
        id: order.id,
        userId: order.userId,
        version:order.version,
        status: order.status,
        expiresAt: order.exipresAt.toISOString(),
        ticket: {
            id: ticket.id,
            price: ticket.price,
        }
    })
    res.status(201).send(order)
})

export {router as createOrdersRouter};