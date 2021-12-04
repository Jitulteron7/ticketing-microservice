import "express-async-errors";
import express from "express";
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler,NotFoundError } from "@teronpackages/common";


import cookieSession from 'cookie-session'
const app = express();
app.set('trust proxy',true)
app.use(express.json());

app.use(cookieSession({
  signed:false,
  secure:process.env.NODE_ENV!=='test',
}))


app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(currentUserRouter);
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

export {app}