import "express-async-errors";
import express from "express";
import { errorHandler,NotFoundError,currentUser } from "@teronpackages/common";
import cookieSession from 'cookie-session'
import {createChargeRouter} from "./routes/new"

const app = express();
app.set('trust proxy',true)
app.use(express.json());

app.use(cookieSession({
  signed:false,
  secure:process.env.NODE_ENV!=='test',
}))

app.use(currentUser)
app.use(createChargeRouter);

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