import express ,{ Request,Response,NextFunction} from "express"
import {Ticket} from "../models/ticket"
import {body} from "express-validator"
import {validateRequest,NotFoundError,requiredAuth,NotAuthorized, BadRequestError} from "@teronpackages/common"
import  {TicketUpdatedPublisher} from "../events/publisher/ticketUpdatedPublisher"
import {natsWrapper} from "../natsWrapper"

const router = express.Router()

router.put('/api/tickets/:id',[
    body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
    body('price')
    .isFloat({gt:0})
    .withMessage('Price must be greater then 0')
],validateRequest,requiredAuth,async(req:Request,res:Response)=>{
    const tickets= await Ticket.findById(req.params.id);
    if(!tickets){
        throw new NotFoundError()
    }
    if(tickets.orderId){
        throw new BadRequestError('Ticket reserved');
    }
    if(tickets.userId !== req.currentUser!.id){
        throw new NotAuthorized()
    }
    tickets.set({
        title:req.body.title,
        price:req.body.price
    })
    await tickets.save();

    new TicketUpdatedPublisher(natsWrapper.client).publish({
        id:tickets.id,
        title:tickets.title,
        price:tickets.price,
        userId:tickets.userId,
        version:tickets.version
    })
    res.send(tickets)
})

export {router as updateTicketRouter};