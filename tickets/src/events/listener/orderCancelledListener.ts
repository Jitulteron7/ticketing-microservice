import { Listener, OrderCancelledEvent, Subject } from "@teronpackages/common";
import { queueGrpName } from "./queueGrp";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publisher/ticketUpdatedPublisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subject.orderCancelled = Subject.orderCancelled;
  queueGroupName = queueGrpName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const ticket = await Ticket.findById(data.ticket.id);

    if (!ticket) {
      throw new Error("ticket not found");
    }
    ticket.set({
      orderId: undefined,
    });
    await ticket.save();
    console.log('order cancelled')
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      version: ticket.version,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      orderId: ticket.orderId,
    });

    msg.ack();
  }
}

