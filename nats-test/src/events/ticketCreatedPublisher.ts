import {Publisher} from "./basePublisher"
import {TicketCreatedEvent} from "./ticketCreatedEvent"
import {Subject} from "./subjects"

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject=Subject.TicketCreated

}