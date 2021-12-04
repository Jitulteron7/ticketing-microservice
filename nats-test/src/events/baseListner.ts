import {Message,Stan} from "node-nats-streaming"
import {Subject} from "./subjects"
interface Event{
    subject:Subject;
    data:any
}
export abstract class Listener <T extends Event>{

    abstract subject: T['subject']
    abstract queueGroupName: string;
    abstract onMessage(data:T['data'],msg:Message):void
    private client: Stan;
    protected ackWait = 5 * 1000;
  
  
    constructor(client: Stan) {
      this.client = client;
    }
  
    subscriptionOptions() {
      return this.client
        .subscriptionOptions()
        .setDeliverAllAvailable()
        .setManualAckMode(true)
        .setAckWait(this.ackWait)
        .setDurableName(this.queueGroupName);
    }

    listen() {
      const subscriptions = this.client.subscribe(
        this.subject,
        this.queueGroupName,
        this.subscriptionOptions()
      );
      
      console.log('testing')
      subscriptions.on("message", (msg: Message) => {
        console.log(`Message recieved ${this.subject} / ${this.queueGroupName}`);
        const parseData = this.parseMessage(msg);
        this.onMessage(parseData,msg);
      });
      
    }
    parseMessage(msg:Message){
        const data =msg.getData()
        return typeof data=='string'
        ?JSON.parse(data)
        :JSON.parse(data.toString('utf8'))
    }
  }