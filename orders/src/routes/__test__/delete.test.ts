import request from 'supertest';
import { app } from '../../app'
import {Order,OrderStatus} from "../../models/orders"
import {Ticket} from "../../models/tickets"
import {natsWrapper} from "../../natsWrapper"
import mongoose from  "mongoose"


it('marks an order as cancelld ',async()=>{
    const ticket =Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })
    await ticket.save()
    const user =global.signin()

    const {body:order}=await request(app)
    .post('/api/orders')
    .set("Cookie",user)
    .send({
        ticketId:ticket.id
    })
    .expect(201)
    
    await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie",user)
    .send()
    .expect(204)

    const updateOdrder = await Order.findById(order.id)
    expect(updateOdrder!.status).toEqual(OrderStatus.Cancelled)
})


it('emit a order cancelled event',async()=>{
    const ticket =Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })
    await ticket.save()
    const user =global.signin()

    const {body:order}=await request(app)
    .post('/api/orders')
    .set("Cookie",user)
    .send({
        ticketId:ticket.id
    })
    .expect(201)
    
    await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie",user)
    .send()
    .expect(204)

    const updateOdrder = await Order.findById(order.id)
    expect(updateOdrder!.status).toEqual(OrderStatus.Cancelled)

   expect(natsWrapper.client.publish).toHaveBeenCalled() 
});