import React, { useState } from "react";


function Login({ setUser }) {
  
  const [loginUser, setloginUser] = useState("");
  const [loginPass, setloginPass] = useState("");
  
  function handleSubmit2(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loginUser, password: loginPass}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }


 

  

  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={loginUser}
          onChange={(e) => setloginUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginPass}
          onChange={(e) => setloginPass(e.target.value)}
        />
        
        <button  type="submit" >Login</button>
        
        
      </form>
    </div>
  );
}

export default Login;