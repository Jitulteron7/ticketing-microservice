import {TicketUpdatedListener} from "../ticketupdatedListener"
import {TicketUpdatedEvent} from "@teronpackages/common"
import { natsWrapper } from "../../../natsWrapper";
import mongoose from "mongoose";
import {Message} from "node-nats-streaming"
import {Ticket} from "../../../models/tickets"

const setup = async()=>{

    const listener = new TicketUpdatedListener(natsWrapper.client);

    const ticket =Ticket.build({
        id: new  mongoose.Types.ObjectId().toHexString(),
        title:'test',
        price:20,
    })
    await ticket.save()

    const data : TicketUpdatedEvent['data']={
        version:ticket.version+1,
        title:'test new ',
        id:ticket.id,
        price:900,
        userId:'sdfsdfasdasd'
    }

    // @ts-ignore
    const msg:Message = {
        ack:jest.fn()
    };

    return { listener,data,msg,ticket}
}

it('finds updates and saves a ticket',async()=>{
    const {data,listener,msg,ticket}=await setup()
    await listener.onMessage(data,msg);  

    const updateTicket =await  Ticket.findById(ticket.id);

    expect(updateTicket!.version).toEqual(data.version);
    expect(updateTicket!.title).toEqual(data.title)
    expect(updateTicket!.price).toEqual(data.price)
})


it('acks the message ',async()=>{
    const {listener,data,msg}=await setup()
    await listener.onMessage(data,msg)

    expect(msg.ack).toHaveBeenCalled()
})


it('does not call ack if the event has a skipped version number',async()=>{
    const { msg,data, listener,ticket}= await setup()
    data.version=10
    try{
        await listener.onMessage(data,msg)
    }
    catch(err){

    }

    expect(msg.ack).not.toHaveBeenCalled()

})