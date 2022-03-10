import "./styles.css";
import React from "react";

import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Form } from "./components/Form";
import { SlugList } from "./components/SlugList";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header>
        <h1>URL Shortener</h1>
      </header>
      <Container sx={{ marginTop: 0 }}>
        <Box sx={{ height: "100vh" }}>
          <Form />
          <SlugList />
        </Box>
      </Container>
    </div>
  );
}
