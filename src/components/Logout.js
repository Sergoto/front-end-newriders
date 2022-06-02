import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;


function Logout() {

    useEffect(() => {

   

        axios.get('http://localhost:8001/logout')
        .then(res => {
         console.log(res)
         window.location.reload(false);
        })
        .catch((error) => {
          console.log(error)
      });
    }, []);
  return (
    <div className='container'>Logout
    <div className="container">
        <img src="https://i.imgur.com/hPOPqz3.jpg"></img>
      </div>
      </div>
  )
}

export default Logout