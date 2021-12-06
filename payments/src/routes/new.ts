import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  requiredAuth,
  BadRequestError,
  validateRequest,
  NotFoundError,
  NotAuthorized,
  OrderStatus,
} from "@teronpackages/common";
import { Order } from "../models/order";
import {stripe} from "../stripe"
import {Payment} from "../models/payments"
import {PaymentCreatedPublisher} from "../events/publisher/paymentCreatedPublisher"
import {natsWrapper} from "../natsWrapper"

const router =express.Router()

router.post('/api/payments',
requiredAuth,
[
    body('token')
    .not()
    .isEmpty(),
    body('orderId')
    .not()
    .isEmpty(),
],async(req:Request,res:Response)=>{
    const {token ,orderId} =req.body
    const order =await Order.findById(orderId)
   
    if(!order){
      throw new NotFoundError();
    }

    if(order.userId!==req.currentUser!.id){
        throw new NotAuthorized();
    }
    if(order.status===OrderStatus.Cancelled){
      throw new BadRequestError('Cannot pay for a cancelled order');
    }

    const charge =await stripe.charges.create({
        currency:"INR",
        amount:order.price*100,
        source:token
    })
   const payment =Payment.build({
      orderId,
      stripeId:charge.id
    })
    
    await payment.save()

     new PaymentCreatedPublisher(natsWrapper.client).publish({
      id: payment.id,
      orderId: payment.orderId,
      stripeId: payment.stripeId,
    })

    
    res.status(201).send({id:payment.id});
})

export {router as createChargeRouter}