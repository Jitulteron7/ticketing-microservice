import {Message} from "node-nats-streaming"
import {Subject,Listener,TicketCreatedEvent} from "@teronpackages/common"
import {Ticket} from "../../models/tickets"
import {queueGrp} from "./queueGrp"

 export class TicketCreatedListener extends Listener<TicketCreatedEvent>{
    subject:Subject.TicketCreated=Subject.TicketCreated
    queueGroupName=queueGrp
    async onMessage(data:TicketCreatedEvent['data'],msg:Message){
        const {title,price,id}=data
        const  ticket= Ticket.build({
            id,
            title,
            price
        })
        
        await ticket.save()

        msg.ack()
    }
 }
