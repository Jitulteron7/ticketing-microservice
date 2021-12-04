import express,{Response,Request,NextFunction} from "express";
import {currentUser,requiredAuth} from "@teronpackages/common"

const router=express.Router();


router.get('/api/users/currentuser',currentUser,(req:Request,res:Response,next:NextFunction)=>{   
    res.send({currentUser:req.currentUser||null})
});





export {router as currentUserRouter};