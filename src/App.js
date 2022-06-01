import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import TAP from "./components/TAP/TAP"
import Animal from './components/Animal'
import Resources from './components/Resources';





function App() {
  return (
    <Box className="App">
      <TopBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Navbar />
        
           <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/tap" element={<TAP/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="/animals" element={<Animal/>}/>
    </Routes>
       </Stack>
    </Box>
  );
}

export default App

