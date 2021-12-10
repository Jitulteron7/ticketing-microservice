import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
import Footer from '../components/footer';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
    <Header currentUser={currentUser} />
    <div className="container" style={{margin:"5% auto"}}>
      <Component currentUser={currentUser} {...pageProps} />
    </div>
    <Footer currentUser={currentUser}/>
    </div>
  );
};

// const data  = {currentUser:{
  //   userId:"123123",
  //   email:"jitulteron9@gmail.com",
  //   id:"12323345"
  // }}
AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx,client,data.currentUser);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
