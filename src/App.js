import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar"
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Box, Stack } from '@mui/material';
import TAP from "./components/TAP/TAP"
import Animal from './components/Animal'
import Resources from './components/Resources';
import About from './components/About';
import Login from './components/LoginFunctions/Login';
import Register from './components/LoginFunctions/Register';
import AppContext from './components/AppContext';
import Temppassword from './components/LoginFunctions/Temppassword';
import Resetconfirmed from './components/confimations/Resetconfirmed';
import Forgotuser from './components/LoginFunctions/Forgotuser';
import Resetconfirmed2 from './components/confimations/Resetconfirmed2';
import Usernameconfirm from './components/confimations/Usernameconfirm';
import Logout from './components/LoginFunctions/Logout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginNav from './LoginForms/LoginNav';
import LoginHome from './LoginForms/LoginHome'

import Resetpassword from './components/LoginFunctions/Resetpassword';
axios.defaults.withCredentials = true;

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setuser] = useState("");

  const userSettings = {
    loggedIn: loggedIn,
    user:user,
    setuser,
    setLoggedIn,
  };


  axios.get('https://aqueous-citadel-97605.herokuapp.com/user')
  .then(res => {
    console.log(res.data._id)
    if(res.data._id){
    setuser(res.data._id);
    }
  })
  .catch((error) => {
    setuser("")
});


  useEffect(() => {

  

    axios.get('https://aqueous-citadel-97605.herokuapp.com/checkAuthentication')
      .then(res => {
        setLoggedIn(res.data.authenticated);
      })
      .catch((error) => {
        setLoggedIn(false)
    });
  }, []);

  function handleChange(){
 
  }

  return (
    <AppContext.Provider value={userSettings}>
      {loggedIn ? (
        <Box className="App">
          <TopBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Navbar />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/tap" element={<TAP />} />
              <Route path="/animals" element={<Animal />} />
              <Route path="/about" element={<About />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Stack>
        </Box>
      ) : (
        <div>
          <LoginNav />
          <div className="container"></div>
          {/* <Link to="/register">
         Signup
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/forgot">
          Forgot Password
        </Link>
        <Link to="/forgotuser">
          Forgot Username
        </Link>
        <Link to="/resetpassword">
          Reset Password
        </Link> */}
        </div>
      )}
      <Routes>
        <Route path="/" exact element={<LoginHome />} />
        <Route path="/forgotuser" element={<Forgotuser />} />

        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/resetconfirmed" element={<Resetconfirmed />} />
        <Route path="/resetconfirmed2" element={<Resetconfirmed2 />} />
        <Route path="/usernameconfirm" element={<Usernameconfirm />} />
        <Route path="/login" element={<Login onChange={handleChange} />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App

