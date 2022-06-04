import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Temppassword from './Temppassword';


function Forgotuser() {
  
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://aqueous-citadel-97605.herokuapp.com/forgotuser' , {
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/usernameconfirm");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src="https://i.imgur.com/hPOPqz3.jpg"></img>
      </div>
      <div className="form-content-right">
        <h1 className="title">Forgot Username</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            className="form-inputs"
            id="outlined-static"
            label="Email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <button className="form-input-btn" type="submit">
          Submit
          </button>
          {/* <Button
            className="form-inputs"
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
        <br />
        <Temppassword />
      </div>
    </div>
  );
}

export default Forgotuser