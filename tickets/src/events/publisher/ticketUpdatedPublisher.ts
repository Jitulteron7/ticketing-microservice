import {Publisher,Subject,TicketUpdatedEvent} from "@teronpackages/common"

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject:Subject.TicketUpdated=Subject.TicketUpdated
}
