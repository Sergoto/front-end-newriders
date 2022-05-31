import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <TopBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Navbar />
        <Main/>
       </Stack>
    </Box>
  );
}

export default App

