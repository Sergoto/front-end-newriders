import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Temppassword() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://aqueous-citadel-97605.herokuapp.com/forgot' , {
      username: username,
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/resetconfirmed");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div className="">
      <h1>Reset to temporary password</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <TextField
          className="form-inputs"
          id="outlined-static"
          label="Username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <TextField
          className="form-inputs"
          id="outlined-static"
          label="Email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <button className="form-input-btn" type="submit">
          Log In
        </button>
        {/* <Button
          type="submit"
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderColor: "purple",
          }}
        >
          Submit
        </Button> */}
      </form>
    </div>
  );
}

export default Temppassword