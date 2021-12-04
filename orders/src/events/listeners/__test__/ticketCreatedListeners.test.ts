import {TicketCreatedListener} from "../ticketCreatedListeners"
import {TicketCreatedEvent} from "@teronpackages/common"
import { natsWrapper } from "../../../natsWrapper";
import mongoose from "mongoose";
import {Message} from "node-nats-streaming"
import {Ticket} from "../../../models/tickets"

const setup = async()=>{

    const listener = new TicketCreatedListener(natsWrapper.client);

    const data : TicketCreatedEvent['data']={
        version:0,
        title:"test",
        id:new mongoose.Types.ObjectId().toHexString(),
        price:10,
        userId:new mongoose.Types.ObjectId().toHexString()
    }

    // @ts-ignore
    const msg:Message = {
        ack:jest.fn()
    };

    return { listener,data,msg}
}

it('creates and saves a ticket',async()=>{
    const {data,listener,msg}=await setup()
    await listener.onMessage(data,msg);  

    const ticket =await  Ticket.findById(data.id);

    expect(ticket).toBeDefined();
    expect(ticket!.title).toEqual(data.title)
    expect(ticket!.price).toEqual(data.price)
})


it('acks the message ',async()=>{
    const {listener,data,msg}=await setup()
    await listener.onMessage(data,msg)

    expect(msg.ack).toHaveBeenCalled()
})