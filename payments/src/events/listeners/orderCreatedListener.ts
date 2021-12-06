import {Listener,OrderCreatedEvent,Subject} from "@teronpackages/common"
import {queueGrp} from "./queueGrp"
import {Message} from "node-nats-streaming"
import {Order} from "../../models/order"

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject:Subject.orderCreated=Subject.orderCreated
    queueGroupName=queueGrp

    async onMessage(data:OrderCreatedEvent['data'],msg:Message){
        
        const order = Order.build({
            id:data.id, 
            version:data.version, 
            userId:data.userId,
            price:data.ticket.price, 
            status:data.status
        })

        await order.save()

        msg.ack()
    }
}
