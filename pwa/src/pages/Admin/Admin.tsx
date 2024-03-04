import React from 'react';
import {Box} from "@mui/material";
import EditProducts from "pages/Admin/EditProducts/EditProducts";

function Admin() {

  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <EditProducts/>
    </Box>
  );
}

export default Admin;
