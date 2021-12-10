const OrderIndex = ({ orders }) => {
  const ordersList = orders.map((order) => {
    return (
      <>
        <tr>
          <td>{order.ticket.title}</td>
          <td>{order.status}</td>
        </tr>
      </>
    );
  }).reverse();
  return (
    <div>
      <h1>Orders </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Ticket Status</th>
          </tr>
        </thead>
        <tbody>
        {ordersList}
        </tbody>
      </table>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");
// const  data  = [{
//     ticket:{
//         id:123,
//     title:"testing 1",
//     price:20
//     },
//     status:"cancell"
// },
// {
//     ticket:{
//         id:345,
//         title:"testing 2",
//         price:20
//     },
//     status:"complete"
// }]

  return { orders: data };
};
export default OrderIndex;
