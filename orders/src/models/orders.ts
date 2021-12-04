import mongoose from "mongoose";
import { OrderStatus } from "@teronpackages/common";
import { TicketDoc } from "./tickets";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

export { OrderStatus };

interface OrderAttrs {
  ticket: TicketDoc;
  userId: string;
  exipresAt: Date;
  status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {
  ticket: TicketDoc;
  userId: string;
  exipresAt: Date;
  status: OrderStatus;
  version: number;
}

interface orderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

// OrderStatus;

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
    exipresAt: {
      type: mongoose.Schema.Types.Date,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created,
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

orderSchema.set("versionKey",'version')
orderSchema.plugin(updateIfCurrentPlugin);

orderSchema.statics.build = (attr: OrderAttrs) => {
  return new Order(attr);
};

const Order = mongoose.model<OrderDoc, orderModel>("Order", orderSchema);

export { Order };
