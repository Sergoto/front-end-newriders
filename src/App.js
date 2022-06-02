import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import TAP from "./components/TAP/TAP"
import Animal from './components/Animal'
import Resources from './components/Resources';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import AppContext from './components/AppContext';
import Resetpassword from './components/Resetpassword';
import Resetconfirmed from './components/Resetconfirmed';
import Forgotuser from './components/Forgotuser';
import Usernameconfirm from './components/Usernameconfirm';
import Logout from './components/Logout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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


  axios.get('http://localhost:8001/user')
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

   



    axios.get('http://localhost:8001/checkAuthentication')
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
        
	 
    {loggedIn ? 
    (
         <Box className="App">
         <TopBar/>
         <Stack direction="row" spacing={2} justifyContent="space-between">
         <Navbar />
           
              <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/tap" element={<TAP/>}/>
       <Route path="/animals" element={<Animal/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/logout" element={<Logout/>}/>
       </Routes>
          </Stack>
       </Box>
    ) : (
      <div>

        <Link to="/register">
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
      </div>
    )}
       <Routes>
       <Route  path="/" element={<></>}/>
       <Route  path="/forgot" element={<Resetpassword />}/>
       <Route  path="/forgotuser" element={<Forgotuser />}/>
       <Route  path="/register" element={<Register />}/>
       <Route  path="/resetconfirmed" element={<Resetconfirmed />}/>
       <Route  path="/usernameconfirm" element={<Usernameconfirm />}/>
       <Route  path="/login" element={<Login onChange={handleChange}/>}/>    
        </Routes>

  </AppContext.Provider>
  );
}

export default App

