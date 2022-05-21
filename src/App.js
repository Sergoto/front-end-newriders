import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav"
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Entry from './components/Entry';


function App() {
  return (
    <div>

      <header>
        <TopBar />
      </header>

      <main >
        <Nav />

        <Main />

      </main>

    </div>
  );
}

export default App;
