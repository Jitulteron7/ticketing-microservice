import request from "supertest"
import {app} from '../../app'
import mongoose from "mongoose"
jest.mock('../../natsWrapper')

it('return a 404 if the tickets is not a found ',async()=>{
    const id = new mongoose.Types.ObjectId().toHexString()
    await request(app)
    .get(`/api/tickets/${id}`)
    .expect(404)
})




it('return the tickets if the tickets is found',async()=>{
    const title= 'test'
    const price= 20

    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",global.signin())
    .send({
        title,
        price
    })
    .expect(201)
    
    const ticketRes= await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200)

    expect(ticketRes.body.title).toEqual(title)
    expect(ticketRes.body.price).toEqual(price)

})