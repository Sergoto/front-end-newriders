import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";

import AppContext from "../AppContext";

import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;


function Logout() {
  
  const myContext = useContext(AppContext);
  const nav = useNavigate();

    useEffect(() => {

   

        axios.get('https://aqueous-citadel-97605.herokuapp.com/logout')
        .then(res => {
         console.log(res)
         myContext.setLoggedIn(false)
       // window.location.reload(true);
       // nav("/");
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