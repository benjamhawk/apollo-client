import "./styles.css";
import React, { ErrorBoundary } from "react";

import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Form } from "./components/Form";
import { SlugList } from "./components/SlugList";
import "./App.module.css";
import LinkSharpIcon from "@mui/icons-material/LinkSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header>
        <h1>
          URL Shortener <LinkSharpIcon />
        </h1>
        <a href="/">
          <AccountCircleIcon fontSize="large" />
        </a>
      </header>

      <Container
        sx={{
          marginTop: 0,
          padding: "1rem",
          borderRadius: 5,
          background: "#F4F7FB"
        }}
      >
        <Box sx={{ height: "100vh" }}>
          <h2>Improve Your Brand With Shorter Links</h2>
          <p>
            Somer more fancy tagline here that will really want to make people
            use this product{" "}
          </p>
          <Form />
          <SlugList />
        </Box>
      </Container>
    </div>
  );
}
