import mongoose from "mongoose";
import { natsWrapper } from "../../../natsWrapper";
import { OrderCancelledListener } from "../orderCancelledListener";
import { Ticket } from "../../../models/ticket";
import {Message} from "node-nats-streaming"
import { OrderCancelledEvent } from "@teronpackages/common";

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const orderId = new mongoose.Types.ObjectId().toHexString();

  const ticket = Ticket.build({
    title: "test",
    price: 20,
    userId: "121ddfgdfg",
  });

  ticket.set({ orderId });

  await ticket.save();

  const data: OrderCancelledEvent["data"] = {
    id: orderId,
    version: 0,
    ticket: {
      id: ticket.id,
    },
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };
  return { msg, ticket, listener, data ,orderId};
};

it('updates the ticket, publishers an event, and acks the message ',async()=>{
    const {listener,data,msg,ticket,orderId} =await setup()
    await listener.onMessage(data,msg)
    const updatedTicket =await Ticket.findById(ticket.id);
    expect(updatedTicket!.orderId).not.toBeDefined()
    expect(msg.ack).toHaveBeenCalled()
    expect(natsWrapper.client.publish).toHaveBeenCalled()
})