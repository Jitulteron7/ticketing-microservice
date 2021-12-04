import {Publisher,Subject,TicketCreatedEvent} from "@teronpackages/common"

export class TicketCreatePublisher extends Publisher<TicketCreatedEvent>{
    subject:Subject.TicketCreated=Subject.TicketCreated
}
