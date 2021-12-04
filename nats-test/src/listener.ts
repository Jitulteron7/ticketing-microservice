import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import {TicketCreatedListener} from "./events/ticketCreatedListener"

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listening connected to nats");

  stan.on("close", () => {
    console.log("nats connection closed");
    process.exit();
  });
  
  new TicketCreatedListener(stan).listen();
 
});

process.on("SIGTERM", () => stan.close());
process.on("SIGINT", () => stan.close());



