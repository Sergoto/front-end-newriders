import React from "react";
import MoodMap from "./MoodMap";
import Entry from "./Entry";
import Grid from "@mui/material/Grid";

function Main() {
  return (
    <div className="container">
        <MoodMap />
      <div className="cards">
        <Entry />
      </div>
    </div>
  );
}

export default Main;
