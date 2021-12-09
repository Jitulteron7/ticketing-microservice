import Link from 'next/link';


export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sell Tickets Out', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className={"nav-link"} style={{color:"#fff"}}>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav style={{padding:"1% 3%",marginBottom:"3%",backgroundColor:"#adb5bd"}} className="navbar navbar-light" >
      <Link href="/">
        <a style={{color:"#fff",fontWeight:"bold"}} className="navbar-brand">Book My Ticket</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
