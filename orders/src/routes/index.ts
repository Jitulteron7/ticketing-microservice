import express ,{ Request,Response,NextFunction} from "express";
// import {Ticket} from "../models/tickets";
import {Order} from "../models/orders";
import {requiredAuth} from "@teronpackages/common";


const router = express.Router()

router.get('/api/orders',requiredAuth,async(req:Request,res:Response)=>{
    const orders= await Order.find({
        userId:req.currentUser!.id,
    }).populate('ticket');

    res.send(orders)
})

export {router as indexTicketRouter};