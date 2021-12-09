
import Link from 'next/link';
import styles from "../styles/footer.module.css"

export default ({ currentUser }) => {
  

  return (
    <div className="row" style={{width:"100%",backgroundColor:"#adb5bd",padding:"3% 6%"}}>
    <div className="col">
      <ul className='nav  align-items-center' style={{display:"list-item",justifyContent:"center",alignItems:"center"}}>
      <li style={{margin:"3% 0"}} key={1} className="nav-item">
            <h4 className={`${styles.linkList}`}>Social Links</h4>
        </li>
      <li style={{margin:"3% 0"}} key={1} className="nav-item">
          <Link href={""}>
            <a className={`${styles.linkList}`}>Github</a>
          </Link>
        </li>

        <li style={{margin:"5% 0"}} key={2} className="nav-item">
          <Link href={""}>
            <a className={`${styles.linkList}`}>Linkdin</a>
          </Link>
        </li>
        <li style={{margin:"5% 0"}} key={3} className="nav-item">
          <Link href={""}>
            <a  className={`${styles.linkList}`}>Twitter</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="col">
    <ul className='nav  align-items-center' style={{display:"list-item",justifyContent:"center",alignItems:"center"}}>
      <li style={{margin:"3% 0"}} key={1} className="nav-item">
            <h4 className={`${styles.linkList}`}>Quick Links</h4>
        </li>
      <li style={{margin:"3% 0"}} key={1} className="nav-item">
          <Link href={""}>
            <a className={`${styles.linkList}`}>Sell tickets</a>
          </Link>
        </li>

        {currentUser?<li style={{margin:"5% 0"}} key={2} className="nav-item">
          <Link href={""}>
            <a className={`${styles.linkList}`}>My orders</a>
          </Link>
        </li>:null}
      
      </ul>
    </div>
    <div className="col">
    <ul className='nav  align-items-center' style={{display:"list-item",justifyContent:"center",alignItems:"center"}}>
      <li style={{margin:"3% 0"}} key={1} className="nav-item">
            <h4 className={`${styles.linkList}`}>Note</h4>
        </li>
        <li style={{margin:"3% 0"}} key={1} >
          1 This is a ticketing web application, where you can create, order and but tickets
        </li>

        <li style={{margin:"5% 0"}} key={2}>
        2 The client part is developed using nextjs (plz dont mind about the design. The main focus was on building the api ) and backend using nodejs.
        </li>
        <li style={{margin:"5% 0"}} key={3} className="nav-item">
        3 The project's main focus was to learn micro service using nodejs
        </li>

        <li style={{margin:"5% 0"}} key={3} className="nav-item">
        3 Technologies used for building this project are nextjs, nodejs, nats-server etc.   <Link href={""}>
            <a className={`${styles.linkList}`}>Go deep</a>
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
  );
};
