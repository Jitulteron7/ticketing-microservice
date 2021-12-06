import mongoose from "mongoose"

interface PaymentAttrs{
    orderId:string;
    stripeId:string;
}

interface PaymentDoc extends mongoose.Document {
    orderId:string
    stripeId:string
    // version:number
}

interface PaymentModel extends mongoose.Model<PaymentDoc>{
    build(attrs:PaymentAttrs):PaymentDoc
}

const paymentScehema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    stripeId:{
        type:String,
        required:true
    },
},{
    toJSON:{
        transform(doc,ret){
            ret.id=ret._id
            delete ret._id
        }
    }
})

paymentScehema.statics.build=(attrs:PaymentAttrs)=>{
    return new Payment({
        orderId:attrs.orderId,
        stripeId:attrs.stripeId
    })
}

const Payment =mongoose.model<PaymentDoc,PaymentModel>('Payment',paymentScehema)

export {Payment};
