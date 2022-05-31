import React from "react";
import MoodMap from "./MoodMap";
import { Box } from "@mui/material";

function Main() {
  return (
    <Box flex={4} p={2}
      className="container cards">
        <MoodMap />
    </Box>
  );
}

export default Main;
