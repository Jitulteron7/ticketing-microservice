import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout"
import useRequest from "../../hooks/use-request";
import Router from "next/router"

const OrderShow = ({ order, currentUser }) => {

  const [timeLeft, setTimeLeft] = useState(0);
  const {doRequest,errors}=useRequest({
      url:'/api/payments',
      method:'post',
      body:{
        orderId:order.id,  
      },
      onSuccess:()=>Router.push('/orders')
  })
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.exipresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
    
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return <div style={{width:"50%", margin:"3% auto"}}>
  <h3>Time left to pay before expiration: {timeLeft} seconds</h3>
  <div style={{margin:"4%",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <StripeCheckout
      
      token={({id})=>doRequest({token:id})}
      stripeKey="pk_test_51K3YmtSI9bODyotVJO773h9OSZFNx0I3GUX7aSbujs8FZtqqZOmoRn3o88sNDZbXrkheE0KfdY3yIwVElyGYcAgz00gdwSCUMg"
      amount={order.ticket.price*100}
      email={currentUser.email}
  />
  </div>
  {errors}
  </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
//   const data = {
//     ticket:{
//         id:123,
//     title:"testing 1",
//     price:20
//     },
//     status:"cancell"
// }

  return { order: data };
};
export default OrderShow;
