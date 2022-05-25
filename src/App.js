import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav"
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Entry from './components/Entry';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <TopBar />
        </header>
      </div>
      <Navbar />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App

