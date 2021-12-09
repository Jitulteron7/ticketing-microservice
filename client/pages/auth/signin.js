import { useState, useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default ({currentUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  useEffect(()=>{
    if(currentUser){
      Router.push('/') 
    }
  },[])

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form style={{ width: "60%", margin: "3% auto" }} onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>

      <center style={{ margin: "3% auto" }}>{errors}</center>
      <center style={{ margin: "3% auto" }}>
        <button className="btn btn-primary">Sign In</button>
      </center>
    </form>
  );
};
