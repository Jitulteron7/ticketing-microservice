import {Listener,ExiprationCompleteEvent,Subject,OrderStatus} from "@teronpackages/common"
import {Message} from "node-nats-streaming"
import {queueGrp} from "./queueGrp"
import {Order} from "../../models/orders"
import {OrderCancelledPublisher} from "../publishers/orderCancelledPublisher";
export class ExpirationCompleteListener extends Listener<ExiprationCompleteEvent>{
    subject:Subject.ExpirationComplete=Subject.ExpirationComplete
    queueGroupName=queueGrp
    
    async onMessage(data:ExiprationCompleteEvent['data'],msg:Message){
        const order =await Order.findById(data.orderId).populate('ticket');
        if(!order){
            throw new Error('order not found ')
        }
        if(order.status===OrderStatus.Complete){
           return msg.ack()
        }
        order.set({
            status:OrderStatus.Cancelled,
            // ticket:
        })

        await order.save()
        console.log('expiration going on')
        new OrderCancelledPublisher(this.client).publish({
            id:order.id,
            version:order.version,
            ticket:{
                id:order.ticket.id
            }
        })

        msg.ack();
    }
}