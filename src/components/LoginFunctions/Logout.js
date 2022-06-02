import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;


function Logout() {

    useEffect(() => {

   

        axios.get('https://aqueous-citadel-97605.herokuapp.com/logout')
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