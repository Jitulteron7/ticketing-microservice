import {Ticket} from "../../../models/tickets"
import { natsWrapper } from "../../../natsWrapper"
import { ExpirationCompleteListener } from "../expirationCompleteListener"
import mongoose from "mongoose"
import { Order } from "../../../models/orders"
import {OrderStatus,ExiprationCompleteEvent} from "@teronpackages/common"
import {Message} from "node-nats-streaming"

const setup=async()=>{
    const listener =new ExpirationCompleteListener(natsWrapper.client)
    const ticket = Ticket.build({
        id:new mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20
    })
    await ticket.save()

    const order = Order.build({
        status:OrderStatus.Created,
        userId:'123sdfsdf',
        exipresAt:new Date(),
        ticket
    })

    await order.save()

    const data:ExiprationCompleteEvent['data']={
        orderId:order.id
    }
    //@ts-ignore
    const msg:Message={
        ack:jest.fn()
    }
    return {listener,data,ticket,msg,order};
}

it('updates the order status to cancelled ',async()=>{
     const {listener,order,ticket,data,msg}=await setup()

     await listener.onMessage(data,msg);

     const updatedOrder=await Order.findById(order.id);
     expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled)
})

it('emit an orderCancelled to cancelled ',async()=>{
    const {listener,data,order,ticket,msg} =await setup()

    await listener.onMessage(data,msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled()
    const eventData=JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1])

    expect(eventData.id).toEqual(order.id)

})

it('ack the message',async()=>{
    const {listener,data,order,ticket,msg} =await setup()

    await listener.onMessage(data,msg);

    expect(msg.ack).toHaveBeenCalled()
})