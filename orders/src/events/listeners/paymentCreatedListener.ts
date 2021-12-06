import {Listener,PaymentCreatedEvent,Subject} from "@teronpackages/common"
import {Message} from "node-nats-streaming"
import {queueGrp} from "./queueGrp"
import {Order,OrderStatus} from "../../models/orders"

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent>{
    subject:Subject.PaymentCreated=Subject.PaymentCreated
    queueGroupName=queueGrp

    async onMessage(data:PaymentCreatedEvent['data'],msg:Message){
        const order =await Order.findById(data.orderId)

        if(!order){
            throw new Error('order not found')
        }
        order.set({
            status:OrderStatus.Complete
        })
        await order.save()
        msg.ack()
    }
}
