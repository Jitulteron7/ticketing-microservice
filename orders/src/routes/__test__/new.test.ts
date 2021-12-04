import mongoose from 'mongoose'
import request from 'supertest';
import { app } from '../../app'
import {Order,OrderStatus} from "../../models/orders"
import {Ticket} from "../../models/tickets"
import { natsWrapper } from '../../natsWrapper';

it('returns an error if the ticket does not exist ',async()=>{
        const ticketId=new mongoose.Types.ObjectId();
        await request(app)
        .post('/api/orders')
        .set("Cookie",global.signin())
        .send({
            ticketId
        })
        .expect(404);
})



it('returns an errors if the ticket is already reserved ',async()=>{
    const ticket =Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })
    await ticket.save()
    const order =Order.build({
        ticket:ticket,
        userId:'123123123',
        status:OrderStatus.Created,
        exipresAt:new Date()
    })
    await order.save()
    await request(app)
    .post('/api/orders')
    .set("Cookie",global.signin())
    .send({
        ticketId:ticket.id
    })
    .expect(400)
})



it('ticket is reserved ',async()=>{

    const ticket =Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })

    await ticket.save()
    
    await request(app)
    .post('/api/orders')
    .set("Cookie",global.signin())
    .send({
        ticketId:ticket.id
    })
    .expect(201)
})



it('emit an order created event',async()=>{
    const ticket =Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })

    await ticket.save()
    
    await request(app)
    .post('/api/orders')
    .set("Cookie",global.signin())
    .send({
        ticketId:ticket.id
    })
    .expect(201)
   expect(natsWrapper.client.publish).toHaveBeenCalled() 
});