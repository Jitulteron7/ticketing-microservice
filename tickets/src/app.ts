import "express-async-errors";
import express from "express";
import { errorHandler,NotFoundError,currentUser } from "@teronpackages/common";
import {showTickeRoute} from "./routes/show"
import {createTickeRoute} from "./routes/new"
import {updateTicketRouter} from "./routes/update"
import {indexTicketRouter} from "./routes"
import cookieSession from 'cookie-session'

const app = express();
app.set('trust proxy',true)
app.use(express.json());

app.use(cookieSession({
  signed:false,
  secure:process.env.NODE_ENV!=='test',
}))
app.use(currentUser)
app.use(createTickeRoute)
app.use(showTickeRoute)
app.use(indexTicketRouter)
app.use(updateTicketRouter)

// app.use(signinRouter);

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