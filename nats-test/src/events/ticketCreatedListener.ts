import {Listener} from "./baseListner"
import {Message} from "node-nats-streaming"
import {Subject} from "./subjects"
import {TicketCreatedEvent} from "./ticketCreatedEvent"

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    
    readonly subject = Subject.TicketCreated
    queueGroupName = 'payments-service'

    onMessage(data:TicketCreatedEvent['data'],msg:Message){
        console.log('Event data',data)
        msg.ack()
    }
}