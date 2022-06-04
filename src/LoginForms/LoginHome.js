import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';


function LoginHome() {
  return (
    <div className="home-container">
      <h1 className="home-h1">Mind Over Matter</h1>
      <h3 className="home-h3">
        Mind Over Matter is about tracking your mental health and being able to
        see your ups and downs.
      </h3>
      <h3 className="home-h3">
        Sign up now to start taking care of your mental.{" "}
      </h3>
      <Button className="home-btn" href="/register">GET STARTED</Button>
     

    </div>
  );
}

export default LoginHome