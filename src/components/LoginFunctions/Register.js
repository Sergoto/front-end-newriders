import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import AppContext from "../AppContext";
axios.defaults.withCredentials = true;

function Register() {
    

  const myContext = useContext(AppContext);
  const nav = useNavigate();

  
  
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



let handleSubmit = async (e) => {
  e.preventDefault();

  axios.post('http://localhost:8001/register' , {
    username: username,
    email: email,
    password: password,
   }).then((res)=>{
       console.log(res);
       
       nav("/login");
            
      

}) .catch((error) => {
          
});
   }

   

return (
  <div className='container'>
  <h1>Register</h1>
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
        label="Email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
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
        sx={{ color: "black", backgroundColor: "white", borderColor: "purple" }}
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

export default Register