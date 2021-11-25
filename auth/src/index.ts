import express from "express";
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/notFound";
import "express-async-errors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// for async use next
// app.all('*',async(req,res,next)=>{
//      next(new NotFoundError())
// })

//when function is sync
// but when installed express-async-erros module it works

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to mongodb");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000 !!!");
});

start();
