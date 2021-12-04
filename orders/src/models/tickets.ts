import mongoose from "mongoose";
import {Order,OrderStatus} from "./orders"
import {updateIfCurrentPlugin} from "mongoose-update-if-current"

interface TicketAttrs {
  id:string
  title: string;
  price: number;
  
}
export interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  version:number
  isReserved():Promise<boolean>;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
  findByEvent(event:{id:string,version:number}):Promise<TicketDoc|null>
}

const ticketScehma = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

ticketScehma.set('versionKey','version')
// ticketScehma.plugin(updateIfCurrentPlugin)

ticketScehma.pre('save',function(done){
  // @ts-ignore
  this.$where={
    version:this.get('version')-1
  };

  done();
})

ticketScehma.statics.build = (attrs: TicketAttrs) => {
  // return  attrs.id?
  return new Ticket({
    _id:attrs.id,
    title:attrs.title,
    price:attrs.price
  })
  // :
  // new Ticket(attrs)
  ;
};

ticketScehma.statics.findByEvent=(event:{id:string,version:number})=>{
  return Ticket.findOne({
    _id:event.id,
    version:event.version-1
  })
}




ticketScehma.methods.isReserved=async function(){
    const existingOrder =await Order.findOne({
        ticket:this,
        status:{$in:[
            OrderStatus.Created,
            OrderStatus.AwaitingPayment,
            OrderStatus.Complete,
         ]}
    })
    
    return !!existingOrder;
     
}



const Ticket = mongoose.model<TicketDoc, TicketModel>("Ticket", ticketScehma);

export { Ticket };
