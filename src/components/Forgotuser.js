import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Forgotuser() {
  
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/forgotuser' , {
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/usernameconfirm");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div>Forgot Username
    <form onSubmit={handleSubmit}>    
              <TextField
              id="outlined-static"
              label="Email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
    
              <br />
              <Button type="submit"  variant='outlined'
      sx={{ color: 'black', backgroundColor: 'white', borderColor: 'purple' }}>Submit</Button>
              
            </form>
        </div>
  )
}

export default Forgotuser