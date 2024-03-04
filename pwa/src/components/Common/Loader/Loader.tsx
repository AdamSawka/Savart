import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function Loader() {
  return (
    <Box sx={{
      width: "100vw",
      height: "50vh",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: 0
    }}>
      <CircularProgress/>
    </Box>
  );
}

export default Loader;
