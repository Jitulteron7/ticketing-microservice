import express,{Request,Response } from "express";
import {requiredAuth,validateRequest} from "@teronpackages/common"
import {body} from "express-validator"
import {Ticket} from "../models/ticket"
import {TicketCreatePublisher} from "../events/publisher/ticketCreatePublisher"
import {natsWrapper} from "../natsWrapper"


const router =express.Router()

router.post('/api/tickets',requiredAuth,[
    body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
    body('price')
    .isFloat({gt:0})
    .withMessage('Price must be a number and greater then 0')
],validateRequest,async(req:Request,res:Response)=>{

    const {title,price}=req.body;

    const ticket= Ticket.build({
        title,
        userId:req.currentUser!.id,
        price
    })

    await ticket.save()
    
    await  new TicketCreatePublisher(natsWrapper.client).publish({
        id:ticket.id,
        price:ticket.price,
        userId:ticket.userId,
        title:ticket.title,
        version:ticket.version
        
    })
    res.status(201).send(ticket)
})

// router.post('/api/tickets',async(req:Request,res:Response)=>{
//     res.sendStatus(200)
// })

export {router as createTickeRoute}