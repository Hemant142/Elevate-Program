import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container, Typography } from "@mui/material";
import WatherApp from "./page/WatherApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Typography>Weather APP</Typography>
      <WatherApp />
    </Container>
  );
}

export default App;
