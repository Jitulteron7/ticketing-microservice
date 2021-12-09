import Link from "next/link"


const LandingPage = ({ currentUser,tickets }) => {

  const ticketList=tickets.map(ticket =>{
    return(<tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>{ticket.price}</td>
      <td><Link href={`/tickets/[ticketId]`} as={`/tickets/${ticket.id}`}>
        <a>View</a>
      </Link></td>
    </tr>)
  })

  return (
  <div>
    <h1>Tickets available</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
          {ticketList}
      </tbody>
    </table>
  </div>)
};

LandingPage.getInitialProps = async (context,client,currentUser) => {
  const {data}=await client.get('/api/tickets')
  // const data=[{
  //   id:123,
  //   title:"testing 1",
  //   price:20
  // },
  // {
  //   id:345,
  //   title:"testing 2",
  //   price:20
  // },
  // {
  //   id:14564523,
  //   title:"testing 3",
  //   price:20
  // }]
  return {tickets:data}
};

export default LandingPage;
