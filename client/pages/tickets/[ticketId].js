import useRequest from "../../hooks/use-request"
import Router from "next/router"


const TicketShow =({ticket})=>{

    const {doRequest,errors}=useRequest({
        url:"/api/orders",
        method:'post',
        body:{
            ticketId:ticket.id
        },
        onSuccess:(order)=>Router.push(`/orders/[orderId]`,`/orders/${order.id}`)
    })

    return(
    <div style={{margin:"3% auto",width:"50%"}}>
        <center><h1>Ticket Info</h1></center>
        <div style={{display:"flex",justifyContent:"space-between",margin:"4% 0",align:"center"}}>
            <h4>Name:-  {ticket.title}</h4>
            <h4>Price:-  {ticket.price}</h4>
        </div>
        <center>{errors}</center>
        <center><button onClick={()=>{doRequest()}} className={'btn btn-primary'}>Purchase</button></center>
    </div>)
}

TicketShow.getInitialProps= async (context,client)=>{
    const {ticketId}=context.query
    const { data }=await client.get(`/api/tickets/${ticketId}`);
//     const  data ={ 
//         id:123,
//         title:"testing 1",
//         price:20
// }

    return {ticket:data}
}

export default TicketShow