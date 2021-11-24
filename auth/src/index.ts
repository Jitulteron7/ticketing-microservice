import express from 'express'
const app=express();
app.use(express.json())

app.get('/api/users/u',(req,res)=>{
    res.json({message:'hi testing complete '}).status(200)
})
app.listen(3000,()=>{
    console.log('Listening on port 3000 !!!')
})