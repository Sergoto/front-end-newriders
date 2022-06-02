import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Resetpassword() {
  
  const [username, setUsername] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  
  const [newpassword, setNewpassword] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/reset' , {
      username: username,
      oldpassword: oldpassword,
      newpassword: newpassword,
     }).then((res)=>{
         console.log(res);
            nav("/resetconfirmed");
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
        <h1 className="title">Reset Password</h1>
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
          <br/>
          <TextField
            className="form-inputs"
            id="outlined-static"
            label="Old Password"
            value={oldpassword}
            placeholder="Old Password"
            onChange={(e) => setOldpassword(e.target.value)}
          />
          <br />
          <br/>
          <TextField
            className="form-inputs"
            id="outlined-static"
            label="New Password"
            value={newpassword}
            placeholder="New Password"
            onChange={(e) => setNewpassword(e.target.value)}
          />

          <br />
          <button className="form-input-btn" type="submit">
            Submit
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
    </div>
  );
}

export default Resetpassword