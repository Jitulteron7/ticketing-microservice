import Queue from "bull"
import {ExiprationCompletePublisher} from "../events/publishers/exiprationCompletePublisher"
import {natsWrapper} from "../natsWrapper"


interface Payload{
    orderId:string
}

const exiprationQueue= new Queue<Payload>('order:expiration',{
    redis:{
        host:process.env.REDIS_HOST,
    }
})

exiprationQueue.process(async(job)=>{
 new ExiprationCompletePublisher(natsWrapper.client).publish({
    orderId:job.data.orderId,
  })
})

export {exiprationQueue}