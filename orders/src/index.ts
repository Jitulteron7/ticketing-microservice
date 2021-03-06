import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./natsWrapper";
import {Subject} from "@teronpackages/common"
import {TicketCreatedListener} from "./events/listeners/ticketCreatedListeners"
import {TicketUpdatedListener} from "./events/listeners/ticketupdatedListener"
import {ExpirationCompleteListener} from "./events/listeners/expirationCompleteListener"
import {PaymentCreatedListener} from "./events/listeners/paymentCreatedListener"


const start = async () => {
  console.log('starting .......')
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  
  if(!process.env.NATS_CLIENT_ID){
    throw new Error('NATS_CLIENT_ID must be defined')
  }
  if(!process.env.NATS_URL){
    throw new Error('NATS_URL must be defined')
  }
  if(!process.env.NATS_CLUSTER_ID){
    throw new Error('NATS_CLUSTER_ID must be defined')
  }
  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI must be defined')
  }
  try {
  
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    

    natsWrapper.client.on("close", () => {
      console.log("nats connection closed");
      process.exit();
    });

    
    process.on("SIGTERM", () => natsWrapper.client.close());
    process.on("SIGINT", () => natsWrapper.client.close());

    
    new TicketCreatedListener(natsWrapper.client).listen()
    new TicketUpdatedListener(natsWrapper.client).listen()
    new ExpirationCompleteListener(natsWrapper.client).listen()
    new PaymentCreatedListener(natsWrapper.client).listen()

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb");

  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000 !!!");
  
});

start();
/**
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: nats-depl
spec: 
    replicas: 1
    selector:
      matchLabels:
          app: nats
    template:
        metadata:
          labels:
            apps: nats
        spec:
          containers: 
           - name: nats
             image: nats-streaming:0.23
             args: [
               '-p',
              '4222',
              '-m',
              '8222',
              '-hbi',
              '5s',
              '-hbt',
              '5s',
              '-hbf',
              '2',
              '-SD',
              '-cid',
              'ticketing',
             ]

---
apiVersion: v1
kind: Service
metadata:
  name: nats-srv
spec:
  selector:
    app: nats
  ports:
    - name: client
      protocol: TCP
      port: 4222
      targetPort: 4222
    - name: monitoring
      protocol: TCP
      port: 8222
      targetPort: 8222
 */
