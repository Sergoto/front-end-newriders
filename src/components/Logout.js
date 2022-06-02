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
    <div>Logout</div>
  )
}

export default Logout