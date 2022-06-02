
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./AppContext";
axios.defaults.withCredentials = true;

function Login() {
    

    const myContext = useContext(AppContext);
    const nav = useNavigate();

    
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  
let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/login' , {
      username: username,
      password: password,
     }).then((res)=>{
         console.log(res);
         
         axios.get('http://localhost:8001/checkAuthentication')
         .then(res => {
            myContext.setLoggedIn(res.data.authenticated);
            
            
         })
         .catch((error) => {
            myContext.setLoggedIn(false)
       });


         
        
     
})
     }



  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <TextField
          id="outlined-static"
          label="Username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <TextField
          id="outlined-static"
          label="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderColor: "purple",
          }}
        >
          Submit
        </Button>
      </form>
      <div className="container">
        <img src="https://i.imgur.com/hPOPqz3.jpg"></img>
      </div>
    </div>
  );
}

export default Login


