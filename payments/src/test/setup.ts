jest.setTimeout(50000)
import {MongoMemoryServer} from "mongodb-memory-server"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

declare global {
    var signin: (id?:string) => string[];
  }

jest.mock('../natsWrapper')

let mongo: any;
process.env.STRIPE_KEY='sk_test_51K3YmtSI9bODyotVj4cf5Tl4ts5ciKR8OBoPP0OveADMuq8GA59WHyKcK4uNx3d9PvYA9A0L1IimzURiVd8cudU900aASH2cdq'
beforeAll(async()=>{
    process.env.JWT_KEY="asdasdasd";
    mongo = await MongoMemoryServer.create();
    
  const  mongoUri=await mongo.getUri();
  
  await mongoose.connect(mongoUri)
});

beforeEach(async()=>{
    jest.clearAllMocks()
    const collections=await mongoose.connection.db.collections()
    for(let collection of collections){
        await collection.deleteMany({})
    }
});

afterAll(async()=>{
    
    await mongo.stop();
    await mongoose.connection.close()
});

global.signin= (id?:string)=>{
    const payload={
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email:"test@test.com"
    }
    const token =jwt.sign(payload,process.env.JWT_KEY!)
    const session = {jwt:token}
    const sessionJSON =JSON.stringify(session);
    const base64=Buffer.from(sessionJSON).toString('base64')
    return [`express:sess=${base64}}`]
}