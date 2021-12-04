import nats from "node-nats-streaming"
import {TicketCreatedPublisher} from "./events/ticketCreatedPublisher";
console.clear()

const stan = nats.connect('ticketing',"abc",{
    url:'http://localhost:4222'
})

stan.on('connect',async()=>{
    console.log('Publisher connected to NATS')
    const publish=new TicketCreatedPublisher(stan)
    try{
        await publish.publish({
            id:'123',
            title:'connected',
            price:20
        })
    }
    catch(err){
        console.log(err)
    }
})

// skaffold dev in ticketing dir
// kubectl port-forward nats-depl-7f566cdb9f-cnbgq 4222:4222 in ticketing dir
// kubectl port-forward nats-depl-7f566cdb9f-cnbgq 8222:8222 in ticketing dir
// in nats-test dir npm run publish 
// in nats-test dir npm run  listener

/// test await promise with examples