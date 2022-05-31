import React from 'react';
import './index.css';
import App from './App';
// import Journal from './components/Journal'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        {/* <Route path="journal" element={<Journal />} /> */}
        {/* <Route path="resources" element={<Resources />} />
        <Route path="TAP" element={<TAP />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="setting" element={<Setting />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);


