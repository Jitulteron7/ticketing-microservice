import request from "supertest"
import {app} from "../../app"
import mongoose from "mongoose"
import {natsWrapper} from ".././../natsWrapper"
import {Ticket} from "../../models/ticket"



it('returns a 404 if the provided id does not exist',async()=>{
    const id =new mongoose.Types.ObjectId().toHexString()
    await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie",global.signin())
    .send({
           title:"test",
           price:10 
    })
    .expect(404)
})




it('returns a 401 if the user is not authenticated',async()=>{
    const id =new mongoose.Types.ObjectId().toHexString()
    
    await request(app)
    .put(`/api/tickets/${id}`)
    .send({
           title:"test",
           price:10 
    })
    .expect(401)
})




it('returns a 401 if the user does not own ticket',async()=>{
    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",global.signin())
    .send({
        title:"test",
        price:10
    })

    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",global.signin())
    .send({
        title:"test",
        price:10
    })
    .expect(401)

})




it('returns  a 400 if user provides an invalid title or price',async()=>{
    const cookie=global.signin()
    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",cookie)
    .send({
        title:"test",
        price:10
    })
    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send({
        price:10
    })
    .expect(400)

    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send({
        title:'test',
        price:-10
    })
    .expect(400)

    
})




it('updates the ticketes provided  valid inputs ',async()=>{
  const cookie=global.signin()
    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",cookie)
    .send({
        title:"test",
        price:10
    })

    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send({
        title:'new test',
        price:20
    })
    .expect(200)

    const ticketRes= await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send()

    expect(ticketRes.body.price).toEqual(20)
    expect(ticketRes.body.title).toEqual('new test')

})



it("update publishers an event ", async () => {
    const cookie=global.signin()
    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",cookie)
    .send({
        title:"test",
        price:10
    })

    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send({
        title:'new test',
        price:20
    })
    .expect(200)

    const ticketRes= await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send()

    expect(ticketRes.body.price).toEqual(20)
    expect(ticketRes.body.title).toEqual('new test')
  
    expect(natsWrapper.client.publish).toHaveBeenCalled();
  });

  it('rejects updates when ticket is reserved',async()=>{
    const cookie=global.signin()
    const response = await request(app)
    .post('/api/tickets')
    .set("Cookie",cookie)
    .send({
        title:"test",
        price:10
    })
    const  ticket =await Ticket.findById(response.body.id)
    
    
    ticket!.set({orderId:new mongoose.Types.ObjectId().toHexString()})
    ticket!.save()
    
    await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie",cookie)
    .send({
        title:'new test',
        price:20
    })
    .expect(400)
    
  })