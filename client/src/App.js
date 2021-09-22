import React from "react";
// import logo from "./logo.svg";
import MotherOS from "./MotherOS.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            width: 400,
            height: 500,
            bgcolor: "primary.light",
          }}
        >
          <img src={MotherOS} className="App-logo" alt="logo" />
          <p>MotherOS</p>
          <Button variant="contained">Click Here To Enter</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
