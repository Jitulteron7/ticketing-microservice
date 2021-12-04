import { Message } from "node-nats-streaming";
import { Subject, Listener, TicketUpdatedEvent } from "@teronpackages/common";
import { Ticket } from "../../models/tickets";
import { queueGrp } from "./queueGrp";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subject.TicketUpdated = Subject.TicketUpdated;
  queueGroupName = queueGrp;

  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error("ticket not found");
    }

    const { title, price, version } = data;
    ticket.set({
      title,
      price,
      version,
    });

    await ticket.save();
    msg.ack();
  }
}
