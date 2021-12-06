import {Listener,OrderCreatedEvent,Subject} from "@teronpackages/common"
import {queuegrp} from "./queueGrp"
import {Message} from "node-nats-streaming"
import {exiprationQueue} from "../../queues/expirationQueue"

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{        
    subject:Subject.orderCreated=Subject.orderCreated
    queueGroupName=queuegrp
     
    async onMessage(data:OrderCreatedEvent['data'],msg:Message){
        // const delay= new Date(data.expiresAt).getTime()- new Date().getTime()
        const delay= 90000
        
        console.log('expiration waiting got ',delay)
        await exiprationQueue.add({
            orderId:data.id
        },{
            delay
        })  
        msg.ack()
              
    }
}